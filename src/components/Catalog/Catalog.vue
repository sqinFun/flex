<template lang="pug">
.catalog
  .catalog__list
    CatalogItem(v-for="item in productList", :key="item.id", :data="item")
</template>

<script>
import CatalogItem from "./CatalogItem/CatalogItem";
import { mapState, mapActions } from "vuex";
export default {
  components: { CatalogItem },
  computed: {
    ...mapState({ productList: (state) => state.product.productList }),
  },
  methods: {
    ...mapActions(["setProductList"]),
  },
  mounted() {
    this.setProductList();
  },
};
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  &__item {
    width: 300px;
    margin: 0 10px 20px 10px;
    text-decoration: unset;
    color: #000;
  }

  &__title {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
  }

  &__price {
    display: block;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: #000000;
  }

  &__img {
    height: 400px;
    width: 300px;
    object-fit: cover;
  }
}
</style>