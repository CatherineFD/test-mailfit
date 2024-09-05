<script>
import Button from "@/components/UI/Button.vue";
export default {
  name: "Form",
  components: {
    Button
  },
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
    titleButton: {
      type: String,
      default: 'Создать задачу'
    },
    title: {
      type: String,
      default: 'Создание задачи'
    }
  },
  data() {
    return {
      task: {...this.propsTask},
      isErrorInput: false
    }
  },
  methods: {
    handlerCreateTask() {
      this.checkError();
      if(this.isError) {
        return
      }

      this.$emit('handlerTask', this.task);
      this.task = {
        id: Date.now(),
        title: '',
        description: '',
        isCompleted: false,
        date: new Date().toLocaleDateString()
      }
      this.$emit('close')
    },
    checkError() {
      this.isErrorInput = this.task.title === ''
    }
  },
  computed: {
    isError() {
      return this.isErrorInput;
    }
  }
}
</script>

<template>
  <form class="form" @submit.prevent="handlerCreateTask">
    <h3 class="form__title">{{ title }}</h3>
    <input
        type="text"
        placeholder="Введите название"
        v-model="task.title"
        :class="{'error': isError}"
        @input="checkError"
    >
    <p v-if="isError" class="error__title">В названии должно быть не менее 3х символов</p>

    <textarea
        name="description"
        cols="30"
        rows="10"
        placeholder="Введите описание"
        v-model="task.description"
    ></textarea>

    <div class="form__button">
      <Button :title="titleButton" type="submit"></Button>
    </div>
  </form>

</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  z-index: 100;

  &__title {
    margin-bottom: 20px;
    font-size: 20px;
  }

  input, textarea {
    margin-top: 15px;
    padding: 10px 15px;
    border: 1px solid rgba(1, 98, 133, 0.38);
    border-radius: 7px;
    background-color: rgba(76, 170, 204, 0.14);
    font-weight: 500;
  }

  &__button {
    margin-top: 15px;
  }

  .error {
    border: 1px solid #9d0000;
    background-color: #fce0e0;

    &__title {
      color: #ce4848;
      font-size: 14px;
      margin-top: 5px;
    }
  }
}


</style>