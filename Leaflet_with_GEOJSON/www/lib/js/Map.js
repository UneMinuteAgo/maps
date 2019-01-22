function Map() {
    var self = this;

    self.init = function(host) {
        // Créations du soccle Leaflet
        var map = L.map(host).setView([48.856614, 2.3522219000000177], 13);
        var osmLayer = L.tileLayer('https://www.openstreetmap.org', {
            attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
        var tileStreets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ'
        });
        var baseLayers = {
            "OpenStreetMap": osmLayer
        };

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

        // Configuration
        map.addLayer(osmLayer);
        tileStreets.addTo(map);

        // Production
        L.control.layers(baseLayers).addTo(map);
    };

    return self;
}