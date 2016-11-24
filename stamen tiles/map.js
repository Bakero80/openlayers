var map = new ol.Map({
       layers: [
         new ol.layer.Tile({
           source: new ol.source.Stamen({
             layer: 'watercolor'
           })
         }),
         new ol.layer.Tile({
           source: new ol.source.Stamen({
             layer: 'terrain-labels'
           })
         })
       ],
       target: 'map',
       view: new ol.View({
         center: ol.proj.transform(
             [-1.3636333, 47.1252645], 'EPSG:4326', 'EPSG:3857'),
         zoom: 10
       })
     });
