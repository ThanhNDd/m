<template>
    <span v-if="status == true" class="badge badge-success status-text">Còn hàng</span>
    <span v-else class="badge badge-danger status-text">Hết hàng</span>
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
                        this.status = response.data > 0;
                        setTimeout(function () {
                            if(document.querySelector("#remain_qty")) {
                                document.querySelector("#remain_qty").textContent = response.data+" sản phẩm có sẵn";
                            }
                        }, 500);
                    });
            },
        },
    }
</script>
