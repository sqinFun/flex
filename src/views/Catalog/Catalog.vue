<template lang="pug">
ContentWithSidebar 
  template(v-slot:sidebar)
    VerticalMenu(:catalogList="catalogList")
  template(v-slot:default)
    Catalog
</template>

<script>
import { mapState } from "vuex";

import ContentWithSidebar from "../../components/ContentWithSidebar/ContentWithSidebar";
import VerticalMenu from "../../components/VerticalMenu/VerticalMenu";
import Catalog from "../../components/Catalog/Catalog";
export default {
  components: {
    ContentWithSidebar,
    VerticalMenu,
    Catalog,
  },
  computed: {
    ...mapState({
      catalogList: (state) => state.catalogMenu.catalogList,
    }),
  },
};
</script>

<style>
</style>