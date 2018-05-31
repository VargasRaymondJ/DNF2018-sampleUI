<template>

    <ag-grid-vue style="width: 500px; height: 250px;"
        class="ag-theme-material"
        :gridOptions="gridOptions"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
    
</template>

<script>
import {AgGridVue} from "ag-grid-vue";
export default {
    props: ['rows'],
    data()  {
        return {
            gridOptions: {},
            columnDefs: null,
            rowData: null
        }
    },
    components: {
        'ag-grid-vue': AgGridVue
        },
    created: function(){
        console.log('created');
},
    beforeMount: function() {

        console.log(this.rows)
            this.columnDefs = [
                {headerName: 'Age', field: 'age'},
                {headerName: 'Breed', field: 'breed'},
                {headerName: 'Coloring', field: 'coloring'},
                {headerName: 'Date', field: 'date'},
                {headerName: 'ID', field: 'id'},
                {headerName: 'Name', field: 'name'},
                {headerName: 'Species', field: 'species'}
            ];
            this.rowData = this.rows;
        },
}
</script>
