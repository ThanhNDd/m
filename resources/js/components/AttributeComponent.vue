<template>
    <div class="list">
        <ul>
            <li>
                <a href="#" class="item-link item-content sheet-open">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Màu sắc</div>
                            <div class="item-cell">
                                <div class="color-choose">
                                    <div v-for="attr in attributes.colors">
                                        <input type="radio" v-bind:id="attr.color" name="color" v-bind:value="attr.color"
                                               v-model="color">
                                        <label v-bind:for="attr.color"><span
                                            v-bind:style="attr.color | format_color"></span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item-link item-content sheet-open">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Size</div>
                            <div class="item-cell">
                                <div class="size-choose">
                                    <div v-for="attr in attributes.size">
                                        <input type="radio" v-bind:id="attr.size" name="size" v-bind:value="attr.size">
                                        <label v-bind:for="attr.size"><span v-text="attr.size"></span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="item-link item-content sheet-open">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Cách chọn size</div>
                            <div class="item-cell detail">Chi tiết</div>
                        </div>
                    </div>
                </a>
            </li>
            <li v-if="description.length > 0">
                <div style="position: relative;margin-bottom: 40px;overflow: hidden;" v-bind:style="{'height':height}">
                    <p style="font-size: 13px;color: #333;margin-top: 10px;margin-bottom: 10px;">Mô tả</p>
                    <div class="description" style="font-size: 13px;color: #333;" v-html="description">
                    </div>
                    <div style="font-size: 13px;text-align: center;height: 50px;display: table;width: 100%;bottom: 0;" v-bind:style="{'position':position}">
                        <div style="display: table-cell;background: linear-gradient(rgba(255, 255, 255, 0.7) 10%, rgb(255, 255, 255));vertical-align: middle;">
                            <a href="#" class="btn btn-info" style="color: #fff;font-size: 13px;background: var(--main-color);" @click="viewMore()">{{text}} <i class="fas" v-bind:class="icon"></i></a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                attributes: [],
                color: "",
                height: '130px',
                position: 'absolute',
                icon: 'fa-chevron-circle-down',
                isMore: true,
                text: 'Xem thêm'
            }
        },
        props: ['description'],
        created() {
            let id = document.querySelector('#product_id').getAttribute('value');
            axios.get(url + '/api/attributes/' + id)
                .then(response => {
                    this.attributes = response.data
                });
        },
        methods: {
            viewMore: function () {
                if(this.isMore) {
                    this.isMore = false;
                    this.height = 'auto';
                    this.position = 'inherit';
                    this.icon = 'fa-chevron-circle-up';
                    this.text = 'Thu gọn';
                } else {
                    this.isMore = true;
                    this.height = '130px';
                    this.position = 'absolute';
                    this.icon = 'fa-chevron-circle-down';
                    this.text = 'Xem thêm';
                }
            }
        }
    }
</script>
