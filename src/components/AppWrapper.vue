<template>
    <Header 
        @openCart="openCart" 
    />
    <Catalog />
    <Cart 
        :isCartOpen='isCartOpen' 
        @hideCart='hideCart'
    />
    <Footer />
</template>

<script>
import Header from './Header.vue'
import Catalog from './Catalog.vue'
import Cart from './Cart.vue'
import Footer from './Footer.vue'

export default {
    name: 'MainWrapper',
    components: {
        Header,
        Catalog,
        Cart,
        Footer,
    },
    data() {
        return {
            isCartOpen: false,
        }
    },
    methods: {
        openCart() {
            this.isCartOpen = true;
        },
        hideCart() {
            this.isCartOpen = false;
        }
    }
}
</script>

<style>
</style>