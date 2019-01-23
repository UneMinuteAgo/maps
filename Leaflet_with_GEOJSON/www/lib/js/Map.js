function Map() {
    let self = this;

    self._data = {
        target: null
    };
    self._map = null;
    self._HTMLElement = {
        map: null
    };

    self.make = function() {
        if (!self._data.target) if (self.error()) return false;

        self._map = L.map(self._data.target);
        self._map.setView([48.856614, 2.3522219000000177], 13);
        self.layer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ',
            // maxZoom: 18,
            // attribution: 'Attrib'
        });

        return self;
    };

    self.getGEOJson = function () {

    };

    self.layer = function(url, options) {
        let tileLayer = L.tileLayer(url, options);

        tileLayer.addTo(self._map);
    };

    self.target = function(target) {
        self._data.target = target;

        return self;
    };

    self.error = function(message = 'Map encountered an error.') {
        console.error("[ ERROR ] ::", message);
        return true;
    };

    // self.init = function(host) {
        // Création des arrondissements (data geojson)
        // var arrondissement = $.getJSON("../../arrondissement.geojson", function(dataArrondissement){
        //     L.geoJson(
        //         dataArrondissement,
        //         {
        //             style: function(feature) {
        //                 // paramétrage de la symbologie de la couche "arrondissement"
        //                 return { color: "#046380", weight: 1, fillColor: '#4BB5C1', fillOpacity: .1 };
        //             },
        //             onEachFeature: function( feature, layer ){
        //                 // paramétrage de la popup de la couche "arrondissement"
        //                 layer.bindPopup( "<b><u>Description de l'arrondissement</u></b><br><b> Arrondissement n° </b>" + feature.properties.c_ar )
        //             }
        //         }
        //     ).addTo(map);
        // });

        // Création des notaires (data geojson)
        // var Liste_notaires= $.getJSON("../../Liste_notaires.geojson",function(dataListe_notaires) {
        //     var iconeListe_notaires = L.icon({
        //         iconUrl: 'style/icon-red.png',
        //         iconSize: [30, 35]
        //     });
        //
        //     // fonction pointToLayer qui ajoute la couche "Liste_notaires" à la carte, selon la symbologie "iconeListeNotaires", et paramètre la popup
        //     L.geoJson(dataListe_notaires,{
        //         pointToLayer: function(feature,latlng){
        //             var marker = L.marker(latlng,{icon: iconeListe_notaires});
        //             marker.bindPopup('<b><u>Références du notaire</u></b><br>'
        //                 + "<b>Etude : </b>" + feature.properties.ETUDE+ '<br>'
        //                 + "<b>Notaire : </b>" + feature.properties.NOTAIRE+ '<br>'
        //                 + "<b>Rue : </b>" + feature.properties.RUE+ '<br>'
        //                 + "<b>Commune : </b>" + feature.properties.COMMUNE+ '<br>'
        //                 + "<b>Dates extrêmes : </b>" + feature.properties.DATES_EXTREMES+ '<br>'
        //             );
        //             return marker;
        //         }
        //     }).addTo(map);
        // });

        // Création des Rues (data geojson)
        // var RuesClients_MillonDailly= $.getJSON("../../RuesClients_MillonDailly.geojson", function(dataRuesClients_MillonDailly){
        //     var iconeRuesClients_MillonDailly = L.icon({
        //         iconUrl: 'style/icon-orange.png',
        //         iconSize: [19, 21]
        //     });
        //
        //     // fonction pointToLayer qui ajoute la couche "Rues_clients_Millon_Dailly" à la carte, selon la symbologie "iconeRues_clients_Millon_Dailly", et paramètre la popup
        //     L.geoJson(dataRuesClients_MillonDailly,{
        //         pointToLayer: function(feature,latlng){
        //             var marker = L.marker(latlng,{icon: iconeRuesClients_MillonDailly});
        //             marker.bindPopup('<b><u>Localisation des clients de Me Millon-Dailly</u></b><br>'
        //                 + "<b>Rue : </b>" + feature.properties.RUE+ '<br>'
        //                 + "<b>Commune : </b>" + feature.properties.COMMUNE+ '<br>'
        //             );
        //             return marker;
        //         }
        //     }).addTo(map);
        // });

        // Production
        // L.control.layers(baseLayers).addTo(map);
    // };

    return self;
}