// eslint-disable-next-line vue/no-v-html
<template>
  <div class="mt-4 mb-4 page-news">
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row class="news-content">
      <div class="text-h4 ml-3 mt-4" style="font-weight: 500 !important">
        {{ newsDetail?.title }}
      </div>
      <v-col cols="12">
        <div class="text-body mb-4">
          <span class="mdi mdi-calendar-month-outline mr-1"></span
          >{{ formatDate(newsDetail?.created_at) }}
          <span class="mdi mdi-eye-outline mr-1 ml-2"></span
          >{{ newsDetail?.views }} lượt xem
        </div>
        <div class="mb-8 pr-8" v-html="newsDetail?.body"></div>
      </v-col>
      <v-col cols="12" md="3" class="sp">
        <v-img
          :height="imgSize.h * 0.75"
          :width="imgSize.w * 0.75"
          :src="randomProducts[0]?.thumbnail"
          class="mb-4"
          @click="$router.push(`/san-pham/${randomProducts[0]?.id}`)"
        ></v-img>
        <v-img
          :height="imgSize.h * 0.75"
          :width="imgSize.w * 0.75"
          :src="randomProducts[1]?.thumbnail"
          @click="$router.push(`/san-pham/${randomProducts[1]?.id}`)"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { formatDate, getTwoRandomProducts } from '~/helper/common'
export default {
  data: () => ({
    newsDetail: {},
  }),
  async fetch() {
    this.newsDetail = await this.$axios.$get(
      `${this.$config.baseUrl}news/${this.$route.params.slug}`
    )
  },
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
          href: '/tin-tuc/',
        },
        {
          text: this.newsDetail?.title || 'Title',
          disabled: true,
          href: `/san-pham/${this.newsDetail?.id}`,
        },
      ]
    },
    products() {
      return this.$store.state.products.products
    },
    randomProducts() {
      return getTwoRandomProducts(this.products)
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
  },
  methods: {
    formatDate,
  },
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .news-content {
    padding-left: 12px !important;
  }
}

@media only screen and (max-width: 767px) {
  .news-content {
    padding-left: 0 !important;
  }
}
</style>
