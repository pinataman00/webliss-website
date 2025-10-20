<template>
  <section class="section company-info" id="about">
    <div class="container">
      <div class="info-grid">
        <div>
          <h2 class="section-title" style="text-align: left;">Company Information</h2>
          <div class="info-item">
            <div class="info-icon">
              <img :src="weblissSymbol" alt="Webliss" class="company-logo">
            </div>
            <div>
              <strong>회사명</strong><br>
              (주)위블리스
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-user-tie"></i></div>
            <div>
              <strong>대표이사</strong><br>
              유병수
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-calendar-alt"></i></div>
            <div>
              <strong>설립일자</strong><br>
              2024.11.01
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon"><i class="fas fa-users"></i></div>
            <div>
              <strong>직원 수</strong><br>
              32명
            </div>
          </div>
        </div>
        <div>
          <h3 class="business-title">주요 사업</h3>
          <ul class="business-list">
            <li class="business-item">
              <strong>클라우드/인프라 아키텍처 컨설팅 및 구축 / 운영</strong>
            </li>
            <li class="business-item">
              <strong>데이터 플랫폼 구축, 최적화 컨설팅 / 운영</strong>
            </li>
            <li class="business-item">
              <strong>AI 서비스 구축 / 운영</strong>
            </li>
            <li class="business-item">
              <strong>솔루션 및 서비스 플랫폼</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import weblissSymbol from '../assets/company-ci/webliss-ci-symbol.svg'
</script>

<style scoped>
.company-logo {
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
}

.business-title {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.business-list {
  list-style: none;
}

.business-item {
  margin-bottom: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
</style>