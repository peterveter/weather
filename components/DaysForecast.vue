<template>
  <div class="flex w-full p-4 scrolling-touch flex-no-wrap overflow-x-auto">
    <day-forecast
      v-for="forecast in forecasts.list"
      :forecast="forecast"
      :city="forecasts.city"
      :key="forecast.id"
      class="flex min-w-card-xs md:min-w-card-md lg:min-w-card-lg xl:min-w-card-xl mx-2 lg:mx-2 xl:mx-4 xxl:mx-12 bg-cover-image shadow-card rounded"
    ></day-forecast>
    <div class="min-w-last-el xl:min-w-last-el-xl"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import DayForecast from '../components/DayForecast';

export default {
  components: {
    DayForecast,
  },
  computed: {
    ...mapState(['forecasts']),
  },
};
</script>
