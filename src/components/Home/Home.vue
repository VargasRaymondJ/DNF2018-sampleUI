<template>
    <div>
        <app-heading></app-heading>
        <app-about></app-about>
    </div>
</template>

<script>
import Heading from './Heading.vue';
import About from './About.vue';

export default {
    components: {
        appHeading: Heading,
        appAbout: About
    }
}
</script>

<style>

</style>
