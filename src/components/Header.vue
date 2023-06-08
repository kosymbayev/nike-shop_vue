<template>
    <header class="header" id="header">
        <div class="container">
            <div class="logo">Nike Store</div>
            <box-icon 
                @click="openCart" 
                name='shopping-bag' 
                class="shopping-bag"
            ></box-icon>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        openCart() {
            this.$emit('openCart');
        }
    }
};
</script>

<style>
.header {
    background: #fff;
    border-bottom: 2px solid #F5F5F5;
    height: 60px;
}
.header .container {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .logo {
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
}
.header .shopping-bag {
    cursor: pointer;
    width: 30px;
    height: 30px;
}
</style>