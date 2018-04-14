<template>
    <article>
        <Nav />
        <form v-on:submit.prevent="plusTodo">
            <div class="field">
                <label class="label">title</label>
                <div class="control">
                    <input v-model="todo.title" class="input" type="text" placeholder="title">
                </div>
            </div>

            <div class="field">
                <label class="label">contents</label>
                <div class="control">
                    <textarea v-model="todo.contents" class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">date</label>
                <div class="control">
                    <input v-model="todo.date" class="input" type="text" placeholder="date">
                </div>
            </div>
            <button type="submit" class="button is-link is-outlined">submit</button>
        </form>
    </article>
</template>


<script>
import Nav from '@/components/Nav'

export default {
    data () {
        return {
            todo: {
               title: '',
               contents: '',
               date: '' 
            }
        }
    },
    components :{
        Nav
    },
    methods: {
        plusTodo () {
            console.log(this.todo)
            console.log(this.$store)
            this.$store.dispatch('store/addTodo', this.todo)
            this.todo = {}
            
            // if( this.todo.title === undefined ) {
            //     return console.log('ㄴㄴ')
            // } else {
            //     this.$store.dispatch('store/addTodo', this.todo)
            //     this.todo = {}
            // }

            // this.$store.dispatch('addTodo', { title: this.todo.title, contents: this.todo.contents, date: this.todo.date })
            // this.todo = ''

                // console.log(this.todo.title)
                // console.log(this.todo.contents)
                // console.log(this.todo.date)    
            }
    }
}
</script>

<style scoped>


