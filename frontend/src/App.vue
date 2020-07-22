<template>
  <HeaderTitle />
  <transition name="fade">
    <component-loading v-if="!ApplicationLoaded" />
  </transition>

  <welcome-screen v-if="ApplicationLoaded" />

  <div>{{ message }}</div>
  <button @click="removeLoader()">toggle loader</button>
</template>

<script lang="ts">
import ComponentLoading from "./components/ComponentLoading.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import { computed, ref, reactive, provide } from "vue";

export default {
  name: "App",
  components: {
    HeaderTitle,
    ComponentLoading,
    WelcomeScreen,
  },
  setup() {
    const firstTime = reactive({
      firstTime: true,
    });

    function changeFirstTime() {
      firstTime.firstTime = false;
      console.log("yeet");
      console.log(firstTime);
    }

    provide("firstTime", firstTime);
    provide("changeFirstTime", changeFirstTime);

    const loaded = ref(false); // placeholder
    let ApplicationLoaded = computed(() => {
      return loaded.value ? true : false;
    });
    const removeLoader = () => {
      loaded.value = !loaded.value;
    };
    let message = "this is a test 2";

    return {
      ApplicationLoaded,
      message,
      removeLoader,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
