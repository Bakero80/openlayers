var styles = [
        'Road',
        'Aerial',
        'AerialWithLabels',
        'collinsBart',
        'ordnanceSurvey'
      ];
var layers = [];
var ii;
     for (ii = 0; ii < styles.length; ++ii) {
      layers.push(new ol.layer.Tile({
      visible: false,
      preload: Infinity,
      source: new ol.source.BingMaps({
      key: 'Ajv8dPY2bornArG97S2Ag8Y_OZAprc8zDA41At3gWtcj8h4atV4uSbQ5WHO_pNBq',
      imagerySet: styles[ii]
          })
      }));
     }

var map = new ol.Map({
     layers: layers,
             // Improve user experience by loading tiles while dragging/zooming. Will make
             // zooming choppy on mobile or slow devices.
     loadTilesWhileInteracting: true,
     target: 'map',
     view: new ol.View({
     center: [-6655.5402445057125, 6709968.258934638],
     zoom: 13
          })
     });
var select = document.getElementById('layer-select');
     function onChange() {
     var style = select.value;
     for (var ii = 0; ii < layers.length; ++ii) {
     layers[ii].setVisible(styles[ii] === style);
           }
     }
     select.addEventListener('change', onChange);
     onChange();
