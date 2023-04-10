<template>
  <v-row justify="center" class="mb-8 mt-2">
    <v-col v-if="categories?.length" cols="12" sm="3" class="pc">
      <div class="text-h5 mb-4">Danh mục sản phẩm</div>
      <nuxt-link
        v-for="category in categories"
        :key="category.id"
        class="category-item link"
        :to="`danh-muc/${category.id}`"
      >
        <span class="mdi mdi-arrow-right-bold-circle mr-2 warning--text"></span
        >{{ category.name }}
      </nuxt-link>
    </v-col>
    <v-col cols="12" sm="9" class="mb-8">
      <v-carousel
        cycle
        interval="3000"
        hide-delimiter-background
        show-arrows-on-hover
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item>
          <img class="banner-img" src="~/assets/img/banner/img-1.png" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="banner-img" src="~/assets/img/banner/img-2.png" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="banner-img" src="~/assets/img/banner/img-3.png" />
        </v-carousel-item>
        <v-carousel-item>
          <img class="banner-img" src="~/assets/img/banner/img-4.png" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" class="product-container mb-8">
      <div class="title mb-6">
        <div
          class="text"
          @click="$router.push(`/danh-muc/${categories[0]?.id}`)"
        >
          {{ categories[0]?.name || 'Sản phẩm' }}
        </div>
      </div>
      <v-carousel
        interval="4000"
        hide-delimiter-background
        show-arrows-on-hover
        :height="cSize"
      >
        <template v-for="(product, index) in teaProducts">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap">
              <template v-for="(n, i) in columns">
                <template v-if="+index + i < teaProducts.length">
                  <v-col :key="i" class="item-card-image">
                    <v-sheet
                      v-if="+index + i < teaProducts.length"
                      color="#fff"
                      height="100%"
                    >
                      <v-row
                        align="center"
                        justify="center"
                        style="margin: 0 !important; background-color: #f6f6f6"
                      >
                        <div class="display-3">
                          <v-card
                            class="card-item"
                            :width="imgSize1.w"
                            :height="imgSize1.h"
                            @click="
                              $router.push(
                                `/san-pham/${teaProducts[+index + i].id}`
                              )
                            "
                          >
                            <v-img
                              :src="teaProducts[+index + i].thumbnail"
                              :height="imgSize2.h * 0.65"
                              :width="imgSize2.w * 0.8"
                              style="margin: auto; border-radius: 0"
                            ></v-img>
                            <v-card-title class="ctitle -carousel">
                              {{ teaProducts[+index + i].name }}
                            </v-card-title>
                            <v-card-subtitle class="subtitle">
                              {{ teaProducts[+index + i].price }}₫ /{{
                                teaProducts[+index + i].unit
                              }}
                            </v-card-subtitle>
                          </v-card>
                        </div>
                      </v-row>
                    </v-sheet>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
    </v-col>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div
          class="text"
          @click="$router.push(`/danh-muc/${categories[1]?.id}`)"
        >
          {{ categories[1]?.name || 'Sản phẩm' }}
        </div>
      </div>
      <v-row>
        <v-col
          v-for="(product, index) in sub1Products"
          :key="index"
          cols="12"
          sm="3"
        >
          <v-card
            class="card-item"
            :width="imgSize2.w"
            :height="imgSize2.h"
            style="margin: auto"
            @click="$router.push(`/san-pham/${product.id}`)"
          >
            <v-img
              :src="product.thumbnail"
              :height="imgSize2.h * 0.6"
              :width="imgSize2.w * 0.8"
              style="margin: auto; border-radius: 0"
            ></v-img>
            <v-card-title class="ctitle"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row style="text-align: center">
        <v-col
          ><v-btn to="/danh-muc/5" color="green darken-2" dark large>
            Xem tất cả <span class="mdi mdi-arrow-right-thick"></span></v-btn
        ></v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div
          class="text"
          @click="$router.push(`/danh-muc/${categories[2].id}`)"
        >
          {{ categories[2]?.name || 'Sản phẩm' }}
        </div>
      </div>
      <v-row>
        <v-col
          v-for="(product, index) in sub2Products"
          :key="index"
          cols="12"
          sm="3"
        >
          <v-card
            class="card-item"
            style="margin: auto"
            :width="imgSize2.w"
            :height="imgSize2.h"
            @click="$router.push(`/san-pham/${product.id}`)"
          >
            <v-img
              :src="product.thumbnail"
              :height="imgSize2.h * 0.6"
              :width="imgSize2.w * 0.8"
              style="margin: auto; border-radius: 0"
            ></v-img>
            <v-card-title class="ctitle"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row style="text-align: center">
        <v-col
          ><v-btn to="/danh-muc/3" color="green darken-2" dark large>
            Xem tất cả <span class="mdi mdi-arrow-right-thick"></span></v-btn
        ></v-col>
      </v-row>
    </v-col>
    <home-news-section :news="news" />
  </v-row>
