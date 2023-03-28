<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div class="text">{{ category?.name || '' }}</div>
      </div>
      <v-row>
        <v-col
          v-for="(product, index) in productsByCategory"
          :key="index"
          cols="6"
          sm="3"
        >
          <v-card
            class="card-item"
            @click="$router.push(`/san-pham/${product?.id}`)"
          >
            <v-img :src="product.thumbnail" cover></v-img>
            <v-card-title class="title"> {{ product.name }}</v-card-title>
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
  computed: {
    products() {
      return this.$store.state.products.products
    },
    productsByCategory() {
      return this.products.length
        ? this.products.filter(
            (product) => product.category.id === Number(this.$route.params.id)
          )
        : []
    },
    category() {
      return this.$store.state.categories.categories.find(
        (category) => category.id === Number(this.$route.params.id)
      )
    },
    breadcrumbs() {
      if (this.category?.name) {
        return [
          {
            text: 'Trang chủ',
            disabled: false,
            href: '/',
          },
          {
            text: this.category?.name,
            disabled: true,
            href: 'breadcrumbs_link_1',
          },
        ]
      }

      return [
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
      ]
    },
  },
}
</script>
