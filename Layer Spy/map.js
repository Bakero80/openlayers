var key ='Ajv8dPY2bornArG97S2Ag8Y_OZAprc8zDA41At3gWtcj8h4atV4uSbQ5WHO_pNBq';
var roads = new ol.layer.Tile({
        source: new ol.source.BingMaps({
         key: key,
         imagerySet: 'Road'
        })
    });

var imagery = new ol.layer.Tile({
        source: new ol.source.BingMaps({
        key: key,
        imagerySet: 'Aerial'
        })
    });

var container = document.getElementById('map');

var map = new ol.Map({
        layers: [roads, imagery],
        target: container,
        view: new ol.View({
          center: [-179234.679536, 5977176.756194],
          zoom: 12
        })
    });

var radius = 75;
document.addEventListener('keydown', function(evt) {
        if (evt.which === 38) {
          radius = Math.min(radius + 5, 150);
          map.render();
          evt.preventDefault();
        } else if (evt.which === 40) {
          radius = Math.max(radius - 5, 25);
          map.render();
          evt.preventDefault();
        }
      });

var mousePosition = null;
container.addEventListener('mousemove', function(event) {
        mousePosition = map.getEventPixel(event);
        map.render();
      });

      container.addEventListener('mouseout', function() {
        mousePosition = null;
        map.render();
      });

imagery.on('precompose', function(event) {
        var ctx = event.context;
        var pixelRatio = event.frameState.pixelRatio;
        ctx.save();
        ctx.beginPath();
        if (mousePosition) {
                // only show a circle around the mouse
        ctx.arc(mousePosition[0] * pixelRatio, mousePosition[1] * pixelRatio,
        radius * pixelRatio, 0, 2 * Math.PI);
        ctx.lineWidth = 5 * pixelRatio;
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.stroke();
        }
         ctx.clip();
        });

imagery.on('postcompose', function(event) {
        var ctx = event.context;
        ctx.restore();
        });
