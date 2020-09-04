<template lang='pug'>
li.vertical-list__item
  span.vertical-list__item-inner
    router-link.vertical-list__link(
      to="",
      :class="[`vertical-list__link_lvl_${lvl}`]"
    ) {{ item.name }}
    button.vertical-list__item-state(
      v-if="item.catalogList",
      @click="toggleActive",
      :class="{ 'vertical-list__item-state_active': isActive }"
    )
      i.fas.fa-chevron-down
  VerticalMenu(
    v-if="item.catalogList && isActive",
    :catalogList="item.catalogList",
    :lvl="nextLvl"
  )
</template>

<script>
export default {
  name: "VerticalMenuItem",
  props: ["item", "lvl"],
  components: {
    VerticalMenu: () => import("../VerticalMenu"), //Для рекурсивного вывода
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    nextLvl() {
      return +this.lvl + 1;
    },
  },
};
</script>

<style lang="scss">
.vertical-list__item-state {
  transition: transform 0.3s;
  transform-origin: center;
  background: transparent;
  border: none;
  outline: none;
  &_active {
    transform: rotate(180deg);
  }
}
</style>