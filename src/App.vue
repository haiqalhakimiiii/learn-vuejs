<template>
   <h1>{{title}}</h1>
   <p>Welcome...</p>
   <div v-if="showModal">
      <Modal theme='' @close="toggleModal" >
         <h1>{{header}}</h1>
         <p>{{text}}</p>
         <template v-slot:links>
            <a href="#">sign up</a>
            <a href="#">more info</a>
         </template>
      </Modal>
   </div>
   <div v-if="showModalTwo">
      <Modal @close="toggleModalTwo" >
         <h1>Sign up to the newsletter</h1>
         <p>for updates and promo codes!</p>
      </Modal>
   </div>
   <button @click="toggleModal">open modal</button><br>
   <button @click="toggleModalTwo">open modal two</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
   name: 'App',
   components: {
      Modal,
   },
   data() {
      return {
         title: 'My first Vue App',
         header: 'Sign up for the Giveaway!',
         text: 'Grab your ninja swag for half price',
         showModal : false,
         showModalTwo: false,
      }
   },
   methods: {
      toggleModal() {
         this.showModal = !this.showModal
      },
      toggleModalTwo() {
         this.showModalTwo = !this.showModalTwo
      }
   }
}
</script>

<style >
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
h1{
   border-bottom: 1px solid #ddd;
   display: inline-block;
   padding-bottom: 10px;
}
</style>
