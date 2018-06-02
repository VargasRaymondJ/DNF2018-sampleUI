<template>
    <section id="services" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Vegas Golden Knights</h2>
            <hr>
            <app-grid :rows="knights"></app-grid>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Grid from './grid/Grid';
export default {
    data()  {
        return {
            knights: []
        }
    },
    components: {
        appGrid: Grid
    },
    methods: {
        foo: function() {
            return this.$http.get('http://localhost:8081/knights')
            .then(res => {
                this.knights=res.data;
            });
        }
    },
    mounted: function() {
        this.foo();
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
