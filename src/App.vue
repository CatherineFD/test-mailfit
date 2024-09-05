<template>
  <div id="app">
    <router-view/>
    <ComponentCreateTask/>
  </div>
</template>

<script>
import PageAllTasks from "@/pages/PageAllTasks.vue";
import ComponentCreateTask from "@/components/ComponentCreateTask.vue";
import {mapActions} from "vuex";
export default {
  components: {
    PageAllTasks,
    ComponentCreateTask
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #01628524;
  color: #2c3e50;
  padding: 20px 20px;
}
</style>
