<template>
  <div>
    <v-row class="mb-8">
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="5">
            <v-img
              max-height="300px"
              :src="productDetail?.thumbnail"
              cover
              class="mb-4"
            ></v-img>
          </v-col>
          <v-col cols="12" md="7">
            <div class="text-h5 font-weight-bold">
              {{ productDetail?.name }}
            </div>
            <div class="mt-4 mb-4 text-subtitle-1">
              {{ productDetail?.description }}
            </div>
            <v-radio-group v-model="quantity" class="options">
              <template #label>
                <div>Hãy chọn <strong>loại sản phẩm:</strong></div>
              </template>
              <v-radio
                v-for="(option, index) in productDetail?.options"
                :key="index"
                :value="option.unit"
              >
                <template #label>
                  <div>
                    <strong class="success--text">Set {{ option.unit }}</strong>
                    <strong class="error--text" style="font-size: 13px">
                      - Giá {{ formatNumber(option.price) }}đ
                    </strong>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
            <div class="mt-4 mb-4 text-subtitle-1 text-center">
              <span class="mdi mdi-eye-check"></span>
              <strong class="error--text">{{ number }}</strong> người đang xem
              sản phẩm này
            </div>
            <div class="mt-4 mb-4 text-subtitle-1 text-center">
              <div class="my-2">
                <v-btn
                  color="warning"
                  dark
                  x-large
                  width="200px"
                  @click="dialog = true"
                >
                  Mua ngay
                </v-btn>
              </div>
            </div>
            <div class="mt-4 mb-8 flex-center">
              <v-text-field
                v-model="contactTel"
                :error-messages="contactTelErrors"
                label="Nhập số điện thoại để được tư vấn miễn phí..."
                placeholder="Nhập số điện thoại để được tư vấn miễn phí..."
                large
                solo
                clearable
                hide-details
                class="input elevation-0"
                @blur="$v.contactTel.$touch()"
                @input="$v.contactTel.$touch()"
              ></v-text-field>
              <v-btn
                class="btn"
                height="50px"
                large
                color="#C62828"
                :loading="loadingBtn"
                @click="sendContactTel"
              >
                Gửi
              </v-btn>
            </div>
            <div class="mt-4 mb-8 flex-center">
              Gọi
              <a
                class="pl-2 pr-2"
                href="tel:094.881.63.36"
                style="color: #c62828"
                ><strong>094.881.63.36</strong></a
              >
              để được tư vấn và mua hàng
            </div>
            <div class="mt-4 mb-4">
              <v-card title="Card title" variant="outlined">
                <v-card-item>
                  <v-card-title
                    style="
                      background-color: #388e3c;
                      color: #fff;
                      font-size: 18px;
                    "
                    >CAM KẾT NGUỒN GỐC 100% TỪ THIÊN NHIÊN</v-card-title
                  >
                  <v-list lines="one">
                    <v-list-item class="primary--text mb-n3"
                      ><span
                        class="mdi mdi-arrow-right-bold-circle warning--text mr-2"
                      ></span>
                      Chỉ phải
                      <strong class="ml-1">
                        thanh toán sau khi nhận hàng</strong
                      ></v-list-item
                    >
                    <v-list-item class="primary--text mb-n3"
                      ><strong class="mr-1"
                        ><span
                          class="mdi mdi-arrow-right-bold-circle warning--text mr-2"
                        ></span
                        >Được kiểm tra sản phẩm</strong
                      >
                      trước khi nhận</v-list-item
                    >
                    <v-list-item class="primary--text mb-n3"
                      ><span
                        class="mdi mdi-arrow-right-bold-circle warning--text mr-2"
                      ></span>
                      Sản phẩm có nguồn gốc
                      <strong class="ml-1"
                        >100% từ thiên nhiên</strong
                      ></v-list-item
                    >
                    <v-list-item class="primary--text mb-n3"
                      ><strong class="mr-1"
                        ><span
                          class="mdi mdi-arrow-right-bold-circle warning--text mr-2"
                        ></span
                        >Không chất bảo quản</strong
                      >
                      – Chất tạo màu – Hương liệu</v-list-item
                    >
                    <v-list-item class="primary--text"
                      ><span
                        class="mdi mdi-arrow-right-bold-circle warning--text mr-2"
                      ></span>
                      Chỉ phải thanh toán sau khi nhận hàng</v-list-item
                    >
                  </v-list>
                </v-card-item>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" class="pc product-container">
        <v-card
          v-for="product in randomProducts"
          :key="product?.id"
          class="card-item mb-6"
          @click="$router.push(`/san-pham/${product?.id}`)"
        >
          <v-card-title class="card-title break-word"
            >Sản phẩm bán chạy</v-card-title
          >
          <v-img
            max-height="150px"
            width="100%"
            :src="product?.thumbnail"
          ></v-img>
          <v-card-title class="title"> {{ product?.name }}</v-card-title>
          <v-card-subtitle class="subtitle">
            {{ product?.price }}₫ /{{ product?.unit }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="560">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ productDetail?.name }}</span>
            </v-card-title>
            <v-card-text class="mb-n4">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
                      outlined
                      :error-messages="getErrors('name')"
                      label="Tên của bạn"
                      hide-details
                      class="formfield"
                      height="40px"
                      required
                      @blur="$v.name.$touch()"
                      @input="$v.name.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="tel"
                      :error-messages="getErrors('tel')"
                      outlined
                      label="Số điện thoại"
                      hide-details
                      required
                      @blur="$v.tel.$touch()"
                      @input="$v.tel.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model.number="quantity"
                      :error-messages="amountErrors"
                      outlined
                      label="Số lượng"
                      hide-details
                      required
                      @blur="$v.quantity.$touch()"
                      @input="$v.quantity.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="mb-n4">
                    <v-text-field
                      v-model="address"
                      :error-messages="getErrors('address')"
                      outlined
                      label="Địa chỉ giao hàng"
                      hide-details
                      required
                      @blur="$v.address.$touch()"
                      @input="$v.address.$touch()"
                    ></v-text-field>
                    <div style="font-size: 11px">
                      Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      hide-details
                      label="Vui lòng cho biết yêu cầu khác (nếu có)"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-col class="text-center"
              ><v-btn
                class="text-none mb-4"
                color="primary"
                x-large
                variant="flat"
                @click="submit"
              >
                Đặt hàng ngay
              </v-btn></v-col
            >
          </v-card>
        </v-dialog>
      </v-row>
      <v-snackbar
        v-model="snackbar"
        :top="true"
        :timeout="3000"
        color="success"
        variant="outlined"
      >
        <strong> {{ messageSnackbar }} </strong>
      </v-snackbar>
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { formatNumber, getTwoRandomProducts } from '~/helper/common'
const { required, between, integer } = require('vuelidate/lib/validators')

