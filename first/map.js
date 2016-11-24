var map = new ol.Map(
    {target: 'map'
});

map.setView(new ol.View({
    center: [-179234.679536, 5977176.756194],
    zoom: 10
}));

var osmSource = new ol.source.OSM();

var osmLayer = new ol.layer.Tile({source: osmSource});
map.addLayer(osmLayer);
