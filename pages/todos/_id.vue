<template>
  <div>
      {{ lal }}
  </div>
</template>

<script>
export default {
    data () {
       lal:'lala'
    }
}
// export default {
//     async asyncData ({ app, params, query ---->context }) {
//         // app.$store.dispatch('asdfsd/asdfasdf')
//         // app.$axios.get('/').then((response) => {})
//         // const response = await app.$axios.get('/asdfasdf')
//         // query.page
//         return {
//             id: params.id
//         }
//     },
//     data () {
//         return {
//         }
//     },
//     computed: {
//         todo () {
//             console.log(this.id)
//             return { name: 'asdf' }
//         }
//     },
//     methods: {
//         profile () {
//             const test = { name, ...user }
//             // [...a, ...b]
//         }
//     }
// }
</script>

<style scoped>
</style>