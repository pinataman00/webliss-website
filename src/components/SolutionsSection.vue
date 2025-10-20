<template>
  <section class="section solutions-section" id="solutions">
    <div class="container">
      <h2 class="section-title">Our Solutions</h2>
      <p class="section-subtitle">혁신적인 기술을 바탕으로 다양한 솔루션을 제공합니다</p>

      <!-- Solution Navigation -->
      <div class="solution-nav" :class="{ 'nav-at-top': isNavAtTop }">
        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'cloudwai' }"
            @click="changeSolution('cloudwai')">
            CloudWai
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="cloudWaiLogo" alt="CloudWai logo" class="tooltip-solution-logo tooltip-logo-cloudwai">
              <p>클라우드 인프라 자동구성 및 통합관리 솔루션</p>
              <!-- <span class="tooltip-detail">프로비저닝-빌링-모니터링, One-Stop 관리</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>

        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'kubesync' }"
            @click="changeSolution('kubesync')">
            Orkis
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="orkisLogo" alt="Orkis logo" class="tooltip-solution-logo tooltip-logo-orkis">
              <p>MSA와 컨테이너 환경을 위한 통합 관리 솔루션</p>
              <!-- <span class="tooltip-detail">컨테이너부터 CI/CD·모니터링까지 완전 자동화된 DevOps 시스템</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>

        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'verora' }"
            @click="changeSolution('verora')">
            Verora
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="veroraLogo" alt="Verora logo" class="tooltip-solution-logo tooltip-logo-verora">
              <p>RAG 기반 생성형 AI 채팅 서비스</p>
              <!-- <span class="tooltip-detail">기업 내부 데이터 기반 24/7 지능형 고객 지원</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>

        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'dataq' }"
            @click="changeSolution('dataq')">
            Siora
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="sioraLogo" alt="Siora logo" class="tooltip-solution-logo tooltip-logo-siora">
              <p>자연어를 SQL로 변환하는 데이터 분석 플랫폼</p>
              <!-- <span class="tooltip-detail">SQL 지식 없이도 누구나 쉽게 데이터 분석 가능</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>

        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'neoflow' }"
            @click="changeSolution('neoflow')">
            NeoFlow
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="neoFlowLogo" alt="NeoFlow logo" class="tooltip-solution-logo tooltip-logo-neoflow">
              <p>통합 데이터 플랫폼 구축 솔루션</p>
              <!-- <span class="tooltip-detail">데이터 수집, 가공, 적재까지의 전과정 자동화</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>

        <div class="solution-nav-item">
          <button class="solution-nav-btn" :class="{ active: activeSolution === 'dovora' }"
            @click="changeSolution('dovora')">
            Dovora
          </button>
          <div class="solution-tooltip">
            <div class="tooltip-content">
              <img :src="dovoraLogo" alt="Dovora logo" class="tooltip-solution-logo tooltip-logo-dovora">
              <p>AI 기반 지능형 문서 관리 시스템</p>
              <!-- <span class="tooltip-detail">문서 내용 기반 정확한 답변으로 환각 현상 최소화</span> -->
            </div>
            <div class="tooltip-arrow"></div>
          </div>
        </div>
      </div>

      <!-- Solution Details -->
      <div class="solution-content">
        <CloudWai v-if="activeSolution === 'cloudwai'" class="solution-item" />
        <Orkis v-if="activeSolution === 'kubesync'" class="solution-item" />
        <Verora v-if="activeSolution === 'verora'" class="solution-item" />
        <Siora v-if="activeSolution === 'dataq'" class="solution-item" />
        <NeoFlow v-if="activeSolution === 'neoflow'" class="solution-item" />
        <Dovora v-if="activeSolution === 'dovora'" class="solution-item" />
      </div>
    </div>
  </section>
</template>

<script>
import CloudWai from './solutions/CloudWai.vue'
import Orkis from './solutions/Orkis.vue'
import Verora from './solutions/Verora.vue'
import Siora from './solutions/Siora.vue'
import NeoFlow from './solutions/NeoFlow.vue'
import Dovora from './solutions/Dovora.vue'
// logo
import cloudWaiLogo from '../assets/solutions-logo/CloudWai.png'
import orkisLogo from '../assets/solutions-logo/Orkis.png'
import veroraLogo from '../assets/solutions-logo/Verora.png'
import sioraLogo from '../assets/solutions-logo/Siora.png'
import neoFlowLogo from '../assets/solutions-logo/NeoFlow.png'
import dovoraLogo from '../assets/solutions-logo/Dovora.png'

