import { createStore } from 'vuex';
import axios from "axios";

const store = createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: ( state, products ) => {// Заполнение products
            state.products = products;
        },
    
        SET_CART: (state, product) => {// Добавление в корзину
            if( state.cart.length ) {
                let isProductExist = false;
                state.cart.map(function (item) {
                    if( item.article === product.article ) {// Если артикль добавляемого товара равен товару в корзине
                        isProductExist = true;
                        item.quantity++;
                    }
                })
                if( !isProductExist ) {// Если такого товара нет в корзине
                    product.quantity = 1; // Добавление свойства quantity
                    state.cart.push(product);
                }
            } else {
                product.quantity = 1; // Добавление свойства quantity
                state.cart.push(product);
            }
        },
        REMOVE_FROM_CART: (state, index) => {// Удаление из корзины
            state.cart.splice(index, 1);
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++;
        },
        DECREMENT: (state, index) => {
            if( state.cart[index].quantity > 1 ) {
                state.cart[index].quantity--;
            }
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {// Получаем товары из db.json
            return axios( 'http://localhost:3000/products', {
                method: 'GET',
                params: {}
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        },
    
        ADD_TO_CART({commit}, product) {// Добавление в корзину
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {// Удаление из корзины
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    },
});

export default store;