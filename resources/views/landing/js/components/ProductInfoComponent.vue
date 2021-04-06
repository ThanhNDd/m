<template>
  <div class="product">
    <div class="container" v-if="not_found">
      <p class="w-100 text-center text-danger">Không tìm thấy sản phẩm</p>
    </div>
    <div v-else>
      <div class="row" v-for="p in products" :key="p.product_id">
        <div
          id="demo"
          class="carousel slide mt-4 mb-2 col-md-5 d-inline-block"
          data-ride="carousel"
        >
          <div class="carousel-inner" id="carousel_image">
            <div
              class="carousel-item"
              v-for="(image, index) in JSON.parse(p.slider)"
              :class="{ active: index === 0 }"
              :key="image.src"
            >
              <div
                :style="{
                  'background-image': 'url(' + image.src + ')',
                }"
              ></div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
        <div class="form mt-4 mb-5 col-md-6 d-inline-block">
          <input type="hidden" :value="p.product_id" id="product_id" />
          <h3 id="product_name">{{ p.name }}</h3>
          <table class="table">
            <tbody>
              <tr>
                <td class="font-weight-bold">Giá</td>
                <td>
                  <span id="retail">{{ p.retail }}</span> <sup>đ</sup>
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Màu</td>
                <td>
                  <div class="color-product">
                    <button
                      class="btn btn-outline-secondary m-1 color"
                      :class="{
                        selected: selected_value.includes(
                          p.product_id + '_' + c
                        ),
                        'color-active': c == current_color_selected,
                      }"
                      @click="handleClickChooseColor($event, c)"
                      :ref="p.product_id + '_' + c"
                      v-for="(c, idx) in p.colors"
                      :key="idx"
                    >
                      {{ c }}
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Size</td>
                <td>
                  <div class="size-product">
                    <button
                      class="btn btn-outline-secondary m-1 size"
                      :class="{
                        selected: selected_value.includes(
                          p.product_id + '_' + s
                        ),
                      }"
                      :disabled="setDisabledSize(p.product_id, s)"
                      v-for="(s, idx) in p.sizes"
                      @click="handleClickChooseSize($event, s)"
                      :ref="p.product_id + '_' + s"
                      :key="idx"
                    >
                      {{ s }}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="form-group"
            v-if="p.description && p.description !== '<p><br></p>'"
          >
            <label class="control-label col-sm-2 font-weight-bold"
              >Mô tả:</label
            >
            <div class="col-sm-10">
              <div
                :style="
                  !is_view_more ? `max-height: 100px; overflow: hidden` : ''
                "
                v-html="p.description"
              ></div>
              <span
                class="d-inline-block w-100 text-center text-primary"
                v-on:click="is_view_more = !is_view_more"
              >
                <span v-if="!is_view_more">
                  <i class="fas fa-chevron-circle-down"></i> Xem thêm
                </span>
                <span v-else>
                  <i class="fas fa-chevron-circle-up"></i> Thu gọn
                </span>
              </span>
            </div>
          </div>
          <div>
            <a
              href="#cart-info"
              class="btn btn-success col-12"
              v-if="total_amount > 0"
            >
              <span class="d-inline-block w-100">Xem giỏ hàng</span>
              <small
                class="w-100 d-inline-block font-italic"
                style="font-size: 70%"
                v-if="total_quantity > 0"
                >({{ total_quantity }} sản phẩm)</small
              >
            </a>
            <button
              v-else
              class="btn btn-success col-12"
              :disabled="total_amount == 0"
            >
              <span class="d-inline-block w-100">Xem giỏ hàng</span>
            </button>
            <small
              class="d-inline-block w-100 text-center font-italic mb-3"
              style="font-size: 73%"
            >
              Vui lòng chọn màu sắc và size để thêm sản phẩm vào giỏ hàng
            </small>
          </div>
        </div>
      </div>
      <section class="view-more-products">
        <h5 class="text-center">Xem thêm sản phẩm khác</h5>
        <div class="list mb-4">
          <div
            class="items m-2 p-2"
            v-for="p in relate_products"
            :key="p.product_id"
          >
            <input type="hidden" :value="p.product_id" />
            <div
              class="images c-pointer"
              :style="{
                'background-image': 'url(' + p.image + ')',
              }"
              v-on:click="handleClickRelate(p.product_id)"
            ></div>
            <div
              class="title mt-2 mb-2 c-pointer"
              v-on:click="handleClickRelate(p.product_id)"
            >
              {{ p.name }}
            </div>
            <div class="price">{{ p.retail }} <sup>đ</sup></div>
          </div>
        </div>
      </section>
      <section
        class="mb-4 cart-info col-sm-12 col-md-6 m-auto pl-0 pr-0"
        v-if="total_amount > 0"
      >
        <a
          name="cart-info"
          class="text-center d-inline-block w-100"
          style="
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.2;
            color: #212529;
          "
        >
          Thông tin giỏ hàng
        </a>
        <div class="container" v-for="(prod, idx) in data_orders" :key="idx">
          <div v-if="prod.total_quantity > 0">
            <div class="row header mb-2 pb-2 row-product">
              <a
                href="javascript:void(0)"
                class="font-weight-bold w-50 c-pointer"
                v-on:click="handleClickRelate(prod.product_id)"
              >
                {{ prod.name }}
              </a>
              <div class="text-center w-25 font-weight-bold">
                {{ prod.total_quantity }}
              </div>
              <div
                class="text-right w-25 font-weight-bold"
                v-html="$options.filters.formatNumber(prod.total_money)"
              ></div>
            </div>
            <div v-for="(detail, index) in prod.detail" :key="index">
              <div v-for="(obj, color) in detail" :key="color">
                <div v-if="obj.length > 0">
                  <div
                    class="row pl-2 pb-2 mb-2 row-product"
                    v-for="(data, idx2) in obj"
                    :key="idx2"
                  >
                    <div class="w-50">
                      <small class="text-gray font-italic">Màu:</small>
                      <small>{{ color }}</small
                      ><br />
                      <small class="text-gray font-italic">Size:</small>
                      <small>{{ data.size }}</small>
                      <br />
                      <small class="text-gray font-italic">Giá:</small>
                      <small
                        v-html="$options.filters.formatNumber(data.retail)"
                      ></small>
                    </div>
                    <div class="w-25">
                      <div
                        class="d-inline-block w-100 text-center text-secondary c-pointer"
                        v-on:click="
                          plusQuantity(prod.product_id, color, data.size)
                        "
                      >
                        <i class="fas fa-sort-up"></i>
                      </div>
                      <small class="d-inline-block w-100 text-center">{{
                        data.quantity
                      }}</small>
                      <div
                        class="d-inline-block w-100 text-center text-secondary c-pointer"
                        v-on:click="
                          minusQuantity(prod.product_id, color, data.size)
                        "
                      >
                        <i class="fas fa-sort-down"></i>
                      </div>
                    </div>
                    <div class="w-25 text-right">
                      <small
                        v-html="$options.filters.formatNumber(data.retail)"
                      ></small>
                      <br />
                      <small
                        class="d-inline-block w-100 mt-1 text-danger c-pointer"
                        v-on:click="
                          removeProduct(prod.product_id, color, data.size)
                        "
                      >
                        Xoá
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" v-if="total_amount > 0">
          <div class="row mb-2">
            <div class="w-75 text-right font-weight-bold">Tổng</div>
            <div class="w-25 text-right">
              <span
                class="w-100 d-inline-block font-weight-bold"
                v-html="$options.filters.formatNumber(total_amount)"
              ></span>
              <small
                class="w-100 d-inline-block font-italic"
                style="font-size: 70%"
                >({{ total_quantity }} sản phẩm)</small
              >
            </div>
          </div>
        </div>
        <div class="btn-order">
          <small
            class="d-inline-block w-100 text-center text-danger font-italic mb-2"
            v-if="total_amount > 0 && total_amount < 500000"
          >
            *Miễn phí vận chuyển với đơn hàng từ 500k
          </small>
          <small
            class="d-inline-block w-100 text-center text-success font-italic mb-2"
            v-if="total_amount > 500000"
          >
            *Đơn hàng của bạn được miễn phí vận chuyển
          </small>
          <div class="form-group text-center">
            <button
              class="btn btn-success col-sm-12 col-md-12"
              v-if="total_quantity == 0"
              disabled
            >
              <span class="d-inline-block w-100">ĐẶT HÀNG</span>
            </button>
            <button
              class="btn btn-success col-sm-12 col-md-12"
              v-on:click="placeOrder"
              v-else
            >
              <span class="d-inline-block w-100">ĐẶT HÀNG</span>
              <small
                class="d-inline-block w-100 font-italic"
                v-if="total_quantity > 0"
              >
                ({{ total_quantity }} sản phẩm)
              </small>
              <small
                class="d-inline-block w-100 font-italic"
                v-if="total_amount > 500000"
              >
                Miễn phí vận chuyển
              </small>
            </button>
          </div>
        </div>
      </section>
      <section
        class="contact-info col-sm-12 col-md-5 pr-0 pl-0"
        :class="{
          'd-inline-block': is_place_order,
        }"
        v-show="is_place_order"
      >
        <a
          name="contact"
          class="text-center d-inline-block w-100"
          style="
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.2;
            color: #212529;
          "
          >Thông tin liên hệ</a
        >
        <div class="form-group mb-1">
          <label for="regphone_">
            Số điện thoại<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            :class="[
              'form-control',
              !is_validphone_ || !is_validphone__format
                ? 'form-control--error'
                : '',
            ]"
            placeholder="Số điện thoại"
            id="regphone_"
            v-model="phone_"
            :disabled="show_loading"
            ref="phone"
            autocomplete="off"
          />
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_validphone_"
          >
            Trường này là bắt buộc
          </small>
          <small
            class="mt-1 text--error d-inline-block"
            v-if="!is_validphone__format"
          >
            Số điện thoại không đúng
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="name"> Họ Tên<span class="text-danger">*</span> </label>
          <input
            type="text"
            :class="[
              'form-control',
              !is_valid_name ? 'form-control--error' : '',
            ]"
            placeholder="Họ tên"
            id="name"
            v-model="name"
            :disabled="show_loading"
            ref="name"
            autocomplete="off"
          />
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_valid_name"
          >
            Trường này là bắt buộc
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="reg_email">Email</label>
          <input
            type="email"
            :class="['form-control']"
            placeholder="Email"
            id="reg_email"
            v-model="email"
            :disabled="show_loading"
            ref="email"
            autocomplete="off"
          />
          <small
            class="mt-1 text--error d-inline-block"
            v-if="!is_valid_email_format"
          >
            Email không đúng
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="city">
            Tỉnh / Thành phố<span class="text-danger">*</span>
          </label>
          <v-select
            :options="city"
            :reduce="(city) => city.id"
            :selected="(city) => city.id"
            @input="changeCity"
            v-model="city_id"
            placeholder="Thành phố"
            label="text"
            ref="city"
            id="city"
            :disabled="show_loading"
            :class="[!is_valid_city ? 'form-control--error' : '']"
          >
          </v-select>
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_valid_city"
          >
            Trường này là bắt buộc
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="district">
            Quận / Huyện<span class="text-danger">*</span>
          </label>
          <v-select
            :options="district"
            :reduce="(district) => district.id"
            :selected="(district) => district.id"
            @input="changeDistrict"
            v-model="district_id"
            placeholder="Quận huyện"
            label="text"
            ref="district"
            id="district"
            :disabled="show_loading"
            :class="[!is_valid_district ? 'form-control--error' : '']"
          >
          </v-select>
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_valid_district"
          >
            Trường này là bắt buộc
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="village">
            Phường / Xã<span class="text-danger">*</span>
          </label>
          <v-select
            :options="village"
            :reduce="(village) => village.id"
            :selected="(village) => village.id"
            @input="changeVillage"
            v-model="village_id"
            placeholder="Phường xã"
            label="text"
            ref="village"
            id="village"
            :disabled="show_loading"
            :class="[!is_valid_village ? 'form-control--error' : '']"
          >
          </v-select>
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_valid_village"
          >
            Trường này là bắt buộc
          </small>
        </div>
        <div class="form-group mb-1">
          <label for="reg_address">
            Địa chỉ<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            :class="[
              'form-control',
              !is_valid_address ? 'form-control--error' : '',
            ]"
            placeholder="Số nhà, ..."
            id="reg_address"
            v-model="address"
            :disabled="show_loading"
            ref="address"
            autocomplete="off"
          />
          <small
            class="mt-1 mb-1 text--error d-inline-block"
            v-if="!is_valid_address"
          >
            Trường này là bắt buộc
          </small>
        </div>
        <div class="form-group">
          <label for="note">Ghi chú</label>
          <textarea
            placeholder="Ghi chú đơn hàng ..."
            class="form-control"
            id="note"
            v-model="note"
            ref="note"
          ></textarea>
        </div>
      </section>
      <section
        class="mb-4 order-info col-sm-12 col-md-6 d-inline-block align-top"
        v-if="is_place_order"
      >
        <h5 class="text-center">Thông tin đơn hàng</h5>
        <div class="container" v-for="(prod, idx) in data_orders" :key="idx">
          <div v-if="prod.total_quantity > 0">
            <div class="row header mb-2 pb-2 row-product">
              <div
                class="font-weight-bold w-50 c-pointer"
                v-on:click="handleClickRelate(prod.product_id)"
              >
                {{ prod.name }}
              </div>
              <div class="text-center w-25 font-weight-bold">
                {{ prod.total_quantity }}
              </div>
              <div
                class="text-right w-25 font-weight-bold"
                v-html="$options.filters.formatNumber(prod.total_money)"
              ></div>
            </div>
            <div v-for="(detail, index) in prod.detail" :key="index">
              <div v-for="(obj, color) in detail" :key="color">
                <div v-if="obj.length > 0">
                  <div
                    class="row pl-2 pb-2 mb-2 row-product"
                    v-for="(data, idx2) in obj"
                    :key="idx2"
                  >
                    <div class="w-50">
                      <small class="text-gray font-italic">Màu:</small>
                      <small>{{ color }}</small
                      ><br />
                      <small class="text-gray font-italic">Size:</small>
                      <small>{{ data.size }}</small>
                      <br />
                      <small class="text-gray font-italic">Giá:</small>
                      <small
                        v-html="$options.filters.formatNumber(data.retail)"
                      ></small>
                    </div>
                    <div class="w-25">
                      <small class="d-inline-block w-100 text-center">{{
                        data.quantity
                      }}</small>
                    </div>
                    <div class="w-25 text-right">
                      <small
                        v-html="$options.filters.formatNumber(data.retail)"
                      ></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" v-if="total_amount > 0">
          <div class="row mb-2">
            <div class="w-75 text-right">Tổng</div>
            <div class="w-25 text-right">
              <span
                class="w-100 d-inline-block"
                v-html="$options.filters.formatNumber(total_amount)"
              ></span>
              <small
                class="w-100 d-inline-block font-italic"
                style="font-size: 70%"
                >({{ total_quantity }} sản phẩm)</small
              >
            </div>
          </div>
          <div class="row mb-2">
            <div class="w-75 text-right">
              <span class="d-inline-block w-100"> Phí ship </span>
              <small class="text-danger font-italic" style="font-size: 70%">
                Miễn ship toàn quốc với đơn từ 500k
              </small>
            </div>
            <div
              class="w-25 text-right"
              v-if="shipping > 0"
              v-html="$options.filters.formatNumber(shipping)"
            ></div>
            <small v-else-if="shipping == -1" class="w-25 mt-1 text-right"
              >--</small
            >
            <small v-else class="w-25 mt-1 text-success text-right"
              >Miễn ship</small
            >
          </div>
          <div class="row">
            <div class="w-75 text-right">Tổng thanh toán</div>
            <div
              class="w-25 text-right font-weight-bold"
              v-html="$options.filters.formatNumber(total_checkout)"
            ></div>
          </div>
        </div>
        <div class="mt-3" v-if="is_place_order">
          <label class="form-check-inline" style="font-size: 16px">
            <strong>Phương thức thanh toán</strong>
          </label>
          <div
            :class="[
              'p-2',
              !is_valid_payment_method ? 'form-control--error' : '',
            ]"
            style="border: 1px solid #d6d6d6; border-radius: 5px"
          >
            <div class="form-check-inline">
              <label class="form-check-label" style="font-size: 14px">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  v-model="payment_method"
                  value="3"
                  :disabled="show_loading"
                />
                Thanh toán khi nhận hàng (COD)
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label" style="font-size: 14px">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  v-model="payment_method"
                  value="1"
                  :disabled="show_loading"
                />
                Thanh toán chuyển khoản
              </label>
            </div>
          </div>
          <p
            class="mt-1 text--error d-inline-block"
            v-if="!is_valid_payment_method"
          >
            Trường này là bắt buộc
          </p>
          <div
            class="p-2 mt-2"
            v-if="payment_method === '1'"
            style="border: 1px solid #d6d6d6; border-radius: 5px"
          >
            <label><strong>Thông tin chuyển khoản</strong></label>
            <div>
              <p style="font-size: 13px">
                <strong>Chủ tài khoản:</strong> NGUYỄN DUY THANH
              </p>
              <p style="font-size: 13px">
                <strong>Ngân hàng:</strong> TIÊN PHONG BANK (TPBank)
              </p>
              <p style="font-size: 13px">
                <strong>Số tài khoản:</strong> 02326064001
              </p>
              <p style="font-size: 13px">
                <strong>Chi nhánh:</strong> PHẠM HÙNG
              </p>
              <p style="font-size: 13px">
                <strong>Nội dung chuyển khoản:</strong> SMI [SĐT]
              </p>
            </div>
          </div>
          <div class="col-md-12 mt-3 mb-3 p-0">
            <button
              type="button"
              class="btn btn-danger btn-flat col-sm-12 col-md-12"
              v-bind:disabled="show_loading || data_orders.length == 0"
              @click="checkout"
            >
              <i
                class="spinner-border spinner-border-sm"
                style="font-size: 20px"
                v-if="show_loading"
              ></i>
              Xác nhận Thanh toán
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: "",
      relate_products: "",
      data_orders: [],
      current_product_id: "",
      current_product_name: "",
      selected_value: [],
      invalid_sizes: [],
      source: "",
      customer_id: "",
      name: "",
      phone_: "",
      email: "",
      address: "",
      note: "",
      city: [],
      city_id: "",
      district: [],
      district_id: "",
      village: [],
      village_id: "",
      total_quantity: 0,
      total_checkout: 0,
      total_amount: 0,
      shipping: -1,
      payment_method: 3,
      email_reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      phone_reg: /^((09|03|07|08|05)+([0-9]{8})\b)$/,
      is_valid_name: true,
      is_validphone_: true,
      is_validphone__format: true,
      is_valid_email_format: true,
      is_valid_city: true,
      is_valid_district: true,
      is_valid_village: true,
      is_valid_address: true,
      is_valid_payment_method: true,
      show_loading: false,
      is_place_order: false,
      is_view_more: false,
      current_color_selected: "",
      current_size_selected: "",
      not_found: false,
    };
  },
  props: ["product_id"],
  async created() {
    this.url = url;
    this.not_found = await this.getProducts(this.product_id);
    if (!this.not_found) {
      this.getRelateProducts(this.product_id);
      this.loadCity();
    }
    this.source = source;
  },
  watch: {
    name: function () {
      this.is_valid_name = this.name;
    },
    phone_: function () {
      if (this.phone_) {
        this.is_validphone_ = true;
        if (this.phone_.length > 0) {
          this.is_validphone__format = this.phone_reg.test(this.phone_);
          if (!this.is_validphone__format) {
            this.is_validphone_ = false;
          } else {
            this.checkPhone();
          }
        }
      } else {
        this.is_validphone_ = false;
        this.is_validphone__format = true;
      }
    },
    email: function () {
      // this.is_valid_email = this.email;
      if (this.email && this.email.length > 0) {
        this.is_valid_email_format = this.email_reg.test(this.email);
      }
    },
    city_id: function () {
      this.is_valid_city = this.city_id;
    },
    district_id: function () {
      this.is_valid_district = this.district_id;
    },
    village_id: function () {
      this.is_valid_village = this.village_id;
    },
    address: function () {
      this.is_valid_address = this.address;
    },
    payment_method: function () {
      this.is_valid_payment_method = this.payment_method;
    },
    data_orders: {
      handler: function () {
        this.calculateTotalCheckout();
      },
      deep: true,
    },
    current_color_selected: function () {
      this.setInvalidSizes();
    },
  },
  methods: {
    getProducts: function (product_id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${url}/api/landing/${product_id}`)
          .then((response) => {
            let not_found = false;
            if (response.data && response.data.data.length > 0) {
              this.products = response.data.data;
              this.current_product_id = this.products[0].product_id;
              this.current_product_name = this.products[0].name;
              this.current_color_selected = this.products[0].colors[0];
            } else {
              not_found = true;
            }
            resolve(not_found);
          })
          .catch((error) => reject(error));
      });
    },
    getRelateProducts: function (product_id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${url}/api/landing/relate-product/${product_id}`)
          .then((response) => {
            this.relate_products = response.data.data;
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
    handleClickRelate: async function (product_id) {
      this.current_product_id = product_id;
      this.scrollTop();
      await this.getProducts(product_id);
      this.getRelateProducts(product_id);
      // init data when relate click
      this.initWhenClickColor();
    },
    resetColorActive: function () {
      $(".color-product").each(function () {
        $(this).children().removeClass("color-active");
      });
    },
    resetSizeSelected: function () {
      let curr_product_id = this.current_product_id;
      let sizes = this.products[0].sizes;
      for (let i = 0; i < sizes.length; i++) {
        let ref = curr_product_id + "_" + sizes[i];
        const index = this.selected_value.findIndex((v) => v == ref);
        if (index >= 0) {
          this.selected_value.splice(index, 1);
        }
      }
    },
    checkSizeSelected: function () {
      let curr_product_id = this.current_product_id;
      let curr_color = this.current_color_selected;
      let that = this;
      $.each(this.data_orders, function (key, value) {
        if (value.product_id == curr_product_id) {
          let detail = value.detail;
          $.each(detail, function (key1, value1) {
            if (value1[curr_color]) {
              $.each(value1[curr_color], function (key2, value2) {
                let ref = curr_product_id + "_" + value2.size;
                that.selected_value.push(ref);
              });
            }
          });
        }
      });
    },
    setColorActive: function () {
      let ref = this.current_product_id + "_" + this.current_color_selected;
      $(this.$refs[ref]).addClass("color-active");
    },
    setSizeSelected: function (size, type) {
      let ref = this.current_product_id + "_" + size;
      if (type == "unselect") {
        $(this.$refs[ref]).removeClass("selected");
      } else {
        $(this.$refs[ref]).addClass("selected");
      }
    },
    setColorSelected: function () {
      return new Promise((resolve, reject) => {
        let current_product_id = this.current_product_id;
        let current_color_selected = this.current_color_selected;
        let that = this;
        $.each(this.data_orders, function (key, value) {
          if ((value.product_id = current_product_id)) {
            $.each(value.detail, function (key1, value1) {
              if (value1[current_color_selected].length == 0) {
                let value = current_product_id + "_" + current_color_selected;
                const index = that.selected_value.indexOf(value);
                that.selected_value.splice(index, 1);
                resolve();
                return false;
              }
            });
          }
        });
      });
    },
    initWhenClickColor: function () {
      // reset color active
      this.resetColorActive();
      // add class active for color selected
      this.setColorActive();
      // reset all size selected
      this.resetSizeSelected();
      // set size is instock
      this.setInvalidSizes();
      // set size selected from data order
      this.checkSizeSelected();
    },
    handleClickChooseColor: function (e, color) {
      // set current color selected
      this.current_color_selected = color;
      // init data when color clicked
      this.initWhenClickColor();
    },
    generateDataSize: function (size) {
      return new Promise((resolve, reject) => {
        let color = this.current_color_selected;
        let that = this;
        $.each(
          this.products[0].detail[color],
          function (key_detail, value_detail) {
            if (value_detail.size == size) {
              let size_data = {
                image: value_detail.image,
                size: size,
                sku: value_detail.sku,
                quantity: 1,
                retail: ("" + value_detail.retail).replace(",", ""),
                variant_id: value_detail.variant_id,
                p: value_detail.p,
              };
              that.setSizeSelected(size);
              resolve(size_data);
              return false;
            }
          }
        );
      });
    },
    generateNewDataProduct: function () {
      return new Promise(async (resolve, reject) => {
        let color = this.current_color_selected;
        let product_id = this.current_product_id;
        let product_name = this.current_product_name;
        let data = {
          product_id: product_id,
          name: product_name,
          total_money: 0,
          total_quantity: 0,
          detail: [],
        };
        let color_data = await this.generateDataColor();
        $.each(color_data[color], function (key, value) {
          data.total_money += Number((value.retail + "").replace(",", ""));
        });
        data.detail.push(color_data);
        data.total_quantity = 1;
        this.data_orders.push(data);
        resolve();
      });
    },
    generateDataColor: function () {
      return new Promise(async (resolve, reject) => {
        let color = this.current_color_selected;
        let size = this.current_size_selected;

        let color_data = {};
        color_data[color] = [];
        let data_size = await this.generateDataSize(size);
        color_data[color].push(data_size);
        let ref = this.current_product_id + "_" + color;
        this.setSelectedValue(ref);
        resolve(color_data);
      });
    },
    handleClickChooseSize: async function (e, size) {
      this.current_size_selected = size;
      let ref = this.current_product_id + "_" + size;
      this.setSelectedValue(ref);

      let current_color_selected = this.current_color_selected;
      let current_product_id = this.current_product_id;
      if (e.target.className.indexOf("selected") > -1) {
        // selected
        let that = this;
        $.each(this.data_orders, async function (key, value) {
          if (value.product_id == current_product_id) {
            let detail = value.detail;
            $.each(
              detail,
              await function (k, v) {
                new Promise((resolve, reject) => {
                  $.each(v, function (color, obj) {
                    if (color == current_color_selected) {
                      $.each(obj, function (k2, v2) {
                        if (v2 && v2.size == size) {
                          obj.splice(k2, 1);
                          if (value.total_money > 0) {
                            value.total_money -= Number(
                              (v2.retail + "").replace(",", "")
                            );
                          }
                          if (value.total_quantity > 0) {
                            value.total_quantity--;
                          }
                          if (obj.length == 0) {
                            //remove color in data order when size = 0
                            detail.splice(k, 1);
                            // remove selected color when size = 0
                            let ref = current_product_id + "_" + color;
                            const index = that.selected_value.indexOf(ref);
                            that.selected_value.splice(index, 1);
                          }
                          resolve();
                          return false;
                        }
                        resolve();
                      });
                    }
                    resolve();
                  });
                });
              }
            );
            that.data_orders[key].detail = detail;
            // check number color in product, if number color = 0 then remove product in data orders
            if (detail.length == 0) {
              // remove product
              that.data_orders.splice(key, 1);
            }
          }
        });
      } else {
        // unselect
        let that = this;
        if (jQuery.isEmptyObject(this.data_orders)) {
          // the first time
          this.generateNewDataProduct();
        } else {
          // check size of color existed or not
          let is_existed_product = false;
          let is_existed_color = false;
          $.each(this.data_orders, async function (key, value) {
            if (value.product_id == current_product_id) {
              is_existed_product = true;
              // compare color
              $.each(value.detail, async function (key, value1) {
                await new Promise(async (resolve, reject) => {
                  $.each(value1, async function (color, value2) {
                    if (color == current_color_selected) {
                      is_existed_color = true;
                      let size_data = await that.generateDataSize(size);
                      value1[color].push(size_data);
                      // calculate total money
                      value.total_money += Number(
                        (size_data.retail + "").replace(",", "")
                      );
                      // calculate total quantity
                      value.total_quantity++;
                      // set selected color item
                      let ref = current_product_id + "_" + color;
                      const index = that.selected_value.indexOf(ref);
                      if (value2.length == 0) {
                        // remove selected color when size = 0
                        that.selected_value.splice(index, 1);
                      } else {
                        if (index < 0) {
                          that.selected_value.push(ref);
                        }
                      }
                    }
                    resolve();
                  });
                });
              });
              if (!is_existed_color) {
                let color_data = await that.generateDataColor();
                value.detail.push(color_data);
                $.each(
                  color_data[current_color_selected],
                  function (key1, value1) {
                    value.total_money += Number(
                      (value1.retail + "").replace(",", "")
                    );
                    value.total_quantity++;
                  }
                );
              }
            }
          });
          if (!is_existed_product) {
            this.generateNewDataProduct();
          }
        }
      }
    },
    setDisabledSize: function (product_id, size) {
      let ref = product_id + "_" + this.current_color_selected + "_" + size;
      return this.invalid_sizes.includes(ref);
    },
    setInvalidSizes: function () {
      let color = this.current_color_selected;
      let that = this;
      this.invalid_sizes = [];
      $.each(this.products, function (key, value) {
        let product_id = value.product_id;
        $.each(value.detail, function (key, value1) {
          if (color == key) {
            $.each(value1, function (_k, _v) {
              if (_v.quantity == 0) {
                // that.invalid_sizes.push(_v.size);
                const index = that.invalid_sizes.findIndex(
                  (v) => v == product_id + "_" + color + "_" + _v.size
                );
                if (index >= 0) {
                  that.invalid_sizes.splice(index, 1);
                } else {
                  that.invalid_sizes.push(
                    product_id + "_" + color + "_" + _v.size
                  );
                }
              }
            });
          }
        });
      });
    },
    setSelectedValue: function (value) {
      const index = this.selected_value.findIndex((v) => v == value);
      if (index >= 0) {
        this.selected_value.splice(index, 1);
      } else {
        this.selected_value.push(value);
      }
    },
    removeProduct: function (product_id, color, size) {
      let that = this;
      $.each(this.data_orders, function (key, value) {
        if (value && value.product_id == product_id) {
          let total_money = Number(value.total_money);
          let total_quantity = Number(value.total_quantity);
          $.each(value.detail, function (key1, colors) {
            $.each(colors, function (key2, color_obj) {
              if (key2 == color) {
                $.each(color_obj, function (key3, size_obj) {
                  if (size_obj.size == size) {
                    //remove size
                    color_obj.splice(key3, 1);
                    // calculate total money of product
                    total_money -= Number(
                      ("" + size_obj.retail).replace(",", "") *
                        size_obj.quantity
                    );
                    // calculate total quantity of product
                    total_quantity -= Number(size_obj.quantity);
                    // update to data_orders
                    that.data_orders[key].total_money = total_money;
                    that.data_orders[key].total_quantity = total_quantity;

                    if (color_obj.length == 0) {
                      //remove color when not exist size item
                      value.detail.splice(key1, 1);
                      //set selected color item
                      let ref2 = product_id + "_" + color;
                      that.setSelectedValue(ref2);
                    }
                    // remove product when not contains product
                    if (value.detail == 0) {
                      that.data_orders.splice(key, 1);
                    }
                    let ref = product_id + "_" + size;
                    that.setSelectedValue(ref);
                    //break loop
                    return false;
                  }
                });
              } else {
                let is_existed_size = false;
                $.each(color_obj, function (key3, size_obj) {
                  if (size_obj.size == size) {
                    is_existed_size = true;
                    return false;
                  }
                });
                if (!is_existed_size) {
                  //set selected size item
                  let ref = product_id + "_" + size;
                  that.setSelectedValue(ref);
                }
              }
            });
          });
        }
      });
      this.$toastr.w("Đã xoá sản phẩm");
    },
    plusQuantity: function (product_id, color, size) {
      $.each(this.data_orders, function (key, value) {
        if (value.product_id == product_id) {
          $.each(value.detail, function (key1, colors) {
            $.each(colors, async function (key2, color_obj) {
              if (key2 == color) {
                await new Promise((resolve, reject) => {
                  $.each(color_obj, function (key3, size_obj) {
                    if (size_obj.size == size) {
                      size_obj.quantity++;
                      value.total_quantity++;
                      value.total_money += Number(
                        size_obj.retail.replace(",", "")
                      );
                      resolve();
                    }
                  });
                });
              }
            });
          });
        }
      });
    },
    minusQuantity: function (product_id, color, size) {
      let that = this;
      $.each(this.data_orders, function (key, value) {
        if (value.product_id == product_id) {
          $.each(value.detail, function (key1, colors) {
            $.each(colors, function (key2, color_obj) {
              if (key2 == color) {
                $.each(color_obj, function (key3, size_obj) {
                  if (size_obj.size == size) {
                    if (size_obj.quantity > 1) {
                      size_obj.quantity = Number(size_obj.quantity) - 1;
                      value.total_quantity = Number(value.total_quantity) - 1;
                      value.total_money -= Number(
                        size_obj.retail.replace(",", "")
                      );
                    }
                  }
                });
              }
            });
          });
        }
      });
    },
    calculateTotalCheckout: async function () {
      let amount = 0;
      let qty = 0;
      await new Promise((resolve, reject) => {
        $.each(this.data_orders, function (key, value) {
          amount += Number(value.total_money);
          qty += Number(value.total_quantity);
        });
        resolve();
      });
      this.total_amount = amount;
      this.total_quantity = qty;
      this.shipping = await this.calculateShipping();
      if (this.shipping != "-1") {
        return (this.total_checkout = this.total_amount + this.shipping);
      } else {
        return (this.total_checkout = this.total_amount);
      }
    },
    calculateShipping: function () {
      return new Promise((resolve, reject) => {
        if (this.total_amount > 500000) {
          resolve(0);
          return;
        }
        let cityId = this.city_id;
        if (cityId) {
          let shipping = 0;
          if (cityId == 1) {
            shipping = 20000;
          } else {
            shipping = 30000;
          }
          resolve(shipping);
          return;
        }
        resolve(-1);
        return;
      });
    },
    loadCity: function () {
      axios.get(`${url}/api/zone/city`).then((response) => {
        this.city = JSON.parse(response.data).results;
      });
    },
    checkForm: function () {
      let is_valid_form = true;
      if (!this.name) {
        this.is_valid_name = false;
        is_valid_form = false;
      }
      if (!this.phone_) {
        this.is_validphone_ = false;
        is_valid_form = false;
      } else if (!this.phone_reg.test(this.phone_)) {
        this.is_validphone__format = false;
        is_valid_form = false;
      }
      if (this.email && !this.email_reg.test(this.email)) {
        this.is_valid_email_format = false;
        is_valid_form = false;
      }
      if (!this.city_id) {
        this.is_valid_city = false;
        is_valid_form = false;
      }
      if (!this.district_id) {
        this.is_valid_district = false;
        is_valid_form = false;
      }
      if (!this.village_id) {
        this.is_valid_village = false;
        is_valid_form = false;
      }
      if (!this.address) {
        this.is_valid_address = false;
        is_valid_form = false;
      }
      if (!this.payment_method) {
        this.is_valid_payment_method = false;
        is_valid_form = false;
      }
      if (!is_valid_form) {
        window.location.href = "#contact";
      }
      return is_valid_form;
    },
    changeCity: function (val) {
      return new Promise((resolve, reject) => {
        this.city_id = Number(val);
        axios.get(`${url}/api/zone/district/${val}`).then((response) => {
          this.district = JSON.parse(response.data).results;
          this.district_id = null;
          this.village_id = null;
          this.calculateTotalCheckout();
          resolve();
        });
      });
    },
    changeDistrict: function (val) {
      this.district_id = val;
      return new Promise((resolve, reject) => {
        axios.get(`${url}/api/zone/village/${val}`).then((response) => {
          this.village = JSON.parse(response.data).results;
          this.village_id = null;
          // this.calculateTotalCheckout();
          resolve();
        });
      });
    },
    changeVillage: function (val) {
      this.village_id = val;
    },
    checkPhone: async function () {
      if (!this.phone_ || !this.phone_reg.test(this.phone_)) {
        return;
      }
      this.show_loading = true;
      let is_exited_customer = false;
      await axios
        .get(`${url}/api/find-by-phone/${this.phone_}`)
        .then(async (response) => {
          this.show_loading = false;
          if (response.data.length > 0) {
            is_exited_customer = true;
            let data = response.data[0];
            this.customer_id = data.id;
            this.name = data.name;
            this.email = data.email;
            this.address = data.address;
            // await this.loadCity();
            this.city_id = Number(data.city_id);
            await this.changeCity(data.city_id);
            await this.changeDistrict(data.district_id);
            if (data.district_id != -1) {
              this.district_id = (data.district_id + "").padStart(3, "0");
            } else {
              this.district_id = "";
            }
            if (data.village_id != -1) {
              this.village_id = (data.village_id + "").padStart(5, "0");
            } else {
              this.village_id = "";
            }
          }
        })
        .catch((e) => {
          this.show_loading = false;
          this.is_exist_phone = false;
          is_exited_customer = false;
        });
      if (!is_exited_customer) {
        this.customer_id = "";
        this.city_id = "";
        this.district_id = "";
        this.village_id = "";
        this.name = "";
        this.email = "";
        this.address = "";
      }
    },
    checkout: function () {
      this.show_loading = true;
      if (jQuery.isEmptyObject(this.data_orders)) {
        this.show_loading = false;

        return;
      }
      if (!this.checkForm()) {
        this.show_loading = false;
        return;
      }
      this.$swal
        .fire({
          title: "Xác nhận?",
          text: "Hãy chắc chắn rằng các thông tin trong đơn hàng đã chính xác!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK!",
        })
        .then((result) => {
          if (result.value) {
            let orders = [];
            orders.push({
              customer_id: this.customer_id,
              name: this.name,
              phone: this.phone_,
              email: this.email,
              city_id: this.city_id,
              district_id: this.district_id,
              village_id: this.village_id,
              address: this.address,
              total_amount: this.total_amount,
              shipping: this.shipping,
              total_checkout: this.total_checkout,
              note: this.note,
              payment_method: this.payment_method,
              difference_address: "",
              data_orders: this.data_orders,
              utm_source: this.source,
            });
            axios
              .post(`${url}/api/landing/thanh-toan`, {
                body: orders,
              })
              .then((response) => {
                this.show_loading = false;
                if (response.status === 200) {
                  // send email
                  axios.get(`${url}/api/send-emails`);

                  this.$swal
                    .fire({
                      icon: "success",
                      title: "Đặt hàng thành công",
                      text: "Đơn hàng của bạn đang được xử lý",
                      showConfirmButton: true,
                      timer: 5000,
                    })
                    .then((result) => {
                      window.location.reload();
                    });
                } else {
                  this.$toastr.e("Đã xảy ra lỗi");
                }
              })
              .catch((e) => {
                this.show_loading = false;
                this.$toastr.e("Đã xảy ra lỗi");
              });
          } else {
            this.show_loading = false;
          }
        });
    },
    placeOrder: function () {
      if (this.data_orders.length == 0) {
        this.$toastr.e("Bạn chưa chọn sản phẩm");
        return;
      }
      let that = this;
      let is_selected_size = true;
      $.each(this.data_orders, function (key, value) {
        if (value.total_quantity == 0) {
          is_selected_size = false;
          return false;
        }
      });
      if (!is_selected_size) {
        that.$toastr.e("Bạn chưa chọn size");
        return;
      }
      this.is_place_order = true;
      window.location.href = "#contact";
    },
    scrollTop: function () {
      let body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    },
  },
  mounted: function () {
    this.$toastr.defaultPosition = "toast-top-right";
  },
};
</script>

<style scoped>
.carousel-item div {
  background-size: cover;
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}
.list {
  display: inline-flex;
  overflow-x: auto;
  width: 98%;
  height: 230px;
  overflow-y: hidden;
}
.items {
  display: inline-block;
  float: left;
  border: 1px solid gainsboro;
  border-radius: 5px;
}
.images {
  background-size: cover !important;
  width: 110px;
  height: 110px;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
.title {
  font-size: 14px;
  width: 100px;
  height: 40px;
  overflow: hidden;
}
.price {
  font-size: 13px;
  font-weight: bold;
}
.selected {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.unselected {
  color: #6c757d;
  border-color: #6c757d;
  background-color: #fff;
}

.c-pointer {
  cursor: pointer;
}
.fa-sort-up,
.fa-sort-down {
  color: #a9a9a9 !important;
}
label {
  font-size: 13px;
}
input::-webkit-input-placeholder,
textarea::placeholder,
input[type="text"] {
  font-size: 13px;
  line-height: 3;
}
.row-product {
  border-bottom-width: thin;
  border-bottom-color: #d6d6d6;
  border-bottom-style: solid;
}
input.form-control--error,
.form-control--error {
  border: 1px solid #ff00009c !important;
}
input.text--error,
.text--error {
  color: #ff00009c !important;
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #d0d0d0 !important;
  background-color: transparent !important;
  border-color: #d0d0d0 !important;
  cursor: not-allowed;
}
</style>
<style>
.vs__search,
input[type="search" i],
.vs--single .vs__selected {
  font-size: 13px !important;
  color: #495057 !important;
}
.color-active {
  border: 2px solid #f18473 !important;
}
</style>