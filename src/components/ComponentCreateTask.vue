<script>
import Button from "@/components/UI/Button.vue";
import Modal from "@/components/UI/Modal.vue";
import Form from "@/components/UI/Form.vue";
import {mapActions} from "vuex";
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
    ...mapActions({
      createTask: 'createNewTask'
    }),
    showModal() {
      this.isShowModal = !this.isShowModal
    },
    handlerCreateTask(task) {
      this.createTask(task);
    }
  }
}
</script>

<template>
<div class="block">
  <Button :title="'Создать задачу'" @clickBtn="showModal()"></Button>
  <Transition>
    <Modal v-if="isShowModal" @close="showModal()">
      <Form @close="showModal" @handlerTask="handlerCreateTask"></Form>
    </Modal>
  </Transition>
</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.block {
  position: fixed;
  bottom: 50px;
  left: 50px;
  z-index: 10;
}

</style>