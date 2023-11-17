<template>
  <div class="nos-dose" :class="{ 'nos-dose-withlabel': showLabels }">
    <div
      v-for="line in lines"
      class="nos-dose__line"
      :class="{
        'text-pink-accent-3': line.color === 'a1',
        'text-red-accent-3': line.color === 'a2',
        'text-orange-accent-4': line.color === 'a3',
        'text-green-darken-2': line.color === 'a4',
        'text-light-blue-darken-4': line.color === 'a5',
        'text-purple-accent-3': line.color === 'baby',
        'text-red-accent-3': line.color === 'child',
        'text-orange-accent-4': line.color === 'teen',
        'text-light-green-accent-4': line.color === 'young',
        'text-light-blue-darken-4': line.color === 'adult',
      }"
    >
      <div v-if="line.hint" class="nos-dose__hint">{{ line.hint }}</div>
      <template v-else>
        <div class="nos-dose__label">{{ line.label ?? "" }}</div>
        <div class="nos-dose__content">{{ line.text }}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "NosDose",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      lines: [],
      showLabels: false,
    };
  },
  mounted() {
    // get padding
    let padMax = this.items
      .map((e) => (e.unit ? e.unit.search(/[^\d.,-]/) : -1))
      .reduce((max, current) => Math.max(max, current), -1);

    // create lines
    this.lines = this.items.map((item) => {
      // hints
      if (item.hint) {
        return { hint: item.hint };
      }

      // doses
      let pad = padMax - item.unit.search(/[^\d.,-]/);
      let line = {
        text:
          (pad > 0 ? " ".repeat(pad) : "") +
          item.unit +
          (item.per ? " / " + item.per : ""),
      };
      if (item.label) {
        this.showLabels = true;
        line.label = item.label;
      }
      if (item.color) {
        line.color = item.color;
      }
      return line;
    });
  },
};

// items: { label: '', unit: '', per: '', color: '' }
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-dose {
  &__line {
    display: grid;
    grid-template-columns: 0px auto;
    grid-column-gap: 0px;
    line-height: 1.1rem;
  }
  &__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    line-height: calc(1.1rem + 2px); /* fix pushed v-align */
  }
  &__content {
    font-family: monospace;
    font-size: 0.9rem;
    font-weight: bold;
    white-space: pre;
  }
  &__hint {
    grid-column: 1 / -1;
    padding: 4px 0 2px 0;
  }
}
.nos-dose-withlabel {
  & .nos-dose {
    &__line {
      grid-template-columns: 120px auto;
      grid-column-gap: 4px;
    }
  }
}

@media only screen and (max-width: 500px) {
  .nos-dose-withlabel {
    & .nos-dose {
      &__line {
        grid-template-columns: 100px auto;
      }
    }
  }
}
@media only screen and (max-width: 450px) {
  .nos-dose-withlabel {
    & .nos-dose {
      &__line {
        grid-template-columns: 80px auto;
      }
    }
  }
}
@media only screen and (max-width: 350px) {
  .nos-dose-withlabel {
    & .nos-dose {
      &__line {
        grid-template-columns: 50px auto;
      }
    }
  }
}
</style>
