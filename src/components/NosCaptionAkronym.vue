<template>
  <div class="nos-caption-akro">
    <div
      class="nos-caption-akro__letter"
      :class="'text-'+color"
    >
      {{ letter }}
    </div>
    <div class="nos-caption-akro__meaning">
      {{ meaning }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosCaptionAkronym',
  props: {
    letter: {
      type: String,
      required: true
    },
    meaning: {
      type: String,
      default: null
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    }
  }
}
</script>

<style lang="scss" scoped>
.nos-caption-akro {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;

  &__letter {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Teko';
    position: relative;
    top: 6px;
  }
  &__meaning {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    text-align: center;
    position: relative;
    top: 6px;
  }
}

</style>
