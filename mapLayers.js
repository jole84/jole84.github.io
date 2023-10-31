// slitlager

var slitlagerkarta = L.tileLayer('https://jole84.se/slitlagerkarta/{z}/{x}/{y}.jpg', {
    maxNativeZoom: 14,
    maxZoom: 20,
    minZoom: 6,
    tms: false,
    attribution: 'jole84.github.io'
});

var slitlagerkarta_nedtonad = L.tileLayer('https://jole84.se/slitlagerkarta_nedtonad/{z}/{x}/{y}.jpg', {
    maxNativeZoom: 14,
    maxZoom: 20,
    minZoom: 6,
    tms: false,
    attribution: 'jole84.github.io'
});

// Lantmäteriet

var topo = L.tileLayer('https://minkarta.lantmateriet.se/map/topowebbcache/?layer=topowebb&style=default&tilematrixset=3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    maxNativeZoom: 17,
    maxZoom: 20,
    tms: false,
    attribution: 'Lantmäteriet'
});

var topo_wmts = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/topowebbcache/?TileMatrix={z}&TileCol={x}&TileRow={y}', {
    layers: 'topoweb',
    service: 'wmts',
    format: 'image/png',
    TileMatrixSet: '3857',
    styles: 'default',
    tms: false,
    attribution: 'Lantmäteriet',
    maxZoom: 20,
});

var topowebb_nedtonad = L.tileLayer('https://minkarta.lantmateriet.se/map/topowebbcache/?layer=topowebb_nedtonad&style=default&tilematrixset=3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}', {
    maxNativeZoom: 17,
    tms: false,
    attribution: 'Lantmäteriet',
    maxZoom: 20,
});

var flyg_60 = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/historiskaortofoto/service?', {
    layers: 'OI.Histortho_60',
    maxZoom: 20,
});

var flyg_75 = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/historiskaortofoto/service?', {
    layers: 'OI.Histortho_75',
    maxZoom: 20,
});

var terrangskuggning = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/hojdmodell/SERVICE?', {
    layers: 'terrangskuggning',
    transparent: false,
    opacity: 0.5,
    maxZoom: 20,
});

var grans = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/fastighetsindelning/SERVICE?', {
    layers: 'granser,text,fiske',
    transparent: true,
    opacity: 1,
    format: 'image/png',
    style: 'registerkarta,registerkarta',
    maxZoom: 20,
});

var ortofoto = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/ortofoto/SERVICE?', {
    maxZoom: 20,
    layers: 'Ortofoto_0.5,Ortofoto_0.4,Ortofoto_0.25,Ortofoto_0.16',
});

var ortofotoir = L.tileLayer.wms('https://minkarta.lantmateriet.se/map/ortofoto/SERVICE?', {
    layers: 'Ortofoto_IR',
    maxZoom: 20,
});

// Eniro

var eniroaerial = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/aerial/{z}/{x}/{y}.jpeg', {
    tms: true,
    attribution: 'Eniro',
    maxZoom: 20,
});

var eniromap = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/map/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    tms: true,
    attribution: 'Eniro',
    maxZoom: 20,
});

var enironautical = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/nautical/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    tms: true,
    attribution: 'Eniro',
    maxZoom: 20,
});

var enironautical2x = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/nautical2x/{z}/{x}/{y}.png', {
    maxNativeZoom: 17,
    tms: true,
    attribution: 'Eniro',
    maxZoom: 20,
});

var enirohistorical = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/se_aerial_1950_60s/{z}/{x}/{y}.jpeg', {
    tms: true,
    attribution: 'Eniro',
    maxZoom: 20,
});

var eniro_hybrid = L.tileLayer('https://map.eniro.se/geowebcache/service/tms1.0.0/hybrid/{z}/{x}/{y}.png', {
    tms: true,
    transparent: false,
    attribution: 'Eniro',
    maxNativeZoom: 17,
    maxZoom: 20,
});

// Hitta.se

var hitta_friluft = L.tileLayer('https://static.hitta.se/tile/v3/4/{z}/{x}/{y}', {
    tms: true,
    attribution: 'hitta.se',
    maxZoom: 20,
});

var hitta_karta = L.tileLayer('https://static.hitta.se/tile/v3/0/{z}/{x}/{y}', {
    tms: true,
    attribution: 'hitta.se',
    maxZoom: 20,
});

var hitta_satellit = L.tileLayer('https://static.hitta.se/tile/v3/1/{z}/{x}/{y}', {
    tms: true,
    attribution: 'hitta.se',
    maxZoom: 20,
});

// OSM

var openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    tms: false,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var opentopomap = L.tileLayer('https://opentopomap.org/{z}/{x}/{y}.png', {
    maxNativeZoom: 15,
    maxZoom: 20,
    tms: false,
    attribution: '&cop100 fy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var openseamap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
    maxNativeZoom: 18,
    maxZoom: 20,
    tms: false,
    transparent: true,
    attribution: 'All maps © <a href="https://www.openseamap.org/">OpenSeaMap</a>'
});

// NVDB

var nvdb_trafikplatsnummer = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfoRoad_1_3?', {
    layers: 'Trafikplats_Vag',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var ATK_matplats = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'ATK_Matplats,Rastplats',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_rastplats = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'Rastplats',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_vagnummer = L.tileLayer.wms('https://nvdb2012.trafikverket.se/MapProxy.ashx?mapsvc=InternNetInfo', {
    layers: 'VagnummerText',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var Vagnybyggnad = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_5?', {
    layers: 'Vagnybyggnad',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_slitlager = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'Slitlager',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_DriftbidragStatligt = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'DriftbidragStatligt',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_Huvudled = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfoRoad_1_3?', {
    layers: 'Huvudled',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});


var nvdb_begransning = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'BegransatAxelBoggitryck,BegransadBruttovikt,BegransadFordonslangd',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_stigningsfalt = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'Stigningsfalt',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var nvdb_hastighetsgrans = L.tileLayer.wms('https://geo-netinfo.trafikverket.se/MapService/wms.axd/NetInfo_1_4?', {
    layers: 'Hastighetsgrans',
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

// SMHI

var smhi_radar = L.tileLayer.wms('https://wts1.smhi.se/tile/?', {
    layers: 'baltrad:radarcomp-lightning_scandinavia_wpt',
    format: 'image/png',
    crs: L.CRS.EPSG900913,
    transparent: true,
    maxZoom: 20,
});

var smhi_temp = L.tileLayer.wms('https://wts1.smhi.se/tile/?', {
    layers: 'pmpfrekvent:temperature-2m_n-europe_rainbow_',
    format: 'image/png',
    crs: L.CRS.EPSG900913,
    transparent: true,
    opacity: 0.5,
    maxNativeZoom: 10,
    maxZoom: 20,
});

var smhi_vind = L.tileLayer.wms('https://wts1.smhi.se/tile/?', {
    layers: 'pmp25_vind_lufttryck__havochkust-gradient',
    format: 'image/png',
    crs: L.CRS.EPSG900913,
    transparent: true,
    maxZoom: 20,
});

// Övriga

var tele2 = L.tileLayer('https://mim.tele2.com/MIMCore/api/Tile/GetOverlay?x={x}&y={y}&z={z}&viewType=1&serviceThresholdIds=69,90,111&countryCode=SWE&currentServiceLayerNo=100', {
    transparent: true,
    format: 'image/png',
    maxZoom: 20,
});

var marker1 = L.marker([57, 14]).bindPopup('testmarker1'),
    marker2 = L.marker([58, 15]).bindPopup('testmarker2');

var markers = L.layerGroup([marker1, marker2]);
