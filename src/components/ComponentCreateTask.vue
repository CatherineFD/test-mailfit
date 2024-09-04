<script>
import Button from "@/components/UI/Button.vue";
import Modal from "@/components/UI/Modal.vue";
import Form from "@/components/UI/Form.vue";
export default {
  name: "ComponentCreateTask",
  components: {
    Button,
    Modal,
    Form
  },
  data() {
    return {
      isShowModal: false,
    }
  },
  methods: {
    showModal() {
      this.isShowModal = !this.isShowModal
    }
  }
}
</script>

<template>
<div class="block">
  <Button :title="'Создать задачу'" @clickBtn="showModal()"></Button>
  <Modal v-if="isShowModal" @close="showModal()">
    <Form @close="showModal"></Form>
  </Modal>
</div>
</template>

<style scoped>
.block {
  position: fixed;
  bottom: 50px;
  left: 50px;
  z-index: 10;
}

</style>