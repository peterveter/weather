<template>
  <div class="flex w-full">
    <l-map ref="myMap" :center="currentPlace" :zoom="10" @click="mapClicked">
      <l-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tilelayer>
      <l-marker :lat-lng="[currentPlace.lat, currentPlace.lng]"></l-marker>
    </l-map>
  </div>
</template>
<script>
import 'leaflet/dist/leaflet.css';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['currentPlace']),
  },
  methods: {
    ...mapActions(['changePlace']),
    mapClicked(coords) {
      this.changePlace(coords.latlng);
    },
  },
};
</script>