<template>
    <div class="cart" :class="{ 'cart_open' : isCartOpen }">
        <h2>Your cart</h2>
        <box-icon 
            name='x' 
            class="x" 
            @click="hideCart"
        ></box-icon>
        <p v-if="!CART.length">There are no product in cart...</p>
        <div class="cart_items">
            <CartItem 
                v-for='(item, index) in CART'
                :key='item.article'
                :cart_item_data='item'
                @deleteFromCart='deleteFromCart(index)'
                @increment='increment(index)'
                @decrement='decrement(index)'
            />
        </div>
        <div class="cart_total">
            <p class="cart_total_name">Total:</p>
            <p>$ {{cartTotalCost}}</p>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TheCart',
    components: {
        CartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        },
        isCartOpen: {
            type: Boolean,
            dehault() {
                return false;
            }
        }
    },
    computed: {
        ...mapGetters([
            'CART',
        ]),
        cartTotalCost() {
            let result = [];

            if( this.CART.length ) {
                for( let item of this.CART) {
                    result.push(item.price * item.quantity);
                }
                
                result = result.reduce(function( sum, el ) {
                    return sum + el;
                })
            }
            else
            {
                result = 0;
            }
            return result;
        },
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },

        hideCart() {
            this.$emit('hideCart');
        }
    }
}
</script>

<style>
.cart
{
    position: absolute;
    top: 0;
    right: -320px;
    background: #fff;
    min-height: 100vh;
    width: 320px;
    padding: 40px 20px 20px 20px;
    transition: right 0.3s ease-in-out;
}
.cart.cart_open {
    right: 0;
}

.cart h2 {
    margin-bottom: 20px;
}

.cart .x {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.cart_items {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
}

.cart_total
{
    display: flex;
    justify-content: right;
    gap: 10px;
    margin-top: 20px;
    border-top: 1px solid #111;
    padding-top: 10px;
}
.cart_total_name
{
    font-weight: 500;
}
</style>