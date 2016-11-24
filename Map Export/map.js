var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          new ol.layer.Vector({
            source: new ol.source.Vector({
              url: 'https://openlayers.org/en/v3.19.0/examples/data/geojson/countries.geojson',
              format: new ol.format.GeoJSON()
            })
          })
        ],
        target: 'map',
                controls: ol.control.defaults({
                  attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                  })
                }),
                view: new ol.View({
                         center: [-179234.679536, 5977176.756194],
                         zoom: 12
                       })
                     });

                     document.getElementById('export-png').addEventListener('click', function() {
                       map.once('postcompose', function(event) {
                         var canvas = event.context.canvas;
                         canvas.toBlob(function(blob) {
                           saveAs(blob, 'map.png');
                         });
                       });
                       map.renderSync();
                     });
