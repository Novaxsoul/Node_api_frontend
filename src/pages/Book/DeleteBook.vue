<!-- eslint-disable -->
<template>
  <q-page padding>
    <div class="doc-container">
      <div class="padding">
        <div class="row">
          <div class="col">
            <h3>¿Estás seguro de eliminar este libro?</h3>
            <p>Título: {{this.element.title}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-btn @click="deleteBook()" label="Eliminar" color="red-10" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<!-- eslint-enable -->

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  data() {
    return {
      bookId: this.$route.params.bookId,
      element: {
        title: this.$route.params.bookTitle
      }
    }
  },
  methods: {
    deleteBook() {
      const PATH = `http://localhost:8000/api/v1.0/books/delete/?pk=${this.bookId}/`

      axios
        .delete(PATH)
        .then(response => {
          location.href = '/books'
        })
        .catch(error => {
          swal('No es posible eliminar el libro', '', 'error')
        })
    }
  },
  created() {}
}
</script>

<style></style>
