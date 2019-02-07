<template>
  <div class="flex flex-col w-full">
    <div class="flex justify-center items-center mt-8 mb-2">
      <div
        class="flex font-sans text-teal-lightest xxl:text-xl font-semibold sm:text-lg text-md"
      >{{getDayTime()}}</div>
    </div>
    <div class="flex w-full lg:flex-wrap items-center mt-4 lg:mt-0">
      <div class="flex w-full lg:flex-row flex-col lg:h-12 lg:justify-around">
        <div
          class="flex xl:w-1/3 w-full justify-between lg:justify-center items-center pl-2 sm:pl-4 lg:pl-0 mt-1 lg:mt-0"
        >
          <font-awesome-icon :icon="['fas', 'cloud']" :style="{ color: '#e8fffe' }" size="lg"/>
          <div
            class="flex text-teal-lightest ml-1 font-sans font-semibold sm:font-bold"
          >{{forecast.clouds.all}}%</div>
        </div>
        <div
          class="flex xl:w-1/3 w-full justify-between lg:justify-center items-center pl-2 sm:pl-4 lg:pl-0 mt-1 lg:mt-0"
        >
          <font-awesome-icon :icon="['fas', 'wind']" :style="{ color: '#e8fffe' }" size="lg"/>
          <div
            class="text-teal-lightest ml-1 font-sans font-semibold sm:font-bold"
          >{{forecast.wind.speed}}m/s</div>
        </div>
        <div
          class="flex xl:w-1/3 w-full justify-between lg:justify-center items-center pl-2 sm:pl-4 lg:pl-0 mt-1 lg:mt-0"
        >
          <font-awesome-icon :icon="['fas', 'tint']" :style="{ color: '#e8fffe' }" size="lg"/>
          <div
            class="text-teal-lightest ml-1 font-sans font-semibold sm:font-bold"
          >{{forecast.main.humidity}}%</div>
        </div>
      </div>
      <div
        class="flex lg:flex-row flex-col w-full lg:justify-center justify-end items-center mt-2 lg:pr-0"
      >
        <div class="flex ml-1">
          <div
            class="flex font-sans text-teal-lightest xl:text-8xl lg:text-7xl text-4xl font-semibold"
          >{{Math.round(forecast.main.temp)}}</div>
          <div class="flex font-sans text-teal-lightest lg:text-2xl text-xl mb-2">°C</div>
        </div>

        <div class="flex flex-col mb-1 pr-2 lg:mb-0 lg:ml-2 lg:mt-4">
          <div class="flex mb-1">
            <div class="justify-center items-center">
              <font-awesome-icon
                :icon="['fas', 'arrow-up']"
                :style="{ color: '#e8fffe' }"
                size="xs"
              />
            </div>
            <div
              class="font-sans text-teal-lightest ml-1 text-lg"
            >{{Math.round(forecast.main.temp_max)}}°</div>
          </div>
          <div class="flex">
            <div class="justify-center items-center">
              <font-awesome-icon
                :icon="['fas', 'arrow-down']"
                :style="{ color: '#e8fffe' }"
                size="xs"
              />
            </div>
            <div
              class="font-sans text-teal-lightest ml-1 text-lg"
            >{{Math.round(forecast.main.temp_min)}}°</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full mt-3">
      <div class="font-sans text-teal-lightest font-semibold text-lg">{{getLocation()}}</div>
      <div
        class="font-sans text-teal-lightest font-normal text-lg mt-1"
      >{{forecast.weather[0].description}}</div>
    </div>
    <div class="flex justify-center mt-4">
      <div class="flex w-24 h-24">
        <img :src="getImagePath()">
      </div>
    </div>
  </div>
</template>

<script>
import { getDayTime, getImagePath, getLocation } from '../utils/forecast';

export default {
  props: {
    forecast: {
      type: Object,
      required: true,
    },
    city: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDayTime() {
      return getDayTime(this.forecast.dt_txt);
    },
    getLocation() {
      return getLocation(this.city);
    },
    getImagePath() {
      return getImagePath(this.forecast);
    },
  },
};
</script>
