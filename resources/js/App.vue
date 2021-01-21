<template>

  <div>
    <navbar-component></navbar-component>
    <router-view />
    <footer-component></footer-component>
  </div>

</template>

<script>

  import ProfileComponent from './components/Profile.vue'
  import NavbarComponent from './components/Navbar.vue'
  import FooterComponent from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      NavbarComponent,
      ProfileComponent,
      FooterComponent
    }
  }

</script>
