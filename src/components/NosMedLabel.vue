<template>
  <div
    class="nos-med-label"
    :class="{
      'font-weight-bold':
        type === 'ampulle' ||
        type === 'suppositorium' ||
        type === 'spray' ||
        type === 'infusion' ||
        type === 'saft' ||
        type === 'nadel',
    }"
  >
    <v-icon :icon="icon" size="small" class="ps-0 pe-1"></v-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NosMedLabel",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icon: "",
    };
  },
  mounted() {
    switch (this.type) {
      case "suppositorium":
        this.icon = "$pill";
        break;
      case "spray":
        this.icon = "$spray";
        break;
      case "infusion":
        this.icon = "$ivBag";
        break;
      case "saft":
        this.icon = "$lotion";
        break;
      case "nadel":
        this.icon = "$needle";
        break;
      default:
        this.icon = "$flask";
        break;
    }
  },
};
</script>

<style>
.nos-med-label > .v-icon {
  position: relative;
  top: -1px;
}
</style>
<style lang="scss" scoped>
.nos-med-label {
  display: flex;
  align-items: center;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
