<template>

  <main class="experience">
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
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Education</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/skills"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Skills</router-link>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Home</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/experience"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Experience</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h4 class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Front End Developer @ TeraNinja
              </h4>
              <p class="text-md font-semibold leading-normal mb-4 text-green-800">
                Dec’2019 – Nov’2020
              </p>
              <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Cairo, Egypt
              </div>
              <div class="w-100 px-60">
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Ensured the technical feasibility of UI/UX designs</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Worked closely with development teams and UI/UX designers to create usable, elegant, interactive, and responsive interfaces across multiple devices</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Optimized applications for maximum scalability</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Performed well in a fast-paced environment and bringed in optimal flow for rapidly changing design or technology</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Built reusable code for future use</span>
                </div>
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-gray-300 text-center mt-5">
              <h4 class="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                WordPress Developer @ Qeema Tech
              </h4>
              <p class="text-md font-semibold leading-normal mb-4 text-green-800">
                Oct’2018 – Mar’2019
              </p>
              <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Cairo, Egypt
              </div>
              <div class="w-100 px-60">
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Built and customized themes by adding new features and implementing new functionality</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Planned the website’s architecture</span>
                </div>
                <div class="mb-2 text-gray-700">
                  <i class="fab fa-angellist mr-2 text-lg text-gray-500"></i>
                  <span class="text-black">Formulated an effective, responsive design and managed technical issues of the CMS</span>
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
    name: 'Experience',
    components: {}
  }

</script>

<style>

  .back-cover {
    background: url('./../../static/img/heroo.jpg') no-repeat center center / cover;
  }

</style>
