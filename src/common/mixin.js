import { debounce } from "./utils"
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backTopIsShow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
}