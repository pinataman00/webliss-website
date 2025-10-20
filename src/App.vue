<template>
  <div id="app">
    <!-- Header -->
    <HeaderComponent :is-scrolled="isScrolled" @solution-selected="handleSolutionSelected" />
    <br/>
    <!-- Hero Section -->
    <HeroSection :background-type="heroBackgroundType" :show-selector="isDevelopmentMode"
      @background-changed="heroBackgroundType = $event" @go-to-solution="goToSolution" />

    <!-- Services Section -->
    <ServiceSection @go-to-solution="goToSolution" />
    <!-- Reference Section -->
    <ReferenceSection />
    <!-- Solutions Section -->
    <SolutionsSection :activeSolution="activeSolution" @change-solution="changeSolution" />
    <!-- Company Info Section -->
    <CompanyInfoSection />
    <!-- Contact Section -->
    <ContactSection />
    <!-- Floating Navigation Section -->
    <FloatingActionButtons @consultation-requested="handleConsultationRequest" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HeroSection from './components/HeroSection.vue'
import ServiceSection from './components/ServiceSection.vue'
import ReferenceSection from './components/ReferenceSection.vue'
import SolutionsSection from './components/SolutionsSection.vue'
import CompanyInfoSection from './components/CompanyInfoSection.vue'
import ContactSection from './components/ContactSection.vue'
import FloatingActionButtons from './components/FloatingActionButtons.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    // ServicesSection,
    ServiceSection,
    ReferenceSection,
    SolutionsSection,
    CompanyInfoSection,
    ContactSection,
    FloatingActionButtons
  },
  data() {
    return {
      isScrolled: false,
      activeSolution: 'cloudwai',
      heroBackgroundType: 'cyber',
      isDevelopmentMode: true // 배포시 false로 변경      
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.addSmoothScrolling()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // HeaderComponent 드롭다운에서 솔루션 선택 시 호출
    handleSolutionSelected(solutionId) {
      console.log('Header 드롭다운에서 솔루션 선택:', solutionId)
      this.activeSolution = solutionId

      // Solutions 섹션으로 부드럽게 스크롤 (HeaderComponent에서도 하지만 확실히 하기 위해)
      setTimeout(() => {
        const solutionsSection = document.querySelector('#solutions')
        if (solutionsSection) {
          const offsetTop = solutionsSection.offsetTop - 70
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }, 100)
    },

    // SolutionsSection에서 솔루션 변경 시 호출
    handleSolutionChanged(solutionId) {
      console.log('SolutionsSection에서 솔루션 변경:', solutionId)
      this.activeSolution = solutionId
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    goToSolution(solutionType) {
      // 해당 솔루션 탭 활성화
      this.activeSolution = solutionType

      // Solutions 섹션으로 스크롤
      const solutionsSection = document.querySelector('#solutions')
      if (solutionsSection) {
        const offsetTop = solutionsSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    },
    changeSolution(solutionType) {
      this.activeSolution = solutionType
    },
    addSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            let offsetTop = target.offsetTop - 70
            // Services 섹션은 section-header까지 포함해서 보이도록 조정
            if (this.getAttribute('href') === '#services') {
              offsetTop = target.offsetTop - 50
            }
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        })
      })
    },
    // TODO 상담 요청 처리 로직
    handleConsultationRequest(data) {
      // 상담 요청 처리 로직
      console.log('상담 요청:', data)
      // 예: API 호출, 상담 요청 저장 등
    },
    //TODO 히어로 섹션 수정 중...
    handleGoToSolution(solutionType) {
      // Solutions 섹션으로 스크롤하고 해당 솔루션 탭 활성화
      if (this.$refs.solutionsSection) {
        this.$refs.solutionsSection.activateSolution(solutionType)

        // Solutions 섹션으로 부드럽게 스크롤
        const solutionsElement = this.$refs.solutionsSection.$el
        if (solutionsElement) {
          const offsetTop = solutionsElement.offsetTop - 70
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    },
    activateSolution(solutionType) {
      this.activeSolution = solutionType
    }
  }
}
</script>

<style>
@import './styles/main.css';

/* ✅ 메인 컨텐츠 여백 관리 */
.main-content {
  /* Header가 fixed일 때를 대비한 상단 여백 */
  margin-top: var(--header-height, 70px);
  
  /* 모바일에서 추가 여백 */
  padding-top: 0;
}

/* 📱 모바일 전용 여백 조정 */
@media (max-width: 768px) {
  .main-content {
    /* 모바일에서 더 많은 상단 여백 */
    margin-top: var(--header-height-mobile, 60px);
    padding-top: 20px; /* 추가 여백 */
  }
}

/* 🖥️ 데스크톱에서는 여백 최소화 */
@media (min-width: 769px) {
  .main-content {
    margin-top: var(--header-height-desktop, 70px);
    padding-top: 0;
  }
}

/* ✅ CSS 변수를 통한 유연한 관리 */
:root {
  --header-height: 70px;
  --header-height-mobile: 60px;
  --header-height-desktop: 70px;
  
  /* 섹션 간 기본 여백 */
  --section-gap: 2rem;
  --section-gap-mobile: 1.5rem;
}

/* 📱 추가 모바일 최적화 */
@media (max-width: 480px) {
  .main-content {
    margin-top: 50px; /* 더 작은 화면에서는 더 작은 여백 */
    padding-top: 15px;
  }
}
</style>
