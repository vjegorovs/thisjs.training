<script lang="ts">
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/javascript";
import { h, toRefs } from "vue";
import "highlight.js/styles/atom-one-light.css";

// #TODO-X: utilize dynamic imports and import the required(or both) .css files depending on
// dark/light mode selected (not yet implemented as well)

//import "highlight.js/styles/atom-one-dark-reasonable.css";

// this is an attempt to re-write https://github.com/egoist/vue-highlight-component
// since one of the only breaking API changes from Vue 2 -> 3 is the render function h
// behaviour
export default {
  name: "highlightjs",
  props: {
    currentQuestion: String,
  },
  setup(props) {
    const { currentQuestion } = toRefs(props);
    const language: string = "typescript"; // hardcoded for now

    const value: HighlightResult = language
      ? hljs.highlight(language, currentQuestion.value)
      : hljs.highlightAuto(currentQuestion.value);

    return () =>
      h("pre", [
        h("code", {
          class: `hljs ${language || language}`,
          innerHTML: value.value,
        }),
      ]);
  },
};
</script>
