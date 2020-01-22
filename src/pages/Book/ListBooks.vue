<template>
  <q-page padding>
    <div class="doc-container">
      <div class="padding">
        <div class="row">
          <div class="col-md-8 text-left q-mb-sm">
            <div>
                <h2>Listado de libros</h2>
                <q-btn label="Nuevo libro" class="text text-center" :to="{name: 'NewBook'}" color="blue-10" />
            </div>
          </div>
          <div class="col-md-2">
            <q-input class="q-mr-md" v-model="search_term" label="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-md-2">
            <q-btn color="blue-10" label="Search" @click.prevent="getBooks()" />
          </div>
          <div class="col-md-12">
            <q-table title="Libros" :data="books" :columns="fields" row-key="id">
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <q-btn label="Editar" color="blue-10" :to="{ name:'EditBook', params:{ bookId: props.row.id, bookTitle: props.row.title, bookDescr: props.row.descr }}" />
                  <q-btn class="q-ml-sm" label="Eliminar" color="red-10" :to="{ name:'DeleteBook', params:{ bookId: props.row.id, bookTitle: props.row.title }}" />
                </q-td>
              </template>
            </q-table>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fields: [
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`
        },
        { name: 'title', align: 'center', field: 'title', label: 'Título', sortable: true},
        { name: 'descr', align: 'center', field: 'descr', label: 'Descripción' },
        { name: 'action', field: 'action', label: '' }
      ],
      books: [],
      search_term: ''
    }
  },
  methods: {
    getBooks() {
      let PATH = 'http://localhost:8000/api/v1.0/books/'
      if (this.search_term !== '' || this.search_term !== null) {
        PATH = `http://localhost:8000/api/v1.0/books/?search=${
          // eslint-disable-next-line
          this.search_term
        }`
      }
      axios
        .get(PATH)
        .then(response => {
          this.books = response.data.books
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created() {
    this.getBooks()
  }
}
</script>

<style>

</style>
