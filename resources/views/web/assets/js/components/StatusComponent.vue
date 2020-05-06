<template>
    <span v-bind:class="status ? 'text-success' : 'text-danger'">{{status ? 'Còn hàng' : 'Hết hàng'}}</span>
</template>

<script>
    export default {
        data() {
            return {
                status: true
            }
        },
        props: ['product_id'],
        created() {
            this.checkStatus();
        },
        methods: {
            checkStatus: function() {
                axios.get(url + '/api/status/'+this.product_id)
                    .then(response => {
                        this.status = response.data[0].status === 0;
                    });
            },
        },
    }
</script>
