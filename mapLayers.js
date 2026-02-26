const jole84VectorSource = new ol.source.VectorTile({
    format: new ol.format.MVT(),
    url: 'https://jole84.se/tiles/{z}/{x}/{y}.pbf',
    minZoom: 6,
    maxZoom: 14
});

const layers = [
    // local map
    // localMap = new ol.layer.Tile({
    //     source: new ol.source.XYZ({
    //         url: '{z}/{x}/{y}.jpg',
    //         minZoom: 6,
    //         maxZoom: 14
    //     }),
    //     visible: false,
    //     layerName: "localMap",
    //     name: "Local",
    //     groupName: "jole84",
    //     baseLayer: true,
    // }),

    // Jole84
    jole84vectorTerrang = new ol.layer.VectorTile({
        source: jole84VectorSource,
        style: function (feature, currentResolution) {
            return styleStuff(feature, currentResolution, 0);
        },
        declutter: true,
        visible: true,
        layerName: "jole84vectorTerrang",
        name: "Jole84 Vektor Terräng",
        groupName: "jole84",
        baseLayer: true,
    }),

    jole84vectorTerrangOld = new ol.layer.VectorTile({
        source: jole84VectorSource,
        style: function (feature, currentResolution) {
            return jole84Style(feature, currentResolution, 0);
        },
        declutter: true,
        visible: true,
        layerName: "jole84vectorTerrangOld",
        name: "Jole84 Vektor Terräng Gammal",
        groupName: "jole84",
        baseLayer: true,
    }),

    jole84vectorVagkartaOld = new ol.layer.VectorTile({
        source: jole84VectorSource,
        style: function (feature, currentResolution) {
            return jole84Style(feature, currentResolution, 1);
        },
        declutter: true,
        visible: false,
        layerName: "jole84vectorVagkartaOld",
        name: "Jole84 Vektor Vägkarta Gammal",
        groupName: "jole84",
        baseLayer: true,
    }),

    jole84vectorBW = new ol.layer.VectorTile({
        source: jole84VectorSource,
        style: jole84VectorBW,
        visible: false,
        layerName: "jole84vectorBW",
        name: "Jole84 Vektor Svartvit",
        groupName: "jole84",
        baseLayer: true,
    }),

    jole84vector = new ol.layer.VectorTile({
        source: jole84VectorSource,
        visible: false,
        layerName: "jole84vector",
        name: "Jole84 Vektor Stillös",
        groupName: "jole84",
        baseLayer: true,
    }),


    // osm
    osm = new ol.layer.Tile({
        className: "saturated",
        source: new ol.source.OSM({
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "osm",
        name: "Open Street Map",
        groupName: "osm",
        baseLayer: true,
    }),

    openTopoMap = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
            maxZoom: 17,
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "openTopoMap",
        name: "Open Topo Map",
        groupName: "osm",
        baseLayer: true,
    }),

    openseamap = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
            maxZoom: 18,
            crossOrigin: 'Anonymous',
        }),
        opacity: 0.9,
        visible: false,
        minZoom: 12,
        layerName: "openSeaMap",
        name: "Open Sea Map",
        groupName: "osm",
        baseLayer: false,
    }),


    // Lantmäteriet
    topo = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://minkarta.lantmateriet.se/map/topowebbcache/?layer=topowebb&style=default&tilematrixset=3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}',
            maxZoom: 17,
            crossOrigin: 'anonymous',
        }),
        visible: false,
        layerName: "topo",
        name: "Lantmäteriet Topografisk",
        groupName: "lantm",
        baseLayer: true,
    }),

    topowms = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://minkarta.lantmateriet.se/map/topowebb",
            params: {
                layers: "topowebbkartan",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "topowms",
        name: "Lantmäteriet topoWMS",
        groupName: "lantm",
        baseLayer: true,
    }),

    // topowebbkartan_nedtonad = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://minkarta.lantmateriet.se/map/topowebb",
    //         params: {
    //             layers: "topowebbkartan_nedtonad",
    //             TILED: true,
    //         },
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "topowebbkartan_nedtonad",
    //     name: "Lantmäteriet topowebbkartan_nedtonad",
    //     groupName: "lantm",
    //     baseLayer: true,
    // }),

    ortofoto = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://minkarta.lantmateriet.se/map/ortofoto/",
            params: {
                layers: "Ortofoto_0.5,Ortofoto_0.4,Ortofoto_0.25,Ortofoto_0.16",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "ortofoto",
        name: "Lantmäteriet Ortofoto",
        groupName: "lantm",
        baseLayer: true,
    }),

    //     ortofotoir = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://minkarta.lantmateriet.se/map/ortofoto/",
    //         params: {
    //             layers: "Ortofoto_IR",
    //             TILED: true,
    //         },
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "ortofotoir",
    //     name: "Lantmäteriet Ortofoto IR",
    //     groupName: "lantm",
    //     baseLayer: true,
    // }),

    flyg_60 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://minkarta.lantmateriet.se/map/historiskaortofoto/service?",
            params: {
                layers: "OI.Histortho_60",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "flyg_60",
        name: "Lantmäteriet flyg 60",
        groupName: "lantm",
        baseLayer: true,
    }),

    flyg_75 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://minkarta.lantmateriet.se/map/historiskaortofoto/service?",
            params: {
                layers: "OI.Histortho_75",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "flyg_75",
        name: "Lantmäteriet flyg 75",
        groupName: "lantm",
        baseLayer: true,
    }),

    // historiskaortofoto97 = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/0b7ab683-07e1-337d-aaad-7e7be7224b12/?",
    //         params: {
    //             layers: "OI.Histortho_bw_1994,OI.Histortho_bw_1995,OI.Histortho_bw_1996,OI.Histortho_bw_1997,OI.Histortho_bw_1998,OI.Histortho_bw_1999,OI.Histortho_bw_2000",
    //             TILED: true,
    //         },
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "historiskaortofoto97",
    //     name: "Lantmäteriet 94-2000",
    //     groupName: "lantm",
    //     baseLayer: true,
    // }),

    // historiskaortofoto2003 = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/0b7ab683-07e1-337d-aaad-7e7be7224b12/?",
    //         params: {
    //             layers: "OI.Histortho_bw_2001,OI.Histortho_bw_2003,OI.Histortho_color_2003,OI.Histortho_bw_2004",
    //             TILED: true,
    //         },
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "historiskaortofoto2003",
    //     name: "Lantmäteriet 2001-2004",
    //     groupName: "lantm",
    //     baseLayer: true,
    // }),

    grans = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://minkarta.lantmateriet.se/map/fastighetsindelning/SERVICE?",
            params: {
                layers: "granser,text,fiske",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "grans",
        name: "Lantmäteriet Gränser",
        groupName: "lantm",
        baseLayer: false,
    }),

    // RAA
    raa = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://karta.raa.se/sjokort/?REQUEST=GetMap",
            params: {
                SERVICE: "WMS",
                VERSION: "1.1.1",
                LAYERS: "OgcWmsLayer0",
                FORMAT: "image/png",
                TRANSPARENT: true,
                TILED: true,
                WIDTH: 256,
                HEIGHT: 256,
                SRS: "EPSG:3857",
            },
            // crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "raa",
        name: "RAA Sjökort",
        groupName: "raa",
        baseLayer: true,
    }),

    // Eniro
    // eniro_pbf = new ol.layer.Tile({
    //     source: new ol.source.VectorTile({
    //         format: new ol.format.MVT(),
    //         url : "https://vector-tiles.eniro.com/maps/osm/{z}/{x}/{-y}.vector.pbf",
    //     }),
    //     visible: false,
    //     layerName: "eniro_pbf",
    //     name: "Eniro",
    //     groupName: "eniro",
    //     baseLayer: true,
    // }),

    // eniro_nautical = new ol.layer.Tile({
    //     source: new ol.source.XYZ({
    //         url: 'https://map.eniro.se/geowebcache/service/tms1.0.0/nautical2x/{z}/{x}/{-y}.png',
    //         maxZoom: 17,
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "eniro_nautical",
    //     name: "Eniro Sjökort",
    //     groupName: "eniro",
    //     baseLayer: true,
    // }),

    // eniro_hybrid = new ol.layer.Tile({
    //     source: new ol.source.XYZ({
    //         url: 'https://map.eniro.se/geowebcache/service/tms1.0.0/hybrid/{z}/{x}/{-y}.png',
    //         maxZoom: 17,
    //         crossOrigin: 'Anonymous',
    //     }),
    //     visible: false,
    //     layerName: "eniro_hybrid",
    //     name: "Eniro Hybrid",
    //     groupName: "eniro",
    //     baseLayer: false,
    // }),

    // NVDB
    nvdb_slitlager = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://nvdbpakarta.trafikverket.se/api/MapProxy/mapProxy/NetInfo?",
            params: {
                layers: "Slitlager",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        minZoom: 9,
        layerName: "nvdb_slitlager",
        name: "NVDB Slitlager",
        groupName: "nvdb",
        baseLayer: false,
    }),

    atk_matplats = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://nvdbpakarta.trafikverket.se/api/MapProxy/mapProxy/NetInfo?",
            params: {
                layers: "ATK_Matplats",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "atk_matplats",
        name: "NVDB Fartkamera",
        groupName: "nvdb",
        baseLayer: false,
    }),

    rastplats = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://nvdbpakarta.trafikverket.se/api/MapProxy/mapProxy/NetInfo?",
            params: {
                layers: "Rastplats",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "rastplats",
        name: "NVDB Rastplats",
        groupName: "nvdb",
        baseLayer: false,
    }),

    nvdb_hastighetsgrans = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://nvdbpakarta.trafikverket.se/api/MapProxy/mapProxy/NetInfo",
            params: {
                layers: "Hastighetsgrans",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        minZoom: 12,
        layerName: "nvdb_hastighetsgrans",
        name: "NVDB Hastighetsgräns",
        groupName: "nvdb",
        baseLayer: false,
    }),

    nvdb_vagnummer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://geo-nvdb.trafikverket.se/mapservice/wms.axd/NvdbPaWebb",
            params: {
                layers: "VagnummerText",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "nvdb_vagnummer",
        name: "NVDB Vägnummer",
        groupName: "nvdb",
        baseLayer: false,
    }),

    nvdb_trafikplatsnummer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfoRoad_1_3",
            params: {
                layers: "Trafikplats_Vag",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        minZoom: 11,
        layerName: "nvdb_trafikplatsnummer",
        name: "NVDB Trafikplatsnummer",
        groupName: "nvdb",
        baseLayer: false,
    }),

    // Övrig

    // SMHI
    // smhi_radar = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://wts1.smhi.se/tile/",
    //         params: {
    //             LAYERS: "baltrad:radarcomp-lightning_scandinavia_wpt",
    //             FORMAT: "image/png",
    //             CRS: "EPSG%3A900913",
    //             VERSION: "1.1.1",
    //             TILED: true,
    //         },
    //     }),
    //     visible: false,
    //     layerName: "smhi_radar",
    //     name: "SMHI Radar",
    //     groupName: "smhi",
    //     baseLayer: false,
    // }),

    // smhi_temp = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://wts1.smhi.se/tile/",
    //         params: {
    //             LAYERS: "pmpfrekvent:temperature-2m_n-europe_rainbow_",
    //             FORMAT: "image/png",
    //             CRS: "EPSG:900913",
    //             VERSION: "1.1.1",
    //             TILED: true,
    //         },
    //     }),
    //     visible: false,
    //     layerName: "smhi_temp",
    //     name: "SMHI Temperatur",
    //     groupName: "smhi",
    //     baseLayer: false,
    // }),

    tileDebug = new ol.layer.Tile({
        source: new ol.source.TileDebug({
            template: 'z:{z} x:{x} y:{y} -y:{-y}',
        }),
        visible: false,
        layerName: "tileDebug",
        name: "tileDebug",
        groupName: "",
        baseLayer: false,
    }),

    tele25G = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "https://mim.tele2.com/MIMCore/api/Tile/GetOverlay?x={x}&y={y}&z={z}&viewType=1&serviceThresholdIds=69,90,111&countryCode=SWE&currentServiceLayerNo=100",
        }),
        visible: false,
        layerName: "tele25G",
        name: "Tele2 5G",
        groupName: "",
        baseLayer: false,
    }),
];

