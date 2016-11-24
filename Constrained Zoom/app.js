var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.BingMaps({
              key: 'Ajv8dPY2bornArG97S2Ag8Y_OZAprc8zDA41At3gWtcj8h4atV4uSbQ5WHO_pNBq',
              imagerySet: 'Aerial'
            })
          })
        ],
        view: new ol.View({
          center: [-179234.679536, 5977176.756194],
          zoom: 11,
          minZoom: 9,
          maxZoom: 13
        })
      });
