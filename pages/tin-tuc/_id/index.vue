// eslint-disable-next-line vue/no-v-html
<template>
  <div class="mt-4 mb-4">
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="12" md="9">
        <v-img
          max-height="300px"
          max-width="450px"
          :src="newsDetail?.thumbnail"
          cover
          class="mb-4"
        ></v-img>
        <div class="mb-8 pr-8" v-html="newsDetail?.body"></div>
      </v-col>
      <v-col cols="12" md="3" class="sp">
        <v-img
          max-height="200px"
          :src="randomProducts[0]?.thumbnail"
          cover
          class="mb-4"
          @click="$router.push(`/san-pham/${randomProducts[0]?.id}`)"
        ></v-img>
        <v-img
          max-height="200px"
          :src="randomProducts[1]?.thumbnail"
          cover
          @click="$router.push(`/san-pham/${randomProducts[1]?.id}`)"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { getTwoRandomProducts } from '~/helper/common'
export default {
  computed: {
    items() {
      return [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/',
        },
        {
          text: 'Tin tức',
          disabled: false,
          href: '/san-pham/',
        },
        {
          text: this.newsDetail?.title || 'Title',
          disabled: true,
          href: `/san-pham/${this.newsDetail?.id}`,
        },
      ]
    },
    newsDetail() {
      return this.$store.state.news.news.find(
        (item) => item.id === Number(this.$route.params.id)
      )
    },
    products() {
      return this.$store.state.products.products
    },
    randomProducts() {
      return getTwoRandomProducts(this.products)
    },
  },
}
</script>
