function initialize() {
		// création de la carte et paramétrage général : centre et niveau de zoom
      //  var map = L.map('mapid').setView([48.8589, 2.3255], 12);
        var map = L.map('mapid').setView([48.856614, 2.3522219000000177], 13);
		// création d'une couche "osmLayer"
        var osmLayer = L.tileLayer('https://www.openstreetmap.org', {
            attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19
        });

		// la couche "osmLayer" est ajoutée à la carte
        map.addLayer(osmLayer);



        var tileStreets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
           attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           maxZoom: 18,
           id: 'mapbox.streets',
           accessToken: 'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ'
         });
         tileStreets.addTo(map);


		// var tileStreets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          //  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           // maxZoom: 18,
           // id: 'mapbox.streets',
           // accessToken: 'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ'
         // });
         // tileStreets.addTo(mymap);
		  //}
		 // var popup = L.popup();
          //function onMapClick(e) {
             //popup
              //.setLatLng(e.latlng)
              //.setContent("You clicked the map at " + e.latlng.toString())
              //.openOn(mymap);


		// création d'une couche "watercolorLayer"
        //var watercolorLayer = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {//
        //    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        //    maxZoom: 19
        //});

		 //la couche "watercolorLayer" est ajoutée à la carte
        //map.addLayer(watercolorLayer);

		// création d'une couche geoJson qui appelle le fichier "arrondissement.geojson"
		var arrondissement = $.getJSON("arrondissement.geojson",function(dataArrondissement)
					{L.geoJson( dataArrondissement,
						{style: function(feature)
							{
							// paramétrage de la symbologie de la couche "arrondissement"
							return { color: "#046380", weight: 1, fillColor: '#4BB5C1', fillOpacity: .1 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "arrondissement"
				layer.bindPopup( "<b><u>Description de l'arrondissement</u></b><br><b> Arrondissement n° </b>" + feature.properties.c_ar )
				}
		}).addTo(map);
		});
		
		// création d'une couche geoJson qui appelle le fichier "Liste_notaires.geojson"
		var Liste_notaires= $.getJSON("Liste_notaires.geojson",function(dataListe_notaires)
										// icone parchm	
										{var iconeListe_notaires = L.icon({
													iconUrl: 'style/icon-red.png',
													iconSize: [30, 35]
																	});
		// fon ction pointToLayer qui ajoute la couche "Liste_notaires" à la carte, selon la symbologie "iconeListeNotaires", et paramètre la popup
		L.geoJson(dataListe_notaires,{
			pointToLayer: function(feature,latlng){
				var marker = L.marker(latlng,{icon: iconeListe_notaires});
				marker.bindPopup('<b><u>Références du notaire</u></b><br>'
							   + "<b>Etude : </b>" + feature.properties.ETUDE+ '<br>'
							   + "<b>Notaire : </b>" + feature.properties.NOTAIRE+ '<br>'
						       + "<b>Rue : </b>" + feature.properties.RUE+ '<br>'
							   + "<b>Commune : </b>" + feature.properties.COMMUNE+ '<br>'
							   + "<b>Dates extrêmes : </b>" + feature.properties.DATES_EXTREMES+ '<br>'
							   );
				return marker;
				}
						}).addTo(map);
										});				
											

      // création d'une couche geoJson qui appelle le fichier "RuesClients_MillonDailly.geojson"
        var RuesClients_MillonDailly= $.getJSON("RuesClients_MillonDailly.geojson",function(dataRuesClients_MillonDailly)
                                    // icone Clap
                                   {var iconeRuesClients_MillonDailly = L.icon({
                                                 iconUrl: 'style/icon-orange.png',
                                                 iconSize: [19, 21]
                                                                 });
      // fon ction pointToLayer qui ajoute la couche "Rues_clients_Millon_Dailly" à la carte, selon la symbologie "iconeRues_clients_Millon_Dailly", et paramètre la popup

        L.geoJson(dataRuesClients_MillonDailly,{
            pointToLayer: function(feature,latlng){
                var marker = L.marker(latlng,{icon: iconeRuesClients_MillonDailly});
                marker.bindPopup('<b><u>Localisation des clients de Me Millon-Dailly</u></b><br>'
                               + "<b>Rue : </b>" + feature.properties.RUE+ '<br>'
                               + "<b>Commune : </b>" + feature.properties.COMMUNE+ '<br>'
                               );
                return marker;
                }
                        }).addTo(map);
                                        });

// création d'une couche geoJson qui appelle le fichier "RuesClients_Fourchy.geojson"
        var RuesClients_Fourchy= $.getJSON("RuesClients_Fourchy.geojson",function(dataRuesClients_Fourchy)
                                    // icone Clap
                                   {var iconeRuesClients_Fourchy = L.icon({
                                                 iconUrl: 'style/icon-blue-darker.png',
                                                 iconSize: [19, 21]
                                                                 });
      // fon ction pointToLayer qui ajoute la couche "Rues_clients_Fourchy" à la carte, selon la symbologie "iconeRues_clients_Millon_Dailly", et paramètre la popup

        L.geoJson(dataRuesClients_Fourchy,{
            pointToLayer: function(feature,latlng){
                var marker = L.marker(latlng,{icon: iconeRuesClients_Fourchy});
                marker.bindPopup('<b><u>Localisation des clients de Me Fourchy</u></b><br>'
                               + "<b>Rue : </b>" + feature.properties.RUE+ '<br>'
                               + "<b>Commune : </b>" + feature.properties.COMMUNE+ '<br>'
                               );
                return marker;
                }
                        }).addTo(map);
                                        });


		// création d'un contrôle des couches pour modifier les couches de fond de plan
		var baseLayers = {
			"OpenStreetMap": osmLayer,
			//"Watercolor" : watercolorLayer
		};
		L.control.layers(baseLayers).addTo(map);
}
