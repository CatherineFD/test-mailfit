<script>
import Button from "@/components/UI/Button.vue";
import {mapActions} from "vuex";
export default {
  name: "Form",
  components: {
    Button
  },
  data() {
    return {
      task: {
        title: '',
        description: '',
        isCompleted: false,
        date: new Date().toLocaleDateString()
      }
    }
  },
  methods: {
    ...mapActions({
      createTask: 'createNewTask'
    }),
    handlerCreateTask() {
      this.createTask(this.task);
      this.task = {
        title: '',
        description: '',
        isCompleted: false,
        date: new Date().toLocaleDateString()
      }

      this.$emit('close')
    }
  },
}
</script>

<template>
  <form class="form" @submit.prevent>
    <h3 class="form__title">Создание задачи</h3>
    <input
        type="text"
        placeholder="Введите название"
        v-model="task.title"
    >

    <textarea
        name="description"
        cols="30"
        rows="10"
        placeholder="Введите описание"
        v-model="task.description"
    ></textarea>

    <div>
      <Button :title="'Создать задачу'" @clickBtn="handlerCreateTask"></Button>
    </div>
  </form>

</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  &__title {
    margin-bottom: 20px;
    font-size: 20px;
  }

  input, textarea {
    margin-bottom: 20px;
    padding: 10px 15px;
    border: 1px solid rgba(1, 98, 133, 0.38);
    border-radius: 7px;
    background-color: rgba(76, 170, 204, 0.14);
    font-weight: 500;
  }

}

</style>