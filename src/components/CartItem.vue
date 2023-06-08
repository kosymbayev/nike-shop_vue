<template>
    <div class="cart_item">
        <img 
            class="cart_item_img" 
            :src="'src/assets/images/' + cart_item_data.image" 
            alt="img"
        >
        <div class="cart_item_info">
            <p class="cart_item_name">{{ cart_item_data.name }}</p>
            <p class="cart_item_price">$ {{ cart_item_data.price }}</p>
            <div class="cart_item_quatity">
                <div class="cart_quantity_btn" @click='decrementItem'>-</div>
                <span class="cart_quantity_count">{{ cart_item_data.quantity }}</span>
                <div class="cart_quantity_btn" @click='incrementItem'>+</div>
            </div>
        </div>
        <button class="cart_item_delete" @click='deleteFromCart'><box-icon name='trash-alt' type='solid' color='#111111' ></box-icon></button>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cart_item_data: {
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
        deleteFromCart() {
            this.$emit( 'deleteFromCart' )
        },
        decrementItem() {
            this.$emit( 'decrement' )
        },
        incrementItem() {
            this.$emit( 'increment' )
        },
    }
}
</script>

<style>
.cart_item {
    display: flex;
    align-items: center;
    gap: 10px;
}
.cart_item_img
{
    max-width: 64px;
}

.cart_item_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.cart_item_name {
    font-weight: 500;
    text-transform: uppercase;
}

.cart_item_quatity {
    display: flex;
}

.cart_quantity_btn
{
    cursor: pointer;
    font-size: 16px;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #111;
    text-align: center;
}
.cart_quantity_count {
    margin: 0px 4px;
    width: 16px;
    text-align: center;
}

.cart_item_delete {
    align-self: center;
    background: none;
    outline: 0;
    border: 0;
    cursor: pointer;
}

</style>