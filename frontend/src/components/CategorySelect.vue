<template>
  <div class="flexwrap">
    <button v-for="(category, index) in categories" :key="category" @click="selectCategory(index)">
      <span class="title">{{ category.name }}</span>
      <span class="text">{{ category.flavorText }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { toRefs } from "vue";
import { CategoryList } from "../enums/Categories";
import Category from "../utils/Category";

export default {
  setup(props, { emit }) {
    const categories: Category[] = [
      { name: "Vanilla JS", flavorText: CategoryList.Vanilla_JS },
      { name: "Vue JS", flavorText: CategoryList.Vue_JS },
      { name: "Add yours!", flavorText: CategoryList.Placeholder_JS },
    ]; // should be fetched later on

    const selectCategory = (categoryNumber: number): void => {
      emit("loadCategory", categoryNumber);
    };
    return {
      selectCategory,
      categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.flexwrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  margin: 0 20% 0 20%;
  width: 60%;
  height: 100%;
}

button {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: stretch;
  border: none;
  padding: 0.5rem 0.5rem;
  text-decoration: none;
  background: white;
  height: 25%;
  width: 30%;
  background: #ffffff;

  box-shadow: 0px 0px 1px rgba(47, 49, 68, 0.420837);

  border-radius: 5px;
  color: black;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  .title {
    margin: 10px 0 10px 0;
    height: 30%;
  }
  .text {
    vertical-align: text-bottom;
  }
}

button:hover,
button:focus {
  background: #ffbc00;
  border-radius: 10px;
}

button:focus {
  outline: none;
  outline-offset: -4px;
}
</style>
