Ext.application({
    name: 'OL3EXT4',
    launch: function () {
        var mappanel = Ext.create('Ext.panel.Panel', {
            title: "Test Map",
            layout: 'fit',
            html: "<div id='test-map'></div>", // The map will be drawn inside
            listeners: {
                afterrender: function () {
                    var osm_source = new ol.source.OSM({
                        url: "http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    });
                    var osmLayer = new ol.layer.Tile({
                        source: osm_source
                    });

                    this.map = new ol.Map({
                        target: 'test-map',
                        renderer: 'canvas',
                        layers: [osmLayer],
                        view: new ol.View({
                            center: [-179234.679536, 5977176.756194],
                            zoom: 5
                        })
                    });
                },
                // The resize handle is necessary to set the map!
                resize: function () {
                    var size = [document.getElementById(this.id + "-body").offsetWidth,
                    document.getElementById(this.id + "-body").offsetHeight];
                    //console.log(size);
                    this.map.setSize(size);
                }
            }
        });
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                mappanel
            ]
        });
    }
});
