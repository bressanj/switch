<div id="map" style="width: 727px; height: 400px"></div>
<script>
  $(function(){
    $('#map').vectorMap({map: 'europe_mill_en',

    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    regionStyle: {
      initial: {
        fill: '#293449',
        stroke: '#383f47'
      }
    },

    markerStyle: {
      initial: {
        fill: '#F05829',
        stroke: '#383f47'
      }
    },
    backgroundColor: '#fdfdfd',
    markers: [

      {latLng: [48.13,11.56], name: 'Munich'},
      {latLng: [46.95,7.45], name: 'Bern'},
      {latLng: [46.2,6.15], name: 'Geneva'},

    ]


    });
  });
</script>
