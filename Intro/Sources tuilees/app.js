var map = new ol.Map({
     target: 'map',
     layers: [
       new ol.layer.Tile({
         source: new ol.source.OSM()
       })
     ],
     view: new ol.View({
       center: ol.proj.fromLonLat([-1,3636.333, 47,1252.645]),
       zoom: 6
     }),
     controls: ol.control.defaults({
       attributionOptions: {
         collapsible: false
       }
     })
   });
