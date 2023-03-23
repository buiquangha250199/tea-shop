<template>
  <v-row justify="center" class="mb-8">
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
        <div class="text">Tra Mix Vi</div>
      </div>
      <v-carousel
        cycle
        interval="4000"
        hide-delimiter-background
        show-arrows-on-hover
        height="325"
      >
        <template v-for="(product, index) in teaProducts">
          <v-carousel-item
            v-if="(index + 1) % columns === 1 || columns === 1"
            :key="index"
          >
            <v-row class="flex-nowrap">
              <template v-for="(n, i) in columns">
                <template v-if="+index + i < teaProducts.length">
                  <v-col :key="i">
                    <v-sheet
                      v-if="+index + i < teaProducts.length"
                      color="#fff"
                      height="100%"
                    >
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <div class="display-3">
                          <v-card class="card-item" width="270">
                            <v-img
                              :src="teaProducts[+index + i].thumbnail"
                              height="200px"
                              cover
                            ></v-img>
                            <v-card-title class="title">
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
        <div class="text">Trà Trị Liệu</div>
      </div>
      <v-row>
        <v-col
          v-for="(product, index) in tea2Products"
          :key="index"
          cols="6"
          sm="3"
        >
          <v-card class="card-item" width="250">
            <v-img :src="product.thumbnail" height="200px" cover></v-img>
            <v-card-title class="title"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row style="text-align: center">
        <v-col
          ><v-btn color="green darken-2" dark large>
            Xem tất cả <span class="mdi mdi-arrow-right-thick"></span></v-btn
        ></v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div class="text">Trà thảo dược</div>
      </div>
      <v-row>
        <v-col
          v-for="(product, index) in tea2Products"
          :key="index"
          cols="6"
          sm="3"
        >
          <v-card class="card-item" width="250">
            <v-img :src="product.thumbnail" height="200px" cover></v-img>
            <v-card-title class="title"> {{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle">
              {{ product.price }}₫ /{{ product.unit }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row style="text-align: center">
        <v-col
          ><v-btn color="green darken-2" dark large>
            Xem tất cả <span class="mdi mdi-arrow-right-thick"></span></v-btn
        ></v-col>
      </v-row>
    </v-col>
    <home-news-section />
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      images: ['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png'],
      slider: [
        'red',
        'green',
        'orange',
        'blue',
        'pink',
        'purple',
        'indigo',
        'cyan',
        'deep-purple',
        'light-green',
        'deep-orange',
        'blue-grey',
      ],
    }
  },
  computed: {
    columns() {
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
    teaProducts() {
      // return this.$store.state.products
      return [
        {
          name: 'Trà tuyết dưỡng nhan',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2020/12/x-300x237.png',
          price: '32000',
          unit: 'gói',
        },
        {
          name: 'Trà hoa quả đậu biếc',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-hoa-qua-dau-biec-3-300x300.png',
          price: '12000',
          unit: 'gói',
        },
        {
          name: 'Trà Cam Quế',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-cam-que-300x300.jpg',
          price: '15000',
          unit: 'gói',
        },
        {
          name: 'Kim quất hồng đào',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/kim-quat-e1676955530405-300x300.jpg',
          price: '18000',
          unit: 'gói',
        },
        {
          name: 'Trà tuyết dưỡng nhan',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2020/12/x-300x237.png',
          price: '32000',
          unit: 'gói',
        },
        {
          name: 'Trà Cam Quế',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-cam-que-300x300.jpg',
          price: '15000',
          unit: 'gói',
        },
        {
          name: 'Trà hoa quả đậu biếc',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-hoa-qua-dau-biec-3-300x300.png',
          price: '12000',
          unit: 'gói',
        },
        {
          name: 'Kim quất hồng đào',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/kim-quat-e1676955530405-300x300.jpg',
          price: '18000',
          unit: 'gói',
        },
        {
          name: 'Kim quất hồng đào',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/kim-quat-e1676955530405-300x300.jpg',
          price: '18000',
          unit: 'gói',
        },
        {
          name: 'Trà tuyết dưỡng nhan',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2020/12/x-300x237.png',
          price: '32000',
          unit: 'gói',
        },
        {
          name: 'Trà Cam Quế',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-cam-que-300x300.jpg',
          price: '15000',
          unit: 'gói',
        },
        {
          name: 'Trà hoa quả đậu biếc',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-hoa-qua-dau-biec-3-300x300.png',
          price: '12000',
          unit: 'gói',
        },
      ]
    },
    tea2Products() {
      return [
        {
          name: 'Trà tuyết dưỡng nhan',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2020/12/x-300x237.png',
          price: '32000',
          unit: 'gói',
        },
        {
          name: 'Trà hoa quả đậu biếc',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-hoa-qua-dau-biec-3-300x300.png',
          price: '12000',
          unit: 'gói',
        },
        {
          name: 'Trà Cam Quế',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-cam-que-300x300.jpg',
          price: '15000',
          unit: 'gói',
        },
        {
          name: 'Kim quất hồng đào',
          thumbnail:
            'https://trahoanhamoc.com/wp-content/uploads/2023/02/kim-quat-e1676955530405-300x300.jpg',
          price: '18000',
          unit: 'gói',
        },
      ]
    },
  },
}
</script>
<style lang="scss" scoped>
.v-carousel__item {
  height: auto !important;
}
.banner-img {
  max-height: 500px;
  width: auto;
  object-fit: cover;
}
.product-container {
  > .title {
    border-bottom: 1px solid #f34407;
    margin-right: 20px;
  }
  > .title > .text {
    background: #f34407;
    width: fit-content;
    padding: 12px 15px;
    color: #fff;
    cursor: pointer;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
  }
  .card-item {
    &:hover {
      transform: scale(1.05);
      transition: all 0.5s;
    }
    .title {
      text-align: center;
      color: #4e342e;
      display: block;
      font-size: 15px !important;
    }
    .subtitle {
      color: #ff0000;
      display: block;
      text-align: center;
      font-weight: 900;
      font-size: 16px !important;
    }
  }
}
.sub-product {
  .title {
    border-bottom-color: #388e3c;
  }
  .title > .text {
    background-color: #388e3c;
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
</style>
