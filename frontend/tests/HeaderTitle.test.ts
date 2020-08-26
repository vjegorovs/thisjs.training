import { mount } from "@vue/test-utils";
import HeaderTitle from "../src/components/HeaderTitle.vue";

describe("Testing HeaderTitle component:", () => {
  it.only("component mounts and renders a button with text", async () => {
    const wrapper = mount(HeaderTitle);
    expect(wrapper.html()).toContain(".training");
  });
  it("clicking the button emits a 'nextQuestion' event", async () => {
    const wrapper = mount(HeaderTitle);

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("nextQuestion");
  });
});
