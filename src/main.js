import Vue from 'vue';
import 'document-register-element/build/document-register-element';
// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'
Vue.use(VueCustomElement)
// include vue-touch plugin to Vue
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// import and register your component(s)
import SpinItemComponent from './components/SpinItemComponent.vue'
Vue.customElement('spin-item', SpinItemComponent)
