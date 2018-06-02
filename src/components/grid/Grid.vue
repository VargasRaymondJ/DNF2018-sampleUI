<template>

    <ag-grid-vue style="width: 750px; height: 320px;"
        class="ag-theme-material"
        :gridOptions="gridOptions"
        :columnDefs="columnDefs"
        :rowData="rows">
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

// Can't load this in as a prop, as it's not defined here yet
            this.columnDefs = [
                {headerName: 'Position', field: 'pos'},
                {headerName: 'Player', field: 'player'},
                {headerName: 'Age', field: 'age'},
                {headerName: 'Quickstats', field: 'summary'},
                {headerName: 'Weight', field: 'weight'},
                {headerName: 'Birth Date', field: 'birthdate'}
            ];
        },
}
</script>
