<template>
    <div class="list">
        <ul>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
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
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Size</div>
                            <div class="item-cell">
                                <div class="size-choose">
                                    <div v-for="attr in attributes.size">
                                        <input type="radio" v-bind:id="attr.size" name="size" v-bind:value="attr.size">
                                        <label v-bind:for="attr.size"><span v-text="attr.size" @click="selectSize(attr.size)"></span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Cân nặng</div>
                            <div class="item-cell">{{weight}}</div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Chiều cao</div>
                            <div class="item-cell">{{height}}</div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Số lượng</div>
                            <div class="item-cell">
                                <div class="col-xl-9 col-lg-8 col-md-8 col-9">
                                    <div class="custom-qty">
                                        <button onclick="var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 ) &amp;&amp; qty1 > 1 ) result.value--;return false;" class="reduced items" type="button"> <i class="fa fa-minus"></i>
                                        </button>
                                        <input type="text" class="input-text qty" title="Qty" value="1" maxlength="8" id="qty1" name="qty">
                                        <button onclick="var result = document.getElementById('qty1'); var qty1 = result.value; if( !isNaN( qty1 )) result.value++;return false;" class="increase items" type="button"> <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Chất liệu</div>
                            <div class="item-cell">
                                <span>{{attributes.material | format_material}}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" class="item-link item-content">
                    <div class="item-inner item-cell">
                        <div class="item-row">
                            <div class="item-cell ">Xuất xứ</div>
                            <div class="item-cell">
                                <span>{{attributes.origin | format_origin}}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
<!--            <li>-->
<!--                <a href="#" class="item-link item-content sheet-open">-->
<!--                    <div class="item-inner item-cell">-->
<!--                        <div class="item-row">-->
<!--                            <div class="item-cell ">Cách chọn size</div>-->
<!--                            <div class="item-cell detail">Chi tiết</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </a>-->
<!--            </li>-->
            <li v-if="description.length > 0">
                <div style="position: relative;margin-bottom: 40px;overflow: hidden;" v-bind:style="{'height':height}">
                    <p style="font-size: 13px;color: #333;margin-top: 10px;margin-bottom: 10px;">Mô tả</p>
                    <div class="description" style="font-size: 13px;color: #333;" v-html="description">
                    </div>
                    <div style="font-size: 13px;text-align: center;height: 50px;display: table;width: 100%;bottom: 0;" v-bind:style="{'position':position}">
                        <div style="display: table-cell;background: linear-gradient(rgba(255, 255, 255, 0.7) 10%, rgb(255, 255, 255));vertical-align: middle;">
                            <a href="javascript:void(0);" class="btn btn-info" style="color: #fff;font-size: 13px;background: var(--main-color);" @click="viewMore()">{{text}} <i class="fas" v-bind:class="icon"></i></a>
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
                text: 'Xem thêm',
                weight: '',
                qty: 0
            }
        },
        props: ['description'],
        created() {
            let id = document.querySelector('#product_id').getAttribute('value');
            axios.get(url + '/api/attributes/' + id)
                .then(response => {
                    this.attributes = response.data;
                    if(this.attributes.size.length > 0) {
                        let first = this.attributes.size[0].size;
                        let last = this.attributes.size[this.attributes.size.length - 1].size;
                        select_weight.forEach(function(item) {
                            if(first == item.id) {
                                first = item.text.split('-')[0];
                            }
                            if(last == item.id) {
                                last = item.text.split('-')[1];
                            }
                        });
                        this.weight = first + " - " + last;
                    }
                });
        },
        filters: {
            format_material: function (value) {
                let data = "";
                if(value != null) {
                    select_material.forEach(function(item) {
                        if(value == item.id) {
                            data = item.text;
                            return false;
                        }
                    });
                }
                return data;
            },
            format_origin: function (value) {
                let data = "";
                if(value != null) {
                    select_origin.forEach(function(item) {
                        if(value == item.id) {
                            data = item.text;
                            return false;
                        }
                    });
                }
                return data;
            }
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
            },
            selectSize: function (value) {
                let w = this.weight;
                select_weight.forEach(function(item) {
                    if(value == item.id) {
                        w = item.text;
                        return false;
                    }
                });
                this.weight = w;
            }
        }
    };
    let select_origin = [
        {
            id: '-1',
            text: ''
        },
        {
            id: '1',
            text: 'Việt Nam'
        },
        {
            id: '2',
            text: 'Trung Quốc'
        }
    ];

    let select_material = [
        {
            id: '-1',
            text: ''
        },
        {
            id: '1',
            text: 'Cotton'
        },
        {
            id: '2',
            text: 'Kaki'
        },
        {
            id: '3',
            text: 'Jeans'
        },
        {
            id: '4',
            text: 'Thô'
        },
        {
            id: '5',
            text: 'Voan'
        },
        {
            id: '6',
            text: 'Lanh'
        },
        {
            id: '7',
            text: 'đũi'
        },
        {
            id: '8',
            text: 'Ren'
        },
        {
            id: '9',
            text: 'PE'
        },
        {
            id: '10',
            text: 'nylon'
        },
        {
            id: '11',
            text: 'Nỉ'
        },
        {
            id: '12',
            text: 'Len'
        }
    ];

    let select_weight = [
        {
            id: '60',
            text: '3kg - 6kg'
        },
        {
            id: '73',
            text: '6kg - 8kg'
        },
        {
            id: '80',
            text: '8kg - 10kg'
        },
        {
            id: '90',
            text: '11kg - 13kg'
        },
        {
            id: '100',
            text: '14kg - 16kg'
        },
        {
            id: '110',
            text: '17kg - 18kg'
        },
        {
            id: '120',
            text: '19kg - 20kg'
        },
        {
            id: '130',
            text: '21kg - 23kg'
        },
        {
            id: '140',
            text: '24kg - 27kg'
        },
        {
            id: '150',
            text: '28kg - 32kg'
        },
        {
            id: '160',
            text: '33kg - 40kg'
        }
    ];
</script>
