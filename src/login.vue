<template>
     <div class="bg-gray-200 select-none flex items-center justify-center w-[100vw] h-[100vh]">
    <div class="w-[1000px] h-[550px] bg-gray-300 flex shadow-md rounded-lg bg-white">
      <component :is="components[active_component]"></component>
  <div class="w-full bg-gray-900">
<div class="flex items-center justify-center relative h-full">
  <img src="../src/pics/velo.png" class="z-0" alt="">
  <div class="h2 text-white z-10  absolute top-[10px] w-full p-3">
    <ul class="w-full flex gap-[10px] justify-around">
      <li>
        <router-link @click = "active_component = 'student'"  class="font-bold text-[16px] border-b-4" to="/login">Talaba</router-link>
      </li>
      <li>
        <router-link @click = "active_component = 'teacher'" class="font-bold text-[16px] border-b-4" to="/login">O'qituvchi</router-link>
      </li>
      <li>
        <router-link @click = "active_component = 'dean'"  class="font-bold text-[16px] border-b-4" to="/login">Dekanat</router-link>
      </li>
    </ul>
  </div>

</div>
  </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import student from "./components/login_component/student.vue";
import teacher from "./components/login_component/teacher.vue";
import dean from "./components/login_component/dean.vue";
const components = {
  student,
  teacher,
  dean
};
const active_component = ref("student")
</script>

<style lang="scss" scoped>

</style>