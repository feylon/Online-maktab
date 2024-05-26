<template>
    <div class="w-[50%] bg-white p-9">
        <div class="text-blue-900 text-[20px] font-bold">Kirish</div>

        <div class="text-blue-900 text-[22px] mt-[40px] font-bold">

Talaba
        </div>


<div class="text-gray-500 text-[11px] mt-[20px]">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, itaque?
</div>
<div class="mt-[30px]">
  <form @submit.prevent="enter">
    <div>
      <div class="mb-[10px]">

<label for="login" class="text-[13px] font-bold text-blue-900 "><i class="fas fa-user"></i> Login</label>
</div>
<div class="w-[100%]">
<n-input v-model:value="login" id="login" maxlength="15" size="large" status="" placeholder="38821100546" show-count clearable />

</div>

    </div>
    <div>
      <div class="mb-[10px] mt-[20px]">

<label for="password" class="text-[13px] font-bold text-blue-900"> <i class="fas fa-key"></i> Parol</label>
</div>
<div class="w-[100%]">
<n-input v-model:value="password" type="password"  show-password-on="mousedown" id="password" maxlength="15" size="large" status="" placeholder="*****"  />

</div>

    </div>

    <div class="flex justify-end">
      <button class="w-[100px] h-[40px] text-white bg-blue-900 mt-4 hover:bg-blue-800 delay-100" type="submit">Kirish</button>
    </div>

  </form>
</div>


      </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useMessage } from 'naive-ui'
const message = useMessage();
const login = ref("");
const password = ref("");
const status = ref("");

const enter = function (){
    message.error("options")
}
</script>

<style lang="scss" scoped>

</style>