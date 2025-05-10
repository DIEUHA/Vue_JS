<template>
    <header class="flex py-4 sticky top-0 bg-white lg:justify-center mx-auto z-30 justify-between dark:bg-black">
      
      <div class="w-1/4 flex justify-end">
        <a href="#"
          ><img
            src="https://itcroctheme.com/wp/benqu-wp/newspaper/wp-content/uploads/sites/5/2022/09/logo-news.png"
            alt="logo"
        /></a>
      </div>
      <div class="w-2/4 lg:flex lg:justify-center lg:items-center">
        <ul class="flex font-bold gap-4 justify-center ">
          <li class="group">
            <a href="#">Home </a>
            <i class="fa-solid fa-angle-right group-hover:rotate-90 px-1 transition-all duration-300 ease-in"></i>
            <ul class="hidden group-hover:!block absolute w-[250px] bg-white shadow-md rounded-md transition-all duration-1000 ease-in dark:bg-black">
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home One</a>
              </li>
              <li class="group px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home Two</a>
              </li>
            </ul>
          </li>
          <li class="group">
            <a href="#">Features </a>
            <i class="fa-solid fa-angle-right group-hover:rotate-90 px-1 transition-all duration-500"></i>
            <ul class="hidden group-hover:!block absolute w-[250px] bg-white shadow-md rounded-md transition-all duration-1000 ease-in dark:bg-black">
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home One</a>
              </li>
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home Two</a>
              </li>
            </ul>
          </li>
          <li class="group">
            <a href="#">Categories </a>
            <i
              class="fa-solid fa-angle-right group-hover:rotate-90 px-1 transition-all duration-500"
            ></i>
            <ul class="hidden group-hover:!block absolute w-[250px] bg-white shadow-md rounded-md transition-all duration-1000 ease-in dark:bg-black">
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home One</a>
              </li>
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home Two</a>
              </li>
            </ul>
          </li>
          <li class="group">
            <a href="#">Tags </a>
            <i
              class="fa-solid fa-angle-right group-hover:rotate-90 px-1 transition-all duration-500"
            ></i>
            <ul class="hidden group-hover:!block absolute w-[250px] bg-white shadow-md rounded-md transition-all duration-1000 ease-in dark:bg-black">
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home One</a>
              </li>
              <li class="px-5 py-3 flex items-center gap-1 group/test">
                <div class="w-0 h-1 bg-red-500 group-hover/test:w-3 transition-all ease-in"></div>
                <a href="#">Home Two</a>
              </li>
            </ul>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="w-1/4 flex justify-center items-center gap-3 text-gray-700">
        <div class="flex relative">
          <input type="text" id="search-box" name="search-box" class= "z-30 p-3 absolute -top-5 -right-[1px] rounded-full w-10 h-10 opacity-0 focus:opacity-100 peer transition-all ease-in duration-500 focus:w-40 focus:border-[0.5px] focus:border-borderColor outline-none"/>
          <label for="search-box" class="peer-focus:z-50 group absolute -top-4 -left-10 border-borderColor size-0 p-5 border rounded-full flex justify-center transition-all duration-500 ease-in items-center cursor-pointer peer-focus:p-[15px]">
            <i class="fa-solid fa-magnifying-glass search-icon absolute peer-focus:group-[]:hidden"></i>
            <i class="fa-solid fa-xmark close-icon text-lg hidden absolute z-50 peer-focus:group-[]:block  ">
              
            </i>
          </label>
          
        </div>
        <div  class="dark-mode relative top-1">
          <input type="checkbox" id="dark-mode"name="dark-mode" class="hidden"/>
          <label for="dark-mode group">
            <i  onclick="myFunction()" class="fa-solid fa-moon text-2xl dark:hidden"></i>
            <i onclick="myFunction()" class="fa-solid fa-sun text-2xl text-yellow-300 hidden dark:block"></i>
          </label>
        </div>
        <div class="sub-menu relative lg:hidden top-1">
          <input type="checkbox" id="respon-menu" name="respon-menu" class="hidden peer " />
          <label for="respon-menu" class="group">
            <i class="fa-solid fa-bars text-2xl peer-checked:group-[]:hidden"></i>
            <i class="fa-solid fa-x hidden peer-checked:group-[]:block relative z-50"></i>

          </label>
          <div class="z-40 side-menu py-20 px-6 fixed -right-[500px] w-[300px] h-[100vh] bg-white shadow-lg peer-checked:block peer-checked:right-0 peer-checked:top-0 hidden">
            <ul class="">
              <li class="side group">
                <a href="#" class="group-hover:text-blue-600 transition-all ease-in">HOME </a>
                <i class="fa-solid fa-angle-right"></i>
                <hr class="my-3" />
                <ul class="group-hover:!block !hidden transition-all ease-in">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home One</a>
                  </li>
                  <hr class="my-3">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home Two</a>
                  </li>
                  <hr class="my-3">
                </ul>
              </li>
              <li class="side group">
                <a href="#" class="group-hover:text-blue-600 transition-all ease-in">FEATURES </a>
                <i class="fa-solid fa-angle-right"></i>
                <hr class="my-3" />
                <ul class="group-hover:block hidden transition-all ease-in">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home One</a>
                  </li>
                  <hr class="my-3">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home Two</a>
                  </li>
                  <hr class="my-3">
                </ul>
              </li>
              <li class="side group">
                <a href="#" class="group-hover:text-blue-600 transition-all ease-in">CATEGORIES </a>
                <i class="fa-solid fa-angle-right"></i>
                <hr class="my-3" />
                <ul class="group-hover:block hidden transition-all ease-in">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home One</a>
                  </li>
                  <hr class="my-3">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home Two</a>
                  </li>
                  <hr class="my-3">
                </ul>
              </li>
              <li class="side group">
                <a href="#" class="group-hover:text-blue-600 transition-all ease-in">TAGS </a>
                <i class="fa-solid fa-angle-right"></i>
                <hr class="my-3" />
                <ul class="group-hover:block hidden transition-all ease-in">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home One</a>
                  </li>
                  <hr class="my-3">
                  <li class="group/li flex items-center">
                    <div class="w-0 h-1 bg-red-500 group-hover/li:w-3 transition-all duration-300 ease-in mx-2"></div>
                    <a href="#" class="ml-3 group-hover/li:ml-0 ">Home Two</a>
                  </li>
                  <hr class="my-3">
                </ul>
              </li>
              <li class="side group">
                <a href="#" class="group-hover:text-blue-600 transition-all ease-in">CONTACT US </a>
                <hr class="my-3" />
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>
