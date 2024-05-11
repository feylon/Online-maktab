<template>
  <div class="bg-gray-200 select-none flex items-center justify-center w-[100vw] h-[100vh]">
    <div class="w-[1000px] h-[550px] bg-gray-300 flex shadow-md rounded-lg bg-white">
      <div class="w-[50%] bg-white p-9">
        <div class="text-blue-900 text-[20px] font-bold">Kirish</div>

        <div class="text-blue-900 text-[22px] mt-[40px] font-bold">Artificial Intelligence Driving
Results For The Travel Industry</div>


<div class="text-gray-500 text-[11px] mt-[20px]">
  Welcome  back! Please login to your account.
</div>
<div class="mt-[30px]">
  <form>
    <div>
      <div class="mb-[10px]">

<label for="login" class="text-[13px] font-bold text-blue-900 "><i class="fas fa-user"></i> Login</label>
</div>
<div class="w-[80%]">
<n-input id="login" maxlength="15" size="large" status="" placeholder="38821100546" show-count clearable />

</div>

    </div>
    <div>
      <div class="mb-[10px] mt-[20px]">

<label for="password" class="text-[13px] font-bold text-blue-900"> <i class="fas fa-key"></i> Parol</label>
</div>
<div class="w-[80%]">
<n-input id="password" maxlength="15" size="large" status="" placeholder="*****"  />

</div>

    </div>

    <div>
      <button class="w-[100px] h-[40px] text-white bg-blue-900 mt-4 hover:bg-blue-800 delay-500" type="submit">Kirish</button>
    </div>

  </form>
</div>


      </div>
  <div class="w-full bg-gray-900">
<div class="flex items-center justify-center h-full">
  <img src="../src/pics/velo.png" alt="">

</div>
  </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const login = ref("");
const password = ref("");

const enter = function (){
  
}
</script>

<style lang="scss" scoped>

</style>