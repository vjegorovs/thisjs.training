<template>
  <transition @leave="leave" :css="false">
    <div v-if="homeScreen">
      <p>{{ welcomeMessage }}</p>
      <welcome-button v-if="initialized" @buttonPress="changeToMainView" />
    </div>
  </transition>
</template>

<script lang="ts">
import WelcomeButton from "./WelcomeButton.vue";
import { gsap } from "gsap";
import { ref, onBeforeMount, onMounted, onRenderTracked } from "vue";

export default {
  components: {
    WelcomeButton,
  },
  props: {
    homeScreen: { type: Boolean, required: true },
  },
  setup() {
    const welcomeMessage: String = "This is the welcome you deserve";
    let initialized = ref(true);

    function changeToMainView() {
      initialized = !initialized;
    }
    return {
      welcomeMessage,
      initialized,
      changeToMainView,
    };
  },
  methods: {
    leave(el, done) {
      gsap.to(el.lastElementChild, {
        duration: 1,
        scaleX: 40, //perhaps calculate relative to window size
        scaleY: 40,
        x: 1,
        ease: "elastic.inOut(4, 5)",
      });
      gsap.to(el.firstChild, {
        duration: 1,
        delay: 0,
        opacity: 0,
      });
      gsap.to(el.lastElementChild, {
        duration: 1.2,
        delay: 0.5,
        opacity: 0,
      });
      gsap.to(el, {
        duration: 0.5,
        delay: 0.2,
        height: 0,
        onComplete: done,
      });
    },
  },
};
</script>
