var map = new ol.Map({
   layers: [
   new ol.layer.Tile({
   source: new ol.source.OSM()
      })
   ],
   target: 'map',
   view: new ol.View({
   projection: 'EPSG:4326',
   center: [-1.610069, 47.214223],
   zoom: 12
      })
});
