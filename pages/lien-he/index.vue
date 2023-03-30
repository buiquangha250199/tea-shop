<template>
  <div>
    <v-breadcrumbs :items="items">
      <template #divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-col cols="12" class="product-container sub-product mb-8">
      <div class="title mb-6">
        <div class="text">Liên hệ</div>
      </div>
      <v-row>
        <v-col cols="12">
          <iframe
            class="iframe"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14896.824718384732!2d105.7938184!3d21.0244347!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1679755564750!5m2!1svi!2s"
            max-height="600"
            width="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="6">
              <v-col cols="12" class="mt-n6">
                <v-text-field
                  v-model="name"
                  :counter="45"
                  label="Tên"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n6">
                <v-text-field
                  v-model="tel"
                  :counter="14"
                  :error-messages="telErrors"
                  label="Số điện thoại"
                  @blur="$v.tel.$touch()"
                  @input="$v.tel.$touch()"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n6"
                ><v-text-field
                  v-model="email"
                  :counter="45"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n6">
                <v-text-field
                  v-model="title"
                  :counter="100"
                  label="Tiêu đề"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-2">
                <v-textarea
                  v-model="content"
                  outlined
                  label="Nội dung"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="mt-n6">
                <v-btn
                  :loading="loadingBtn"
                  :disabled="loadingBtn"
                  block
                  depressed
                  color="primary"
                  @click="sendContact"
                >
                  Gửi
                </v-btn>
              </v-col>
            </v-col>
            <v-col cols="12" md="6">
              <div class="title text-h6 mb-4">Trà hoa nhà Mộc</div>
              <div class="text-subtitle-1 mb-4">
                <strong class="text-subtitle-2">Địa chỉ</strong>: 505 Trần Khát
                Chân – Thanh Nhàn – HBT – HN
              </div>
              <div class="text-subtitle-1 mb-4">
                <strong class="text-subtitle-2">Số điện thoại:</strong>:
                094.881.63.36
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar
      v-model="snackbar"
      :top="true"
      :timeout="3000"
      color="success"
      variant="outlined"
    >
      <strong> {{ messageSnackbar }} </strong>
    </v-snackbar>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data: () => ({
    items: [
      {
        text: 'Trang chủ',
        disabled: false,
        href: '/',
      },
      {
        text: 'Liên hệ',
        disabled: true,
        href: 'breadcrumbs_link_1',
      },
    ],
    name: null,
    tel: null,
    email: null,
    title: null,
    content: null,
    snackbar: false,
    loadingBtn: false,
    messageSnackbar: '',
  }),
  validations: {
    tel: { required },
  },
  computed: {
    telErrors() {
      const errors = []
      if (!this.$v.tel.$dirty || (this.$v.tel.$error && this.tel === ''))
        return errors
      !this.$v.tel.required && errors.push('Vui lòng nhập giá trị')
      return errors
    },
  },
  methods: {
    async sendContact() {
      const body = {
        name: this.name,
        email: this.email,
        phone_number: this.tel,
        title: this.title,
        content: this.content,
      }

      const contact = await this.$axios.$post(
        `${this.$config.baseUrl}customers`,
        body
      )
      if (contact) {
        this.messageSnackbar =
          'Yêu cầu thành công! \nChúng tôi sẽ liên hệ trong thời gian sớm nhất.'
        this.loadingBtn = false
        this.snackbar = true
        this.name = ''
        this.email = ''
        this.tel = ''
        this.title = ''
        this.content = ''
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 600px;
}
@media only screen and (max-width: 767px) {
  .iframe {
    height: 300px;
  }
}
</style>
