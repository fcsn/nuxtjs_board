<template>
  <div class="box" v-if="todos">
    <Nav />
  <article class="media" v-for="(todo, index) in todos"
              :key="index" 
              :title="todo.title">
    <div class="media-content">
      <div class="content">
          <p>
            <strong>{{ todo.title }}</strong>
          </p>
          <p>
            <nuxt-link :to="'/modify/' + (index + 1)">
                {{ todo.contents }}
           </nuxt-link>
          </p>
          <small>{{ todo.date }}</small>
      </div>
      <button @click="subTodo" class="button is-danger is-outlined">delete</button>
    </div>
  </article>
</div>
</template>


<script>
import Nav from '@/components/Nav'

export default {
  computed: {
    todos () {
          return this.$store.getters['store/getTodos']
    }
    // ,
    // getList () {
    //   var listTodos = this.$store.getters['store/getTodos']
    //   console.log(listTodos);
      
    //   .map( todo => {
    //       return {
    //         //   id: `${todo.id}`,
    //         //   title: `${todo.title}`,
    //         //   contents: `${todo.contents}`,
    //         //   date: `${todo.id}`
    //       }
    //       return listTodos;
    //   })
    // }
  },
  components: {
    Nav
  },
  methods: {
    subTodo () {
      this.$store.dispatch('store/removeTodo', this.todo)
    },
    clearAll () {
      this.$store.dispatch('store/clearTodos', this.todos)
    }
  }
}
</script>