const colorArray = [
    {
        "textColorFill": "black",
        "textColorStroke": "white",
        "Anlagt vatten": "#bfe6ffff",
        "Barr- och blandskog": "#d4eeb7ff",
        "Bebyggelse": "#eebf8fff",
        "belagd": "#000000",
        "forbud": "#000000",
        "bidrag": "#ac7c45",
        "Djurskyddsområde": "#77e250a6",
        "Ej karterat område": "#bfe6ffff",
        "Elljusspår": "#fff201ff",
        "Fjällbjörkskog": "#d9f5d1ff",
        "Fruktodling": "#fff7a6ff",
        "Glaciär": "#ffffffff",
        "grus": "#ac7c45",
        "Gångstig": "#6e6e6eff",
        "Hav": "#bfe6ffff",
        "Hög bebyggelse": "#eebf8fff",
        "Industri- och handelsbebyggelse": "#f0f0f0ff",
        "Kalfjäll": "#fffff2ff",
        "Kulturreservat": "#0000007e",
        "Låg bebyggelse": "#f2cf9bff",
        "Lövskog": "#e3f7c7ff",
        "Militärt skjutfält": "#00a6e6ff",
        "Militärt övningsfält": "#00a6e6ff",
        "Nationalpark": "#77e250a6",
        "Naturreservat": "#77e250a6",
        "Naturvårdsområde": "#4fba2898",
        "ovrigvag": "#d94c26",
        "rondell": '#007dff',
        "Sjö": "#bfe6ffff",
        "Skog": "#d4eeb7ff",
        "Sluten bebyggelse": "#d99461ff",
        "Start- och landningsbana, linje": "#7d7d7d",
        "Start- och landningsbana": "#7d7d7d",
        "stratvag": "#000000",
        "Traktorväg": "#ac7c45ff",
        "Vattendrag": "#00a6ff",
        "Vattendragsyta": "#bfe6ffff",
        "Vattenyta": "#bfe6ffff",
        "Åker": "#f8fbdfff",
        "Öppen mark": "#ffffeaff",
    },
    {
        "textColorFill": "black",
        "textColorStroke": "white",
        "Anlagt vatten": "#b7d5e5ff",
        "Barr- och blandskog": "#ededed",
        "Bebyggelse": "#d4d4d4",
        "belagd": "#000000",
        "forbud": "#ff0000ff",
        "bidrag": "#bababa",
        "Ej karterat område": "#b7d5e5ff",
        "Elljusspår": "#fff201ff",
        "Fjällbjörkskog": "#ededed",
        "Fruktodling": "#ededed",
        "Glaciär": "#ffffff",
        "grus": "#bababa",
        "Gångstig": "#6e6e6eff",
        "Hav": "#b7d5e5ff",
        "Hög bebyggelse": "#d4d4d4",
        "Industri- och handelsbebyggelse": "#dddddd",
        "Kalfjäll": "#fcfcfc",
        "Kulturreservat": "black",
        "Låg bebyggelse": "#d4d4d4",
        "Lövskog": "#ededed",
        "Militärt skjutfält": "#00a6e6ff",
        "Militärt övningsfält": "#00a6e6ff",
        "ovrigvag": "#d94c26",
        "rondell": '#007dff',
        "Sjö": "#b7d5e5ff",
        "Skog": "#ededed",
        "Sluten bebyggelse": "#d4d4d4",
        "Start- och landningsbana, linje": "#7d7d7d",
        "Start- och landningsbana": "#7d7d7d",
        "stratvag": "#2ab52aff",
        "Traktorväg": "#bababa",
        "Vattendrag": "#b7d5e5ff",
        "Vattendragsyta": "#b7d5e5ff",
        "Vattenyta": "#b7d5e5ff",
        "Åker": "#fcfcfc",
        "Öppen mark": "#fcfcfc",
    },
    {
        "textColorFill": "#e9e9e9ff",
        "textColorStroke": "black",
        "Anlagt vatten": "#00263F",
        "Barr- och blandskog": "#121212",
        "Bebyggelse": "#2B2B2B",
        "belagd": "#e9e9e9ff",
        "forbud": "#ff0000ff",
        "bidrag": "#454545",
        "Ej karterat område": "#030303",
        "Elljusspår": "#fff201ff",
        "Fjällbjörkskog": "#121212",
        "Fruktodling": "#121212",
        "Glaciär": "#030303",
        "grus": "#454545",
        "Gångstig": "#6e6e6eff",
        "Hav": "#00263F",
        "Hög bebyggelse": "#2B2B2B",
        "Industri- och handelsbebyggelse": "#2B2B2B",
        "Kalfjäll": "#030303",
        "Kulturreservat": "black",
        "Låg bebyggelse": "#2B2B2B",
        "Lövskog": "#121212",
        "Militärt skjutfält": "#00a6e6ff",
        "Militärt övningsfält": "#00a6e6ff",
        "ovrigvag": "#d94c26",
        "rondell": '#007dff',
        "Sjö": "#00263F",
        "Skog": "#121212",
        "Sluten bebyggelse": "#2B2B2B",
        "Start- och landningsbana, linje": "#7d7d7d",
        "Start- och landningsbana": "#7d7d7d",
        "stratvag": "#2ab52aff",
        "Traktorväg": "#454545",
        "Vattendrag": "#00263F",
        "Vattendragsyta": "#00263F",
        "Vattenyta": "#00263F",
        "Åker": "#030303",
        "Öppen mark": "#030303",
    }
]

