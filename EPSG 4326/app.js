var layers = [
      new ol.layer.Tile({
      source: new ol.source.TileWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {
            'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
            }
          })
        })
      ];
var map = new ol.Map({
      controls: ol.control.defaults().extend([
      new ol.control.ScaleLine({
      units: 'degrees'
      })
]),
layers: layers,
      target: 'map',
      view: new ol.View({
      projection: 'EPSG:4326',
      center: [1.3636333, 47.1252645],
      zoom: 5
      })
});
