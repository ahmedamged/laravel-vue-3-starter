<template>

  <main class="skills">
    <section class="relative block" style="height: 540px;">
      <div class="absolute top-0 w-full h-full bg-center bg-cover back-cover">
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style="height: 70px; transform: translateZ(0px);">
        <svg class="absolute bottom-0 overflow-hidden"
             xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none"
             version="1.1"
             viewBox="0 0 2560 100"
             x="0"
             y="0">
              <polygon
                class="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
      </div>
    </section>
    <section class="relative py-16 bg-gray-300">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center mb-16">
                <div class="relative">
                  <img alt="Ahmed Amged"
                       src="./../../static/img/ahmed-800x800.jpg"
                       class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                       style="max-width: 150px;" />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/education"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Education</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/skills"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Skills</router-link>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Home</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/experience"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Experience</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-1/3 text-center mt-5 mb-16 px-20">
                <div class="flex flex-wrap shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">HTML5</p>
                  <img src="./../../static/img/html5.png" class="w-10 h-10 opacity-25 ml-auto" alt="HTML5">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">CSS3</p>
                  <img src="./../../static/img/css33.png" class="w-9 h-9 opacity-25 ml-auto" alt="CSS3">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">JavaScript</p>
                  <img src="./../../static/img/javascript.png" class="w-9 h-9 opacity-25 ml-auto" alt="JavaScript">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">ES6</p>
                  <img src="./../../static/img/es6.png" class="w-9 h-9 opacity-25 ml-auto" alt="ES6">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Angular 2+</p>
                  <img src="./../../static/img/angular.png" class="w-9 h-9 opacity-25 ml-auto" alt="Angular 2+">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Git</p>
                  <img src="./../../static/img/git.png" class="w-9 h-9 opacity-25 ml-auto" alt="Git">
                </div>
              </div>
              <div class="lg:w-1/3 mt-5 mb-16 px-20 border-l border-gray-300 text-center">
                <div class="flex flex-wrap shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Vue3</p>
                  <img src="./../../static/img/vue.png" class="w-10 h-10 opacity-25 ml-auto" alt="Vue3">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Tailwind CSS</p>
                  <img src="./../../static/img/tailwind.png" class="w-12 h-9 opacity-25 ml-auto" alt="Tailwind">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Firebase</p>
                  <img src="./../../static/img/firebase.png" class="w-9 h-9 opacity-25 ml-auto" alt="Firebase">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Typescript</p>
                  <img src="./../../static/img/typescript.png" class="w-9 h-9 opacity-25 ml-auto" alt="Typescript">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Bootstrap</p>
                  <img src="./../../static/img/bootstrap.png" class="w-9 h-9 opacity-25 ml-auto" alt="Bootstrap">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Gulp js</p>
                  <img src="./../../static/img/gulp.png" class="w-9 h-9 opacity-25 ml-auto" alt="Gulp js">
                </div>
              </div>
              <div class="lg:w-1/3 mt-5 mb-16 px-20 border-l border-gray-300 text-center">
                <div class="flex flex-wrap shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Jasmine</p>
                  <img src="./../../static/img/jasmine-unit-testing.png" class="w-10 h-10 opacity-25 ml-auto" alt="Jasmine">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Surge</p>
                  <img src="./../../static/img/surge.png" class="w-9 h-9 opacity-25 ml-auto" alt="Surge">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">AJAX</p>
                  <img src="./../../static/img/ajax.png" class="h-9 opacity-25 ml-auto" alt="AJAX">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">jQuery</p>
                  <img src="./../../static/img/jquery.png" class="w-9 h-9 opacity-25 ml-auto" alt="jQuery">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">WordPress</p>
                  <img src="./../../static/img/wordpress.png" class="w-9 h-9 opacity-25 ml-auto" alt="WordPress">
                </div>
                <div class="flex flex-wrap mt-4 shadow-md border border-transparent rounded-xl px-4 py-3 justify-center">
                  <p class="text-lg font-semibold leading-normal mt-2">Illustrator</p>
                  <img src="./../../static/img/adobe-illustrator.png" class="w-9 h-9 opacity-25 ml-auto" alt="Illustrator">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script>

  export default {
    name: 'Skills',
    components: {}
  }

</script>

<style>

  .back-cover {
    background: url('./../../static/img/heroo.jpg') no-repeat center center / cover;
  }

</style>
