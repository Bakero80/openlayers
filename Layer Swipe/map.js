var osm = new ol.layer.Tile({
      source: new ol.source.OSM()
     });

var bing = new ol.layer.Tile({
      source: new ol.source.BingMaps({
      key: 'Ajv8dPY2bornArG97S2Ag8Y_OZAprc8zDA41At3gWtcj8h4atV4uSbQ5WHO_pNBq',
      imagerySet: 'Aerial'
    			})
  	});

var map = new ol.Map({
      layers: [osm, bing],
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

var swipe = document.getElementById('swipe');

      bing.on('precompose', function(event) {
var ctx = event.context;
var width = ctx.canvas.width * (swipe.value / 100);

      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    });

      bing.on('postcompose', function(event) {
var ctx = event.context;
      ctx.restore();
    });

      swipe.addEventListener('input', function() {
        map.render();
      }, false);
