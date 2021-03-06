var map = new ol.Map({
       target: 'map',
       layers: [
         new ol.layer.Tile({
           title: 'Global Imagery',
           source: new ol.source.TileWMS({
             url: 'http://demo.opengeo.org/geoserver/wms',
             params: {LAYERS: 'ne:NE1_HR_LC_SR_W_DR', VERSION: '1.1.1'}
           })
         })
       ],
       view: new ol.View({
         projection: 'EPSG:4326',
         center: [0, 0],
         zoom: 2
       })
     });
