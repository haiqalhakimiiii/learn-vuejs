const app = Vue.createApp({
   data() {
      return {
         showBooks: true,
         x: 0,
         y: 0,
         books: [
            { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFav: true },
            { title: 'The Final Empire', author: 'Brandon Sanderson', isFav: false },
            { title: 'The way of kings', author: 'Brandon Sanderson', isFav: true },

         ]
      }
   },
   methods: {
      toggleShowBooks() {
         this.showBooks = !this.showBooks
      },
      toggleFav(book) {
         book.isFav = !book.isFav
      },
      handleEvent() {
         console.log('event')
      },
      handleMouseMove(e) {
         this.x = e.offsetX
         this.y = e.offsetY
      }

   },
   computed: {
      filteredBooks(){
         return this.books.filter((book) => book.author === 'Brandon Sanderson')
      }
   }

})

app.mount('#app')