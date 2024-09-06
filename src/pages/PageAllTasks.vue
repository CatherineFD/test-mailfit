<template>
  <div class="container">
    <SearchTask @search="filterTasks"></SearchTask>

    <ListOfTasks :tasks="filteredTasks" :title="'Tasks'"></ListOfTasks>

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

<style scoped lang="scss">
.container {
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media(max-width: 1200px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 720px;
  }
}

@media (max-width:  768px) {
  .container {
    max-width: 540px;
  }
}

@media (max-width:  556px) {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
}

//@media (max-width:  480px) {
//  .container {
//    max-width: 100%;
//  }
//}

//@media (max-width: 320px) {
//  .container {
//    max-width: 800px;
//  }
//}

</style>