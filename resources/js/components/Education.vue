<template>

  <main class="education">
    <section class="relative block" style="height: 540px;">
      <div class="absolute top-0 w-full h-full bg-center bg-cover back-cover">
        <span id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
           style="height: 70px; transform: translateZ(0px);">
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
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Education</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/skills"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Skills</router-link>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Home</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/experience"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Experience</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="lg:w-1/2 text-center mt-5 mb-5">
                <h4 class="text-2xl font-semibold leading-normal mb-4 text-gray-800">
                  Nano-Degrees
                </h4>
                <p class="text-lg font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Front-End Web Developer Nano-degree Program @ Udacity
                </p>
                <p class="text-md font-semibold leading-normal mb-4 text-purple-800">
                  June’2019 – Oct’2019
                </p>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Cairo, Egypt
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">Responsive Design</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">CSS &amp; Website Layout</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">Web Accessibility and the DOM</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">Object-Oriented JavaScript</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">JavaScript Tools and Testing</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">Web APIs and Asynchronous Applications</span>
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i>
                    <span class="text-black">Build Tools, Web pack, and Service Worker</span>
                  </div>
                </div>
                <div class="lg:w-1/2 mt-5 mb-5 border-l border-gray-300 text-center">
                  <h4 class="text-2xl font-semibold leading-normal mb-4 text-gray-800">
                    Courses
                  </h4>
                  <p class="text-lg font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Front End Development Course @ RTC
                  </p>
                  <p class="text-md font-semibold leading-normal mb-2 text-purple-800">
                    Nov’2018 – Dec’2018
                  </p>
                  <p class="text-lg font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Adobe Illustrator Course @ RTC
                  </p>
                  <p class="text-md font-semibold leading-normal mb-2 text-purple-800">
                    Sept’2018 – Oct’2018
                  </p>
                  <p class="text-lg font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Web Development Course @ RTC
                  </p>
                  <p class="text-md font-semibold leading-normal mb-4 text-purple-800">
                    Apr’2018 – May’2018
                  </p>
                  <h4 class="text-2xl font-semibold leading-normal mt-5 mb-4 text-gray-800">
                    Volunteering
                  </h4>
                  <p class="text-lg font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Front End Development Instructor @ RTC
                  </p>
                  <p class="text-md font-semibold leading-normal mb-4 text-purple-800">
                    Mar’2019 – Mar’2020
                  </p>
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
    name: 'Education',
    components: {}
  }

</script>

<style>

  .back-cover {
    background: url('./../../static/img/heroo.jpg') no-repeat center center / cover;
  }

</style>
