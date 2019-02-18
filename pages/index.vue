<template>
  <div class="flex flex-col h-screen text-center bg-teal-light">
    <div class="flex h-full shadow-lg lg:mx-2">
      <no-ssr>
        <leaflet-map class="min-w-card-md"></leaflet-map>
      </no-ssr>
    </div>
    <div class="flex w-full h-full">
      <days-forecast></days-forecast>
    </div>
  </div>
</template>

<script>
import LeafletMap from '~/components/LeafletMap';
import DaysForecast from '~/components/DaysForecast';
import { mapState } from 'vuex';

export default {
  components: {
    LeafletMap,
    DaysForecast,
  },
  computed: {
    ...mapState(['currentPlace', 'forecasts']),
  },
  async asyncData({ store }) {
    await store.dispatch('fetchWeather', store.state.currentPlace);
  },
};
</script>
