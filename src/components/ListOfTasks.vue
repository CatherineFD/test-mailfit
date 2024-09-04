<script>
import ItemOfList from "@/components/ItemOfList.vue";
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

    <div v-for="task in tasks" :key="task.id">
      <ItemOfList :props-task="task"></ItemOfList>
    </div>
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

</style>