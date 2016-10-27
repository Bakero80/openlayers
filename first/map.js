var map = new ol.Map(
    {target: 'map'
});

map.setView(new ol.View({
    center: [27, 7],
    zoom: 4
}));

var osmSource = new ol.source.OSM();

var osmLayer = new ol.layer.Tile({source: osmSource});
map.addLayer(osmLayer);
