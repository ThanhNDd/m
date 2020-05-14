<template>
  <div>
    <div>
<!--      <lazy-component>-->
        <best-view-product-component></best-view-product-component>
<!--      </lazy-component>-->
    </div>
    <div>
<!--      <lazy-component>-->
        <tags-component></tags-component>
<!--      </lazy-component>-->
    </div>
    <div>
<!--      <lazy-component>-->
        <hotboy-component></hotboy-component>
<!--      </lazy-component>-->
    </div>
  </div>
</template>
<script>
    import tagsComponent from './tagsComponent.vue';
    import BestViewProductComponent from './BestViewProductComponent.vue';
    import HotboyComponent from './HotboyComponent.vue';

    export default {
        data() {
            return {
                products: '',
                url: '',
                swiper: null,
                recently: false
            }
        },
        components: {
            tagsComponent: () => import('./tagsComponent.vue'),
            BestViewProductComponent: () => import('./BestViewProductComponent.vue'),
            HotboyComponent: () => import('./HotboyComponent'),
        },
        created() {
            this.url = url;
        },
        methods: {
        },
        mounted: function () {
        },
    }
</script>
