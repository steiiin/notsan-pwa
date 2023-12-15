<template>
  <img class="nos-img" :src="src" />
</template>

<script>
  export default {
    name: "NosImg",
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .nos-img {
    border: #eee solid 2px;
    border-radius: 16px;
    max-width: 500px;
    margin: 0 16px;
  }
  @media only screen and (max-width: 500px) {
    .nos-img {
      border-top: #eee solid 2px;
      border-bottom: #eee solid 2px;
      border-left: none;
      border-right: none;
      border-radius: 0;
      width: 100%;
      margin: 0;
    }
  }
</style>
