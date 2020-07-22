<template>
  <transition @leave="leave" :css="false">
    <button v-if="initialized" @click="begin">{{ buttonmsg }}</button>
  </transition>
</template>

<script lang="ts">
import { computed, ref, inject } from "vue";
import { gsap } from "gsap";

export default {
  setup() {
    let initialized = ref(true);
    let buttonmsg = computed(() =>
      inject("firstTime", true).firstTime === true ? "Begin" : "Resume"
    );
    const changeButtonmsg = inject("changeFirstTime");
    const begin = () => {
      // figure out a way to have an alternative animation for "resume" mode since its too much to see it everytime
      initialized.value = !initialized.value;
      changeButtonmsg();
    };
    return {
      buttonmsg,
      initialized,
      begin,
    };
  },
  methods: {
    leave(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 30, //perhaps calculate relative to window size
        scaleY: 30,
        x: 1,
        ease: "elastic.inOut(4, 5)",
      });
      gsap.to(el, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid #e7e8ec;
  border-radius: 10px;
  width: 250px;
  height: 55px;
  background: #ffbc00;
  color: #ffffff;
  font-size: 30px;
}
</style>
