<script>
import ItemOfList from "@/components/ListOfTask/ItemOfList.vue";
export default {
  name: "ListOfTasks",
  components: {
    ItemOfList
  },
  props: {
    tasks:{
        type: Array,
        required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isShowTitle() {
      return this.tasks.length > 0
    }
  }
}
</script>

<template>
  <div class="list">
    <h3 class="title" v-if="isShowTitle">{{title}}</h3>
    <TransitionGroup name="list" tag="div">
      <div v-for="task in tasks" :key="task.id">
        <ItemOfList :props-task="task" :key="task.id"></ItemOfList>
      </div>
    </TransitionGroup>
  </div>

</template>

<style scoped>
.list {
  margin-bottom: 20px;
  width: 100%;

  .title {
    margin-bottom: 25px;
    font-size: 20px;
    color: #808080;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.list-leave-active {
  position: absolute;
}

</style>