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

      {% for site in site.data.sites %}
        {latLng: [{{ site.lat }},{{ site.lng }}], name: '{{ site.name }}'},
      {% endfor %}


    ]


    });
  });
</script>
