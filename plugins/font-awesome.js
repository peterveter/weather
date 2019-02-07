import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCloud,
  faWind,
  faTint,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCloud, faWind, faTint, faArrowUp, faArrowDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);