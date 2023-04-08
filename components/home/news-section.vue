<template>
  <v-row class="container">
    <v-col cols="12" md="8">
      <nuxt-link to="/tin-tuc" class="link title mb-5">
        <div class="text">Tin tức</div>
      </nuxt-link>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            v-if="news.length > 0"
            class="card-item"
            @click="$router.push(`/tin-tuc/${news[0]?.id}`)"
          >
            <v-img
              max-height="200px"
              class="news-img"
              :src="news[0].thumbnail"
              cover
            ></v-img>
            <v-card-title class="ctitle"> {{ news[0].title }}</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <div v-for="item in subNews" :key="item.id" class="news-item">
            <img
              :src="`${item.thumbnail}`"
              width="120"
              style="cursor: pointer"
              @click="$router.push(`/tin-tuc/${item.id}`)"
            />
            <nuxt-link :to="`/tin-tuc/${item.id}`" class="link block">{{
              item.title
            }}</nuxt-link>
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
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe></div
        ></v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    subNews() {
      return this.news.slice(1, 5)
    },
  },
}
</script>
<style lang="scss" scoped>
.news-img {
  display: block;
  margin: auto;
}
.title {
  border-bottom: 1px solid #2e7d32;
  display: block;
  font-size: 15px !important;
  word-break: break-word;
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
