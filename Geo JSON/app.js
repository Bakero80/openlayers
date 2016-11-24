var image = new ol.style.Circle({
        radius: 5,
        fill: null,
        stroke: new ol.style.Stroke({color: 'blue', width: 1})
});

var styles = {
        'Point': new ol.style.Style({
         image: image
     }),

LineString: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'green',
            width: 1
          })
      }),
  }

var styleFunction = function(feature) {
        return styles[feature.getGeometry().getType()];
};

var geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
        'type': 'name',
        'properties': {
        'name': 'EPSG:3857'
     }
},
    'features': [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [0, 0]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [[4e6, -2e6], [8e6, 2e6]]
      }
}]
};

var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
      });

vectorSource.addFeature(new ol.Feature(new ol.geom.Circle([5e6, 7e6], 1e6)));

var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: styleFunction
      });
var map = new ol.Map({
    layers: [
    new ol.layer.Tile({
    source: new ol.source.OSM()
    }),
    vectorLayer
],
    target: 'map',
    controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
    collapsible: false
    })
}),
    view: new ol.View({
    center: [0, 0],
    zoom: 2
    })
});
