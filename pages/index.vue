<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" sm="9">
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
    <v-col cols="12" sm="3">
      <v-row>
        <v-col cols="12" sm="12">
          <v-card class="contact-card">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> Hợp Tác </v-card-title>
                <v-card-subtitle class="subtitle"
                  >PHÂN PHỐI - ĐẠI LÝ</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    LIÊN HỆ
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="70" rounded="0">
                <img src="~/assets/img/logo/app-logo.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card theme="dark" class="contact-card">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> Báo Giá Sỉ </v-card-title>
                <v-card-subtitle class="subtitle"
                  >TRÀ - HOA, QUẢ KHÔ</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    LIÊN HỆ
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="70" rounded="0">
                <img src="~/assets/img/logo/app-logo.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card theme="dark" class="contact-card">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> Báo Giá Sỉ </v-card-title>
                <v-card-subtitle class="subtitle"
                  >TINH BỘT - TINH DẦU</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    LIÊN HỆ
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="70" rounded="0">
                <img src="~/assets/img/logo/app-logo.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card theme="dark" class="contact-card">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6"> Dịch Vụ </v-card-title>
                <v-card-subtitle class="subtitle -last"
                  >NGHIỀN - SẤY
                  <span class="sp">- VIÊN HOÀN</span></v-card-subtitle
                >
                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small">
                    LIÊN HỆ
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3" size="70" rounded="0">
                <img src="~/assets/img/logo/app-logo.png" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      images: ['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png'],
    }
  },
}
</script>
<style lang="scss" scoped>
.contact-card {
  background-image: url('~/assets/img/bg_card.png');
  background-size: 70px 100%;
  position: relative;
  padding: 6.2px 0;
  img {
    position: absolute;
    width: 100px;
    height: 100px;
  }
  .text-h6 {
    font-size: 1em !important;
    margin-top: -15px;
    color: crimson;
    margin-left: 58px;
    font-size: 1.1em !important;
  }
  .subtitle {
    font-size: 12px;
    padding-right: 0;
    overflow: overlay;
    color: #0288d1;
    font-weight: 700;
    margin-left: 34px;
    &.-last {
      margin-left: 7px;
    }
  }
  .v-card__actions {
    position: absolute;
    top: 56px;
    left: 48px;
  }
  .v-btn {
    background-color: #1c87c9;
    border-radius: 60px;
    border: none;
    color: #eeeeee;
    cursor: pointer;
    display: inline-block;
    font-family: sans-serif;
    font-size: 13px;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    animation: glowing 1300ms infinite;
  }
}
.v-carousel__item {
  height: auto !important;
}
.banner-img {
  max-height: 500px;
  width: auto;
  object-fit: cover;
}
@media only screen and(min-width: 768px) and (max-width: 850px) {
  .contact-card {
    img {
      display: none;
    }
  }
}
@media only screen and(min-width: 768px) and (max-width: 1025px) {
  .sp {
    display: none;
  }
  .contact-card {
    .text-h6 {
      position: absolute;
      left: 30px;
      margin-left: 0;
    }
    img {
      width: 70px;
      height: 70px;
      margin-left: 20px;
    }
    .v-card__actions {
      left: 22px;
      top: 56px;
    }
    .subtitle {
      position: absolute;
      top: 52px;
      left: 7px;
      margin-top: -13px;
      margin-left: 0;
      &.-last {
        margin-left: 15px;
      }
    }
  }
}
@media only screen and(min-width: 630px) and (max-width: 767px) {
  .contact-card {
    img {
      display: none;
    }
  }
  .v-carousel__item {
    height: 200px !important;
  }
  .banner-img {
    max-height: 200px;
    width: auto;
    object-fit: cover;
  }
}
@media only screen and (max-width: 629px) {
  .contact-card {
    img {
      right: -5px;
      height: 100px;
      width: 100px;
    }
    .subtitle {
      position: absolute;
      left: 38px;
      top: 54px;
    }
    .text-h6 {
      position: absolute;
      left: 34px;
    }
    .v-card__actions {
      left: 80px;
    }
  }
  /* .banner-img {
    max-height: 215px;
  }
  .v-carousel {
    max-height: 225px !important;
  } */
}
@keyframes glowing {
  0% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
  50% {
    background-color: #49e819;
    box-shadow: 0 0 20px #49e819;
  }
  100% {
    background-color: #2ba805;
    box-shadow: 0 0 5px #2ba805;
  }
}
</style>
