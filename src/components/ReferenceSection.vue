<template>
  <section class="section reference-section" id="reference">
    <div class="container">
      <h2 class="section-title">위블리스와 함께하는 고객</h2>
      <p class="section-subtitle">믿음과 신뢰를 바탕으로<span class="mobile-break"> </span>함께 성장하고 있는 고객사들입니다</p>
      
      <div class="logo-carousel-container">
        <div class="logo-carousel" ref="logoCarousel">
          <div class="logo-track">
            <div class="logo-item" v-for="(logo, index) in infiniteLogos" :key="`logo-${index}`">
              <img :src="logo.image" :alt="logo.name" class="client-logo" :class="{ 'pwc-logo': logo.name === 'PwC' }">
            </div>
          </div>
        </div>
      </div>
      
      <!-- 고객사가 늘어나면 아래 주석을 해제하고 수치를 업데이트하세요 -->
      <!-- <div class="reference-stats">
        <div class="stat-item">
          <div class="stat-number">10+</div>
          <div class="stat-label">파트너사</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">25+</div>
          <div class="stat-label">프로젝트</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">고객 만족도</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">24/7</div>
          <div class="stat-label">기술 지원</div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
// 실제 고객사 로고 이미지들 import
import samsungLogo from '../assets/clients/Samsung_electronics_ci.svg'
import samsungSdsLogo from '../assets/clients/samsung_sds_ci.svg'
import lotteLogo from '../assets/clients/Lotte_duty-free.png'
import skHynixLogo from '../assets/clients/SK-hynix.png'
import skTelecomLogo from '../assets/clients/SK-telecom.png'
import kostatLogo from '../assets/clients/Kostat.png'
import hdMarinLogo from '../assets/clients/hd_marin_solution.png'
import pwcLogo from '../assets/clients/pwc.svg'

export default {
  name: 'ReferenceSection',
  data() {
    return {
      clientLogos: [
        { id: 1, name: 'Samsung Electronics', image: samsungLogo },
        { id: 2, name: 'Samsung SDS', image: samsungSdsLogo },
        { id: 3, name: 'Lotte Duty Free', image: lotteLogo },
        { id: 4, name: 'SK Hynix', image: skHynixLogo },
        { id: 5, name: 'SK Telecom', image: skTelecomLogo },
        { id: 6, name: 'Kostat', image: kostatLogo },
        { id: 7, name: 'HD Marin Solution', image: hdMarinLogo },
        { id: 8, name: 'PwC', image: pwcLogo },
      ]
    }
  },
  computed: {
    infiniteLogos() {
      // 무한 스크롤을 위해 로고를 3번 반복
      return [...this.clientLogos, ...this.clientLogos, ...this.clientLogos]
    }
  }
}
</script>

<style scoped>
.section {
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.reference-section {
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
  position: relative;
}

.reference-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e9ecef 20%, #e9ecef 80%, transparent);
  display: none;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 80px;
}

.mobile-break {
  display: inline;
}

.logo-carousel-container {
  position: relative;
  overflow: hidden;
  margin: 0 -20px 80px -20px;
  padding: 40px 0;
  background: white;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
}

.logo-carousel {
  width: 100%;
  overflow: hidden;
}

.logo-track {
  display: flex;
  align-items: center;
  gap: 60px;
  animation: scroll-logos 30s linear infinite;
  width: fit-content;
}

.logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  min-width: 180px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.logo-track:hover {
  animation-play-state: paused;
}

.client-logo {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(0%) opacity(0.9);
  transition: all 0.3s ease;
}

.client-logo:hover {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

.pwc-logo {
  max-height: 75px !important;
  transform: scale(1.25);
}

.pwc-logo:hover {
  transform: scale(1.3);
}

.reference-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .logo-track {
    gap: 40px;
  }
  
  .logo-item {
    min-width: 150px;
    padding: 0 20px;
  }
  
  .reference-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0 80px 0;
  }

  .reference-section::after {
    display: block;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .mobile-break {
    display: block;
  }

  .logo-track {
    gap: 30px;
    animation-duration: 25s;
  }
  
  .logo-item {
    height: 60px;
    min-width: 120px;
    padding: 0 15px;
  }
  
  .client-logo {
    max-height: 40px;
  }

  .pwc-logo {
    max-height: 50px !important;
    transform: scale(1.2);
  }

  .pwc-logo:hover {
    transform: scale(1.25);
  }
  
  .reference-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .logo-track {
    gap: 20px;
    animation-duration: 20s;
  }
  
  .logo-item {
    min-width: 100px;
    padding: 0 10px;
  }
  
  .reference-stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll-logos {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}
</style>