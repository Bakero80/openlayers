var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    projection: 'EPSG:3857', //HERE IS THE VIEW PROJECTION
    center: [-179234.679536, 5977176.756194],
    zoom: 2
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS({
        projection: 'EPSG:4326', //HERE IS THE DATA SOURCE PROJECTION
        url: 'http://demo.boundlessgeo.com/geoserver/wms',
        params: {
          'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
        }
      })
    })
  ]
});

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
    '+x_0=400000 +y_0=-100000 +ellps=airy ' +
    '+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
    '+units=m +no_defs');
var proj27700 = ol.proj.get('EPSG:27700');
proj27700.setExtent([0, 0, 700000, 1300000]);

map.setView(new ol.View({
    projection: 'EPSG:27700',
    center: [400000, 650000],
    zoom: 4
  }));
