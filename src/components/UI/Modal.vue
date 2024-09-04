<script>
export default {
  name: "Modal"
}
</script>

<template>
  <div class="container" @click="$emit('close')">
    <div class="modal">
      <div class="modal__header">
        <img src="@/assets/UI/close.svg" alt="close" @click="$emit('close')">
      </div>
      <div class="modal__content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  min-width: 600px;

  &__header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    transition: all 0.4s ease;

    & img:hover {
      cursor: pointer;
      transform: scale(102%);
    }
  }

  &__content {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;

  }
}
</style>