</template>

<script>
import { getProductByType } from '~/helper/common'

export default {
  name: 'IndexPage',
  data() {
    return {
      images: ['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png'],
    }
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4
      }
      if (this.$vuetify.breakpoint.lg) {
        if (this.teaProducts.length <= 6) return 3
        return 4
      }
      if (this.$vuetify.breakpoint.md) {
        return 4
      }
      return 1
    },
    imgSize1() {
      const size = (window.screen.width * 0.7 * 0.9) / 4
      if (this.$vuetify.breakpoint.xl) {
        return { w: size, h: size * 0.9 }
      }
      if (this.$vuetify.breakpoint.lg) {
        return { w: size, h: size * 1 }
      }
      if (this.$vuetify.breakpoint.md) {
        return { w: size, h: size * 1.1 }
      }
      return 110
    },
    imgSize2() {
      const size = (window.screen.width * 0.7 * 0.9) / 4
      if (this.$vuetify.breakpoint.xl) {
        return { w: size, h: size * 0.9 }
      }
      if (this.$vuetify.breakpoint.lg) {
        return { w: size, h: size * 1.1 }
      }
      if (this.$vuetify.breakpoint.md) {
        return { w: size, h: size }
      }
      return 150
    },
    cSize() {
      if (this.$vuetify.breakpoint.xl) {
        return 325
      }
      if (this.$vuetify.breakpoint.lg) {
        return 275
      }
      if (this.$vuetify.breakpoint.md) {
        return 250
      }
      return 250
    },
    subColumns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4
      }
      if (this.$vuetify.breakpoint.lg) {
        return 4
      }
      if (this.$vuetify.breakpoint.md) {
        return 2
      }
      return 1
    },
    categories() {
      return this.$store.state.categories.categories
    },
    products() {
      return this.$store.state.products.products
    },
    news() {
      return this.$store.state.news.news
    },
    info() {
      return this.$store.state.info.info
    },
    teaProducts() {
      const allTeaProducts = this.products.length
        ? this.products.filter((product) => product.category.id === 1)
        : []
      if (allTeaProducts.length > 12) return allTeaProducts.slice(0, 12)
      else if (allTeaProducts.length < 12 && allTeaProducts.length >= 8)
        return allTeaProducts.slice(0, 8)
      else return allTeaProducts
    },
    sub1Products() {
      return getProductByType(this.products, 1).slice(0, 4)
    },
    sub2Products() {
      return getProductByType(this.products, 2).slice(0, 4)
    },
  },
}
</script>
<style lang="scss" scoped>
.category-item {
  border-bottom: 1px solid #0000001a;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: block;
  color: $text-color;
}
.v-carousel__item {
  height: auto !important;
}
.banner-img {
  max-height: 500px;
  width: auto;
  object-fit: cover;
}
.item-card-image {
  &:last-child {
    margin-right: 0%;
  }
}
@media only screen and(min-width: 768px) and (max-width: 1025px) {
  .sp {
    display: none;
  }
}
@media only screen and(min-width: 630px) and (max-width: 767px) {
  .v-carousel__item {
    height: 200px !important;
  }
  .banner-img {
    max-height: 200px;
    width: auto;
    object-fit: cover;
  }
}
@media only screen and(max-width: 1024px) {
  .product-container {
    margin-bottom: 0 !important;
  }
}
</style>
