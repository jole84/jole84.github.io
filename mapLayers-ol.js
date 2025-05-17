
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
    slitlagerkarta = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://jole84.se/slitlagerkarta/{z}/{x}/{y}.jpg',
            minZoom: 6,
            maxZoom: 14,
        }),
        visible: true,
        layerName: "slitlagerkarta",
        name: "Jole84 Terrängkarta",
        groupName: "jole84",
        baseLayer: true,
    }),

    slitlagerkarta_nedtonad = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://jole84.se/slitlagerkarta_nedtonad/{z}/{x}/{y}.jpg',
            minZoom: 6,
            maxZoom: 14,
        }),
        visible: false,
        layerName: "slitlagerkarta_nedtonad",
        name: "Jole84 Vägkarta",
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
            maxZoom: 15,
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

    historiskaortofoto97 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/0b7ab683-07e1-337d-aaad-7e7be7224b12/?",
            params: {
                layers: "OI.Histortho_bw_1994,OI.Histortho_bw_1995,OI.Histortho_bw_1996,OI.Histortho_bw_1997,OI.Histortho_bw_1998,OI.Histortho_bw_1999,OI.Histortho_bw_2000",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "historiskaortofoto97",
        name: "Lantmäteriet 94-2000",
        groupName: "lantm",
        baseLayer: true,
    }),

    historiskaortofoto2003 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://api.lantmateriet.se/historiska-ortofoton/wms/v1/token/0b7ab683-07e1-337d-aaad-7e7be7224b12/?",
            params: {
                layers: "OI.Histortho_bw_2001,OI.Histortho_bw_2003,OI.Histortho_color_2003,OI.Histortho_bw_2004",
                TILED: true,
            },
            crossOrigin: 'Anonymous',
        }),
        visible: false,
        layerName: "historiskaortofoto2003",
        name: "Lantmäteriet 2001-2004",
        groupName: "lantm",
        baseLayer: true,
    }),

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
            url: "https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?",
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
            url: "https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?",
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
            url: "https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?",
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
            url: "https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4",
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
