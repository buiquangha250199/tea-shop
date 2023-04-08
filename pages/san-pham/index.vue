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
      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="6"
          sm="3"
        >
          <v-card
            class="card-item"
            @click="$router.push(`/san-pham/${product?.id}`)"
          >
            <v-img
              :src="product.thumbnail"
              :height="imgSize * 0.8"
              :width="imgSize * 0.8"
              style="margin: auto; border-radius: 0"
            ></v-img>
            <v-card-title class="ctitle"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Trang chủ',
        disabled: false,
        href: '/',
      },
      {
        text: 'Sản phẩm',
        disabled: true,
        href: 'breadcrumbs_link_1',
      },
    ],
  }),
  computed: {
    products() {
      return this.$store.state.products.products
    },
    imgSize() {
      if (this.$vuetify.breakpoint.xl) {
        return (window.screen.width * 0.7 * 0.9) / 4
      }
      if (this.$vuetify.breakpoint.lg) {
        return (window.screen.width * 0.7 * 0.9) / 4
      }
      if (this.$vuetify.breakpoint.md) {
        return (window.screen.width * 0.7 * 0.9) / 4
      }
      return (window.screen.width * 0.7 * 0.9) / 3
    },
  },
}
</script>
