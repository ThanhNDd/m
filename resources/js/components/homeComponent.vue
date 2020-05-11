<!--<template>-->
<!--  <div>-->
<!--      <best-seller-component></best-seller-component>-->
<!--    <div>-->
<!--      <lazy-component>-->
<!--        <flash-sale-component></flash-sale-component>-->
<!--      </lazy-component>-->
<!--    </div>-->
<!--    <div>-->
<!--      <lazy-component>-->
<!--        <latest-component></latest-component>-->
<!--      </lazy-component>-->
<!--    </div>-->
<!--    <div class="flash-sale segments no-pd-b" v-if="recently">-->
<!--      <lazy-component>-->
<!--          <viewed-product-component></viewed-product-component>-->
<!--      </lazy-component>-->
<!--    </div>-->
<!--    <div>-->
<!--&lt;!&ndash;      <lazy-component>&ndash;&gt;-->
<!--        <blog-component></blog-component>-->
<!--&lt;!&ndash;      </lazy-component>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--    import VueSession from 'vue-session';-->
<!--    Vue.use(VueSession);-->
<!--    import latestProductComponent from './LatestProductComponent.vue';-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                recently: false-->
<!--            }-->
<!--        },-->
<!--        components: {-->
<!--          latestComponent: () => import('./LatestProductComponent.vue')-->
<!--        },-->
<!--        methods: {-->

<!--        },-->
<!--        mounted: function () {-->
<!--            this.$session.start();-->
<!--            if (this.$session.exists('viewed')){-->
<!--                this.recently = true;-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->
