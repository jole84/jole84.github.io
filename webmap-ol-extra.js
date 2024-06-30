const roadConditionSource = new ol.source.Vector();
const roadAccidentsSource = new ol.source.Vector();

function breakSentence(sentence) {
    sentence = sentence.replaceAll(".:", ":").replaceAll("\n", "").trim();
    let returnSentence = "";
    let x = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (x > 30 && sentence[i] == " " && sentence.length - i > 15) {
            x = 0;
            returnSentence += "\n";
        } else {
            returnSentence += sentence[i];
        }
        x++;
    }
    return returnSentence;
}

const roadColor = {
    1: [0, 255, 0, 0.8], // "green",
    2: [255, 255, 0, 0.8], // "yellow",
    3: [255, 0, 0, 0.8], // "red",
    4: [0, 0, 255, 0.8], // "blue"
}

const styleFunctionRoadCondition = function (feature) {    //Function to determine style of icons
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: roadColor[feature.get("conditionCode")] || "white",
            width: 8,
        }),
    })];
};

const styleFunctionRoadAccidents = function (feature) {
    //Function to determine style of icons
    return [
        new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                src: "https://api.trafikinfo.trafikverket.se/v2/icons/" + feature.get("iconId") + "?type=png32x32",
            }),
            text: new ol.style.Text({
                text: feature.get("name"),
                font: "bold 14px Roboto,monospace",
                textAlign: "center",
                textBaseline: "top",
                offsetY: 24,
                fill: new ol.style.Fill({
                    color: "black",
                }),
                backgroundFill: new ol.style.Fill({
                    color: [252, 208, 30, 1],
                }),
                backgroundStroke: new ol.style.Stroke({
                    color: [238, 41, 61, 1],
                    width: 3,
                }),
                padding: [2, 2, 2, 2],
            }),
        }),
    ];
};

const extraLayers = [
    roadCondition = new ol.layer.Vector({
        source: roadConditionSource,
        style: styleFunctionRoadCondition,
        visible: false,
        layerName: "roadCondition",
        name: "Väglag",
        groupName: "trafikverket",
        baseLayer: false,
    }),

    roadAccidents = new ol.layer.Vector({
        source: roadAccidentsSource,
        style: styleFunctionRoadAccidents,
        visible: false,
        layerName: "roadAccidents",
        name: "Olyckor",
        groupName: "trafikverket",
        baseLayer: false,
    }),
];

// wait until page has loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("layerSelectorButtons").addEventListener("change", function () {
        const inputs = layerSelectorButtons.getElementsByTagName("input");
        map.getLayers().forEach(function (layer) {
            if (layer.get("layerName") === "roadAccidents" && inputs[layer.get("layerName")].checked) {
                getAccidents();
            }

            if (layer.get("layerName") === "roadCondition" && inputs[layer.get("layerName")].checked) {
                fetchRoadCondition();
            }
        });
    });
});


const apiUrl = "https://api.trafikinfo.trafikverket.se/v2/data.json";

function fetchRoadCondition() {
    const xmlRequest = `<REQUEST>
        <LOGIN authenticationkey='fa68891ca1284d38a637fe8d100861f0' />
        <QUERY objecttype='RoadCondition' schemaversion='1.2' >
        <FILTER>
          <GTE name="ConditionCode" value="1" />
        </FILTER>
        <INCLUDE>Geometry.WGS84</INCLUDE>
        <INCLUDE>ConditionCode</INCLUDE>
        </QUERY>
        </REQUEST>`;
    fetch(apiUrl, {
        method: "Post",
        headers: {
            "Content-Type": "text/xml",
        },
        body: xmlRequest,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            const resultRoadCondition = result.RESPONSE.RESULT[0].RoadCondition;
            var format = new ol.format.WKT();
            resultRoadCondition.forEach(function (item, index) {
                var feature = new ol.Feature({
                    geometry: format.readGeometry(item.Geometry.WGS84).transform("EPSG:4326", "EPSG:3857"),
                    conditionCode: item.ConditionCode
                });
                roadConditionSource.addFeature(feature);
            });
        });
}

function getAccidents() {
    let xmlRequest = `
    <REQUEST>
      <LOGIN authenticationkey='fa68891ca1284d38a637fe8d100861f0' />
      <QUERY objecttype='Situation' schemaversion='1.2'>
        <FILTER>
          <OR>
            <ELEMENTMATCH>
              <EQ name='Deviation.ManagedCause' value='true' />
              <EQ name='Deviation.MessageType' value='Olycka' />
              <GTE name='Deviation.EndTime' value='$now'/>
            </ELEMENTMATCH>
          </OR>
        </FILTER>
        <INCLUDE>Deviation.Message</INCLUDE>
        <INCLUDE>Deviation.IconId</INCLUDE>
        <INCLUDE>Deviation.Geometry.WGS84</INCLUDE>
        <INCLUDE>Deviation.RoadNumber</INCLUDE>
        <INCLUDE>Deviation.EndTime</INCLUDE>
        <INCLUDE>Deviation.LocationDescriptor</INCLUDE>
      </QUERY>
    </REQUEST>
  `;
    fetch(apiUrl, {
        method: "Post",
        headers: {
            "Content-Type": "text/xml",
        },
        body: xmlRequest,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            const resultRoadCondition = result.RESPONSE.RESULT[0].Situation;
            var format = new ol.format.WKT();
            resultRoadCondition.forEach(function (item, index) {
                var feature = new ol.Feature({
                    geometry: format.readGeometry(item.Deviation[0].Geometry.WGS84).transform("EPSG:4326", "EPSG:3857"),
                    name: breakSentence(
                        (item.Deviation[0].LocationDescriptor ||
                            item.Deviation[0].RoadNumber ||
                            "Väg").trim() +
                        ": " +
                        (item.Deviation[0].Message || "-")) +
                        "\n" +
                        new Date(item.Deviation[0].EndTime)
                            .toLocaleString().slice(0, -3),
                    roadNumber: (item.Deviation[0].RoadNumber || "väg"),
                    iconId: item.Deviation[0].IconId,
                    locationDescriptor: item.Deviation[0].LocationDescriptor,
                });
                roadAccidentsSource.addFeature(feature);
            });
        });
}