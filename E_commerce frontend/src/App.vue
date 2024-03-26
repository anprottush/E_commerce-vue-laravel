<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import UserList from './components/UserList.vue'
import HelloWorld from './components/HelloWorld.vue'

import BaseService from './core/services/base.service';
import Navbar from './components/Navbar.vue';
import Header from '@/layouts/Header.vue';
import Sidebar from '@/layouts/Sidebar.vue';
import Footer from '@/layouts/Footer.vue';
import DashboardView from '@/views/dashboard/DashboardView.vue';

</script>

<template>
 <!-- Container -->
   <div class="mx-auto bg-grey-400">
     <!--Screen-->
     <div class="min-h-screen flex flex-col">
        <!--Header Section Starts Here-->
        <Header></Header>
        <!--/Header-->
       <div class="flex flex-1">
         <!--Sidebar-->
         <Sidebar></Sidebar>
        <!--/Sidebar-->
        
        <!--Main-->
        <DashboardView></DashboardView>
        <!--/Main-->
      </div>

       <!--Footer-->
       <Footer></Footer>
       <!--/footer-->

     </div>
   </div>
  
  

<!-- <LoginView/> -->

 <!-- <router-view />  -->
  <!-- <UserList></UserList> -->
  <!-- <header>
    
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->
<!-- <LoginView/> -->
      <!-- <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div>
  </header> -->

  <!-- <RouterView /> -->
</template>



<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
