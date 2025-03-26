<script setup>
import Categories from "./Categories.vue";
import SideBlogList from "../../Layout/SideBlogList.vue";
import PopularTag from "./PopularTag.vue";
</script>
<template>
  <div class="lg:w-[30%] flex flex-col gap-8">
    <Categories> </Categories>
    <SideBlogList> </SideBlogList>
    <PopularTag> </PopularTag>
  </div>
</template>

<style lang=""></style>
