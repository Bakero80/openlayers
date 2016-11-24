var osmSource = new ol.source.OSM();
var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: osmSource
          }),
          new ol.layer.Tile({
            source: new ol.source.TileDebug({
              projection: 'EPSG:3857',
              tileGrid: osmSource.getTileGrid()
            })
          })
        ],
target: 'map',
        controls: ol.control.defaults({
        attributionOptions:  ({
        collapsible: false
        })
}),
        view: new ol.View({
        center: ol.proj.transform(
        [-1.3636333, 47.1252645], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
        })
});
