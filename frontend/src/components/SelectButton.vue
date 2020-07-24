<template>
  <button @click="nextQuestion">{{ text }}</button>
</template>

<script lang="ts">
export default {
  setup(props, { emit }) {
    const text: String = "Next";
    const nextQuestion = (currentId: number) => {
      //here emit up the press event and switch q to next one
    };
    return {
      text,
      nextQuestion,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #e7e8ec;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  background: #f1f2f7;
  color: #2f3144;
  font-size: 25px;
  &:active {
    border: 0;
    outline: none;
  }
  &:focus {
    border: 0;
    outline: none;
  }
}
</style>