const kartsymboler = {
    // 1052:	"Skyddsvärn",
    // 1050:	"https://jole84.se/kartsymboler/" + "Raststuga" + ".svg",
    // 2032:	"https://jole84.se/kartsymboler/" + "Enslig stuga i fjällen" + ".svg",
    // 2048:	"https://jole84.se/kartsymboler/" + "Forskningsstation" + ".svg",
    // 2041:	"https://jole84.se/kartsymboler/" + "Turiststuga/övernattningsstuga" + ".svg",
    // 2050:	"https://jole84.se/kartsymboler/" + "Naturum" + ".svg",
    // "Sjöräddningsstation": "https://jole84.se/kartsymboler/ ",

    "Badplats": "https://jole84.se/kartsymboler/badplats.svg",
    "Bollplan": "https://jole84.se/kartsymboler/idrott_fotbollsplan.svg",
    "Campingplats": "https://jole84.se/kartsymboler/camping.svg",
    "Fotbollsplan": "https://jole84.se/kartsymboler/idrott_fotbollsplan.svg",
    "Galoppbana": "https://jole84.se/kartsymboler/idrott_anlaggning.svg",
    "Gästhamn": "https://jole84.se/kartsymboler/gasthamn.svg",
    "Hamn": "https://jole84.se/kartsymboler/gasthamn.svg",
    // "Idrottsanläggning": "https://jole84.se/kartsymboler/idrott_anlaggning.svg",
    "Skjutbana, mindre": "https://jole84.se/kartsymboler/idrott_skjutbana_liten.svg",
    "Skjutbana": "https://jole84.se/kartsymboler/idrott_skjutbana.svg",
    "Småbåtshamn": "https://jole84.se/kartsymboler/gasthamn.svg",
    "Travbana": "https://jole84.se/kartsymboler/idrott_anlaggning.svg",
    1042: "https://jole84.se/kartsymboler/kyrka.svg",
    1044: "https://jole84.se/kartsymboler/kata.svg",
    1045: "https://jole84.se/kartsymboler/torn.svg",
    1046: "https://jole84.se/kartsymboler/vindskydd2.svg",
    1047: "https://jole84.se/kartsymboler/vaderkvarn.svg",
    1051: "https://jole84.se/kartsymboler/fyr.svg",
    1742: "https://jole84.se/kartsymboler/transformator.svg",
    1922: "https://jole84.se/kartsymboler/slussport.svg",
    1923: "https://jole84.se/kartsymboler/dammbyggnad.svg",
    2016: "https://jole84.se/kartsymboler/cistern.svg", // Klockstapel
    2019: "https://jole84.se/kartsymboler/mast.svg",
    2022: "https://jole84.se/kartsymboler/skorsten.svg",
    2025: "https://jole84.se/kartsymboler/vindkraft.svg",
    2033: "https://jole84.se/kartsymboler/fjallstation.svg",
    2034: "https://jole84.se/kartsymboler/hus_herrgard.svg",
    2035: "https://jole84.se/kartsymboler/kärnkraftverk.svg",
    2037: "https://jole84.se/kartsymboler/kyrka_liten.svg",
    2038: "https://jole84.se/kartsymboler/hus_slott.svg",
    2042: "https://jole84.se/kartsymboler/sjukhus.svg",
    2045: "https://jole84.se/kartsymboler/hus1.svg",
    2046: "https://jole84.se/kartsymboler/hus2.svg",
    2047: "https://jole84.se/kartsymboler/hus3.svg",
    2049: "https://jole84.se/kartsymboler/hus_gard.svg",
    2203: "https://jole84.se/kartsymboler/vagbom.svg",
    2205: "https://jole84.se/kartsymboler/vandplats.svg",
    2511: "https://jole84.se/kartsymboler/fornlamning.svg",
    2512: "https://jole84.se/kartsymboler/cistern.svg", // Fornlämning, mindre
    2513: "https://jole84.se/kartsymboler/milstolpe.svg",
    2514: "https://jole84.se/kartsymboler/ruin.svg",
    2515: "https://jole84.se/kartsymboler/minnessten.svg",
    2516: "https://jole84.se/kartsymboler/kulturminne.svg", // Övrig kulturhistorisk lämning, mindre
    2517: "https://jole84.se/kartsymboler/gruvhal.svg",
    2518: "https://jole84.se/kartsymboler/kulturminne.svg",
    2852: "https://jole84.se/kartsymboler/helikopterlandning.svg",
}

