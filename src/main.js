import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// FontAwesome 설정
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCloud,
  faServer,
  faRobot,
  faChartLine,
  faFileAlt,
  faCog,
  faCheckCircle,
  faShieldAlt,
  faBolt,
  faUsers,
  faGlobe,
  faChartBar,
  faDatabase,
  faNetworkWired,
  faUserTie,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faBuilding,
  faCalendar,
  faAward,
  faLightbulb,
  faLocationDot,
  faFaceFrown,
  faFaceSadTear
} from '@fortawesome/free-solid-svg-icons'

// 아이콘 라이브러리에 추가
library.add(
  faCloud,
  faServer,
  faRobot,
  faChartLine,
  faFileAlt,
  faCog,
  faCheckCircle,
  faShieldAlt,
  faBolt,
  faUsers,
  faGlobe,
  faChartBar,
  faDatabase,
  faNetworkWired,
  faUserTie,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faBuilding,
  faCalendar,
  faAward,
  faLightbulb,
  faLocationDot,
  faFaceFrown,
  faFaceSadTear
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
