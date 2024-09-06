<script>
export default {
  name: "ButtonWithImg",
}
</script>

<template>
  <button @click="$emit('clickBtn')">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 5px 5px;
  border: 1px solid rgba(1, 98, 133, 0.38);
  border-radius: 7px;
  background-color: #4caacc70;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    //width: 15px;
    height: 20px;
  }

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(1, 98, 133, 0.38);
  }

  &:active {
    background-color: rgba(1, 98, 133, 0.38);
  }
}
</style>