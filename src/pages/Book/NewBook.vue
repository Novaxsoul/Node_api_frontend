<template>
<q-page padding>
    <div class="doc-container">
      <div class="padding">
        <div class="row">
          <div class="col text-left">
              <h2>Nuevo Libro</h2>
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
                          <q-btn color="blue-10" label="Crear" @click="createBook()" />
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
      form: {
        title: '',
        descr: ''
      }
    }
  },
  methods: {
    createBook() {
      const PATH = 'http://localhost:8000/api/v1.0/books/save'

      axios
        .post(PATH, this.form)
        .then(response => {
          this.form.title = response.data.title
          this.form.descrp = response.data.descrp

          swal('¡Libro creado exitosamente!', '', 'success')
        })
        .catch(error => {
          swal('El libro no ha sido creado', '', 'error')
        })
    }
  },
  created() {}
}
</script>

<style>

</style>
