<template>
  <v-app dark class="default-layout">
    <v-system-bar
      ref="system-bar"
      :class="['top-header app-container', fixed ? '-fixed elevation-3' : '']"
      :fixed="fixed"
      transition="scroll-y-transition"
    >
      <img
        class="app-logo"
        src="~/assets/img/logo/app-logo.png"
        @click="$router.push('/')"
      />
      <div class="search">
        <v-text-field
          v-model="search"
          label="Tìm sản phẩm..."
          placeholder="Tìm sản phẩm..."
          large
          solo
          clearable
          hide-details="auto"
          class="input"
          @keydown.enter="handleSearch"
        ></v-text-field>
        <v-btn class="btn" color="green darken-2" @click="handleSearch">
          <span class="mdi mdi-magnify"></span>
        </v-btn>
      </div>
      <div class="text">
        <div class="icon">
          <span class="mdi mdi-heart-circle"></span>
          Yêu thích
        </div>
        <div class="icon">
          <span class="mdi mdi-truck"></span>
          Mua sỉ
        </div>
      </div>
    </v-system-bar>
    <v-app-bar
      class="nav-bar main-container app-container"
      :clipped-left="clipped"
      style="height: 50px"
      absolute
      app
    >
      <v-row align="center" class="app-link">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn class="menubtn" color="#fff" text v-bind="attrs" v-on="on">
              <div class="mdi mdi-menu-down text-md-large"></div>
              Danh mục
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in categories"
              :key="index"
              :to="`/danh-muc/${item.id}`"
            >
              <v-list-item-title
                ><span class="mdi mdi-menu-right"></span
                >{{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="text-btn" color="#fff" to="/san-pham/" text>
          Sản phẩm
        </v-btn>
        <v-btn class="text-btn" color="#fff" to="/tin-tuc/" text>
          Tin tức
        </v-btn>
        <v-btn class="text-btn" color="#fff" to="/lien-he/" text>
          Liên hệ
        </v-btn>
      </v-row>
      <v-spacer />
      <v-spacer />
      <v-spacer />
    </v-app-bar>
    <v-main style="background-color: #f5f5f5">
      <v-container class="pb-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="layout-footer" :absolute="true" app>
      <v-row justify="center" class="message main-container app-container">
        <v-col cols="12" sm="4" class="text-large">
          <div class="flex-center gap-3">
            <span class="icon mdi mdi-thumb-up-outline"></span>
            <div class="content">
              <div class="title mb-2">Uy tín hàng đầu</div>
              <div class="text-normal text-body-2">
                Thành lập hơn 5 Năm, đã phục vụ hơn 300.000 khách hàng trên cả
                nước...
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="text-large">
          <div class="flex-center gap-3">
            <span class="icon mdi mdi-truck-delivery"></span>
            <div class="content">
              <div class="title mb-2">Giao hàng nhanh chóng</div>
              <div class="text-normal text-body-2">
                Giao hàng 24h trong nội thành và giao hàng qua bưu điện ở tỉnh
                khác...
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="text-large">
          <div class="flex-center gap-3">
            <span class="icon mdi mdi-tea-outline"></span>
            <div class="content">
              <div class="title mb-2">Sản phẩm đa dạng</div>
              <div class="text-normal text-body-2">
                Cung cấp tất cả các loại tinh bột, thảo dược, bột trà xanh, mầm
                đậu nành...
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="contact main-container app-container">
        <v-col cols="12" sm="6" class="text-large">
          <div class="content">
            <div class="text-subtitle-2 mb-2">LIÊN HỆ</div>
            <div class="text-h6 font-bold mb-2">{{ info.name }}</div>
            <div class="text-normal mb-2">
              <span class="font-bold">Địa chỉ: </span>{{ info.address }}
            </div>
            <div class="text-normal mb-2">
              <span class="font-bold">Số điện thoại: </span
              >{{ info.phone_number }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="text-large">
          <v-row>
            <v-col cols="6" sm="6">
              <div class="text-subtitle-2 mb-2">VỀ CHÚNG TÔI</div>
              <v-list class="about-list">
                <v-list-item
                  v-for="(item, index) in aboutList"
                  :key="index"
                  :to="item.to"
                  class="padding-0 height-normal item"
                >
                  <v-list-item-title class="text-color-main text-normal"
                    ><span class="mdi mdi-menu-right"></span
                    >{{ item.text }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" sm="6">
              <div class="text-subtitle-2 mb-2">CHÍNH SÁCH</div>
              <v-list class="about-list">
                <v-list-item
                  v-for="(item, index) in policies"
                  :key="index"
                  :to="item.to"
                  class="padding-0 height-normal item"
                >
                  <v-list-item-title class="text-color-main text-normal"
                    ><span class="mdi mdi-menu-right"></span
                    >{{ item.text }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" class="other main-container w-full app-container">
        <v-col cols="12" sm="4" class="text-center">
          <div class="text-subtitle-2">PHƯƠNG THỨC THANH TOÁN</div>
          <v-row>
            <v-col cols="2">
              <img src="~/assets/img/footer/pay-5.png" />
            </v-col>
            <v-col cols="2">
              <img src="~/assets/img/footer/pay-1.png" />
            </v-col>
            <v-col cols="2">
              <img src="~/assets/img/footer/pay-2.png" />
            </v-col>
            <v-col cols="2">
              <img src="~/assets/img/footer/pay-3.png" />
            </v-col>
            <v-col cols="2">
              <img src="~/assets/img/footer/pay-4.png" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
          <div class="text-subtitle-2">DỊCH VỤ GIAO HÀNG</div>
          <v-row>
            <v-col cols="6">
              <img src="~/assets/img/footer/logo-giao-hang-nhanh.png" />
            </v-col>
            <v-col cols="6">
              <img src="~/assets/img/footer/logo-vietnam-post.png" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
          <div class="text-subtitle-2 mb-2">KÊNH TRUYỀN THÔNG</div>
          <v-row justify="center" class="gap-3 social-media">
            <nuxt-link to="/" target="_blank">
              <span class="mdi mdi-facebook text-large item"></span>
            </nuxt-link>
            <nuxt-link to="/">
              <span class="mdi mdi-twitter text-large item"></span>
            </nuxt-link>
            <nuxt-link to="/">
              <span class="mdi mdi-google-plus text-large item"></span>
            </nuxt-link>
            <nuxt-link to="/">
              <span class="mdi mdi-youtube text-large item"></span>
            </nuxt-link>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="flex-center">
        <v-col cols="12">
          <p class="text-normal text-center">
            © 2019 của {{ info.name }} <br />Giấy chứng nhận cơ sở đủ điều kiện
            an toàn thực phẩm<br />Sản Phẩm không phải đúng với tất cả mọi
            người, tùy vào mỗi cơ địa sẽ có những mức tác dụng khác nhau<br />Nội
            dung được đăng tải lên website chỉ mang tính chất tham khảo
          </p>
        </v-col>
      </v-row>
      <a class="hotline" title="hotline" :href="`tel:${info.phone_number}`">
        <span class="pc">Hotline {{ info.phone_number }}</span>
        <span class="mdi mdi-phone mobile text-normal">Hotline</span>
      </a>
      <a
        class="zalo"
        title="zalo"
        :href="`https://zalo.me/${info.phone_number}`"
        target="_blank"
      >
        <span class="pc">Zalo {{ info.phone_number }}</span>
        <span class="mdi mdi-phone mobile text-normal">Zalo</span>
      </a>
      <div class="pagetop" @click="scrollToTop">
        <span class="mdi mdi-arrow-up-bold text-large btn"></span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      aboutList: [
        {
          text: 'Giới thiệu',
          to: '/',
        },
        {
          text: 'Triết lý kinh doanh',
          to: '/',
        },
        {
          text: 'Tầm nhìn chiến lược',
          to: '/',
        },
        {
          text: 'Liên hệ',
          to: '/',
        },
        {
          text: 'Ý kiến khách hàng',
          to: '/',
        },
        {
          text: 'Hoạt động công ty',
          to: '/',
        },
      ],
      policies: [
        {
          text: 'Hướng dẫn mua hàng',
          to: '/',
        },
        {
          text: 'Hướng dẫn thanh toán',
          to: '/',
        },
        {
          text: 'Chính sách vận chuyển',
          to: '/',
        },
        {
          text: 'Chính sách đổi trả',
          to: '/',
        },
        {
          text: 'Chính sách bảo mật',
          to: '/',
        },
        {
          text: 'Điều khoản và điều kiện',
          to: '/',
        },
      ],
      miniVariant: false,
      search: '',
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    categories() {
      return this.$store.state.categories.categories
    },
    info() {
      return this.$store.state.info.info
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.$store.dispatch('products/fetchProducts', {})
    this.$store.dispatch('categories/fetchCategories')
    this.$store.dispatch('news/fetchNews')
    this.$store.dispatch('info/fetchInfo')
    this.$store.dispatch('banners/fetchBanners')
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 160) {
        this.fixed = true
      } else this.fixed = false
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    async handleSearch() {
      if (this.search !== '') {
        await this.$store.dispatch('products/fetchProducts', {
          isSave: false,
          searchParams: this.search || '',
        })
        this.$router.push(`/tim-kiem/?search=${this.search}`)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.top-header {
  height: 100px !important;
  background-color: #f5f5f5;
  display: flex;
  z-index: 4;
  &.-fixed {
    border-bottom: 1px solid #ececec;
    animation: stuckMoveDown 0.6s;
  }
  > .text {
    display: flex;
    justify-content: center;
    gap: 32px;
    color: $text-color;
  }
  > .text > .icon {
    display: flex;
    justify-content: center;
    font-size: 18px;
    gap: 4px;
  }
  > .search {
    display: flex;
    justify-content: center;
  }
  > .search > .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > .search > .btn {
    height: 48px;
    width: 48px;
    color: #fff;
    font-size: 24px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    min-width: unset;
  }
}
.nav-bar {
  top: 95px;
  margin-top: 5px !important;
  background-color: #388e3c !important;
  color: #fff !important;
}

.app-link {
  .v-btn {
    height: 50px;
    border-radius: 0;
  }
}

.menubtn {
  height: 50px !important;
}

.btnitem {
  height: 50px !important;
}

.about-list {
  .item {
    min-height: 36px !important;
    &:hover {
      text-decoration: underline;
      text-decoration-color: $text-color;
    }
  }
}

.layout-footer {
  .icon {
    padding: 14px 20px;
    border: 1px solid $text-color;
    border-radius: 60%;
    color: $text-color;
  }
  .message {
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    background-color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .contact {
    border-bottom: 1px solid #ececec;
    background-color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .other {
    border-bottom: 1px solid #ececec;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .pagetop {
    position: fixed;
    right: 20px;
    bottom: 130px;
  }
  .pagetop > .btn {
    padding: 3px 4px;
    border: 1px solid $text-color;
    cursor: pointer;
    border-radius: 10px;
    background-color: $text-color;
    color: #fff;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  .hotline {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 20px;
    color: #e53935;
    border: 1px dotted #e53935;
    border-radius: 30px;
    text-decoration: none;
    padding: 5px 12px;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
  }
  .zalo {
    position: fixed;
    right: 10px;
    bottom: 70px;
    font-size: 20px;
    color: #1e88e5;
    border: 1px dotted #1e88e5;
    border-radius: 30px;
    text-decoration: none;
    padding: 5px 12px;
    opacity: 0.5;
    &:hover {
      opacity: 0.8;
    }
  }
}
.social-media {
  .item {
    transition: 0.3s ease-in-out;
    display: block;
    &:hover {
      transform: translate(0, -5px);
    }
  }
}
@media only screen and (min-width: 768px) {
  .app-logo {
    width: 140px;
    height: auto;
    margin-right: 20px;
    cursor: pointer;
  }
  .top-header {
    > .search {
      width: 55%;
      margin-right: 3%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1025px) {
  .top-header {
    > .search {
      width: 75%;
      margin-right: 5%;
    }
    > .text {
      display: none;
    }
  }
}
@media only screen and (max-width: 768px) {
  .product-container .v-carousel__controls {
    bottom: -18px;
  }
  .nav-bar.main-container {
    padding: 0 2%;
  }
  .app-logo {
    width: 120px;
    height: auto;
    margin-right: -25px;
    margin-left: -25px;
  }
  .top-header {
    gap: 5%;
    > .text {
      display: none;
    }
    > .search {
      font-size: 12px;
    }
  }
  .app-link {
    justify-content: center;
    .v-btn:not(.v-btn--round).v-size--x-large {
      width: 20%;
    }
  }
  .app-link {
    .text-btn {
      font-size: 12px;
      width: 20% !important;
      min-width: unset;
      height: 50px;
    }
    > .menubtn {
      font-size: 12px;
    }
  }
  .layout-footer {
    .zalo {
      bottom: 50px;
    }
    .pagetop {
      bottom: 92px;
    }
    .pagetop > .btn {
      padding: 5px;
    }
  }
}
@keyframes stuckMoveDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
