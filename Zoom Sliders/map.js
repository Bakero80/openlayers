var createMap = function(divId) {
        var source, layer, map, zoomslider;

        source = new ol.source.OSM();
        layer = new ol.layer.Tile({
          source: source
        });
        map = new ol.Map({
          layers: [layer],
          target: divId,
          view: new ol.View({
            center: [-179234.679536, 5977176.756194],
            zoom: 12
          })
        });
        zoomslider = new ol.control.ZoomSlider();
        map.addControl(zoomslider);
        return map;
      };
      var map1 = createMap('map1');
      var map2 = createMap('map2');
      var map3 = createMap('map3');