const textColor = {
    "Hydrografi": "#0070ff",
    "Fjällupplysningstext": "#c44982",
    "Skyddad natur": "#419821",
}

const textAlign = {
    1: "left",
    3: "right",
    4: "left",
    5: "center",
    6: "right",
    7: "left",
    9: "right",
}

const textBaseline = {
    1: "bottom",
    2: "bottom",
    3: "bottom",
    4: "middle",
    5: "middle",
    6: "middle",
    7: "top",
    8: "top",
    9: "top",
}

function getTextFontOld(feature) {
    const italicText = [
        "Administrativ indelning",
        "Fjällupplysningstext",
        "Hydrografi",
        "Kulturhistorisk lämning",
        "Skyddad natur",
        "Terrängnamn",
        "Upplysningstext",
    ];

    // const boldText = [
    //   "Kyrka"
    // ];

    return (italicText.includes(feature.get("textkategori")) ? "italic " : "") +
        ((feature.get("textstorleksklass") * 2.5) + 6) + "px arial, sans-serif";
}

const roadWidth = {
    "Småväg": 0.7,
    "Landsväg liten": 1.5,
    "Landsväg": 2,
    "Motortrafikled": 3,
    "Mötesfri väg": 3,
    "Motorväg": 4,
}

const dashPolygon = [
    'Militärt övningsfält',
    "Kulturreservat",
]

function degToRad(deg) {
    return (deg * Math.PI * 2) / 360;
}

function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

