# Board built with Vue.js, Nuxt.js and Buefy

> simply making board, adding CRUD feat.

## Tutorial

I made this app for learning how to use nuxt.js. It contains Vue.js, and Router and Server side Rendering.

* [Vue.js Korean Documentation](https://kr.vuejs.org/v2/guide/index.html) - Official Vue.js translated to Korean.
* [Nuxt.js Korean Documentation](https://ko.nuxtjs.org/guide/installation) - Official Nuxt.js translated to Korean.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## What I learned while I was making this app
```
Index.vue
```
```
<template>
  <div class="box" v-if="todos">
    <Nav />
  <article class="media" v-for="(todo, index) in todos"
              :key="index" 
              :title="todo.title">

...

export default {
  computed: {
    todos () {
          return this.$store.getters['store/getTodos']
    }
```
For using 'v-for' using method from computed, you should use 'v-if' or 'v-show' in its parent element for showing this computed method. It's because 

