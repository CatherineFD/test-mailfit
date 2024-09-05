<script>
import {mapActions} from "vuex";
import Button from "@/components/UI/Button.vue";
import EditTask from "@/components/ListOfTask/EditTask.vue";

export default {
  name: "ItemOfList",
  components: {
    Button, EditTask
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
    <EditTask :props-task="task"></EditTask>

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

.checkbox {
  width: 10%;
}

.date {
  width: 10%;
  color: #808080;
  margin-left: 10px;
  margin-right: 10px;
}

.btn__delete {
  width: 15px;
  height: 15px;
}
</style>