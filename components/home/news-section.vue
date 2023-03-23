<template>
  <v-row class="container">
    <v-col cols="12" md="8">
      <nuxt-link to="/tin-tuc" class="link title mb-5">
        <div class="text">Tin tức</div>
      </nuxt-link>
      <v-row>
        <v-col cols="12" md="6">
          <div class="content elevation-1">
            <nuxt-link class="link" to="/"
              >4 Công thức pha trà táo đỏ thơm ngon, bổ dưỡng, dễ làm</nuxt-link
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="news-item">
            <img
              src="https://trahoanhamoc.com/wp-content/uploads/2023/03/tao-do.jpg"
              width="120"
            />
            <nuxt-link to="/tin-tuc/1" class="link block"
              >Lý do táo đỏ là nguyên liệu chính của Trà Hoa Nhà Mộc</nuxt-link
            >
          </div>
          <div class="news-item">
            <img
              src="https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-cam-que-300x200.jpg"
              width="120"
            />
            <nuxt-link to="/tin-tuc/1" class="link block"
              >Lợi ích không ngờ của trà hoa thảo mộc</nuxt-link
            >
          </div>
          <div class="news-item">
            <img
              src="https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-thao-moc-say-lanh-300x200.jpg"
              width="120"
            />
            <nuxt-link to="/tin-tuc/1" class="link block"
              >Vì sao lựa chọn hoa quả sấy lạnh?</nuxt-link
            >
          </div>
          <div class="news-item">
            <img
              src="https://trahoanhamoc.com/wp-content/uploads/2023/02/long-nhan-say-kho-thom-ngon-300x200.jpg"
              width="120"
            />
            <nuxt-link to="/tin-tuc/1" class="link block"
              >Long Nhãn – vị thuốc cho giấc ngủ</nuxt-link
            >
          </div>
          <div class="news-item">
            <img
              src="	https://trahoanhamoc.com/wp-content/uploads/2023/02/tra-hoa-dau-biec-300x200.jpg"
              width="120"
            />
            <nuxt-link to="/tin-tuc/1" class="link block"
              >Hoa đậu biếc – loại thảo dược đa công dụng</nuxt-link
            >
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <div class="link title mb-5">
        <div class="text">Video</div>
      </div>
      <v-row>
        <v-col cols="12"
          ><div class="embed-responsive embed-responsive-4by3 mb-5">
            <iframe
              width="360"
              height="240"
              src="https://www.youtube.com/embed/6myMryDIVCk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe></div
        ></v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.title {
  border-bottom: 1px solid #2e7d32;
  display: block;
  &:hover {
    text-decoration: none;
  }

  > .text {
    color: #fff;
    padding: 10px 16px;
    background-color: #2e7d32;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
    width: 100px;
  }
}
.content {
  background-color: #ffffff;
  padding: 5px 12px;
  border-radius: 10px;
  cursor: pointer;
  > .link {
    color: #2e7d32;
    font-weight: 700 !important;
  }
}
.news-item {
  display: flex;
  gap: 5%;
  margin-bottom: 12px;
  > .link {
    color: #2e7d32;
  }
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
@media only screen and (max-width: 767px) {
  .embed-responsive {
    text-align: center;
  }
}
</style>
