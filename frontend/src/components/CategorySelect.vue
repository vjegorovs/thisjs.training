<template>
  <div class="flexwrap">
    <button v-for="(category, index) in categories" :key="category" @click="selectCategory(index)">
      <div
        class="background-image"
        :style="{backgroundImage: `url(../src/assets/${category.img})`}"
      ></div>
      <span class="title">{{ category.name }}</span>
      <span class="text">{{ category.flavorText }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { CategoryList } from "../enums/Categories";
import Category from "../utils/Category";

export default {
  setup(props, { emit }) {
    // To progress further, settled on static category list
    // #TODO-3: implement /category/ & /categories/ routes in backend
    const categories: Category[] = [
      {
        name: "Vanilla JS",
        flavorText: CategoryList.Vanilla_JS,
        img: "js.png",
      },
      { name: "Vue JS", flavorText: CategoryList.Vue_JS, img: "vue.png" },
      {
        name: "Add yours!",
        flavorText: CategoryList.Placeholder_JS,
        img: "js.png",
      },
    ];

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
$breakpoint-tablet: 759px;
.flexwrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  align-content: center;
  width: 100%;
  height: 100%;
}

button {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-content: center;
  align-items: stretch;
  border: none;
  padding: 0.5rem 0.5rem;
  text-decoration: none;
  background: white;
  height: 40%;
  width: max(25%, 17em);
  margin-top: 20px;
  background: #ffffff;

  box-shadow: 0px 0px 1px rgba(47, 49, 68, 0.420837);

  border-radius: 4px;
  color: black;
  font-family: sans-serif;

  cursor: pointer;
  text-align: center;
  .title {
    margin: 10px 0 10px 0;
    height: 30%;
    font-size: 1.5em;
    font-weight: 600;
    text-decoration-line: underline;
  }
  .text {
    vertical-align: text-bottom;
    font-size: 1.2em;
  }
  + button {
    margin-left: 20px;
  }
}

@media (max-width: $breakpoint-tablet) {
  button + button {
    margin-left: 0px;
  }
}
button:hover,
button:focus {
  background: #ffbc00;
}

button:focus {
  outline: none;
  outline-offset: -4px;
}

.background-image {
  width: 100%;
  height: 150px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
