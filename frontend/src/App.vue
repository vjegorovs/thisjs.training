<template>
  <div @mousemove="mouse">
    <HeaderTitle @click="viewHomeScreen" />

    <transition name="fade" mode="out-in">
      <component-loading v-if="!ApplicationLoaded" />

      <welcome-screen v-else :homeScreen="homeScreen" />
    </transition>
    <transition @enter="enter" :css="false">
      <keep-alive>
        <main-view v-if="ApplicationLoaded && mainScreen" />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import ComponentLoading from "./components/ComponentLoading.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import MainView from "./components/MainView.vue";
import { gsap } from "gsap";
import { computed, ref, reactive, provide, Ref, ComputedRef } from "vue";

export default {
  name: "App",
  components: {
    HeaderTitle,
    ComponentLoading,
    WelcomeScreen,
    MainView,
  },
  setup() {
    // Lots of booleans for conditional rendering / vue-switching
    //#TODO-1: transition into vue-router
    const firstTime: { firstTime: boolean } = reactive({
      firstTime: true,
    });

    function toggleViewButton(): void {
      firstTime.firstTime = false;
      mainScreen.value = true;
      homeScreen.value = false;
    }

    function viewHomeScreen(): void {
      mainScreen.value = false;
      homeScreen.value = true;
    }

    // This here dependency injection into the Welcomebutton.vue component is
    // responsible for the button text and view switching after the button press
    provide("firstTime", firstTime);
    provide("toggleView", toggleViewButton);

    const homeScreen: Ref<boolean> = ref(false);
    const mainScreen: Ref<boolean> = ref(false);
    const loaded: Ref<boolean> = ref(false);
    // ----

    // This here simulates bad loading scenario and renders loader component
    // #TODO-2: as vue-router is implemented, wrap the whole router in a single
    // transition element and get rid of below section
    let ApplicationLoaded: ComputedRef<boolean> = computed((): boolean => {
      return loaded.value ? true : false;
    });
    const removeLoader = (): void => {
      loaded.value = !loaded.value;
      homeScreen.value = !homeScreen.value;
    };

    setTimeout((): void => {
      removeLoader();
    }, 600);
    // ----

    // Tracking mouse coordinates for header "JS" color effect
    const coordinates: { x: number; y: number } = reactive({ x: 0, y: 0 });

    const mouse = (e): void => {
      coordinates.x = e.clientX;
      coordinates.y = e.clientY;
    };

    provide("mouseCoordinates", coordinates);
    // ----

    const enter = (el: HTMLElement, done: () => void): void => {
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
    };
    return {
      ApplicationLoaded,
      homeScreen,
      mainScreen,
      viewHomeScreen,
      mouse,
      enter,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
