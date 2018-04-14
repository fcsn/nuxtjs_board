<template>
    <article>
        <Nav />
        {{ todo }}
        <form>
            <!-- <p>{{dd}}</p> -->
        </form>
        <!-- <form class="form" v-on:submit.prevent="modifyTodo"> -->
            <!-- <p>{{ $route.params.id }}</p> -->
            <!-- <input type="text" v-model="modiTodo[0].title"> -->
            <!-- <input type="text" v-model="modiTodo[0].contents">
            <input type="text" v-model="modiTodo[0].date"> -->
            <!-- <button>modify</button> -->
            <!-- {{ modiTodo[0].title }} -->
        <!-- </form> -->
    </article>
</template>
 
<script>
import Nav from '@/components/Nav'

export default {
    data () {
        return {
            todo: null
        }
    },
    methods: {
        modifyTodo () {
            return console.log(1)
        }
    },
    components: {
        Nav
    },
    created () {
        this.todo = this.$store.getters['store/getTodo'] 
    }
 }
</script>
