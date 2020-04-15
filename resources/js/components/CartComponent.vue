<template>
    <div class="cart_number">
        <span class="badge badge-danger" v-if="cart_number">{{cart_number}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cart_number: ''
            }
        },
        created() {
            axios.get(url + '/api/cart')
                .then(response => {
                    this.cart_number = response.data
                });
        },
        methods: {}
    }
</script>
