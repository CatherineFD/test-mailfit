<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button @click="$emit('clickBtn')">
    {{title}}
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 10px 15px;
  border: 1px solid rgba(1, 98, 133, 0.38);
  border-radius: 7px;
  background-color: rgba(76, 170, 204, 0.14);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(1, 98, 133, 0.38);
  }

  &:active {
    background-color: rgba(1, 98, 133, 0.38);
  }
}
</style>