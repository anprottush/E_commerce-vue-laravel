 //import './assets/main.css'
//import './assets/all.css'
import './assets/styles.css'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')





// <!--Container -->
//   <div class="mx-auto bg-grey-400">
//     <!--Screen-->
//     <div class="min-h-screen flex flex-col">
//        <!--Header Section Starts Here-->
//        <Header></Header>
//         <!--/Header-->
//       <div class="flex flex-1">
//         <!--Sidebar-->
//         <Sidebar></Sidebar>
//         <!--/Sidebar-->
        
//         <!--Main-->
//         <DashboardView></DashboardView>
//         <!--/Main-->
//       </div>

//        <!--Footer-->
//       <Footer></Footer>
//       <!--/footer-->

//     </div>
//   </div>