<script>
import Form from "@/components/UI/Form.vue";
import Modal from "@/components/UI/Modal.vue";
import {mapActions} from "vuex";

export default {
  name: "EditTask",
  components: {Modal, Form},
  props: {
    propsTask: {
      type: Object,
      default() {
        return {
          id: Date.now(),
          title: '',
          description: '',
          isCompleted: false,
          date: new Date().toLocaleDateString()
        }
      }
    },
  },
  data() {
    return {
      isEdit: false,
      task: this.propsTask,
    }
  },
  watch: {
    propsTask: {
      handler(newTask) {
        this.task = newTask;
      },
      deep: true
    }
  },
  methods: {
    ...mapActions({
      changeTask: 'changeTask'
    }),
    showModal() {
      this.isEdit = !this.isEdit
    },
    handlerChangeTask(task) {
      this.changeTask(task);
    }
  }
}
</script>

<template>
  <div class="container" :class="{'completed': task.isCompleted}">

    <div class="block">
      <div class="information">
        <h4 class="information__title">{{task.title}}</h4>
        <div class="information__description">{{task.description}}</div>
      </div>
      <button class="edit" @click="isEdit=!isEdit" :disabled="task.isCompleted" :class="{'disabled': task.isCompleted}">
        <img src="@/assets/UI/edit.svg" alt="edit">
      </button>
    </div>

    <Transition>
      <Modal v-if="isEdit" @close="showModal()">
        <Form
            @close="showModal"
            @handlerTask="handlerChangeTask"
            :props-task="task"
            :title-button="'Изменить задачу'"
            :title="'Изменение задачи'"
        ></Form>
      </Modal>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.container {
  width: 100%;
}

.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.information {
  width: 70%;
  &__title {
    margin-bottom: 5px;
  }

  &__description {
    margin-bottom: 5px;
    font-size: 13px;
    color: #808080;
  }
}

.completed {
  text-decoration: line-through;
  color: #808080;
}

.edit {
  margin-right: 10px;
  transition: all 0.4s ease;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}

.disabled {

  &:hover {
    cursor: default;
    transform: none;
  }
}


</style>