<template>
    <div class="catalog_item">
        <img 
            class="catalog_item_img" 
            :src="'src/assets/images/' + product_data.image" 
            alt="img"
        >
        <div class="catalog_item_info_block">
            <div class="catalog_item_info">
                <p class="catalog_item_name">{{product_data.name}}</p>
                <p class="catalog_item_price">$ {{product_data.price}}</p>
            </div>
            <button 
                class="catalog_item_add" 
                @click='addToCart'
            ><box-icon name='shopping-bag' class="shopping-bag" type='solid' color='#ffffff' ></box-icon>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {}
}
</script>

<style>
.catalog_item {
    display: flex;
    flex-direction: column;
}
.catalog_item_img {
}

.catalog_item_info_block {
    display: flex;
    height: 100%;
    margin-top: 10px;
}
.catalog_item_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
}

.catalog_item_name {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
}
.catalog_item_price {
    font-size: 16px;
    font-weight: 500;
}

.catalog_item_add {
    align-self: self-end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    min-width: 30px;
    height: 30px;
    background: #000;
    outline: 0;
    border: 0;
    cursor: pointer;
}
.catalog_item_add .shopping-bag {
    width: 22px;
    height: 22px;
}
</style>