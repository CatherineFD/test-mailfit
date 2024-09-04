<script>
import {mapActions} from "vuex";
import Button from "@/components/UI/Button.vue";

export default {
  name: "ItemOfList",
  components: {
    Button
  },
  props: {
    propsTask: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      task: {...this.propsTask}
    }
  },
  methods: {
    ...mapActions({
      deleteTask: 'deleteTask',
      completeTask: 'completeTask',
      uncompleteTask: 'uncompleteTask'
    }),
    handlerCompletedTask() {
      if (!this.task.isCompleted) {
        this.uncompleteTask(this.task)
      } else {
        this.completeTask(this.task)
      }
    },
    handlerDeleteTask() {
      this.deleteTask(this.task);
    }
  }
}
</script>

<template>
  <div class="item">

    <input class="checkbox" type="checkbox" v-model="task.isCompleted" @change="handlerCompletedTask()">

    <div class="information" :class="{'completed': task.isCompleted}">
      <h4 class="information__title">{{task.title}}</h4>
      <div class="information__description">{{task.description}}</div>
    </div>

    <div class="date">{{task.date}}</div>

    <Button @clickBtn="handlerDeleteTask()" :title="'Удалить'"></Button>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

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

.checkbox {
  width: 10%;
}

.date {
  width: 10%;
  color: #808080;
}

.btn__delete {
  width: 15px;
  height: 15px;
}

.completed {
  text-decoration: line-through;
  color: #808080;
}

</style>