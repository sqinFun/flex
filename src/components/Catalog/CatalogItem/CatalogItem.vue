<template lang="pug">
router-link.catalog__item(:to="{ name: 'goods', params: { id: data.id } }")
  img.catalog__img(:src="data.url", :alt="data.title")
  h2.catalog__title {{ data.title }}
  span.catalog__price {{ data.id }} руб
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
</style>