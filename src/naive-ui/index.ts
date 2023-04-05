import type { App } from "vue";
import * as NaiveUI from "naive-ui";

const naive = NaiveUI.create({
  components: [NaiveUI.NInput],
});

export function setupNaive(app: App<Element>) {
  app.use(naive);
}
