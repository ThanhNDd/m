<template>
  <div class="list">
    <ul>
      <li>
          <div class="row">
            <div class="col-md-12 col-lg-12" v-html="attributes.short_description">
            </div>
          </div>
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Màu sắc</div>
            <div class="col-md-9 col-lg-9">
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
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Size</div>
            <div class="col-md-9 col-lg-9">
              <div class="size-choose">
                <div v-for="attr in attributes.size">
                  <input type="radio" v-bind:id="attr.size" name="size" v-bind:value="attr.size">
                  <label v-bind:for="attr.size"><span v-text="attr.size" @click="selectSize(attr.size)"></span></label>
                </div>
              </div>
            </div>
          </div>
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Cân nặng</div>
            <div class="col-md-9 col-lg-9">
              {{weight}}
            </div>
          </div>
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Chiều cao</div>
            <div class="col-md-9 col-lg-9">
              {{height}}
            </div>
          </div>
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Chất liệu</div>
            <div class="col-md-9 col-lg-9">
              {{attributes.material | format_material}}
            </div>
          </div>
      </li>
      <li>
          <div class="row">
            <div class="col-md-3 col-lg-3">Xuất xứ</div>
            <div class="col-md-9 col-lg-9">
              {{attributes.origin | format_origin}}
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
                    if (this.attributes.size.length > 0) {
                        let first = this.attributes.size[0].size;
                        let last = this.attributes.size[this.attributes.size.length - 1].size;
                        select_weight.forEach(function (item) {
                            if (first == item.id) {
                                first = item.text.split('-')[0];
                            }
                            if (last == item.id) {
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
                if (value != null) {
                    select_material.forEach(function (item) {
                        if (value == item.id) {
                            data = item.text;
                            return false;
                        }
                    });
                }
                return data;
            },
            format_origin: function (value) {
                let data = "";
                if (value != null) {
                    select_origin.forEach(function (item) {
                        if (value == item.id) {
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
                if (this.isMore) {
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
                select_weight.forEach(function (item) {
                    if (value == item.id) {
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