export default {
  mixins: [validationMixin],
  data() {
    return {
      amount: 10,
      name: null,
      contactTel: '',
      tel: null,
      address: null,
      description: '',
      dialog: false,
      loading: false,
      snackbar: false,
      loadingBtn: false,
      messageSnackbar: '',
      quantity: 1,
    }
  },
  validations: {
    quantity: {
      required,
      integer,
      between: between(1, 100000),
    },
    contactTel: {
      required,
    },
    name: {
      required,
    },
    tel: {
      required,
    },
    address: {
      required,
    },
  },
  computed: {
    amountErrors() {
      const errors = []
      if (!this.$v.quantity.$dirty) return errors
      !this.$v.quantity.integer &&
        errors.push('Vui lòng nhập giá trị số nguyên > 0')
      !this.$v.quantity.required && errors.push('Vui lòng nhập giá trị')
      return errors
    },
    contactTelErrors() {
      const errors = []
      if (!this.$v.contactTel.$dirty) return errors
      !this.$v.contactTel.required && errors.push('Vui lòng nhập giá trị')

      return errors
    },
    productDetail() {
      return this.products.find(
        (item) => item.id === Number(this.$route.params.id)
      )
    },
    products() {
      return this.$store.state.products.products
    },
    items() {
      return [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/',
        },
        {
          text: 'Sản phẩm',
          disabled: false,
          href: '/san-pham/',
        },
        {
          text: this.productDetail?.name || 'Product',
          disabled: true,
          href: `/san-pham/${this.productDetail?.id}`,
        },
      ]
    },
    number() {
      return Math.floor(Math.random() * (100 - 75 + 1) + 75)
    },
    randomProducts() {
      return getTwoRandomProducts(this.products)
    },
  },
  methods: {
    formatNumber,
    getErrors(field) {
      const errors = []
      if (!this.$v[field].$dirty) return errors
      if (!this.$v[field].required) errors.push('Vui lòng nhập giá trị')
      return errors
    },
    async submit() {
      const body = {
        name: this.name,
        address: this.address,
        phone_number: this.tel,
        quantity: this.quantity,
        price: this.productDetail.priceValue,
        product: this.productDetail.id,
      }
      const order = await this.$axios.$post(
        `${this.$config.baseUrl}orders`,
        body
      )
      if (order) {
        this.messageSnackbar = 'Đặt hàng thành công!'
        this.snackbar = true
        this.dialog = false
      }
    },
    async sendContactTel() {
      if (!this.contactTel) return
      this.loadingBtn = true
      const body = {
        phone_number: this.contactTel,
      }

      const customer = await this.$axios.$post(
        `${this.$config.baseUrl}customers`,
        body
      )
      if (customer) {
        this.messageSnackbar =
          'Yêu cầu thành công! \nChúng tôi sẽ liên hệ trong thời gian sớm nhất.'
        this.loadingBtn = false
        this.snackbar = true
        this.contactTel = ''
      }
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep.v-input__slot {
  box-shadow: unset !important;
}
.card-title {
  font-size: 14px;
  text-align: center;
  padding: 5px !important;
  display: block;
}
.options {
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
}
.product-container .v-card {
  width: 80% !important;
}
.flex-center {
  .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: 1px solid #c62828;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #fff;
  }
}
.price-chip {
  padding: 0 20px;
}
</style>
