<template>
    <section id="services" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Available dogs</h2>
            <hr>
            <ag-grid-vue style="width: 750px; height: 250px;"
                class="ag-theme-material"
                :gridOptions="gridOptions"
                :columnDefs="columnDefs"
                :rowData="rowData">
            </ag-grid-vue>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import {AgGridVue} from "ag-grid-vue";
export default {
    data()  {
        return {
            dogs: [
                {name: "Puggle", species: "Puggle", age: 5, color: "black", sex: "female"},
                {name: "Jack", species: "Lab", age: 1, color: "black", sex: "male"},
                {name: "Koda", species: "Husky", age: 8, color: "Red and White", sex: "male"},
                {name: "Bruce", species: "Mastiff", age: 3, color: "Brown", sex: "male"},
                {name: "Lola", species: "French Bulldog", age: 2, color: "Grey", sex: "female"}
            ],
            gridOptions: {},
            columnDefs: null,
            rowData: null
        }
    },
    methods: {
        foo() {
            this.$http.get('https://vuejs-http-a4289.firebaseio.com/data.json')
            .then(res => {
                console.log(res);
            }
            )
        }
    },
    components: {
        'ag-grid-vue': AgGridVue
        },
        created: function(){
            this.foo();
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'Name', field: 'name'},
                {headerName: 'Species', field: 'species'},
                {headerName: 'Age', field: 'age'},
                {headerName: 'Color', field: 'color'},
                {headerName: 'Sex', field: 'sex'},
            ];

            this.rowData = [
                {name: "Puggle", species: "Puggle", age: 5, color: "black", sex: "female"},
                {name: "Jack", species: "Lab", age: 1, color: "black", sex: "male"},
                {name: "Koda", species: "Husky", age: 8, color: "Red and White", sex: "male"},
                {name: "Bruce", species: "Mastiff", age: 3, color: "Brown", sex: "male"},
                {name: "Lola", species: "French Bulldog", age: 2, color: "Grey", sex: "female"}
            ];
        }

}
</script>

<style>
    section {
        padding: 150px 0;
    }
    .grid {
        width: 500px
    }
</style>
