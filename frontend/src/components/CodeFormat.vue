<script lang="ts">
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/javascript";
import { h, toRefs } from "vue";
import "highlight.js/styles/atom-one-light.css";
//import "highlight.js/styles/atom-one-dark-reasonable.css";

export default {
  name: "highlightjs",
  props: {
    currentQuestion: String,
  },
  setup(props) {
    const { currentQuestion } = toRefs(props);
    const language = "typescript";

    const value = language
      ? hljs.highlight(language, currentQuestion.value)
      : hljs.highlightAuto(currentQuestion.value);

    return () =>
      h("pre", [
        h("code", {
          class: `hljs ${language.value || language}`,
          innerHTML: value.value,
        }),
      ]);
  },
};
</script>
