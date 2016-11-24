//Cet exemple charge de nouvelles fonctionnalités de GeoServer WFS lorsque l'étendue de vue change.

var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: function(extent) {
          return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
              'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
              'outputFormat=application/json&srsname=EPSG:3857&' +
              'bbox=' + extent.join(',') + ',EPSG:3857';
      },
      strategy: ol.loadingstrategy.bbox
});

var vector = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 1.0)',
            width: 2
        })
      })
});

var raster = new ol.layer.Tile({
        source: new ol.source.BingMaps({
          imagerySet: 'Aerial',
          key: 'Ajv8dPY2bornArG97S2Ag8Y_OZAprc8zDA41At3gWtcj8h4atV4uSbQ5WHO_pNBq'
      })
});

var map = new ol.Map({
        layers: [raster, vector],
        target: document.getElementById('map'),
        view: new ol.View({
          center: [-179234.679536, 5977176.756194],
          maxZoom: 19,
          zoom: 12
    })
});
