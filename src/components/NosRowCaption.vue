<template>
  <div class="nos-row-caption">
    <div class="nos-row-caption__caption" :style="groupGrad">
      <slot name="caption"></slot>
    </div>
    <div class="nos-row-caption__content"><slot name="content"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NosRowCaption",
  props: {
    group: {
      type: String,
      required: false,
      default: "transparent",
    },
  },
  computed: {
    groupGrad() {
      let color = "transparent";
      switch (this.group) {
        case "l1":
          color = "#EF5350"; /* red */
          break;
        case "l2":
          color = "#42A5F5"; /* blue */
          break;
        case "l3":
          color = "#9CCC65"; /* green */
          break;
        case "l4":
          color = "#FFEA00"; /* yellow */
          break;
      }

      return (
        `background:
        linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5) 2%, rgba(255, 255, 255, 0.5) 98%, rgba(255, 255, 255, 1)),
        linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 95%, ` +
        color +
        ` 98%, ` +
        color +
        ` 100%, rgba(255, 255, 255, 0) 100%);
        background-blend-mode: normal, normal;`
      );
    },
  },
};
</script>

<style>
:root {
}
.nos-row-caption p {
  line-height: 1.1rem;
  margin-bottom: 8px;
}
.nos-row-caption p:last-child {
  margin-bottom: 0;
}
.nos-row-caption__content .nos-list {
  margin: 0 !important;
}
</style>
<style lang="scss" scoped>
.nos-row-caption {
  display: grid;
  grid-template-columns: 200px auto;
  grid-column-gap: 8px;
  margin-bottom: 0px;
  font-size: 1rem;
  line-height: 1.1rem;
  &__caption {
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 12px 0;
  }
  &__content {
    padding: 12px 0;
  }
}

// .nos-row-caption:first-child {
//   .nos-row-caption__caption {
//     padding: 0 0 12px 0;
//   }
//   .nos-row-caption__content {
//     padding: 0 0 12px 0;
//   }
// }
.nos-row-caption:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 750px) {
  .nos-row-caption {
    grid-template-columns: 155px auto;
  }
}
@media only screen and (max-width: 700px) {
  .nos-row-caption {
    grid-template-columns: 140px auto;
    grid-column-gap: 4px;
  }
}
@media only screen and (max-width: 650px) {
  .nos-row-caption {
    grid-template-columns: 125px auto;
  }
}
@media only screen and (max-width: 600px) {
  .nos-row-caption {
    grid-template-columns: 110px auto;
  }
}
@media only screen and (max-width: 550px) {
  .nos-row-caption {
    grid-template-columns: 95px auto;
    &__caption {
      font-size: 0.95rem;
    }
  }
}
@media only screen and (max-width: 500px) {
  .nos-row-caption {
    grid-template-columns: 80px auto;
    &__caption {
      font-size: 0.9rem;
    }
  }
}
@media only screen and (max-width: 450px) {
  .nos-row-caption {
    grid-template-columns: 65px auto;
    &__caption {
      font-size: 0.85rem;
    }
  }
}
@media only screen and (max-width: 400px) {
  .nos-row-caption {
    grid-template-columns: 50px auto;
    &__caption {
      font-size: 0.8rem;
    }
  }
}
</style>
