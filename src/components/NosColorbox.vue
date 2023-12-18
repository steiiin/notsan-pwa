<template>
  <span
    class="nos-colorbox"
    :class="'bg-' + color"
  >&nbsp;</span>
</template>

<script>
export default {
  name: 'NosColorbox',
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  :root {
  }
</style>
<style lang="scss" scoped>
.nos-colorbox {
  display: inline-block;
  width: 30px;
  line-height: 1;
  border: 1px solid black;
}
</style>
