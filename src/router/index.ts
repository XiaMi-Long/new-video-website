/*
 * @Descripttion:
 * @version:
 * @Author: luoqixi
 * @Date: 2023-02-14 15:29:18
 * @LastEditors: weiwenyu 2454150875@qq.com
 * @LastEditTime: 2023-04-03 17:05:01
 * @FilePath: \new-video-websit\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/module/home/index.vue"),
    },
  ],
});

export default router;
