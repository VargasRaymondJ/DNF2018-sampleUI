<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
      <div class="container">
        <router-link to="/" class="navbar-brand js-scroll-trigger">DevNation Federal</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <router-link to="/caps" tag="li" class="nav-item"><a class="nav-link js-scroll-trigger">Washington Caps</a></router-link>
            <router-link to="/knights" tag="li" class="nav-item"><a class="nav-link js-scroll-trigger">Vegas Golden Knights</a></router-link>

          </ul>
        </div>
      </div>
    </nav>

</template>

<script>
export default {
}
</script>

<style scoped>
  
</style>
