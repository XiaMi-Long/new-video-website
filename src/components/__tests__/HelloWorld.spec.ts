/*
 * @Descripttion:
 * @version:
 * @Author: luoqixi
 * @Date: 2023-02-14 15:29:18
 * @LastEditors: wwy
 * @LastEditTime: 2023-02-14 16:03:58
 * @FilePath: \new-video-websit\src\components\__tests__\HelloWorld.spec.ts
 */
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