function jole84VectorBW(feature, currentResolution) {
    const geometryType = feature.getGeometry().getType();
    const layerName = feature.get("layer");

    if (geometryType == "Polygon") {
        // console.log(feature.get("objekttypnr"), feature.get("objekttyp"));
        // console.log(layerName);
        // 2632 'sjö'
        // 2633 'vattendragsyta'
        // 2654 'vattenyta'
        // 2631 'Hav'
        // 2648 'Ej karterat område'

        if ([2632, 2654, 2631, 2633, 2648].includes(feature.get("objekttypnr"))) {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "darkgrey",
                    width: 1,
                }),
                fill: new ol.style.Fill({
                    color: "#3a3a3aff",
                }),
            });
        } else {
            if (
                [
                    "Bebyggelse",
                    'Hög bebyggelse',
                    'Industri- och handelsbebyggelse',
                    'Sluten bebyggelse',
                    'Låg bebyggelse'
                ].includes(feature.get("objekttyp"))) {
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: "darkgrey",
                        width: 1,
                    }),
                    fill: new ol.style.Fill({
                        color: "#d4d4d4",
                    }),
                });
            }
            if (layerName == "byggnad") {
                return new ol.style.Style({
                    zIndex: 10,
                    fill: new ol.style.Fill({
                        color: "#7d7d7d",
                    }),
                });
            }
            if (["militart_omrade", "skyddadnatur"].includes(layerName)) {
                return
            }
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "white",
                    width: 2,
                }),
                fill: new ol.style.Fill({
                    color: "white",
                }),
            });

        }
    }

    if (geometryType == "LineString" || geometryType == "MultiLineString") {
        // console.log(feature.get("objekttypnr"), feature.get("objekttyp"));
        // console.log(feature.get("layer"));
        if (["TNE_FT_VAGDATA", "vaglinje"].includes(feature.get("layer"))) {
            return new ol.style.Style({
                zIndex:
                    feature.get("vagtyp") == 'rondell' ? 100 :
                        feature.get("vagtyp") == 'stratvag' ? 50 :
                            feature.get("vagtyp") == 'forbud' ? 40 :
                                feature.get("vagtyp") == 'belagd' ? 20 :
                                    0,
                // (10 - feature.get("Klass_181")),
                stroke: new ol.style.Stroke({
                    color: ["grus", "bidrag"].includes(feature.get("vagtyp")) ? "darkgrey" : "black",
                    width: feature.get("width") / 15,
                }),
                // fill: new ol.style.Fill({
                //   color: "black",
                // }),
            });
        }

        if (feature.get("layer") == "ralstrafik") {
            return [
                new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: "black",
                        width: 3,
                    }),
                }),
                new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: "white",
                        width: 2,
                        lineDash: [10, 10],
                        lineDashOffset: 10,
                        lineCap: "square",
                    }),
                }),
            ];
        }
        // if (feature.get("layer") == "hydrolinje") {
        //   return new ol.style.Style({
        //     zIndex: 8,
        //     stroke: new ol.style.Stroke({
        //       color: "lightgray",
        //       width: Number(feature.get("storleksklass")) || 2,
        //     }),
        //   });
        // }
    }

    if (geometryType == "Point") {
        if (layerName == "textpunkt") {
            return new ol.style.Style({
                zIndex: (feature.get("textstorleksklass") * 10) || 100,
                text: new ol.style.Text({
                    declutterMode: "none",
                    text: feature.get("textstrang"),
                    textAlign: textAlign[feature.get("textlage")],
                    textBaseline: textBaseline[feature.get("textlage")],
                    rotation: degToRad(360 - feature.get("textriktning")),
                    rotateWithView: !!feature.get("textriktning"),
                    font: getTextFont(feature),
                    fill: new ol.style.Fill({
                        color: "black",
                    }),
                    stroke: new ol.style.Stroke({
                        color: "white",
                        width: Number(feature.get("textstorleksklass") * 0.2) + 2,
                    }),
                }),
            });
        }
    }
}

