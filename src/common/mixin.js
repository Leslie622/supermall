import {debounce} from "./utils"

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });
  }
}