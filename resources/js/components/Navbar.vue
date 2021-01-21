<template>

  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white hover:no-underline"
           href="#"
           v-if="$route.meta.title">{{ $route.meta.title }}</a>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                v-on:click="toggleNavbar()">
            <i class="text-white fas fa-bars"></i>
          </button>
      </div>
      <div class="lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none"
           v-bind:class="{'hidden': !showMenu, 'block': showMenu, 'bg-transparent': !showMenu, 'bg-white': showMenu}">
        <!-- <ul class="flex flex-col lg:flex-row list-none mr-auto">
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold outline-none"
                href="#"
                ><i
                  class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                ></i>
                Docs</a
              >
            </li>
          </ul> -->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:no-underline"
               href="https://www.linkedin.com/in/ahmedamged">
                <i class="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg outline-none"></i>
                <span class="lg:hidden inline-block ml-2">Linkedin Account</span>
              </a>
          </li>
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:no-underline"
               href="https://twitter.com/Front_Ahmad">
                <i class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg outline-none"></i>
                <span class="lg:hidden inline-block ml-2">Twitter Account</span>
              </a>
          </li>
          <li class="flex items-center">
            <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:no-underline"
               href="https://github.com/ahmedamged">
                <i class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg outline-none"></i>
                <span class="lg:hidden inline-block ml-2">Github Account</span>
              </a>
          </li>
          <li class="flex items-center">
            <button class="bg-gray-400 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-3 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 hover:bg-white focus:bg-gray-200"

                    type="button"
                    style="transition: all 0.15s ease 0s;">
                <i class="fas fa-arrow-alt-circle-down"></i> <span>Download CV</span>
              </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>

  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function() {
        this.showMenu = !this.showMenu
      }
    }
  }

</script>
