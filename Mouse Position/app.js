var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });

var map = new ol.Map({
        controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
        })
      }).extend([mousePositionControl]),
        layers: [
        new ol.layer.Tile({
        source: new ol.source.OSM()
        })
    ],
        target: 'map',
        view: new ol.View({
        center: [0, 0],
        zoom: 2
        })
    });
var projectionSelect = document.getElementById('projection');
        projectionSelect.addEventListener('change', function(event) {
        mousePositionControl.setProjection(ol.proj.get(event.target.value));
        });

var precisionInput = document.getElementById('precision');
        precisionInput.addEventListener('change', function(event) {
var format = ol.coordinate.createStringXY(event.target.valueAsNumber);
        mousePositionControl.setCoordinateFormat(format);
        });
