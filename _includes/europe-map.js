<div id="map" style="width: 727px; height: 500px"></div>
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
        stroke: '#383f47',
        r:4
      }
    },

    backgroundColor: '#fdfdfd',

    markers: [
      {% for site in site.data.sites %}
        {latLng: [{{ site.lat }},{{ site.lng }}], name: '{{ site.name }}'},
      {% endfor %}
    ],

    focusOn: {
      x: 0.2,
      y: 0.6,
      scale: 1.6
    },

    zoomOnScroll: false,

    });
  });
</script>
