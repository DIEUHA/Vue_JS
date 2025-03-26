<script setup>
import Breadscrum from "./components/Layout/Breadscrum.vue";
import Header from "./components/Layout/Header.vue";
import MainBlogList from "./components/List/LeftList/MainBlogList.vue";
import RightList1 from "./components/List/RightList/RightList1.vue";
import Footer1 from "./components/Layout/Footer/Footer1.vue";
import RightReserved from "./components/Layout/RightReserved.vue";
</script>

<template>
  <Header> </Header>
  <Breadscrum> </Breadscrum>
<!-- Body  -->
  <section
    class="px-4 xl:px-0 max-w-[1320px] mx-auto lg:flex items-start justify-center font-lora my-16 gap-6">
    <MainBlogList> </MainBlogList> <RightList1> </RightList1>
  </section>
<!-- Body -->
  <Footer1> </Footer1>
  <RightReserved> </RightReserved>
</template>
