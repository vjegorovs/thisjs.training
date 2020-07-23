<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
export default {
  setup() {
    const text: String = "now its in main view";
    return {
      text,
    };
  },
};
</script>