export default {
  name: 'SolutionsSection',
  components: {
    CloudWai,
    Orkis,
    Verora,
    Siora,
    NeoFlow,
    Dovora
  },
  props: {
    activeSolution: {
      type: String,
      default: 'cloudwai'
    }
  },
  data() {
    return {
      isNavAtTop: false,
      cloudWaiLogo,
      orkisLogo,
      veroraLogo,
      sioraLogo,
      neoFlowLogo,
      dovoraLogo,
    }
  },
  emits: ['change-solution'],
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // 초기 상태 체크
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const solutionNav = document.querySelector('.solution-nav')
      if (solutionNav) {
        const navRect = solutionNav.getBoundingClientRect()
        const headerHeight = 80
        // solution-nav가 헤더 바로 아래에 있거나 그 위에 있을 때
        this.isNavAtTop = navRect.top <= headerHeight + 50
      }
    },
    changeSolution(solutionType) {
      this.$emit('change-solution', solutionType)

      // 모바일에서 선택된 버튼이 보이도록 가로 스크롤 조정
      if (window.innerWidth <= 768) {
        this.scrollActiveButtonIntoView(solutionType)
      }

      // PC/모바일 공통으로 solution-nav부터 보이도록 스크롤
      this.scrollToSolutionDetail()
    },

    scrollActiveButtonIntoView(solutionType) {
      // 선택된 버튼을 찾아서 가로 스크롤 영역에서 보이도록 조정
      this.$nextTick(() => {
        const activeButton = document.querySelector(`.solution-nav-btn.active`)
        const navContainer = document.querySelector('.solution-nav')

        if (activeButton && navContainer && window.innerWidth <= 768) {
          // 버튼이 nav 컨테이너 중앙에 오도록 스크롤
          const buttonRect = activeButton.getBoundingClientRect()
          const navRect = navContainer.getBoundingClientRect()
          const scrollLeft = navContainer.scrollLeft

          const targetScrollLeft = scrollLeft + (buttonRect.left - navRect.left) - (navRect.width / 2) + (buttonRect.width / 2)

          navContainer.scrollTo({
            left: Math.max(0, targetScrollLeft),
            behavior: 'smooth'
          })
        }
      })
    },

    scrollToSolutionDetail() {
      // DOM 업데이트 후 스크롤
      this.$nextTick(() => {
        setTimeout(() => {
          // solution-nav가 보이도록 스크롤 (PC/모바일 공통)
          const solutionNav = document.querySelector('.solution-nav')

          if (solutionNav) {
            const navRect = solutionNav.getBoundingClientRect()
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const headerHeight = 80 // 헤더 높이
            const additionalOffset = 20 // nav 위쪽 여백

            // solution-nav 상단이 헤더 아래 20px 위치에 오도록 계산
            const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }, 200) // 애니메이션과 조화를 이루는 지연 시간
      })
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
  margin-bottom: 60px;
}

.solutions-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.solution-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.solution-nav-item {
  position: relative;
  display: inline-block;
}

.solution-nav-btn {
  padding: 12px 30px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  position: relative;
  z-index: 2;
}

.solution-nav-btn:hover,
.solution-nav-btn.active {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

/* 기본적으로 tooltip은 숨김 */
.solution-tooltip {
  display: none;
}

.tooltip-content {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.tooltip-solution-logo {
  width: 100%;
  max-width: 250px;
  height: 40px;
  object-fit: contain;
  object-position: left;
  margin: 0 0 10px 3px;
  display: block;
}

.tooltip-solution-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
}

.tooltip-solution-title h4 {
  margin: 0;
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 700;
}

.tooltip-solution-title p {
  margin: 0;
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 700;
}

.tooltip-content h4 {
  margin: 0 0 8px 0;
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 700;
}

.tooltip-content > p {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.4;
  font-weight: 500;
}

.tooltip-detail {
  color: #666;
  font-size: 0.85rem;
  line-height: 1.3;
  font-style: italic;
}

.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid white;
}

.tooltip-arrow::before {
  content: '';
  position: absolute;
  top: -9px;
  left: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #e9ecef;
}

/* 활성화된 버튼의 tooltip 스타일 조정 */
.solution-nav-btn.active+.solution-tooltip .tooltip-content h4 {
  color: #5a6fd8;
}

/* Tooltip은 데스크톱에서만 표시 */
@media (min-width: 1025px) {
  .solution-tooltip {
    display: block;
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    border: 1px solid #e9ecef;
    /*min-width: 280px;*/
    min-width: 350px;
    max-width: 320px;
    overflow: hidden;
  }

  .solution-nav-item:hover .solution-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
  }

  /* nav가 화면 상단에 있을 때 모든 tooltip을 아래로 */
  .solution-nav.nav-at-top .solution-tooltip {
    bottom: auto;
    top: 120%;
  }

  .solution-nav.nav-at-top .solution-tooltip .tooltip-arrow {
    top: auto;
    bottom: 100%;
    border-top: none;
    border-bottom: 8px solid white;
  }

  .solution-nav.nav-at-top .solution-tooltip .tooltip-arrow::before {
    top: auto;
    bottom: -9px;
    border-top: none;
    border-bottom: 8px solid #e9ecef;
  }

  .solution-nav.nav-at-top .solution-nav-item:hover .solution-tooltip {
    transform: translateX(-50%) translateY(5px);
  }

  /* 애니메이션 지연 효과 */
  .solution-nav-item:nth-child(1) .solution-tooltip {
    transition-delay: 0s;
  }

  .solution-nav-item:nth-child(2) .solution-tooltip {
    transition-delay: 0.1s;
  }

  .solution-nav-item:nth-child(3) .solution-tooltip {
    transition-delay: 0.2s;
  }

  .solution-nav-item:nth-child(4) .solution-tooltip {
    transition-delay: 0.3s;
  }

  .solution-nav-item:nth-child(5) .solution-tooltip {
    transition-delay: 0.4s;
  }
}

