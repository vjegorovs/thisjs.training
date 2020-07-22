<template>
  <div>{{ testmsg }}</div>
  <welcome-button />
</template>

<script lang="ts">
import WelcomeButton from "./WelcomeButton.vue";

export default {
  components: {
    WelcomeButton,
  },
  data() {
    return {
      testmsg: "placeholder navigation bar text",
    };
  },
};
</script>
