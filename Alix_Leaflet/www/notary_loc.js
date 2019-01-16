// DONNEES DE TEST
// données de test étude notariale (Millon-Dailly)
var coorNot_MD = [48.87,2.34];
var areaNot_MD = 1000; // rayon exprimé en mètres
// Données individuelles du notaire
var datEtude_MD = "CVIII";
var datNom_MD = "Augustin Millon-Dailly";
var datAdr_MD = "Rue de la Tisseranderie, vis-a-vis la rue du Mouton, Paris";
var datDates_MD = "20 aout 1774 - 10 juillet 1776";
var datUrl_MD = "https://www.siv.archives-nationales.culture.gouv.fr/siv/NP/FRAN_NP_011185";
// données de test clients du notaire (Millon-Dailly)
var latClients_MD = new Array(48.8634101, 48.8704817, 48.86874410000001, 48.8545034, 48.855545, 48.8604178, 48.8874114, 48.8604178, 48.8565112, 48.8545034, 48.8560263, 48.85534269999999, 48.8689074, 48.8656049, 48.8574926, 48.851315, 48.8520918, 48.8639731, 48.852663, 48.8604178, 48.85961469999999, 48.86283359999999, 48.86874410000001, 48.8639731, 48.8410312, 48.8604178, 48.85534269999999, 48.8688869, 48.869663, 48.8552146, 48.852646, 48.855247, 48.8534769, 48.8639731, 48.8545034);
var lonClients_MD = new Array(2.3509563999999727, 2.3312512999999626, 2.359396400000037, 2.3476631999999427, 2.362691, 2.3423625000000357, 2.3441748999999845, 2.3423625000000357, 2.359518699999967, 2.3476631999999427, 2.353260099999943, 2.3552610000000413, 2.329418300000043, 2.3324192999999696, 2.3486219999999776,  2.334859, 2.3485513000000537, 2.3353366999999707, 2.3633307999999715, 2.3423625000000357, 2.31480160000001, 2.3484703999999965, 2.359396400000037, 2.3353366999999707, 2.356017599999973, 2.3423625000000357, 2.3552610000000413, 2.335959199999934, 2.349641, 2.3470340999999735, 2.3691939000000275, 2.355210, 2.3333553999999594, 2.3353366999999707, 2.3476631999999427);
var coorClients_MD = new Array(latClients_MD, lonClients_MD);

// SCRIPT
function initialize_map(){
    // création des fonctions de création des marqueurs
    function create_coordinates(lat, long){
        var coordinates = new Array(lat, long);
        return coordinates;
    }
  
    function create_marker_clients(coorClients){
        for (var i = 0; i < coorClients[0].length; i++){
            var coorOneClient = create_coordinates(coorClients[0][i],coorClients[1][i]);
            L.marker(coorOneClient,{icon:blueIcon}).addTo(map);
        }
    }
    
    function create_marker_notary(coorNot, popupContent, areaNot){
        var markerNot = L.marker(coorNot, {icon:greenIcon}).addTo(map); // localisation de l'étude notariale
        markerNot.bindPopup(popupContent);
        L.circle(coorNot, {color: '#44708E', fillColor: '#AFC7ED', fillOpacity:0.4, radius:areaNot}).addTo(map); // aire d'influence du notaire
    }
    
    function create_popup_string(datNom, datEtude, datAdr, datDates, datUrl){
        var popupString = "<b>" + datNom + " (" + datEtude + ")</b><br>" + datAdr + "<br>" + datDates + "<br><a href=\"" + datUrl + "\" target=\"_blank\">Voir la notice</a>"; // intégration des métadonnées du notaire dans le pop-up 
        return popupString;
    }

    // carte centrée sur Paris
    var map = L.map("notarymap").setView([48.864716, 2.349014], 12);
    // aout du fond de carte OpemStreetMap
    var fondcarte = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>, Data by <a href="http://www.archives-nationales.culture.gouv.fr/">Archives Nationales</a>',
            maxZoom:19,
            id: "mapbox.streets",
            accessToken:'pk.eyJ1IjoiY2FpbGxpYm90IiwiYSI6ImNqcGQ2NXc0ZDFkYmIzcXNiZHFwZjhjNGIifQ.paCPst_H1pioOQzUccyVxQ'
        });
    map.addLayer(fondcarte);

    // création des pointeurs personnalisés
    var greenIcon = L.icon({iconUrl:'style/pointer_green.png', shadowUrl:'style/pointer_shadow.png',iconSize: [26,43], shadowSize: [47,19],iconAnchor: [13,42], shadowAnchor: [4,15],popupAnchor: [0,-38]});
    var blueIcon = L.icon({iconUrl:'style/pointer_blue.png',shadowUrl:'style/pointer_shadow.png',iconSize: [22,37],shadowSize: [39,16],iconAnchor: [11,36],shadowAnchor: [4,13],popupAnchor: [0,-32]});

    // création des points sur la carte
    var popupContent = create_popup_string(datNom_MD, datEtude_MD, datAdr_MD, datDates_MD, datUrl_MD);
    create_marker_notary(coorNot_MD, popupContent, areaNot_MD);
    create_marker_clients(coorClients_MD);
}

