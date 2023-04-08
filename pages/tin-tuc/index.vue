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
            @click="$router.push(`/tin-tuc/${item?.id}`)"
          >
            <v-img :src="item.thumbnail" cover></v-img>
            <v-card-title class="ctitle"> {{ item.title }}</v-card-title>
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
  },
}
</script>