/* 태블릿 대응 */
@media (max-width: 1024px) and (min-width: 769px) {
  .solution-nav {
    gap: 18px;
  }

  .solution-nav-btn {
    padding: 12px 25px;
  }
}

/* Solution Content 애니메이션 */
.solution-content {
  position: relative;
  min-height: 600px;
  /* 최소 높이 설정으로 레이아웃 안정화 */
}

.solution-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.solution-item[style*="display: block"],
.solution-item:not([style*="display: none"]) {
  opacity: 1;
  transform: translateY(0);
  position: relative;
}

/* 버튼 전환 애니메이션 개선 */
.solution-nav-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.solution-nav-btn.active {
  transform: translateY(-2px) scale(1.02);
}

@media (max-width: 768px) {
  .section-subtitle {
    font-size: 0.95rem;
  }

  .solution-nav {
    margin-bottom: 30px;
    /* 간격 축소 */
    overflow-x: auto;
    /* 가로 스크롤 활성화 */
    overflow-y: hidden;
    padding: 0 0 15px 0;
    /* 스크롤바 여백 */
    scrollbar-width: none;
    /* Firefox - 스크롤바 숨김 */
    -ms-overflow-style: none;
    /* IE/Edge - 스크롤바 숨김 */
    justify-content: flex-start;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    /* iOS 부드러운 스크롤 */
    scroll-behavior: smooth;
    flex-wrap: nowrap;
    /* 줄바꿈 방지 - 핵심! */
    gap: 15px;
  }

  /* 스크롤바 완전 숨김 (service-nav와 동일) */
  .solution-nav::-webkit-scrollbar {
    display: none;
  }

  .solution-nav-btn {
    flex-shrink: 0;
    /* 버튼 크기 고정 */
    white-space: nowrap;
    /* 텍스트 줄바꿈 방지 */
    padding: 12px 20px;
    /* 패딩 service-nav와 유사하게 */
    font-size: 0.9rem;
    /* 폰트 크기 */
    min-width: fit-content;
    /* 최소 너비 */
    width: auto;
    /* 자동 너비 */
    margin-right: 8px;
    /* 오른쪽 여백 추가 */
  }

  .solution-nav-btn:last-child {
    margin-right: 0;
    /* 마지막 버튼은 여백 제거 */
  }

  .solution-content {
    min-height: 500px;
    /* 모바일에서는 조금 더 작게 */
  }

  .solution-item {
    transform: translateY(15px);
    /* 모바일에서는 더 작은 이동 */
  }
}
</style>