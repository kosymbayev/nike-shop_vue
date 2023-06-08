<template>
    <div class="catalog">
        <div class="container">
            <h1>Products</h1>
            <Select 
                :options='categories'
                :selected='selected'
                @select="sortByCategories"
            />
            <div class="catalog_list">
                <CatalogItem 
                    v-for='product in filteredProducts'
                    :key='product.article'
                    :product_data='product'
                    @addToCart='addToCart'
                />
            </div>
        </div>
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import Select from './Select.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'TheCatalog',
    components: {
        CatalogItem,
        Select
    },
    data() {
        return {
            categories: [
                {name: 'All', value: 'all'},
                {name: 'Air max', value: 'Air-max'},
                {name: 'Air force', value: 'Air-force'},
                {name: 'Lifestyle', value: 'Lifestyle'},
                {name: 'Jordan', value: 'Jordan'},
            ],
            selected: 'All',
            sortedProducts: []
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
        ]),
        filteredProducts() {
            if( this.sortedProducts.length ) {
                return this.sortedProducts;
            } else {
                return this.PRODUCTS;
            }
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),

        addToCart(data) {
            this.ADD_TO_CART(data)
        },

        sortByCategories(category) {
            console.log(category)
            this.sortedProducts = [];
            let thisSortedProducts = this;
            this.PRODUCTS.map(function(item) {
                if( item.category.includes(category.value) ) {
                    thisSortedProducts.sortedProducts.push(item);
                }
            })
            this.selected = category.name;
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if( response.data) {
                console.log('Data arrived');
            }
        })
    }
}
</script>

<style>
.catalog {}

.catalog .select {
    margin-bottom: 30px;
}

.catalog_list {
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(200px, 1fr));
    gap: 24px;
}

</style>