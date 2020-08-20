import { mount } from "@vue/test-utils";
import SelectButton from "../src/components/SelectButton.vue";

describe("Testing selectbutton component:", () => {
  it("component mounts and renders a button with text", async () => {
    const wrapper = mount(SelectButton);
    expect(wrapper.html()).toContain("Next");
  });
  it("clicking the button emits a 'nextQuestion' event", async () => {
    const wrapper = mount(SelectButton);

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("nextQuestion");
  });
});
