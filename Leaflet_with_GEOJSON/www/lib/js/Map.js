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

    self.getGEOJson = function (target, options = {}, marker) {
        options = {
            pointToLayer: marker
        };

        new xhrQuery().target(target).callbacks(
            function(options, d) {
                L.geoJSON(JSON.parse(d), options).addTo(this);
            }.bind(self._map, options)
        ).send();
    };

    self.loadNotary = function(target, options = {}) {
        self.getGEOJson(target, options, self.marker().notary());
        self.getGEOJson(target, options, self.marker().customer());
    };

    self.layer = function(url, options) {
        let tileLayer = L.tileLayer(url, options);

        tileLayer.addTo(self._map);
    };

    self.marker = function() {
        return {
            notary: function() {
                return self.marker().maker.bind(this, {
                    icon: L.icon({
                        iconUrl: 'style/icon-red.png',
                        iconSize: [64,64]
                    })
                });
            },

            customer: function() {
                return self.marker().maker.bind(null, {
                    icon: L.icon({
                        iconUrl: 'style/icon-blue.png',
                        iconSize: [48, 48]
                    })
                });
            },

            maker: function(options, feature, latlng) {
                return L.marker(latlng, options);
            }
        }
    };

    self.target = function(target) {
        self._data.target = target;

        return self;
    };

    self.error = function(message = 'Map encountered an error.') {
        console.error("[ ERROR ] ::", message);
        return true;
    };

    return self;
}