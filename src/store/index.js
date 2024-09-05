import Vue from 'vue';
import Vuex from 'vuex';
import {setItem, getItem} from "@/store/localStorage";
import {tasks, completedTasks} from "@/assets/data/data";

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
    changeTask(state, task) {
      const taskIndex = state.tasks.findIndex(t => t.id === task.id);

      if (taskIndex !== -1) {
        const updatedTask = {
          ...state.tasks[taskIndex], // копируем все остальные поля
          title: task.title,
          description: task.description
        };

        state.tasks.splice(taskIndex, 1, updatedTask);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      } else {
        console.error(`Task with id ${task.id} not found`);
      }
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
    changeTask({commit}, task) {
      commit('changeTask', task)
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
