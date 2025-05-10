<script setup>
import Breadscrum from "./components/Layout/Breadscrum.vue";
import Header from "./components/Layout/Header.vue";
import MainBlogList from "./components/List/LeftList/MainBlogList.vue";
import RightList1 from "./components/List/RightList/RightList1.vue";
import Footer1 from "./components/Layout/Footer/Footer1.vue";
import RightReserved from "./components/Layout/RightReserved.vue";
import { ref, onMounted } from "vue";
const newsList = ref([]);
const newsTypes = ref([]);
const fetchNews = async () => {
  const response = await fetch(
    "https://67d3a8aa8bca322cc26aaabf.mockapi.io/api/news/list"
    
  );
  newsList.value = await response.json();
};
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
const fetchNewsTypes = async () => {
  const response = await fetch(
    "https://67d3a8aa8bca322cc26aaabf.mockapi.io/api/news/type"
  );
  newsTypes.value = await response.json();
};

onMounted(async () => {
  await fetchNewsTypes();
  await fetchNews();
});
const getTypeName = (typeId) => {
  const type = newsTypes.value.find((e) => e.id == typeId);
  return type ? type.name : "Unknown";
};
// Thêm vào <script setup> trong App.vue nha

const deleteNews = async (id) => {
  try {
    const res = await fetch(
      `https://67d3a8aa8bca322cc26aaabf.mockapi.io/api/news/list/${id}`,
      { method: "DELETE" }
    );
    if (res.ok) {
      // Xoá trên UI
      newsList.value = newsList.value.filter((item) => item.id !== id);
    }
    else {alert('Bugbugbgug')}
  } catch (err) {
    console.error("Lỗi xoá:", err);
    
  }
};

const updateNews = async ({ id, updatedData }) => {
  try {
    const res = await fetch(
      `https://67d3a8aa8bca322cc26aaabf.mockapi.io/api/news/list/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    const updatedItem = await res.json();
    const index = newsList.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      console.log(updatedItem)
      newsList.value[index] = updatedItem;
    }
  } catch (err) {
    console.error("Lỗi cập nhật:", err);
  }
};



</script>

<template>
  <Header> </Header>
  <Breadscrum> </Breadscrum>
  <!-- Body  -->
  <section
    class="px-4 xl:px-0 max-w-[1320px] mx-auto lg:flex items-start justify-center font-lora my-16 gap-6"
  >
    <MainBlogList
      :newsList="newsList"
      :getTypeName="getTypeName"
      :formatDate="formatDate"
      @delete-news="deleteNews"
      @update-news="updateNews"
    >
    </MainBlogList>
    <RightList1> </RightList1>
  </section>
  <!-- Body -->
  <Footer1> </Footer1>
  <hr />
  <RightReserved> </RightReserved>
</template>
