<template lang="pug">
.menu
  .menu__logo
    router-link.menu__logo(to="/", exact) FLEX
  .menu__nav
    router-link.menu__item(
      v-for="item in menuList",
      :key="item.id",
      :to="item.link",
      exact
    ) {{ item.text }}
  .menu__control 
    img.menu__icon(src="/img/icons/search.svg")
    img.menu__icon(src="/img/icons/user.svg")
    img.menu__icon(src="/img/icons/basket.svg")
    img.menu__icon(src="/img/icons/favorite.svg")
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      menuList: (state) => state.menu.menuList,
    }),
  },
};
</script>

<style lang="scss">
.menu {
  padding: 37px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    display: flex;
    align-items: center;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    color: #000000;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-decoration: none;
  }

  &__control {
    display: flex;
    align-items: center;
  }

  &__item {
    margin: 0 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    color: #000000;

    &:hover {
      color: #969595;
    }

    &.router-link-active {
      color: #969595;
    }
  }

  &__icon {
    cursor: pointer;

    & + & {
      margin-left: 28px;
    }
  }
}
</style>
