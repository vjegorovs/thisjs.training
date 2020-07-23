<template>
  <HeaderTitle @click="viewHomeScreen" />

  <transition name="fade" mode="out-in">
    <component-loading v-if="!ApplicationLoaded" />

    <welcome-screen v-else :homeScreen="homeScreen" />
  </transition>
  <transition @enter="enter" :css="false">
    <main-view v-if="ApplicationLoaded && mainScreen" />
  </transition>
</template>

<script lang="ts">
import ComponentLoading from "./components/ComponentLoading.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import MainView from "./components/MainView.vue";
import { gsap } from "gsap";
import { computed, ref, reactive, provide } from "vue";

export default {
  name: "App",
  components: {
    HeaderTitle,
    ComponentLoading,
    WelcomeScreen,
    MainView,
  },
  setup() {
    const firstTime = reactive({
      firstTime: true,
    });

    function toggleViewButton() {
      firstTime.firstTime = false;
      mainScreen.value = true;
      homeScreen.value = false;
      console.log("yeet");
      console.log(firstTime);
    }

    function viewHomeScreen() {
      mainScreen.value = false;
      homeScreen.value = true;
    }
    provide("firstTime", firstTime);
    provide("toggleView", toggleViewButton);

    const homeScreen = ref(false);
    const mainScreen = ref(false);
    const loaded = ref(false); // placeholder
    let ApplicationLoaded = computed(() => {
      return loaded.value ? true : false;
    });
    const removeLoader = () => {
      loaded.value = !loaded.value;
      homeScreen.value = !homeScreen.value;
    };
    let message = "this is a test 2";
    setTimeout(() => {
      removeLoader();
    }, 1300);
    return {
      ApplicationLoaded,
      message,
      homeScreen,
      mainScreen,
      viewHomeScreen,
    };
  },
  methods: {
    enter(el, done) {
      console.log("gsap");
      gsap.to(el, {
        duration: 0,
        delay: 0,
        opacity: 0,
      });
      gsap.to(el, {
        duration: 0.7,
        delay: 0.4,
        opacity: 1,
        onComplete: done,
      });
    },
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
