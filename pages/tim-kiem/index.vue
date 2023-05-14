<template>
  <div>
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div class="text">Sản phẩm</div>
      </div>
      <v-row v-if="products.length > 0">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="6"
          sm="3"
        >
          <v-card
            class="card-item"
            :width="imgSize.w"
            style="margin: auto; padding-bottom: 15px"
            @click="$router.push(`/san-pham/${product?.id}`)"
          >
            <v-img
              :src="product.thumbnail"
              :height="imgSize.h * 0.75"
              :width="imgSize.w * 0.75"
              style="margin: auto; border-radius: 0"
            ></v-img>
            <v-card-title class="ctitle"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <div class="warning--text ml-4 text-large">
          Không tìm thấy sản phẩm!
        </div>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  fetch() {
    this.searchProduct()
  },
  computed: {
    products() {
      return this.$store.state.products.searchingProducts
    },
    imgSize() {
      const size = (window.screen.width * 0.7 * 0.9) / 4
      if (this.$vuetify.breakpoint.xl) {
        return { w: size, h: size * 0.9 }
      }
      if (this.$vuetify.breakpoint.lg) {
        return { w: size, h: size * 1 }
      }
      if (this.$vuetify.breakpoint.md) {
        return { w: size, h: size }
      }
      return 150
    },
    items() {
      return [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/',
        },
        {
          text: `Tìm kiếm với từ khoá ${this.$route.query?.search || ''}`,
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
      ]
    },
  },
  methods: {
    async searchProduct() {
      await this.$store.dispatch('products/fetchProducts', {
        isSave: false,
        searchParams: this.$route.query?.search || '',
      })
    },
  },
}
</script>
