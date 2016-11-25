var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            title: 'Global Imagery',
            source: new ol.source.TileWMS({
              url: 'http://demo.opengeo.org/geoserver/wms',
              params: {LAYERS: 'nasa:bluemarble', VERSION: '1.1.1'}
            })
          })
        ],
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 5,
        })
      });
new ol.layer.Vector({
        title: 'Earthquakes',
        source: new ol.source.Vector({
          url: '/data/layers/7day-M2.5.json',
          format: new ol.format.GeoJSON()
        }),
        style: new ol.style.Style({
          image: new ol.style.Circle({
            radius: 3,
            fill: new ol.style.Fill({color: 'white'})
          })
        })
      })
