<template>
  <div
    class="nos-content"
    :class="{
      'font-weight-bold':
        mode === 'med-size-ampul' ||
        mode === 'med-size-supp' ||
        mode === 'med-size-spray' ||
        mode === 'med-size-iv' ||
        mode === 'med-size-drink' ||
        mode === 'med-dose-adult',
      'nos-monospace': mode === 'med-size-mono',
    }"
  >
    <v-icon v-if="lIconPre" :icon="lIconPre" size="small" class="ps-1 pe-2"></v-icon>
    <slot></slot>{{ lText }}
    <v-icon v-if="lIconPost" :icon="lIconPost" size="small" class="ps-2 pe-1"></v-icon>
  </div>
</template>

<script>
export default {
  name: "NosContent",
  props: {
    mode: {
      type: String,
      required: false,
      default: "caption",
    },
    text: {
      type: String,
      required: false,
      default: null,
    },
    iconPre: {
      type: String,
      required: false,
      default: null,
    },
    iconPost: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      lText: this.text,
      lIconPre: this.iconPre,
      lIconPost: this.iconPost,
    };
  },
  mounted() {
    switch (this.mode) {
      case "med-size-ampul":
        this.lIconPre = "mdi-flask";
        break;
      case "med-size-supp":
        this.lIconPre = "mdi-pill";
        break;
      case "med-size-spray":
        this.lIconPre = "mdi-spray";
        break;
      case "med-size-iv":
        this.lIconPre = "mdi-iv-bag";
        break;
      case "med-size-drink":
        this.lIconPre = "mdi-lotion";
        break;

      default:
        break;
    }
  },
};
</script>

<style>
:root {
}
.nos-r {
  justify-content: flex-end;
  padding-right: 12px;
}
.nos-u {
  text-decoration: underline;
}
.nos-mono {
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.1rem;
}
</style>
<style lang="scss" scoped>
.nos-content {
  display: flex;
  align-items: center;
  font-size: 1rem;
  min-width: 360px;
}
.nos-monospace {
  font-family: monospace;
  font-size: 0.9rem;
}
</style>
