<template>
    <AppWrapper />
</template>

<script>
import AppWrapper from './components/AppWrapper.vue'

export default {
    name: 'App',
    components: {
        AppWrapper,
    },
    data() {
        return {}
    },
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'montserrat', sans-serif;
    color: #111;
}
body {
    overflow-x: hidden;
}
.container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
}
h1, h2 {
    text-align: center;
    font-weight: 500;
}
</style>