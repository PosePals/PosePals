import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faHome, faMedal, faCog, faUser, faBell, faWalking, faTrophy} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faHome, faMedal, faCog, faUser, faBell, faWalking, faTrophy)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
