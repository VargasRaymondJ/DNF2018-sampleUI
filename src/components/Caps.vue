<template>
    <section id="services" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Washington Capitals</h2>
            <hr>
            <app-grid :rows="caps"></app-grid>
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
            caps: [],
        }
    },
    components: {
        appGrid: Grid
    },
    methods: {
        foo: function() {
            return this.$http.get('/static/config/env.json')
            .then(res => {
                this.$http.get(res.data.api + '/caps')
                .then(data => {
                    this.caps=data.data
                })
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
