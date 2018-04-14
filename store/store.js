export const state = () => ({
    todos: [
      {
        id: 1,
        title: 'dummy',
        contents: 'Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.',
        date: '2018-04-12' 
      },
      {
        id: 2, 
        title: 'dummydummy',
        contents: 'The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.',
        date: '2018-04-13' 
      }
    ],
    todoId: 1
})
  
export const mutations = {
    // INC_NUM (state) {
    //   return state.counter++
    // }
    ADD_TODO (state, todo) {
      todo.id = state.todos.length + 1
      return state.todos.push(todo)
    },
    REMOVE_TODO (state, todo) {
      var i = state.todos.indexOf(todo)
      state.todos.splice(i, 1)
    },
    CLREAR_TODOS (state, todos) {
      state.todos = {}
    }
  }

export const getters = {
    getTodos (state) {
      return state.todos
      // const todos = { title, contents, date }
      // return state.todos.title
    },
    getTodo (state) {
      return state.todos.filter((todo) => {
        return todo.id === state.todoId
      })[0]
    }
}

export const actions = {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo ({commit}, todo) {
      commit('REMOVE_TODO', todo)
    },
    clearTodos ({commit}, todos) {
      commit('CLREAR_TODOS', todos)
    }
}