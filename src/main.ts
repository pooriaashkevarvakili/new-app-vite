import { createApp } from 'vue'
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import "./assets/style.css";
import '@icon-park/vue/styles/index.css';
import {install} from '@icon-park/vue/es/all';

import "./assets/tailwind.css";
import Antd from 'ant-design-vue';

createApp(App).use(Antd).mount('#app')
