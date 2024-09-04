import Vue from 'vue';
import Vuex from 'vuex';
import {setItem, getItem} from "@/store/localStorage";
import {tasks, completedTasks} from "@/store/data";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    completedTasks: getItem('completedTasks') || completedTasks || [],
    tasks: getItem('tasks') || tasks || [],
    
  },
  getters: {
    getCompletedTasks(state) {
      return state.completedTasks
    },
    getTasks(state) {
      return state.tasks
    },
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      setItem('tasks', state.tasks)
    },
    deleteTask(state, task) {
      if (task.isCompleted) {
        state.completedTasks = state.completedTasks.filter(t => t.id !== task.id)
        setItem('tasks', state.completedTasks)
      } else {
        state.tasks = state.tasks.filter(t => t.id !== task.id)
        setItem('tasks', state.tasks)
      }
    },
    completeTask(state, task) {
      state.completedTasks.push(task)
      state.tasks = state.tasks.filter(t => t.id !== task.id)
      setItem('completedTasks', state.completedTasks)
      setItem('tasks', state.tasks)
    },
    uncompleteTask(state, task) {
      state.tasks.push(task)
      state.completedTasks = state.completedTasks.filter(t => t.id !== task.id)
      setItem('completedTasks', state.completedTasks)
      setItem('tasks', state.tasks)
    },
  },
  actions: {
    createNewTask({commit}, task) {
      commit('createTask', task)
    },
    deleteTask({commit}, task) {
      commit('deleteTask', task)
    },
    completeTask({commit}, task) {
      commit('completeTask', task)
    },
    uncompleteTask({commit}, task) {
      commit('uncompleteTask', task)
    },
    deleteCompletedTask({commit}, task) {
      commit('deleteCompletedTask', task)
    },
    clearTasks({commit}) {
      localStorage.clear();
    }
  },
  modules: {
  }
})
