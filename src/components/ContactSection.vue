<template>
  <section class="section contact-section" id="contact">
    <div class="container">
      <img :src="logo" alt="webliss logo" class="logo-img" />
      <h2 class="section-title contact-title">Contact Us</h2>

      <p class="section-subtitle">언제든지 문의해 주세요. 친절히 상담해 드리겠습니다</p>

      <div class="contact-info">
        <div class="contact-item">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="contact-icon" />
          <h3>주소</h3>
          <p>서울특별시 강남구 삼성동 10-3, 3층</p>
        </div>

        <div class="contact-item">
          <font-awesome-icon :icon="['fas', 'phone']" class="contact-icon" />
          <h3>전화</h3>
          <p>02-6672-7456</p>
        </div>

        <div class="contact-item">
          <font-awesome-icon :icon="['fas', 'globe']" class="contact-icon" />
          <h3>웹사이트</h3>
          <p>www.we-bliss.com</p>
        </div>
      </div>
      <div class="copyright-info">
        <p>
          Copyright (c) We-Bliss Co.Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import logo from '../assets/webliss_compound_CI.svg'
import logo from '../assets/company-ci/webliss-ci-symbol.svg'

export default {
  name: 'ContactSection',
  setup(){
    return {
      logo,
    }
  }


}
</script>

<style scoped>
.logo-img {
  height: 100px;
  /* display: block; */
}

.contact-title {
  color: white;
}
</style>