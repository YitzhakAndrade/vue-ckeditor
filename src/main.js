import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";

import "./assets/css/index.scss";
import "./assets/proto-css/index.scss";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

import CKEditor from "@ckeditor/ckeditor5-vue";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
Vue.use(CKEditor);

new Vue({
  render: h => h(App)
}).$mount("#app");