function jole84Style(feature, currentResolution, mapMode) {
    const layerName = feature.get("layer");

    // linestring
    if (layerName == "TNE_FT_VAGDATA") {
        const styleArray = [
            new ol.style.Style({
                zIndex: feature.get("vagtyp") == 'rondell' ? 100 : (10 - feature.get("Klass_181")),
                stroke: new ol.style.Stroke({
                    color: colorArray[mapMode][feature.get("vagtyp")],
                    width: feature.get("width") / 8,
                    lineCap: "round",
                    lineDash: feature.get("vagtyp") == 'ovrigvag' ? [10, 12] : undefined
                }),
            })
        ];
        if (feature.get("vagtyp") == "bidrag" && mapMode == 0 && currentResolution < 80) {
            styleArray.push(
                new ol.style.Style({
                    zIndex: 10,
                    stroke: new ol.style.Stroke({
                        color: "black",
                        width: (feature.get("width") / 8),
                        lineDash: [6, 12],
                        lineDashOffset: 10,
                        lineCap: "butt",
                    }),
                }),
            )
        }
        if (feature.get("vagtyp") == "grus" && feature.get("Klass_181") <= 7 && jole84vectorTerrang.getVisible() && currentResolution < 80) {
            styleArray.push(
                new ol.style.Style({
                    zIndex: 10,
                    stroke: new ol.style.Stroke({
                        color: "red",
                        width: (feature.get("width") / 8),
                        lineDash: [6, 12],
                        lineDashOffset: 10,
                        lineCap: "butt",
                    }),
                }),
            )
        }
        if (currentResolution < 9) {
            styleArray.push(
                new ol.style.Style({
                    zIndex: 10,
                    text: new ol.style.Text({
                        text: feature.get("Namn_132") || feature.get("Namn_130"),
                        font: "12px arial, sans-serif",
                        placement: "line",
                        fill: new ol.style.Fill({
                            color: colorArray[mapMode]["textColorFill"],
                        }),
                        stroke: new ol.style.Stroke({
                            color: colorArray[mapMode]["textColorStroke"],
                            width: 4,
                        }),
                    }),
                })
            )
        }
        if (feature.get("Huvnr_556_1") < 500 && !feature.get("Namn_130")) {
            const europaVag = feature.get("Evag_555") == -1;
            styleArray.push(
                new ol.style.Style({
                    zIndex: europaVag ? 10 : 9,
                    text: new ol.style.Text({
                        text: europaVag ? "E" + String(feature.get("Huvnr_556_1")) : String(feature.get("Huvnr_556_1")),
                        font: "bold 16px arial, sans-serif",
                        placement: "point",
                        padding: [
                            75,
                            75,
                            75,
                            75
                        ],
                        fill: new ol.style.Fill({
                            color: "white",
                        }),
                        stroke: new ol.style.Stroke({
                            color: europaVag ? "#4daf4a" : "#377eb8",
                            width: 10,
                        }),
                    }),
                })
            )
        }
        return styleArray;
    } else if (layerName == "traktor" && mapMode == 0) {
        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: colorArray[mapMode][feature.get("objekttyp")],
                width: 3,
                lineDash: [10, 10],
                lineDashOffset: 10,
                lineCap: "square",
            }),
        });
    } else if (layerName == "markkantlinje" && mapMode == 0) {
        return new ol.style.Style({
            zIndex: 2,
            stroke: new ol.style.Stroke({
                color: "#00a6ff",
                width: 1,
            }),
        });
    } else if (layerName == "kurvighet" && mapMode == 0) {
        return new ol.style.Style({
            zIndex: 2,
            stroke: new ol.style.Stroke({
                color: "#df006840",
                width: 12,
            }),
        });
    } else if (layerName == "hojdlinje" && mapMode == 0) {
        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: "rgba(150, 127, 105, 0.6)",
                width: feature.get("stodkurva") == "Ja" ? 2 : 1,
            }),
        });
    } else if (layerName == "ledningslinje") {
        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: "#000000a2",
                width: 2,
            }),
        });
    } else if (layerName == "vaglinje") {
        let vagNummer = "";
        let europaVag = false;
        if (feature.get("vardvagnummer")) {
            if (Array.from(feature.get("vardvagnummer"))[0] == "E" || feature.get("vardvagnummer") < 500) {
                vagNummer = feature.get("vardvagnummer").split(".")[0];
                europaVag = Array.from(feature.get("vardvagnummer"))[0] == "E"
            }
        }
        return new ol.style.Style({
            zIndex: europaVag ? 10 : 3,
            stroke: new ol.style.Stroke({
                color: colorArray[mapMode]["belagd"],
                width: roadWidth[feature.get("objekttyp")] || 3,
            }),
            text: new ol.style.Text({
                declutterMode: "declutter",
                text: String(vagNummer),
                font: "bold 14px arial, sans-serif",
                padding: [50, 50, 50, 50],
                placement: "point",
                fill: new ol.style.Fill({
                    color: "white",
                }),
                stroke: new ol.style.Stroke({
                    color: europaVag ? "#4daf4a" : "#377eb8",
                    width: 10,
                }),
                // backgroundFill: new ol.style.Fill({
                //   color: europaVag ? "#4daf4a" : "#377eb8",
                // }),
            }),
        });
    } else if (layerName == "ralstrafik") {
        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "black",
                    width: 3,
                }),
            }),
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "white",
                    width: 2,
                    lineDash: [10, 10],
                    lineDashOffset: 10,
                    lineCap: "square",
                }),
            }),
        ];
    } else if (layerName == "hydrolinje") {
        return new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: colorArray[mapMode][feature.get("objekttyp")],
                width: Number(feature.get("storleksklass")) || 3,
                lineCap: "round",
            }),
        });
    }


    // polygon
    else if (
        (layerName == "skyddadnatur" && mapMode == 0) ||
        layerName == "militart_omrade"
    ) {
        // no fill only border
        return new ol.style.Style({
            zIndex: 5,
            stroke: new ol.style.Stroke({
                color: colorArray[mapMode][feature.get("objekttyp")],
                lineDash: dashPolygon.includes(feature.get("objekttyp")) ? [10, 10] : undefined,
                width: 4,
            }),
        });
    } else if (layerName == "byggnad") {
        return new ol.style.Style({
            zIndex: 5,
            fill: new ol.style.Fill({
                color: "#7d7d7d",
            }),

        });
    } else if (layerName == "landningsbana") {
        return new ol.style.Style({
            zIndex: 15,
            fill: new ol.style.Fill({
                color: colorArray[mapMode][feature.get("objekttyp")],
            }),

        });
    } else if (layerName == "mark") {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: colorArray[mapMode][feature.get("objekttyp")],
            }),
        });
    }


    // point
    else if (layerName == "textpunkt") {
        return new ol.style.Style({
            zIndex: (feature.get("textstorleksklass") * 10) || 100,
            text: new ol.style.Text({
                declutterMode: "none",
                text: feature.get("textstrang"),
                textAlign: textAlign[feature.get("textlage")],
                textBaseline: textBaseline[feature.get("textlage")],
                rotation: degToRad(360 - feature.get("textriktning")),
                rotateWithView: !!feature.get("textriktning"),
                font: getTextFont(feature),
                fill: new ol.style.Fill({
                    color: textColor[feature.get("textkategori")] || colorArray[mapMode]["textColorFill"],
                }),
                stroke: new ol.style.Stroke({
                    color: colorArray[mapMode]["textColorStroke"],
                    width: Number(feature.get("textstorleksklass") * 0.3) + 3,
                }),
            }),
        });
    } else if (layerName == "Rastplats") {
        return new ol.style.Style({
            zIndex: 18,
            image: new ol.style.Icon({
                declutterMode: "none",
                // anchor: [0.5, 1],
                src: "https://jole84.se/kartsymboler/h13-1.svg",
                scale: 0.05,
            }),
        })
    } else if (layerName == "anlaggningsomradespunkt") {
        if (feature.get("andamal") in kartsymboler) {
            return new ol.style.Style({
                image: new ol.style.Icon({
                    declutterMode: "none",
                    rotation: degToRad(360 - feature.get("rotation")),
                    rotateWithView: !!feature.get("rotation"),
                    src: kartsymboler[feature.get("andamal")],
                }),
            });
            // } else {
            //   console.table(feature.getProperties());
        }
    } else if (layerName == "Trafikplats") {
        return new ol.style.Style({
            zIndex: 20,
            text: new ol.style.Text({
                offsetX: 12,
                offsetY: 1,
                declutterMode: "none",
                text: feature.get("trafikplatsnummer"),
                font: "bold 16px arial, sans-serif",
                fill: new ol.style.Fill({
                    color: "black",
                }),
            }),
            image: new ol.style.Icon({
                declutterMode: "none",
                src: "https://jole84.se/kartsymboler/f27-1.svg",
                scale: 0.18,
            }),
        })
    } else if (layerName == "NVDB_DK_O_24_Hojdhinder45dm" && mapMode != 0) {
        return new ol.style.Style({
            zIndex: 30,
            text: new ol.style.Text({
                // declutterMode: "none",
                text: feature.get("Fri_hojd").toFixed(1) + "m",
                rotateWithView: true,
                rotation: feature.get("rotation") - Math.PI,
                font: "bold 10px arial, sans-serif",
                fill: new ol.style.Fill({
                    color: "black",
                }),
            }),
            image: new ol.style.Icon({
                // declutterMode: "none",
                rotateWithView: true,
                rotation: feature.get("rotation") - Math.PI,
                src: "https://jole84.se/kartsymboler/c17-1.svg",
                scale: 0.07,
            }),
        });
    } else if (layerName == "VIS_DK_O_90_P_ficka") {
        return new ol.style.Style({
            zIndex: 18,
            image: new ol.style.Icon({
                declutterMode: "none",
                src: "https://jole84.se/kartsymboler/e19-1.svg",
                scale: feature.get("Placering") == 'Avskild från vägen' ? 0.1 : 0.07,
            }),
        })
    } else if (layerName == "atk") {
        return [
            new ol.style.Style({
                zIndex: 20,
                image: new ol.style.Icon({
                    declutterMode: "none",
                    // anchor: [0.5, 1],
                    src: "https://jole84.se/kartsymboler/e24-1.svg",
                    scale: 0.06,
                    rotateWithView: true,
                    rotation: degToRad(feature.get("Bearing")) - Math.PI,
                    displacement: [15, 0],
                }),
            }),
            new ol.style.Style({
                zIndex: 20,
                image: new ol.style.Icon({
                    declutterMode: "none",
                    rotateWithView: true,
                    rotation: degToRad(feature.get("Bearing")) - Math.PI,
                    src: "https://jole84.se/kartsymboler/c31-3.svg",
                    displacement: [15, 28],
                    scale: 0.07,
                }),
                text: new ol.style.Text({
                    declutterMode: "none",
                    offsetX: 15,
                    offsetY: -26,
                    text: feature.get("HTHAST"),
                    rotateWithView: true,
                    rotation: degToRad(feature.get("Bearing")) - Math.PI,
                    font: "bold 19px arial, sans-serif",
                    fill: new ol.style.Fill({
                        color: "black",
                    }),
                }),
            }),
        ]
    } else if (
        [
            "byggnadspunkt",
            "byggnadsanlaggningspunkt",
            "kultur_lamning_punkt",
            "vagpunkt",
            "hydroanlaggningspunkt",
        ].includes(layerName) && feature.get("objekttypnr") in kartsymboler
    ) {
        return new ol.style.Style({
            // zIndex: 5,
            image: new ol.style.Icon({
                declutterMode: "none",
                rotation: degToRad(360 - feature.get("rotation")) || 0,
                rotateWithView: feature.get("rotation") == 0 ? false : true,
                src: kartsymboler[feature.get("objekttypnr")],
                scale: 1.5,
            }),
        });
        // } else {
        //   console.table(feature.getProperties());
    }
}

