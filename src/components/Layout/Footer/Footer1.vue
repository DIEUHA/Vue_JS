<script setup>
import SideBlogList from '../SideBlogList.vue';
import BrowserTag from './BrowserTag.vue';
</script>
<template>
  <footer class="flex lg:gap-4 gap-14 pb-3 mt-8 lg:max-w-[1320px] lg:justify-center lg:mx-auto w-full mx-6 lg:flex-row flex-col dark:bg-black"
  >
    <div class="lg:w-1/6 flex flex-col gap-6">
      <a href="#"
        ><img
          src="https://itcroctheme.com/wp/benqu-wp/newspaper/wp-content/uploads/sites/5/2022/09/logo-news.png"
          alt="footer-logo"
      /></a>
      <p>
        There are many variations of the majority alteration in that some
        slightly believable.
      </p>
      <div class="text-sm">
        <div class="mb-4">
          <i class="fa-solid fa-location-dot"></i> 15 Cliff St, New York
          10038,USA
        </div>
        <div class="mb-4"><i class="fa-solid fa-phone"></i> +1819-602-9641</div>
        <div class="mb-4">
          <i class="fa-solid fa-envelope"></i> info@example.com
        </div>
      </div>
    </div>
    <div class="lg:w-1/6 flex flex-col gap-4">
      <h4 class="text-[24px] font-semibold">Useful Links</h4>
      <ul class="flex flex-col gap-4">
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Blog Index
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Company About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Contact With Us
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Health Tips
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Business & Talkshow
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Top Interview
          </a>
        </li>
        <li>
          <a
            href="#"
            class="before:content-[''] before:inline-block before:w-1 before:h-3 before:bg-black before:mr-2 hover:text-red-600 hover:before:bg-red-600"
            >Education & Tech
          </a>
        </li>
      </ul>
    </div>
    <SideBlogList> </SideBlogList>
    <BrowserTag> </BrowserTag>
  </footer>
</template>
