<template>
  <div class="container">
    <SearchTask @search="filterTasks"></SearchTask>
    <ListOfTasks :tasks="filteredTasks" :title="'Tasks'"></ListOfTasks>
    <hr>
    <ListOfTasks :tasks="filteredCompletedTasks" :title="'Completed tasks'"></ListOfTasks>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ListOfTasks from "@/components/ListOfTasks.vue";
import SearchTask from "@/components/SearchTask.vue";
export default {
  name: "PageAllTasks",
  components: {
    ListOfTasks,
    SearchTask
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters({
      tasks: "getTasks",
      completedTasks: "getCompletedTasks"
    }),
    filteredTasks() {
      return this.tasks.filter(task =>
          task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredCompletedTasks() {
      return this.completedTasks.filter(task =>
          task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    filterTasks(query) {
      this.searchQuery = query;
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>