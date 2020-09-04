<template lang="pug">
.container-sidebar.container
  .container-sidebar__sidebar
    slot(name="sidebar")
  .container-sidebar__content 
    slot
</template>

<script>
export default {
  props: ["sidebar", "content"],
};
</script>

<style lang="scss">
.container-sidebar {
  display: flex;
  &__sidebar {
    padding-left: 10px;
    max-width: 192px;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__content {
    width: 280px;
    flex-grow: 1;
  }
}
</style>