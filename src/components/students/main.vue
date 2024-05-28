<template>
<div class="bg-gray-200  overflow-hidden w-[100vw] h-[100vh]">
    <div class="w-full h-[50px] flex justify-between items-center bg-gray-900">
<div></div>
<div class="h-full w-[200px] cursor-pointer">
  
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <div class="h-full ps-3 flex items-center w-full border-s-[1px]">
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG" class="w-[50px] rounded-[50%]" alt="">
      <div class="flex flex-col">
        <span class="text-white font-bold ps-3">Ergashev Jamshid</span>
        <span class="text-white text-[12px] text-center">O'quvchi</span>
      </div>
    </div>
  </n-dropdown>
</div>

    </div>
    
    
    
    
    <n-layout class="h-full" has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :inverted="inverted"
      >
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <div class="p-3">
            salom <span class="material-symbols-outlined">
book_5
</span>
        </div>
      </n-layout>
    </n-layout>
</div>

</template>

<script setup>
import { ref,h } from 'vue';

import { RouterLink } from "vue-router";
import { useMessage, NAvatar, NText } from "naive-ui";

function renderIcon(className) {
  return () => h("i", {class:className});
}

function renderIconSpan(name) {
  return () => h("span", {class:"material-symbols-outlined"},{default:()=>name});
}

let inverted = ref(true)
const menuOptions = [
  
  {
    label: "O'quv reja",
    key: "pinball-1973",
     icon: renderIcon("fas fa-book"),
    disabled: false,
    children: [
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Dars jadvali" }),
        key: "Dars jadvali",
        icon: renderIcon("fas fa-calendar-days")
      },
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Fan resurslari" }),
        key: "Fan resurslari",
        icon: renderIcon("fas fa-receipt")
      },
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Davomat" }),
        key: "Davomat",
        icon: renderIcon("far fa-calendar-xmark")
      },
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Jurnal" }),
        key: "Jurnal",
        icon: renderIconSpan("book_5")
      },
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Topshiriqlar" }),
        key: "Topshiriqlar",
        icon: renderIconSpan("contract_edit")
        
      }
    ]
  },
  {
    label:"Tizim",
    key:"Tizim",
    icon: renderIconSpan("engineering"),
    children:[
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Kirish tarixi" }),
        key:"Kirish tarixi",
        icon: renderIconSpan("manage_history"),

      },
      {
        label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "Profil" }),
        key:"Profil",
        icon: renderIconSpan("account_circle"),

      }
    ]
    },
  {
    label: () => h(
      RouterLink,
      {
        to:"/login"
      },
      { default: () => "To'lov" }),
      key:"tulov",
      icon: renderIconSpan("payments"),

  }
];




const message = useMessage();

const options = ref([
 
  {
          key: "header",
          type: "render",
          render:()=> h("div",{class:"flex p-3 pb-0 ps-2 w-[215px]"},
          [
          h("div", {class:"flex items-center select-none"},[
          h("img", {
        round: true,
        style: "margin-right: 8px;",
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG',
        class:"w-[60px] rounded-md m-3",
        title: `Ergashev Jamshid`
      }),

      h('div',
      [
      h("div",{class:"text-[13px] font-bold"},h("div",
      {innerHTML :`Ergashev Jamshid`}
      )),
      
      h("div",{class:"text-[13px] text-center"},h("div",
      {innerHTML :`O'quvchi `}
      )),
          ])
      ])

        ]
          )
        },
  {
    key: "header-divider",
    type: "divider"
  },
  {
    label: "lpsum1",
    key: "stmt1"
  },
  {
    label: "lpsum2",
    key: "stmt2"
  },
  {
    label: "lpsum3",
    key: "stmt3"
  },
  {
          key: "update_photo",
          type: "render",
          label:"salom",
          render:()=>{
            return h("div",{class:"ps-4 duration-700 flex items-center hover:bg-blue-200 cursor-pointer flex border-t-[1px] border-solid"},[
              h("span",
         
            {innerHTML:`<span class="text-[20px] text-blue-950"><i class="fas fa-camera-rotate"></i></span>` },
            {class:""}
            ),
            h("div",
            {class:"text-black ps-3"},
            {default:()=>"Profil rasmini yangilash"}
            )
          ])
          },
          props:{onClick:()=>{
            console.log("salom")
          }}
        },
]);

function handleSelect(key) {
  message.info(String(key));
  console.log(key)
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>