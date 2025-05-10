<script setup>
const { newsList, getTypeName, formatDate } = defineProps([
  "newsList",
  "getTypeName",
  "formatDate",
]);
const emit = defineEmits([
  "delete-news", 
  "update-news"
]);
const handleDelete = (id) => {
  if (confirm("Bạn chắc chắn muốn xoá?")) {
    emit("delete-news", id);
  }
};

const handleUpdate = (post) => {
  const updatedTitle = prompt("Nhập tiêu đề mới:", post.title);
  if (updatedTitle && updatedTitle !== post.title) {
    emit("update-news", {
      id: post.id,
      updatedData: { ...post, title: updatedTitle },
    });
  }
};
</script>
<template>
  <div class="lg:w-[70%] flex gap-8 flex-col mb-8">
    <div
      v-for="news in newsList"
      :key="news.id"
      class="flex gap-4 rounded-md border border-gray-300 border-solid w-full h-[330px] group overflow-hidden"
    >
      <div class="w-[40%] h-full flex justify-center overflow-hidden">
        <img
          :src="news.thumnail"
          alt="blog-thumbnail"
          class="w-full object-cover group-hover:scale-125 transition-all duration-700 ease-in"
        />
      </div>
      <div class="w-[60%] h-full flex flex-col justify-center gap-3 px-3">
        <button
          @click="handleDelete(news.id)"
          class="text-red-500 hover:underline"
        >
          🗑️ Delete News 
        </button>
        <button
          @click="handleUpdate(news)"
          class="text-blue-500 hover:underline"
        >
          ✏️ Change News Title 
        </button>
        <div class="bg-[#D6A411] maintag">{{ getTypeName(news.type) }}</div>
        <h2 class="line-clamp-2 font-bold text-2xl">
          <a
            href=""
            class="bg-gradient-to-r from-black to-black bg-no-repeat bg-left-bottom bg-[length:0%_1px] group-hover:bg-[length:100%_1px] duration-500"
            >{{ news.title || news.name }}
          </a>
        </h2>
        <p class="text-gray-400">
          {{ news.discription }}
        </p>
        <div class="font-bold text-gray-600 flex gap-4 text-sm">
          <span>BY {{ news.author }}</span>
          <span>{{ formatDate(news.createdAt) }}</span>
          <span>{{ news.comments }} COMMENTS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
