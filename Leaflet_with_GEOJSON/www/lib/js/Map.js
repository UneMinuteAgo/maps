function Map() {
    let self = this;

    self._data = {
        target: null,
        libPath: null,
        icon: {
            notary: {
                icon: "http://ichap.cl/wp-content/uploads/2014/04/map-marker-icon.png",
                size: [64, 64]
            },
            customer: {
                icon: 'http://ichap.cl/wp-content/uploads/2014/04/map-marker-icon.png',
                size: [32, 32]
            }
        }
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

    self.libPath = function(path) {
        self._data.libPath = path;
    };

    self.loadNotary = function(target, options = {}) {
        new xhrQuery().target(target).callbacks(
            function(options, d) {
                try {
                    d = JSON.parse(d);

                    // Placement des clients
                    options.pointToLayer = self.marker().customer();
                    L.geoJSON(d.customers, options).addTo(this);

                    // Placement du notaire
                    options.pointToLayer = self.marker().notary();
                    L.geoJSON(d.notary, options).addTo(this);
                } catch (e) {
                    console.error("Map.loadNotary() failed");
                }
            }.bind(self._map, options)
        ).send();
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
                        iconUrl: self._data.icon.notary.icon,
                        iconSize: self._data.icon.notary.size
                    })
                });
            },

            customer: function() {
                return self.marker().maker.bind(null, {
                    icon: L.icon({
                        iconUrl: self._data.icon.customer.icon,
                        iconSize: self._data.icon.customer.size
                    })
                });
            },

            icon: function(icon, size) {
                return {
                    notary: function() {
                        self._data.icon.notary.icon = icon;
                        self._data.icon.notary.size = size;

                        return self;
                    },

                    customer: function() {
                        self._data.icon.customer.icon = icon;
                        self._data.icon.customer.size = size;

                        return self;
                    }
                }
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