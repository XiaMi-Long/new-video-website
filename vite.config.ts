/*
 * @Descripttion:
 * @version:
 * @Author: luoqixi
 * @Date: 2023-02-14 15:29:18
 * @LastEditors: weiwenyu 2454150875@qq.com
 * @LastEditTime: 2023-04-03 16:39:00
 * @FilePath: \new-video-websit\vite.config.ts
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
});
