// eslint-disable-next-line vue/no-v-html
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
            <v-radio-group class="options">
              <template #label>
                <div>Hãy nhập số lượng <strong>sản phẩm:</strong></div>
              </template>
              <div>
                <v-text-field
                  v-model.number="amount"
                  :error-messages="amountErrors"
                  type="number"
                  class="mb-n3"
                  label="Hãy nhập số lượng"
                  placeholder="Hãy nhập số lượng"
                  outlined
                  @blur="$v.amount.$touch()"
                  @input="$v.amount.$touch()"
                ></v-text-field>
              </div>
              <div>
                <v-chip
                  class="mr-2 price-chip"
                  color="green"
                  text-color="white"
                >
                  1
                </v-chip>
                <v-chip
                  class="ma-2 price-chip"
                  color="green"
                  text-color="white"
                >
                  5
                </v-chip>
                <v-chip
                  class="ma-2 price-chip"
                  color="green"
                  text-color="white"
                >
                  10
                </v-chip>
                <v-chip
                  class="ma-2 price-chip"
                  color="green"
                  text-color="white"
                >
                  20
                </v-chip>
                <v-chip
                  class="ma-2 price-chip"
                  color="green"
                  text-color="white"
                >
                  100
                </v-chip>
              </div>
            </v-radio-group>
            <div class="mt-4 mb-4 text-subtitle-1 text-center">
              <span class="mdi mdi-eye-check"></span>
              <strong class="error--text">{{ number }}</strong> người đang xem
              sản phẩm này
            </div>
            <div class="mt-4 mb-4 text-subtitle-1 text-center">
              <div class="my-2">
                <v-btn color="warning" dark x-large width="200px">
                  Mua ngay
                </v-btn>
              </div>
            </div>
            <div class="mt-4 mb-4 flex-center">
              <v-text-field
                label="Nhập số điện thoại để được tư vấn miễn phí..."
                placeholder="Nhập số điện thoại để được tư vấn miễn phí..."
                large
                solo
                clearable
                hide-details="auto"
                class="input elevation-0"
              ></v-text-field>
              <v-btn class="btn" height="50px" large color="#C62828">
                Gửi
              </v-btn>
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
    </v-row>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { getTwoRandomProducts } from '~/helper/common'
const { required, between, integer } = require('vuelidate/lib/validators')

export default {
  mixins: [validationMixin],
  data() {
    return {
      amount: 10,
      amountRules: [
        (v) => !!v || 'Đây là trường bắt buộc',
        (v) => Number(v) === v || 'Hãy nhập số',
      ],
    }
  },
  validations: {
    amount: {
      required,
      integer,
      between: between(1, 100000),
    },
  },
  computed: {
    amountErrors() {
      const errors = []
      if (!this.$v.amount.$dirty) return errors
      !this.$v.amount.integer &&
        errors.push('Vui lòng nhập giá trị số nguyên > 0')
      !this.$v.amount.required && errors.push('Vui lòng nhập giá trị')
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
  background: floralwhite;
}
.v-card {
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