// --- Style Caches ---
const cache = {
  fill: new Map(),
  stroke: new Map(),
  icon: new Map()
};

const getFill = (color) => {
  if (!cache.fill.has(color)) cache.fill.set(color, new ol.style.Fill({ color }));
  return cache.fill.get(color);
};

const getStroke = (color, width, lineDash, lineCap = "round") => {
  const key = `${color}|${width}|${lineDash}|${lineCap}`;
  if (!cache.stroke.has(key)) {
    cache.stroke.set(key, new ol.style.Stroke({ color, width, lineDash, lineCap }));
  }
  return cache.stroke.get(key);
};

const getIcon = (src, scale = 1, rotation = 0, rotateWithView = false, displacement = [0, 0]) => {
  const key = `${src}|${scale}|${rotation}|${rotateWithView}|${displacement.join(',')}`;
  if (!cache.icon.has(key)) {
    cache.icon.set(key, new ol.style.Icon({ src, scale, rotation, rotateWithView, displacement, declutterMode: "none" }));
  }
  return cache.icon.get(key);
};

const getTextFont = (feature) => {
  const italicText = ["Administrativ indelning", "Fjällupplysningstext", "Hydrografi", "Kulturhistorisk lämning", "Skyddad natur", "Terrängnamn", "Upplysningstext"];
  const isItalic = italicText.includes(feature.get("textkategori")) ? "italic " : "";
  const size = (feature.get("textstorleksklass") * 2.5) + 6;
  return `${isItalic}${size}px arial, sans-serif`;
};

