<template lang="pug">
ul.vertical-list(:class="[`vertical-list_lvl_${lvl}`]")
  VerticalMenuItem(
    v-for="item in catalogList",
    :key="item.id",
    :item="item",
    :lvl="lvl"
  )
</template>

<script>
import VerticalMenuItem from "./VerticalMenuItem/VerticalMenuItem";

export default {
  name: "VerticalMenu",
  props: {
    catalogList: Array,
    lvl: {
      type: Number,
      default: 0,
    },
  },
  components: {
    VerticalMenuItem,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("test");
      this.isActive = !this.isActive;
    },
  },
  computed: {
    nextLvl() {
      return this.lvl + 1;
    },
    classLvl() {
      return `vertical-list_lvl_${this.lvl}`;
    },
  },
};
</script>

<style lang='scss'>
.vertical-list {
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  .vertical-list {
    margin-left: 15px;
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__item-inner {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    font-family: Muil;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.08em;
    color: #000000;
    text-decoration: none;

    &:hover {
      color: #969595;
    }

    &_lvl_0 {
      text-transform: uppercase;
    }
  }
}
</style>