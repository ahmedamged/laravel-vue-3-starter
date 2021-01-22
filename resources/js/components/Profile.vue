<template>

  <main class="profile">
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
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Education</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/skills"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Skills</router-link>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Home</router-link>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <router-link to="/experience"
                                 class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out hover:no-underline">
                      Experience</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-2">
              <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Ahmed Amged
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Cairo, Egypt
              </div>
              <div class="mb-2 text-gray-700 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                    >Front End Developer
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                    >Faculty of Computers and Artificial Intelligence, Cairo University
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-gray-300 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-8 text-lg leading-relaxed text-gray-800">
                        With a strong technical skill-set, attention to details, and 2+ years of Front-end development experience, individual wants to achieve more of digital magic and elevate user experience.
                      </p>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="#">
                                <img src="./../../static/img/ahmed-amged.png" alt="Ahmed Amged"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="#" class="hover:no-underline">
                                      Ahmed Amged
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2021
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#Vue3 </span>
                                          <span class="">#Tailwindcss </span>
                                          <span class="">#Laravel </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://qudraty.com">
                                <img src="./../../static/img/qudraty.png" alt="Qudraty"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://qudraty.com" class="hover:no-underline">
                                      Qudraty
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#JavaScript </span>
                                          <span class="">#CSS </span>
                                          <span class="">#Laravel </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://vitohr-33580.web.app">
                                <img src="./../../static/img/hr-management.png" alt="HR Management"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://vitohr-33580.web.app" class="hover:no-underline">
                                      HR Management
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#Angular </span>
                                          <span class="">#Firebase </span>
                                          <span class="">#TypeScript </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://mohamy.app">
                                <img src="./../../static/img/mohamy.png" alt="Mohamy"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://mohamy.app" class="hover:no-underline">
                                      Mohamy
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#JavaScript </span>
                                          <span class="">#CSS </span>
                                          <span class="">#Laravel </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://aladdos-lawfirm.com">
                                <img src="./../../static/img/aladdos.png" alt="Al Addos"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://aladdos-lawfirm.com" class="hover:no-underline">
                                      Al Addos
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#JavaScript </span>
                                          <span class="">#CSS </span>
                                          <span class="">#Laravel </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://modarsy.com">
                                <img src="./../../static/img/modarsy.png" alt="Modarsy"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://modarsy.com" class="hover:no-underline">
                                      Modarsy
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://www.teraninja.com">
                                <img src="./../../static/img/teraninja.png" alt="TeraNinja"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://www.teraninja.com" class="hover:no-underline">
                                      TeraNinja
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2020
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://ahmedamged.github.io/balain">
                                <img src="./../../static/img/noor-azzony.png" alt="Noor Azzony"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://ahmedamged.github.io/balain" class="hover:no-underline">
                                      Noor Azzony
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2019
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://ahmedamged.github.io/fend4">
                                <img src="./../../static/img/jasmine.png" alt="Udacity RSS Feed"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://ahmedamged.github.io/fend4" class="hover:no-underline">
                                      Udacity RSS Feed
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2019
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#Jasmine </span>
                                          <span class="">#Unit_Testing </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://ahmedamged.github.io/fend3">
                                <img src="./../../static/img/arcade-game.png" alt="Arcade Game"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://ahmedamged.github.io/fend3" class="hover:no-underline">
                                      Arcade Game
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2019
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#JavaScript </span>
                                          <span class="">#ES6 </span>
                                          <span class="">#CSS </span>
                                          <span class="">#HTML </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://ahmedamged.github.io/fend2">
                                <img src="./../../static/img/matching-game.png" alt="Matching Game"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://ahmedamged.github.io/fend2/" class="hover:no-underline">
                                      Matching Game
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2019
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#JavaScript </span>
                                          <span class="">#ES6 </span>
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://amstones-eg.com">
                                <img src="./../../static/img/am-stones.png" alt="AM Stones"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://amstones-eg.com" class="hover:no-underline">
                                      AM Stones
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://united-hydraulics.com/Cables/">
                                <img src="./../../static/img/elsewedy-electric.png" alt="Elsewedy Electric"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://united-hydraulics.com/Cables/" class="hover:no-underline">
                                      Elsewedy Electric
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://avalanche-eg.com">
                                <img src="./../../static/img/avalanche.png" alt="Avalanche"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://avalanche-eg.com" class="hover:no-underline">
                                      Avalanche
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://almoujatelecom.com">
                                <img src="./../../static/img/mouja-telecom.png" alt="Mouja Telecom"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://almoujatelecom.com" class="hover:no-underline">
                                      Mouja Telecom
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap px-6">
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://kol-youm.com">
                                <img src="./../../static/img/kol-youm.png" alt="Kol Youm"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://kol-youm.com" class="hover:no-underline">
                                      Kol Youm
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#PHP </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="https://www.mohannadbahnasy.com/">
                                <img src="./../../static/img/mohannad-bahnasy.png" alt="Mohannad Bahnasy"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="https://www.mohannadbahnasy.com/" class="hover:no-underline">
                                      Mohannad Bahnasy
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 md:px-4 lg:px-6 py-4">
                        <div class="bg-white shadow-2xl hover:shadow-md rounded-3xl transform hover:translate-y-2 transition duration-500 ease-in-out">
                            <div class="">
                              <a href="http://hurgadatours.com">
                                <img src="./../../static/img/hurghada-tours.png" alt="Hurghada Tours"
                                    class="h-56 w-full border-white rounded-tl-3xl rounded-tr-3xl cursor-pointer">
                              </a>
                            </div>
                            <div class="px-4 py-4 md:px-10">
                                <h1 class="font-bold text-lg text-left">
                                    <a href="http://hurgadatours.com" class="hover:no-underline">
                                      Hurghada Tours
                                    </a>
                                </h1>
                                <p class="pb-3 pt-2 text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="flex flex-wrap pt-3 border-t-2">
                                    <div class="w-auto md:w-1/3 text-sm font-medium">
                                        2018
                                    </div>
                                    <div class="w-auto md:2/3 ml-auto">
                                      <div class="text-sm font-medium">
                                          <span class="">#HTML </span>
                                          <span class="">#CSS </span>
                                          <span class="">#WordPress </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
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
    name: 'profile',
    components: {}
    // data(): {
    //   return{
    //
    //   }
    // }
  }

</script>

<style>

  .back-cover {
    background: url('./../../static/img/heroo.jpg') no-repeat center center / cover;
  }

</style>