// --- Layer Handlers ---
const handlers = {
  "TNE_FT_VAGDATA": (feature, res, mode) => {
    const vagtyp = feature.get("vagtyp");
    const width = feature.get("width") / 8;
    const styles = [new ol.style.Style({
      zIndex: vagtyp === 'rondell' ? 100 : vagtyp === 'stratvag' ? 50 : vagtyp === 'forbud' ? 40 : vagtyp === 'belagd' ? 20 : 0,
      stroke: getStroke(colorArray[mode][vagtyp], width, vagtyp === 'ovrigvag' ? [10, 12] : undefined)
    })];

    if (mode == 0 && res < 80) {
      if (vagtyp === "bidrag") styles.push(new ol.style.Style({ zIndex: 10, stroke: getStroke("black", width, [6, 12], "butt") }));
      if (vagtyp === "grus" && feature.get("Klass_181") <= 7) styles.push(new ol.style.Style({ zIndex: 10, stroke: getStroke("red", width, [6, 12], "butt") }));
    }

    if (res < 9) {
      styles.push(new ol.style.Style({
        zIndex: 10,
        text: new ol.style.Text({
          text: feature.get("Namn_132") || feature.get("Namn_130"), font: "12px arial, sans-serif", placement: "line",
          fill: getFill("#000000"), stroke: getStroke("#ffffff", 4)
        })
      }));
    }

    const huvnr = feature.get("Huvnr_556_1");
    if (huvnr < 500 && !feature.get("Namn_130")) {
      const isEuropa = feature.get("Evag_555") == -1;
      styles.push(new ol.style.Style({
        zIndex: isEuropa ? 10 : 9,
        text: new ol.style.Text({
          text: (isEuropa ? "E" : "") + String(huvnr), font: "bold 16px arial, sans-serif", padding: [75, 75, 75, 75],
          fill: getFill("white"), stroke: getStroke(isEuropa ? "#4daf4a" : "#377eb8", 10)
        })
      }));
    }
    return styles;
  },

  "traktor": (feature, res, mode) => mode == 0 ? new ol.style.Style({ stroke: getStroke(colorArray[mode][feature.get("objekttyp")], 3, [10, 10], "square") }) : null,
  "markkantlinje": (f, r, mode) => mode == 0 ? new ol.style.Style({ zIndex: 2, stroke: getStroke("#00a6ff", 1) }) : null,
  "kurvighet": (f, r, mode) => mode == 0 ? new ol.style.Style({ zIndex: 2, stroke: getStroke("#df006840", 12) }) : null,
  "hojdlinje": (feature, r, mode) => mode == 0 ? new ol.style.Style({ stroke: getStroke("rgba(150, 127, 105, 0.6)", feature.get("stodkurva") == "Ja" ? 2 : 1) }) : null,
  "ledningslinje": () => new ol.style.Style({ stroke: getStroke("#000000a2", 2) }),

  "vaglinje": (feature, res, mode) => {
    let vagNummer = "";
    let isEuropa = false;
    const rawNum = feature.get("vardvagnummer");
    if (rawNum && (rawNum[0] == "E" || rawNum < 500)) {
      vagNummer = String(rawNum).split(".")[0];
      isEuropa = rawNum[0] == "E";
    }
    return new ol.style.Style({
      zIndex: isEuropa ? 10 : 3,
      stroke: getStroke(colorArray[mode][feature.get("objekttyp")], roadWidth[feature.get("objekttyp")] || 3),
      text: new ol.style.Text({
        text: vagNummer, font: "bold 14px arial, sans-serif", padding: [50, 50, 50, 50],
        fill: getFill("white"), stroke: getStroke(isEuropa ? "#4daf4a" : "#377eb8", 10)
      })
    });
  },

  "ralstrafik": () => [
    new ol.style.Style({ stroke: getStroke("black", 3) }),
    new ol.style.Style({ stroke: getStroke("white", 2, [10, 10], "square") })
  ],

  "hydrolinje": (feature, res, mode) => new ol.style.Style({
    stroke: getStroke(colorArray[mode][feature.get("objekttyp")], Number(feature.get("storleksklass")) || 3, undefined, "round")
  }),

  "skyddadnatur": (feature, res, mode) => mode == 0 ? new ol.style.Style({
    zIndex: 5, stroke: getStroke(colorArray[mode][feature.get("objekttyp")], 4, dashPolygon.includes(feature.get("objekttyp")) ? [10, 10] : undefined)
  }) : null,

  "militart_omrade": (feature, res, mode) => new ol.style.Style({
    zIndex: 5, stroke: getStroke(colorArray[mode][feature.get("objekttyp")], 4, dashPolygon.includes(feature.get("objekttyp")) ? [10, 10] : undefined)
  }),

  "byggnad": () => new ol.style.Style({ zIndex: 5, fill: getFill("#7d7d7d") }),
  "landningsbana": (feature, res, mode) => new ol.style.Style({ zIndex: 15, fill: getFill(colorArray[mode][feature.get("objekttyp")]) }),
  // "mark": (feature) => new ol.style.Style({ fill: getFill(`var(--map-land-${feature.get("objekttyp")})`) }),
  "mark": (feature, res, mode) => new ol.style.Style({ fill: getFill(colorArray[mode][feature.get("objekttyp")]) }),

  "textpunkt": (feature, res, mode) => {
    const kategori = feature.get("textkategori");
    const kategoriColor = { "Hydrografi": "#0070ff", "Fjällupplysningstext": "#c44982", "Skyddad natur": "#419821" }[kategori];
    return new ol.style.Style({
      zIndex: (feature.get("textstorleksklass") * 10) || 100,
      text: new ol.style.Text({
        text: feature.get("textstrang"), textAlign: textAlign[feature.get("textlage")], textBaseline: textBaseline[feature.get("textlage")],
        rotation: degToRad(360 - feature.get("textriktning")), rotateWithView: !!feature.get("textriktning"), font: getTextFont(feature),
        fill: getFill(kategoriColor || "#000000"), stroke: getStroke("#ffffff", (feature.get("textstorleksklass") * 0.3) + 3)
      })
    });
  },

  "Rastplats": () => new ol.style.Style({ zIndex: 18, image: getIcon("https://jole84.se/kartsymboler/h13-1.svg", 0.05) }),

  "anlaggningsomradespunkt": (feature) => {
    const src = kartsymboler[feature.get("andamal")];
    return src ? new ol.style.Style({ image: getIcon(src, 1, degToRad(360 - feature.get("rotation")), !!feature.get("rotation")) }) : null;
  },

  "Trafikplats": (feature) => new ol.style.Style({
    zIndex: 20,
    text: new ol.style.Text({ offsetX: 12, offsetY: 1, text: feature.get("trafikplatsnummer"), font: "bold 16px arial, sans-serif", fill: getFill("black") }),
    image: getIcon("https://jole84.se/kartsymboler/f27-1.svg", 0.18)
  }),

  "atk": (feature) => {
    const bearing = degToRad(feature.get("Bearing")) - Math.PI;
    return [
      new ol.style.Style({ zIndex: 20, image: getIcon("https://jole84.se/kartsymboler/e24-1.svg", 0.06, bearing, true, [15, 0]) }),
      new ol.style.Style({
        zIndex: 20, image: getIcon("https://jole84.se/kartsymboler/c31-3.svg", 0.07, bearing, true, [15, 28]),
        text: new ol.style.Text({ offsetX: 15, offsetY: -26, text: feature.get("HTHAST"), rotateWithView: true, rotation: bearing, font: "bold 19px arial, sans-serif", fill: getFill("black") })
      })
    ];
  }
};

// --- Main Export ---
function styleStuff(feature, currentResolution) {
  const layerName = feature.get("layer");
  const mode = localStorage.mapMode || 0;

  const handler = handlers[layerName];
  if (handler) return handler(feature, currentResolution, mode);


  // Fallback for Point Icons
  const objKey = feature.get("objekttypnr") || feature.get("andamal");
  const iconSrc = kartsymboler[objKey];
  if (iconSrc) {
    const rotation = degToRad(360 - feature.get("rotation")) || 0;
    return new ol.style.Style({
      image: getIcon(iconSrc, 1.5, rotation, !!feature.get("rotation"))
    });
  }
}