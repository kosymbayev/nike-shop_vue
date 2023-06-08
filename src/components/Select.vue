<template>
    <div class="select">
        <p 
            class="select_title"
            @click='areOptionsVisible = !areOptionsVisible'
        >{{ selected }}</p>
        <div 
            class="select_options"
            v-if="areOptionsVisible"
        >
            <p 
                v-for="option in options"
                :key='option.name'
                @click='selectOption(option)'
            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheSelect',
    props: {
        options: {
            type: Array,
            default: () => {
                return []
            }
        },
        selected: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            areOptionsVisible: false,
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.hideSelect)
    },
}
</script>

<style>
.select 
{
    position: relative;
    width: 200px;
}
.select_title
{
    border: 2px solid #F5F5F5;
    cursor: pointer;
}
.select p 
{
    margin: 0;
    padding: 5px;
    cursor: pointer;
}

.select_options 
{
    border: 2px solid #F5F5F5;
    position: absolute;
    top: 29px;
    right: 0;
    width: 100%;
    background: #fff;
}
.select_options p:hover
{
    background: #F5F5F5;
}
</style>