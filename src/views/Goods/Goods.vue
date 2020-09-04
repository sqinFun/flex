<template lang="pug">
.container
  img.img(:src="src")
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      src: "",
    };
  },
  mounted() {
    axios
      .get(`http://jsonplaceholder.typicode.com/photos/${this.id}`)
      .then((res) => (this.src = res.data.url));
  },
};
</script>

<style lang="scss">
</style>