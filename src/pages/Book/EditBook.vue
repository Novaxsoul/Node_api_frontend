<template>
<q-page padding>
    <div class="doc-container">
      <div class="padding">
        <div class="row">
          <div class="col text-left">
              <h2>Editar Libro</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                      <div class="col-sm-6">
                          <q-input label="Título" v-model.trim="form.title" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                          <q-input type="textarea" label="Descripción" autogrow v-model.trim="form.descr" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col q-mt-md text-left">
                          <q-btn color="blue-10" label="Editar" @click="editBook()" />
                          <q-btn class="q-ml-sm" color="red-10" label="Cancelar" :to="{ name: 'ListBooks' }" />
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</q-page>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data() {
    return {
      bookId: this.$route.params.bookId,
      form: {
        title: this.$route.params.bookTitle,
        descr: this.$route.params.bookDescr
      }
    }
  },
  methods: {
    editBook() {
      const PATH = `http://localhost:8000/api/v1.0/books/edit/?pk=${this.bookId}/`

      axios
        .put(PATH, this.form)
        .then(response => {
          this.form.title = response.data.book.title
          this.form.descrp = response.data.book.descr

          swal('¡Libro actualizado exitosamente!', '', 'success')
        })
        .catch(error => {
          swal('El libro no ha sido actualizado', '', 'error')
        })
    }
  },
  created() {}
}
</script>

<style>

</style>
