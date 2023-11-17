<template>
    <div class="nos-title ma-4">
        <div class="nos-title__headline">{{ headline }}</div>
        <div class="nos-title__subtitle" v-if="subtitle">{{ subtitle }}</div>
    </div>
</template>

<script>

    export default {
        name: 'NosTitle',
        props: {
            headline: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: false,
                default: ''
            }
        }
    }

</script>

<style lang="scss" scoped>

    .nos-title
    {

        font-family: 'Teko';
        line-height: 1;

        &__headline
        {
            font-size: 2.2rem;
        }

        &__subtitle
        {
            font-size: 1.1rem;
            opacity: 0.5;
        }

    }

</style>
  