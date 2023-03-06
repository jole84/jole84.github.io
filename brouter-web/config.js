(function () {

    BR.conf = {};
    BR.conf.host = 'https://brouter.de/';

    // Switch for intermodal routing demo
    BR.conf.transit = false;
    // or as query parameter (index.html?transit=true#zoom=...)
    // (uses search/query (?) not hash (#) params, as config only executed once at load)
    // TODO not included in permalink (better replace permalink with hash plugin)
    //var params = new URLSearchParams(window.location.search.slice(1));
    //BR.conf.transit = params.has('transit') && (params.get('transit') === 'true');




    BR.conf.profilesUrl = 'https://jole84.github.io/profiles2/';
    // BR.conf.profilesUrl = 'https://brouter.de/brouter/profiles2/';

    BR.conf.privacyPolicyUrl = '/privacypolicy.html';

    // Set the initial position and zoom level of the map
    BR.conf.initialMapLocation = [57.8, 14.2];
    BR.conf.initialMapZoom = 10;

    BR.conf.profiles = [
        // 'mc',
        'car-fast',
        'car-eco',
        'moped',
        'trekking',
        'fastbike',
        'safety',
        'shortest',
        'hiking-mountain',
    ];

    // Map old, renamed legacy profile to new name (from hash of shared or bookmarked URLs)
    BR.conf.profilesRename = {
        'hiking-beta': 'hiking-mountain',
    };

    // Removes default base layers when 'true'. Useful for only having custom layers (see below).
    BR.conf.clearBaseLayers = true;

    // Add custom tile layers
    // URL template see http://leafletjs.com/reference.html#tilelayer
    // Multiple entries separated by comma (,)
    BR.conf.baseLayers = {
        // 'display name': 'url'[,]
        // e.g. for offline tiles with https://github.com/develar/mapsforge-tile-server
        //'Mapsforge Tile Server': 'http://localhost:6090/{z}/{x}/{y}.png'
        'jole84 Terrängkarta' : 'https://filedn.eu/lBi7OlMJML8z9XgfydjnDsm/slitlagerkarta/{z}/{x}/{y}.jpg',
        'jole84 Vägkarta' : 'https://filedn.eu/lBi7OlMJML8z9XgfydjnDsm/slitlagerkarta_nedtonad/{z}/{x}/{y}.jpg',
        'Lantmäteriet Topo' : 'https://minkarta.lantmateriet.se/map/topowebbcache/?layer=topowebb&style=default&tilematrixset=3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix={z}&TileCol={x}&TileRow={y}',
        'Eniro Karta' : 'http://map.eniro.se/geowebcache/service/tms1.0.0/map/{z}/{x}/{-y}.png',
        'Eniro Flygfoto' : 'http://map.eniro.se/geowebcache/service/tms1.0.0/aerial/{z}/{x}/{-y}.jpeg',
        'Eniro Historisk' : 'https://map01.eniro.no/geowebcache/service/tms1.0.0/se_aerial_1950_60s/{z}/{x}/{-y}.jpeg',
        'Eniro Sjökort' : 'http://map.eniro.se/geowebcache/service/tms1.0.0/nautical/{z}/{x}/{-y}.png',
        'OpenStreetMap' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'OpenTopoMap' : 'https://opentopomap.org/{z}/{x}/{y}.png',
    };

    // Base layer to show on start, as position number in the layer switcher, starting from 0, default is first
    BR.conf.defaultBaseLayerIndex = 0;

    // Initial route line transparency (0-1, overridden by stored slider setting)
    BR.conf.defaultOpacity = 0.67;

    // Minimum transparency slider value on load, values between 0 and 1 (0=invisible).
    // 0 = no minimum, use stored setting; 1 = always reset to full visibility on load
    BR.conf.minOpacity = 0.3;

    BR.conf.routingStyles = {
        trailer: {
            weight: 5,
            dashArray: [10, 10],
            opacity: 0.6,
            color: 'magenta',
        },
        track: {
            weight: 10,
            color: 'magenta',
            opacity: BR.conf.defaultOpacity,
        },
        trackCasing: {
            weight: 8,
            color: 'white',
            // assumed to be same as track, see setOpacity
            opacity: BR.conf.defaultOpacity,
        },
        nodata: {
            color: 'darkred',
        },
        beeline: {
            weight: 5,
            dashArray: [1, 10],
            color: 'magenta',
            opacity: BR.conf.defaultOpacity,
        },
        beelineTrailer: {
            weight: 5,
            dashArray: [1, 10],
            opacity: 0.6,
            color: 'magenta',
        },
    };

    BR.conf.markerColors = {
        // awesome-markers colors (by color picker)
        poi: '#436978',
        start: '#72b026',
        via: '#38aadd',
        stop: '#d63e2a',
    };

    // transit (intermodal routing) demo config
    if (BR.conf.transit) {
        BR.conf.profiles = [
            '../im/bike',
            '../im/foot',
            '../im/like-bike',
            '../im/like-foot',
            'trekking',
            'fastbike',
            'shortest',
            'moped',
            'car-test',
        ];
    }

    // regex needs to be in sync with server, see ServerHandler.getTrackName()
    BR.conf.tracknameAllowedChars = 'a-zA-Z0-9 \\._\\-';

    BR.conf.overpassBaseUrl = 'https://overpass.kumi.systems/api/interpreter';

    // File size limit in kb for loading tracks
    BR.conf.trackSizeLimit = 1024 * 10;
})();
