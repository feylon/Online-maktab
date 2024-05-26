<template>
<div class="bg-gray-200  overflow-hidden w-[100vw] h-[100vh]">
    <div class="w-full h-[50px] bg-gray-900">

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
            salom
        </div>
      </n-layout>
    </n-layout>
</div>

</template>

<script setup>
import { ref,h } from 'vue';
import { NIcon } from "naive-ui";

function renderIcon(className) {
  return () => h("i", {class:className});
}

let inverted = ref(true)
const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
    icon: renderIcon("far fa-user")
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    // icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: "Rat",
        key: "rat"
      }
    ]
  },
  {
    label: "A Wild Sheep Chase",
    key: "a-wild-sheep-chase",
    disabled: true,
    // icon: renderIcon(BookIcon)
  },
  {
    label: "Dance Dance Dance",
    key: "Dance Dance Dance",
    // icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "People",
        key: "people",
        children: [
          {
            label: "Narrator",
            key: "narrator",
            // icon: renderIcon(PersonIcon)
          },
          {
            label: "Sheep Man",
            key: "sheep-man",
            // icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: "Beverage",
        key: "beverage",
        // icon: renderIcon(WineIcon),
        children: [
          {
            label: "Whisky",
            key: "whisky"
          }
        ]
      },
      {
        label: "Food",
        key: "food",
        children: [
          {
            label: "Sandwich",
            key: "sandwich"
          }
        ]
      },
      {
        label: "The past increases. The future recedes.",
        key: "the-past-increases-the-future-recedes"
      }
    ]
  }
];

</script>

<style lang="scss" scoped>

</style>