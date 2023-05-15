<template>
  <div>
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div class="text">Tin tức</div>
      </div>
      <v-row>
        <v-col v-for="(item, index) in news" :key="index" cols="6" sm="3">
          <v-card
            class="card-item"
            style="margin: auto; padding-bottom: 12px"
            :width="imgSize.w"
            @click="$router.push(`/tin-tuc/${item?.slug}`)"
          >
            <v-img
              :src="item.thumbnail"
              height="auto"
              width="100%"
              style="margin: auto; border-radius: 0"
            ></v-img>
            <v-card-title class="ctitle" style="text-align: left !important">
              {{ item.title }}</v-card-title
            >
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
        text: 'Tin tức',
        disabled: true,
        href: 'breadcrumbs_link_1',
      },
    ],
  }),
  computed: {
    news() {
      return this.$store.state.news.news
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
}
</script>
