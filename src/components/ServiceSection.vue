<template>
  <section class="services-section" id="services">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <!-- <h2 class="section-title">클라우드부터 AI까지, 디지털 혁신의 완성</h2> -->
        <h2 class="section-title">비용 절감부터 생산성 향상까지 <br/> 눈에 보이는 변화를 만듭니다</h2>
        <p class="section-subtitle">전문 기술팀의 검증된 역량으로
          클라우드 구축부터 AI 도입까지 단계별 맞춤 서비스를 제공합니다</p>
      </div>

      <!-- Navigation -->
      <nav class="service-nav">
        <div v-for="nav in navigationItems" :key="nav.category" class="nav-item"
          :class="{ active: activeCategory === nav.category }" @click="handleNavItemClick(nav.category)">
          {{ nav.name }}
        </div>
      </nav>

      <!-- Content -->
      <div class="services-content">
        <!-- Featured Services (전체 서비스) -->
        <div class="service-category" :class="{ active: activeCategory === 'all' }">
          <!-- Featured Services Header -->
          <!-- <div class="featured-header">
            <h3 class="featured-title">위블리스의 서비스를 소개합니다</h3>
            <p class="featured-subtitle">
              디지털 혁신에 필요한 모든 것
            </p>
          </div> -->

          <!-- Featured Services Grid (데스크톱/태블릿) -->
          <div class="featured-services-grid">
            <div v-for="service in featuredServices" :key="service.category" class="featured-service-card"
              :class="{ highlighted: highlightedService === service.category }"
              @click="handleFeaturedServiceClick(service.category)" @mouseenter="highlightServiceFromFeatured(service.category)"
              @mouseleave="clearHighlight">
              <div class="temp">
                <div class="featured-icon" :class="{ 'emoji-icon': typeof service.icon === 'string' && service.icon.length < 5 && !service.icon.startsWith('fa-') }">
                  <img v-if="typeof service.icon !== 'string' || (typeof service.icon === 'string' && !service.icon.startsWith('fa-') && service.icon.length > 5)" :src="service.icon" :alt="service.title + ' logo'" class="featured-icon-img">
                  <i v-else-if="typeof service.icon === 'string' && service.icon.startsWith('fa-')" :class="['fas', service.icon]" class="fontawesome-icon"></i>
                  <template v-else>{{ service.icon }}</template>
                </div>
                <h4 class="featured-service-title">{{ service.title }}</h4>
              </div>
              <div class="featured-content-area">
                <p class="featured-service-desc">{{ service.description }}</p>
                <div class="featured-highlights">
                  <div v-for="highlight in service.highlights.slice(0, 2)" :key="highlight" class="featured-highlight">
                    {{ highlight }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Keywords (모바일 전용) -->
          <div class="mobile-services-keywords">
            <button v-for="service in featuredServices" :key="`mobile-${service.category}`" class="mobile-service-btn"
              @click="handleFeaturedServiceClick(service.category)">
              <span class="mobile-service-icon">
                <img v-if="typeof service.icon !== 'string' || (typeof service.icon === 'string' && !service.icon.startsWith('fa-') && service.icon.length > 5)" :src="service.icon" :alt="service.title + ' logo'" class="mobile-service-icon-img">
                <i v-else-if="typeof service.icon === 'string' && service.icon.startsWith('fa-')" :class="['fas', service.icon]" class="mobile-fontawesome-icon"></i>
                <template v-else>{{ service.icon }}</template>
              </span>
              <div class="mobile-service-title">{{ service.title }}</div>
              <div class="mobile-service-keyword">{{ service.highlights.join(' · ') }}</div>
            </button>
          </div>

          <!-- Stats Section -->
          <div class="stats-section" ref="statsSection">
            <h3 class="stats-title">위블리스와 함께하는 성과</h3>
            <div class="stats-grid">
              <div v-for="stat in statsData" :key="stat.label" class="stat-item">
                <div class="stat-number">{{ stat.displayNumber }}</div>
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-desc">{{ stat.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Individual Service Categories -->
        <div v-for="service in servicesData" :key="service.category" class="service-category"
          :class="{ active: activeCategory === service.category }">
          <div class="service-detail">
            <div class="service-info">
              <div class="service-badge">{{ service.badge }}</div>
              <h3 class="service-name">{{ service.name }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-highlights">
                <div v-for="highlight in service.highlights" :key="highlight" class="highlight-item">
                  {{ highlight }}
                </div>
              </div>
              <div class="service-actions">
                <a href="#contact" class="action-btn btn-primary" @click="handleContactClick">
                  {{ service.primaryAction }}
                </a>
                <button class="action-btn btn-secondary" @click="handleSecondaryClick(service)">
                  <img v-if="typeof service.icon !== 'string' || service.icon.length > 5" :src="service.icon" :alt="service.name + ' logo'" class="btn-icon">
                  <span>{{ service.secondaryAction }}</span>
                </button>
              </div>
            </div>
            <div class="service-visual"
                 @mouseenter="hoveredVisual = service.category"
                 @mouseleave="hoveredVisual = null"
                 @click="handleVisualClick(service)">
              <!-- 동적 아이콘 컴포넌트 또는 FontAwesome 아이콘 또는 Vertical 로고 -->
              <div class="visual-icon" :class="{ 'has-logo': hoveredVisual === service.category && serviceVerticalLogos[service.category] }">
                <!-- Hover 시 Vertical 로고 표시 -->
                <img v-if="hoveredVisual === service.category && serviceVerticalLogos[service.category]"
                     :src="serviceVerticalLogos[service.category]"
                     :alt="service.name"
                     class="vertical-logo">
                <!-- 기본 아이콘 -->
                <template v-else>
                  <component v-if="serviceIconComponents[service.category]"
                             :is="serviceIconComponents[service.category]" />
                  <span v-else v-html="service.serviceIcon"></span>
                </template>
              </div>
              <h4 class="visual-title">{{ service.visualTitle }}</h4>
              <div class="visual-features">
                <div v-for="feature in service.visualFeatures" :key="feature" class="visual-feature">
                  {{ feature }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// 심볼 로고 import
import cloudWaiSymbol from '../assets/solutions-logo/logo-symbol/CloudWai_symbol.png'
import veroraSymbol from '../assets/solutions-logo/logo-symbol/Verora_symbol.png'
import sioraSymbol from '../assets/solutions-logo/logo-symbol/Siora_symbol.png'
import dovoraSymbol from '../assets/solutions-logo/logo-symbol/Dovora_symbol.png'
import neoFlowSymbol from '../assets/solutions-logo/logo-symbol/NeoFlow_symbol.png'
import orkisSymbol from '../assets/solutions-logo/logo-symbol/Orkis_symbol.png'
import weblissSymbol from '../assets/company-ci/webliss-ci-symbol.svg'

// Vertical 로고 import
import cloudWaiVertical from '../assets/solutions-logo/logo-vertical/CloudWai_vertical.png'
import veroraVertical from '../assets/solutions-logo/logo-vertical/Verora_vertical.png'
import sioraVertical from '../assets/solutions-logo/logo-vertical/Siora_vertical.png'
import dovoraVertical from '../assets/solutions-logo/logo-vertical/Dovora_vertical.png'
import neoFlowVertical from '../assets/solutions-logo/logo-vertical/NeoFlow_vertical.png'
import orkisVertical from '../assets/solutions-logo/logo-vertical/Orkis_vertical.png'

// Solution icon components import
import CloudWaiIcon from './solution-icons/CloudWaiIcon.vue'
import VeroraIcon from './solution-icons/VeroraIcon.vue'
import SioraIcon from './solution-icons/SioraIcon.vue'
import DovoraIcon from './solution-icons/DovoraIcon.vue'
import NeoFlowIcon from './solution-icons/NeoFlowIcon.vue'
import OrkisIcon from './solution-icons/OrkisIcon.vue'
import ConsultingIcon from './solution-icons/ConsultingIcon.vue'
import DataVizIcon from './solution-icons/DataVizIcon.vue'

// emit 정의 추가 (script setup 최상단에)
const emit = defineEmits(['go-to-solution'])

// Reactive data
const activeCategory = ref('all')
const highlightedService = ref(null)
const hoveredVisual = ref(null)

// 서비스-솔루션 매핑 (컴포넌트 내부에서 정의)
const serviceSolutionMapping = {
  'consulting': null,
  'cloud': 'cloudwai',
  'dapq': 'verora',
  'dataq': 'dataq',
  'dovora': 'dovora',
  'data': 'neoflow',
  'dataviz': null,
  'devops': 'kubesync'
}

const solutionServiceMapping = {
  'cloudwai': 'cloud',
  'verora': 'dapq',
  'dataq': 'dataq',
  'dovora': 'dovora',
  'neoflow': 'data',
  'kubesync': 'devops'
}

// 서비스 카테고리별 아이콘 컴포넌트 매핑
const serviceIconComponents = {
  'cloud': CloudWaiIcon,
  'dapq': VeroraIcon,
  'dataq': SioraIcon,
  'dovora': DovoraIcon,
  'data': NeoFlowIcon,
  'dataviz': DataVizIcon,
  'devops': OrkisIcon,
  'consulting': ConsultingIcon
}

// 서비스 카테고리별 vertical 로고 매핑
const serviceVerticalLogos = {
  'cloud': cloudWaiVertical,
  'dapq': veroraVertical,
  'dataq': sioraVertical,
  'dovora': dovoraVertical,
  'data': neoFlowVertical,
  'dataviz': null,
  'devops': orkisVertical,
  'consulting': null
}

// 네비게이션 아이템
const navigationItems = reactive([
  { category: 'all', name: '전체 서비스' },
  { category: 'consulting', name: '컨설팅' },
  { category: 'cloud', name: '클라우드' },
  { category: 'devops', name: 'DevOps' },
  { category: 'dapq', name: 'AI 챗봇' },
  { category: 'dovora', name: 'AI 문서관리' },
  { category: 'dataq', name: 'AI 데이터 분석' },
  { category: 'data', name: '데이터 플랫폼' },
  { category: 'dataviz', name: '데이터 시각화' }
])

// Stats 데이터
const statsData = reactive([
  { number: '32+', displayNumber: '0', targetNumber: 32, suffix: '+', label: '전문 인력', desc: '클라우드·AI 전문가' },
  { number: '87.5%', displayNumber: '0%', targetNumber: 87.5, suffix: '%', label: '기술직 비율', desc: '높은 기술 전문성' },
  { number: '6', displayNumber: '0', targetNumber: 6, suffix: '', label: '자체 솔루션', desc: '검증된 플랫폼' },
  { number: '24/7', displayNumber: '24/7', targetNumber: null, suffix: '', label: '기술 지원', desc: '상시 지원 체계' }
])

// Stats 카운트업 애니메이션
const statsSection = ref(null)
const hasAnimated = ref(false)

const animateCount = (stat, duration = 2000) => {
  if (stat.targetNumber === null) return // 24/7 같은 경우는 애니메이션 제외

  const startTime = Date.now()
  const startValue = 0
  const endValue = stat.targetNumber

  const updateCount = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // easeOutExpo 함수 적용
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    const currentValue = Math.floor(startValue + (endValue - startValue) * easeProgress)

    stat.displayNumber = currentValue + stat.suffix

    if (progress < 1) {
      requestAnimationFrame(updateCount)
    } else {
      stat.displayNumber = stat.number // 최종값 설정
    }
  }

  requestAnimationFrame(updateCount)
}

const handleStatsScroll = () => {
  if (hasAnimated.value || !statsSection.value) return

  const rect = statsSection.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // Stats 섹션이 화면의 70% 지점에 들어오면 애니메이션 시작
  if (rect.top < windowHeight * 0.7) {
    hasAnimated.value = true
    statsData.forEach(stat => animateCount(stat))
    window.removeEventListener('scroll', handleStatsScroll)
  }
}

// Featured Services
const featuredServices = reactive([
  {
    category: 'consulting',
    icon: weblissSymbol,
    title: '컨설팅',
    description: '클라우드 전략 수립부터 데이터 활용까지, 디지털 전환의 완벽한 시작점을 제공합니다',
    highlights: ['전략 수립', '아키텍처 설계', '비용 최적화']
  },
  {
    category: 'cloud',
    icon: cloudWaiSymbol,
    title: '클라우드',
    description: 'CloudWai로 클라우드 인프라 자동 구성부터 통합 관리까지 한 번에 해결하세요',
    highlights: ['자동 프로비저닝', '통합 빌링', '실시간 모니터링']
  },
  {
    category: 'devops',
    icon: orkisSymbol,
    title: 'DevOps',
    description: 'Orkis가 MSA 환경의 복잡한 배포와 운영을 자동화로 간편하게 만들어 드립니다',
    highlights: ['CI/CD 자동화', '컨테이너 관리', '모니터링']
  },
  {
    category: 'dapq',
    icon: veroraSymbol,
    title: 'AI 챗봇',
    description: 'RAG 기술로 기업 데이터를 학습한 지능형 AI가 24시간 고객 응대를 책임집니다',
    highlights: ['AI 채팅', 'RAG 검색', '24/7 고객지원']
  },
  {
    category: 'dovora',
    icon: dovoraSymbol,
    title: 'AI 문서관리',
    description: 'AI 기반 지능형 문서 관리 시스템으로 문서 검색의 부재로 정보 검색에 시간 소요를 해결합니다',
    highlights: ['문서 기반 답변', '환각 현상 최소화', '비용 절감']
  },
  {
    category: 'dataq',
    icon: sioraSymbol,
    title: 'AI데이터 분석',
    description: '복잡한 SQL 없이 자연어만으로 원하는 데이터 분석 결과를 즉시 확인하세요',
    highlights: ['자연어 질의', 'SQL 자동변환', '실시간 분석']
  },
  {
    category: 'data',
    icon: neoFlowSymbol,
    title: '데이터 플랫폼',
    description: 'NeoFlow로 흩어진 데이터를 하나로 통합하여 체계적인 데이터 관리를 실현하세요',
    highlights: ['데이터 통합', 'ETL 자동화', '품질 관리']
  },
  {
    category: 'dataviz',
    icon: 'fa-chart-line',
    title: '데이터 시각화',
    description: 'Tableau를 활용하여 다양한 데이터 소스를 인터랙티브한 대시보드로 변환하고 실시간 인사이트를 도출합니다',
    highlights: ['다양한 소스 연결', '인터랙티브 대시보드', '실시간 인사이트']
  }
])

// Services 데이터
const servicesData = reactive([
  {
    category: 'consulting',
    badge: 'Consulting',
    name: '클라우드/데이터 컨설팅',
    description: '클라우드 환경 최적화와 데이터 분석을 통해 기업의 비즈니스 모델 변화를 지원하며, 데이터 기반 의사결정을 통해 경쟁력을 높이고 비즈니스 효율성을 촉진합니다',
    highlights: [
      '클라우드 마이그레이션 전략 수립',
      '인프라 아키텍처 최적화 설계',
      '데이터 플랫폼 구축 컨설팅',
      '비용 최적화 및 운영 효율성 개선'
    ],
    primaryAction: '상담 신청',
    secondaryAction: '포트폴리오 보기',
    secondaryLink: '#portfolio',
    serviceIcon: '<i class="fas fa-lightbulb"></i>',
    icon: '<i class="fas fa-lightbulb"></i>',
    visualTitle: '전략적 클라우드 컨설팅',
    visualFeatures: ['아키텍처 설계', '비용 최적화', '보안 강화', '성능 튜닝']
  },
  {
    category: 'cloud',
    badge: 'Infrastructure',
    name: '클라우드 구축 및 운영',
    description: '기업의 요구에 맞춰 최적화된 클라우드 인프라를 설계하고 구축합니다. 서버, 스토리지, 네트워킹 등 전체적인 관리 서비스를 통해 안정적이고 확장 가능한 환경을 제공합니다',
    highlights: [
      '멀티클라우드 환경 구축',
      '자동 프로비저닝 및 스케일링',
      '통합 모니터링 및 알림 시스템',
      '보안 정책 및 접근 제어 관리'
    ],
    primaryAction: '구축 문의',
    secondaryAction: 'CloudWai 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'cloudwai',
    serviceIcon: '<i class="fas fa-cloud"></i>',
    icon: cloudWaiSymbol,
    visualTitle: '완전 관리형 클라우드',
    visualFeatures: ['자동 프로비저닝', '통합 빌링', '실시간 모니터링', '토폴로지 맵']
  },
  {
    category: 'devops',
    badge: 'DevOps',
    name: 'Solution / DevOps',
    description: 'MSA와 컨테이너 환경에서 소프트웨어 개발, 테스트, 배포 과정을 자동화합니다. CI/CD 파이프라인과 관측 가능성을 통해 개발 속도와 서비스 안정성을 동시에 확보합니다',
    highlights: [
      '컨테이너 오케스트레이션 (Kubernetes)',
      'CI/CD 파이프라인 자동화',
      '관측 가능성 (Observability) 구현',
      'Auto Scaling 및 성능 최적화'
    ],
    primaryAction: 'DevOps 문의',
    secondaryAction: 'Orkis 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'kubesync',
    serviceIcon: '<i class="fas fa-cog"></i>',
    icon: orkisSymbol,
    visualTitle: '완전 자동화 DevOps',
    visualFeatures: ['CI/CD 자동화', '컨테이너 관리', '모니터링', '오토 스케일링']
  },
  {
    category: 'dapq',
    badge: 'AI Chat',
    name: 'AI 챗봇 서비스',
    description: '생성형 AI와 RAG 기술을 활용한 지능형 채팅 서비스입니다. 기업 내부 문서와 데이터를 학습하여 정확하고 맞춤형 답변을 제공하며, 24시간 고객 지원이 가능합니다',
    highlights: [
      'RAG 기반 문서 검색 및 답변 생성',
      '기업 맞춤형 AI 학습 및 응답',
      '24/7 자동화된 고객 지원',
      '다양한 문서 형식 지원 (PDF, Word, Excel 등)'
    ],
    primaryAction: 'Verora 상담 신청',
    secondaryAction: 'Verora 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'verora',
    serviceIcon: '<i class="fas fa-robot"></i>',
    icon: veroraSymbol,
    visualTitle: 'RAG 기반 AI 채팅',
    visualFeatures: ['문서 임베딩', 'RAG 검색', '실시간 응답', '학습 최적화']
  },
  {
    category: 'dovora',
    badge: 'AI Document',
    name: 'AI 문서 관리 서비스',
    description: '문서 내용 기반 지능형 답변 시스템으로 기존의 복잡한 문서 관리 방식을 혁신합니다. 정확한 정보 검색과 환각 현상을 최소화하여 신뢰할 수 있는 답변을 제공합니다',
    highlights: [
      '문서 정보 기반 정확한 답변 생성',
      '환각 현상 최소화로 신뢰성 향상',
      '구축형 솔루션으로 정보 보안 강화',
      '경량화된 LLM 사용으로 비용 절감'
    ],
    primaryAction: 'Dovora 상담 신청',
    secondaryAction: 'Dovora 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'dovora',
    serviceIcon: '<i class="fas fa-file-alt"></i>',
    icon: dovoraSymbol,
    visualTitle: '지능형 문서 관리',
    visualFeatures: ['문서 분석', '질의 응답', '정보 보호', '비용 최적화']
  },
  {
    category: 'dataq',
    badge: 'Data Analytics',
    name: 'AI 데이터 분석 서비스',
    description: 'AI를 이용해 자연어 질의를 SQL로 자동 변환하는 혁신적인 플랫폼입니다. SQL 전문 지식 없이도 원하는 데이터를 쉽게 추출하고 분석할 수 있습니다',
    highlights: [
      '자연어를 SQL로 실시간 변환',
      '데이터베이스 스키마 자동 분석',
      '메타데이터 기반 지능형 매핑',
      '비즈니스 인사이트 자동 도출'
    ],
    primaryAction: 'Siora 상담 신청',
    secondaryAction: 'Siora 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'dataq',
    serviceIcon: '<i class="fas fa-search"></i>',
    icon: sioraSymbol,
    visualTitle: '자연어 SQL 변환',
    visualFeatures: ['자연어 이해', 'SQL 생성', '메타데이터 분석', '인사이트 도출']
  },
  {
    category: 'data',
    badge: 'Data Integration',
    name: '데이터 플랫폼 구축',
    description: '다양한 데이터 소스로부터 수집, 가공, 적재까지 전 과정을 자동화하여 기업의 데이터 통합 관리를 간편하게 만들어주는 종합 데이터 플랫폼을 구축합니다',
    highlights: [
      '다양한 데이터 소스 통합 연결',
      'ETL 프로세스 완전 자동화',
      '데이터 처리 스케줄링 및 모니터링',
      '데이터 품질 검증 및 관리'
    ],
    primaryAction: '데이터 상담',
    secondaryAction: 'NeoFlow 보기',
    secondaryLink: '#solutions',
    solutionTarget: 'neoflow',
    serviceIcon: '<i class="fas fa-chart-bar"></i>',
    icon: neoFlowSymbol,
    visualTitle: '통합 데이터 플랫폼',
    visualFeatures: ['소스 연계', 'ETL 자동화', '스케줄링', '품질 관리']
  },
  {
    category: 'dataviz',
    badge: 'Data Visualization',
    name: '데이터 시각화 서비스',
    description: 'Tableau를 활용하여 다양한 데이터 소스를 통합 연결하고 인터랙티브한 대시보드로 변환합니다. 실시간 인사이트 도출과 부서 간 투명한 지표 공유를 통해 데이터 기반 의사결정을 지원합니다',
    highlights: [
      '다양한 데이터 소스 통합 연결',
      '인터랙티브 대시보드 구축',
      '실시간 인사이트 도출 및 분석',
      '부서 간 투명한 지표 공유 체계'
    ],
    primaryAction: '시각화 상담',
    secondaryAction: '포트폴리오 보기',
    secondaryLink: '#portfolio',
    serviceIcon: '<i class="fas fa-chart-line"></i>',
    icon: '<i class="fas fa-chart-line"></i>',
    visualTitle: 'Tableau 기반 시각화',
    visualFeatures: ['데이터 연결', '대시보드 구축', '인사이트 도출', '협업 공유']
  }
])

// Solutions Section의 버튼들을 하이라이트하는 함수
const highlightSolutionButton = (solutionType, highlight = true) => {
  // 전역 메서드 사용 (더 안정적)
  if (window.solutionsSection) {
    window.solutionsSection.highlightButton(solutionType, highlight)
  }

  // 기존 DOM 방식은 fallback으로 유지
  const solutionButton = document.querySelector(`[data-solution="${solutionType}"]`)
  if (solutionButton) {
    if (highlight) {
      solutionButton.classList.add('highlighted')
    } else {
      solutionButton.classList.remove('highlighted')
    }
  }
}

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category
  
  // 카테고리 변경 후 상세 내용으로 스크롤
  if (category !== 'all') {
    scrollToServiceDetail()
  }
}

const highlightServiceFromFeatured = (serviceCategory) => {
  highlightedService.value = serviceCategory

  const linkedSolution = serviceSolutionMapping[serviceCategory]
  if (linkedSolution) {
    // Solutions Section의 해당 버튼 하이라이트
    highlightSolutionButton(linkedSolution, true)
  }
}

const clearHighlight = () => {
  highlightedService.value = null

  // 모든 솔루션 버튼 하이라이트 해제
  Object.values(serviceSolutionMapping).forEach(solution => {
    if (solution) {
      highlightSolutionButton(solution, false)
    }
  })
}

// 상세 내용으로 스크롤하는 함수 (service-nav가 보이도록 조정)
const scrollToServiceDetail = () => {
  // 약간의 지연을 두어 DOM이 업데이트된 후 스크롤
  setTimeout(() => {
    // service-nav 영역을 기준으로 스크롤 (nav가 보이도록)
    const serviceNav = document.querySelector('.service-nav')

    if (serviceNav) {
      // service-nav가 화면 상단에 보이도록 스크롤
      const navRect = serviceNav.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const headerHeight = 80 // 헤더 높이
      const additionalOffset = 20 // service-nav 위쪽 여백

      // service-nav 상단이 헤더 아래 20px 위치에 오도록 계산
      const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }, 150) // DOM 업데이트를 위한 충분한 지연
}

// Featured Service 카드 클릭 핸들러
const handleFeaturedServiceClick = (category) => {
  setActiveCategory(category)

  // PC/모바일 공통으로 service-nav가 보이도록 스크롤
  scrollToServiceDetail()
}

// 네비게이션 아이템 클릭 핸들러
const handleNavItemClick = (category) => {
  setActiveCategory(category)

  // "전체 서비스" 선택 시 HeaderComponent와 동일한 스크롤 위치로 이동
  if (category === 'all') {
    setTimeout(() => {
      const servicesSection = document.querySelector('#services')
      if (servicesSection) {
        const offsetTop = servicesSection.offsetTop - 50 // HeaderComponent와 동일한 오프셋
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }, 100)
  } else {
    // 개별 서비스 선택 시 service-nav가 보이도록 스크롤 (PC/모바일 공통)
    scrollToServiceDetail()
  }
}

const handleContactClick = (event) => {
  event.preventDefault()
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// handleSecondaryClick 함수 수정
const handleSecondaryClick = (service) => {
  if (service.solutionTarget) {
    // ✅ emit을 사용해서 부모로 이벤트 전달
    emit('go-to-solution', service.solutionTarget)

    // URL 해시 업데이트 및 피드백 효과는 유지
    window.location.hash = `solutions-${service.solutionTarget}`
    showNavigationFeedback(service.solutionTarget)

    // SolutionsSection의 solution-content로 스크롤 이동
    scrollToSolutionContent(service.solutionTarget)

  } else if (service.secondaryLink && service.secondaryLink.startsWith('#')) {
    // 일반적인 앵커 링크 처리
    const target = document.querySelector(service.secondaryLink)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

/* const handleSecondaryClick = (service) => { // TODO 원본임
  if (service.solutionTarget) {
    // 솔루션 섹션으로 이동하면서 해당 솔루션 활성화
    changeActiveSolution(service.solutionTarget)
    
    const solutionsSection = document.querySelector('#solutions')
    if (solutionsSection) {
      solutionsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // URL 해시 업데이트
    window.location.hash = `solutions-${service.solutionTarget}`
    
    // 네비게이션 피드백 효과
    showNavigationFeedback(service.solutionTarget)
    
  } else if (service.secondaryLink && service.secondaryLink.startsWith('#')) {
    // 일반적인 앵커 링크 처리
    const target = document.querySelector(service.secondaryLink)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
} */

const handleVisualClick = (service) => {
  if (service.solutionTarget) {
    // 솔루션 섹션으로 이동
    emit('go-to-solution', service.solutionTarget)
    window.location.hash = `solutions-${service.solutionTarget}`
    showNavigationFeedback(service.solutionTarget)
    scrollToSolutionContent(service.solutionTarget)
  }
}

const showNavigationFeedback = (solutionType) => {
  const linkedServiceCategory = solutionServiceMapping[solutionType]
  if (linkedServiceCategory) {
    highlightedService.value = linkedServiceCategory
    highlightSolutionButton(solutionType, true)

    // 3초 후 하이라이트 해제
    setTimeout(() => {
      clearHighlight()
    }, 3000)
  }
}

// SolutionsSection의 solution-nav부터 보이도록 스크롤하는 함수
const scrollToSolutionContent = (solutionTarget) => {
  // 솔루션 변경이 완료된 후 스크롤
  setTimeout(() => {
    const solutionsSection = document.querySelector('#solutions')
    if (solutionsSection) {
      // solution-nav가 화면 상단에 보이도록 스크롤
      const solutionNav = solutionsSection.querySelector('.solution-nav')

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
      } else {
        // fallback: SolutionsSection 상단으로 스크롤
        const rect = solutionsSection.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const headerHeight = 80
        const targetPosition = scrollTop + rect.top - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, 300) // 솔루션 전환 애니메이션 완료 후
}

// Solutions Section에서 호버 이벤트 리스닝
const handleSolutionHover = (event) => {
  const solutionType = event.detail.solutionType
  const isHovering = event.detail.isHovering

  if (isHovering) {
    const linkedServiceCategory = solutionServiceMapping[solutionType]
    if (linkedServiceCategory) {
      highlightedService.value = linkedServiceCategory
    }
  } else {
    highlightedService.value = null
  }
}

onMounted(() => {
  // Solutions Section의 버튼들에 data 속성 추가 (한번만 실행)
  setTimeout(() => {
    const cloudButton = document.querySelector('.solution-nav-btn:nth-child(1)')
    const kubeButton = document.querySelector('.solution-nav-btn:nth-child(2)')
    const veroraButton = document.querySelector('.solution-nav-btn:nth-child(3)')
    const sioraButton = document.querySelector('.solution-nav-btn:nth-child(4)')
    const neoflowButton = document.querySelector('.solution-nav-btn:nth-child(5)')
    const dovoraButton = document.querySelector('.solution-nav-btn:nth-child(6)')

    if (cloudButton) cloudButton.setAttribute('data-solution', 'cloudwai')
    if (kubeButton) kubeButton.setAttribute('data-solution', 'kubesync')
    if (veroraButton) veroraButton.setAttribute('data-solution', 'verora')
    if (sioraButton) sioraButton.setAttribute('data-solution', 'dataq')
    if (neoflowButton) neoflowButton.setAttribute('data-solution', 'neoflow')
    if (dovoraButton) dovoraButton.setAttribute('data-solution', 'dovora')
  }, 100)

  // Solutions Section에서의 호버 이벤트 리스닝
  window.addEventListener('solutionHover', handleSolutionHover)

  // Stats 카운트업 애니메이션을 위한 스크롤 이벤트 리스너
  window.addEventListener('scroll', handleStatsScroll)
  // 페이지 로드 시에도 체크 (이미 화면에 보이는 경우)
  handleStatsScroll()
})

onUnmounted(() => {
  window.removeEventListener('solutionHover', handleSolutionHover)
  window.removeEventListener('scroll', handleStatsScroll)
})

// 외부에서 호출할 수 있는 메소드들 (전역으로 노출)
window.serviceSection = {
  highlightServiceFromFeatured,
  clearHighlight,
  setActiveCategory,
  scrollToServiceDetail
}

// Expose methods for parent component
defineExpose({
  setActiveCategory,
  highlightServiceFromFeatured,
  clearHighlight,
  scrollToServiceDetail,
  handleFeaturedServiceClick,
  handleNavItemClick
})
</script>

<style scoped>
.services-section {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
}

/* Navigation Tabs */
.service-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #e9ecef;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-item {
  padding: 20px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.nav-item:hover {
  color: #667eea;
}

.nav-item.active {
  color: #667eea;
  border-bottom-color: #667eea;
}

/* Content Area */
.services-content {
  min-height: 600px;
}

.service-category {
  display: none;
  animation: fadeInUp 0.6s ease forwards;
}

.service-category.active {
  display: block;
}

/* Featured Services */
.featured-header {
  text-align: center;
  margin-bottom: 35px;
}

.featured-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.featured-subtitle {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

.featured-services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 80px;
  margin-top: 15px;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.featured-service-card {
  background: white;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: auto;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 100%;
}

.featured-service-card.highlighted {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(118, 75, 162, 0.25);
  border-color: #764ba2;
  background: linear-gradient(135deg, #fff 0%, #f8f9ff 100%);
}

.featured-service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.featured-service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.featured-service-card:hover::before {
  transform: scaleX(1);
}

.temp {
  display: flex;
  align-items: center;
  gap: 10px;
}

.featured-icon {
  width: 38px;
  height: 38px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  flex-shrink: 0;
  transition: all 0.3s ease;
  padding: 4px;
}

.featured-icon.emoji-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
}

.featured-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fontawesome-icon {
  font-size: 1.5rem;
  color: #667eea;
}

.featured-service-card:hover .featured-icon {
  transform: scale(1.1);
}

.featured-service-card:hover .featured-icon.emoji-icon {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.35);
}

.featured-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-service-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0;
  text-align: left;
  line-height: 1.3;
  flex: 1;
  transition: color 0.2s ease;
}

.featured-service-card:hover .featured-service-title {
  color: #667eea;
}

.featured-content-area {
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-height: 50px;
  margin-top: 0;
}

.featured-service-desc {
  color: #4a5568;
  line-height: 1.6;
  text-align: left;
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.featured-service-card:hover .featured-service-desc,
.featured-service-card.highlighted .featured-service-desc {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.featured-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.featured-service-card:hover .featured-highlights,
.featured-service-card.highlighted .featured-highlights {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

.featured-highlight {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  color: #5a67d8;
  padding: 8px 16px;
  border-radius: 14px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid #e2e8ff;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(90, 103, 216, 0.08);
}

.featured-service-card:hover .featured-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Mobile Services */
.mobile-services-keywords {
  display: none;
}

.mobile-service-btn {
  background: white;
  color: #333;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 20px 18px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.mobile-service-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.mobile-service-btn:active {
  transform: translateY(0);
}

.mobile-service-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4px;
  height: 48px;
}

.mobile-service-icon.emoji-icon {
  display: block;
  height: auto;
}

.mobile-service-icon-img {
  width: auto;
  height: 48px;
  object-fit: contain;
}

.mobile-fontawesome-icon {
  font-size: 2.5rem;
  color: #667eea;
}

.mobile-service-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 4px;
}

.mobile-service-keyword {
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 500;
  line-height: 1.5;
}

/* Individual Service Detail */
.service-detail {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 100px;
}

.service-detail:nth-child(even) {
  direction: rtl;
}

.service-detail:nth-child(even)>* {
  direction: ltr;
}

.service-info {
  padding: 40px 0;
}

.service-badge {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.service-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.3;
}

.service-description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;
  text-align: justify;
  word-spacing: -0.05em;
}

.service-highlights {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.highlight-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #555;
}

.highlight-item::before {
  content: '→';
  color: #667eea;
  font-weight: bold;
  margin-right: 15px;
  font-size: 1.2rem;
}

.service-actions {
  display: flex;
  gap: 20px;
}

.action-btn {
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(571%) hue-rotate(208deg) brightness(95%) contrast(95%);
}

.btn-secondary:hover .btn-icon {
  filter: brightness(0) invert(1);
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

/* Visual Elements */
.service-visual {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 50px 40px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.service-visual:hover {
  transform: translateY(-10px) scale(1.02);
}

.service-visual::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>') repeat;
  animation: float 20s linear infinite;
}

.visual-icon {
  font-size: 4rem;
  margin-top: 20px;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  animation: cloudFloat 3s ease-in-out infinite;
  min-height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 아이콘 컴포넌트가 있을 때는 애니메이션 제거하고 크기 증대 */
.visual-icon:has(.icon-animation-container) {
  animation: none;
  font-size: inherit;
  filter: none;
  min-height: 220px;
}

/* Vertical 로고가 표시될 때 애니메이션 제거 */
.visual-icon.has-logo {
  animation: none;
  filter: none;
}

.vertical-logo {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(0) invert(1) drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

@keyframes cloudFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.visual-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.visual-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  position: relative;
  z-index: 2;
}

.visual-feature {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 60px 40px;
  border-radius: 20px;
  margin-top: 100px;
}

.stats-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
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

.stat-desc {
  font-size: 0.9rem;
  color: #999;
  margin-top: 8px;
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

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* Solutions Section 연동을 위한 글로벌 스타일 */
:global(.solution-nav-btn.highlighted) {
  background: #764ba2 !important;
  color: white !important;
  border-color: #764ba2 !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.4) !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 0 30px;
  }

  .featured-services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    max-width: 1000px;
  }

  .featured-service-card {
    min-height: 140px;
    padding: 16px 14px;
  }

  .service-detail {
    gap: 50px;
  }
}

@media (max-width: 968px) {
  .service-nav {
    margin-bottom: 60px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 0 15px 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    justify-content: flex-start;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    flex-wrap: nowrap;
  }

  .service-nav::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    padding: 12px 20px;
    font-size: 0.9rem;
    flex-shrink: 0;
    min-width: fit-content;
    white-space: nowrap;
    margin-right: 8px;
  }

  .nav-item:last-child {
    margin-right: 0;
  }
}

@media (max-width: 968px) {
  .featured-services-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 16px;
    margin-top: 15px;
    height: 420px;
  }

  .featured-service-card {
    padding: 14px;
    min-height: 115px;
    justify-content: center;
    gap: 10px;
  }

  .temp {
    gap: 10px;
  }

  .featured-icon {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }

  .featured-service-title {
    font-size: 0.9rem;
  }

  .featured-content-area {
    min-height: 45px;
  }

  .featured-service-desc {
    font-size: 0.78rem;
    -webkit-line-clamp: 2;
  }

  .featured-highlights {
    gap: 5px;
  }

  .featured-highlight {
    font-size: 0.72rem;
    padding: 6px 12px;
  }

  .service-detail {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-detail:nth-child(even) {
    direction: ltr;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .featured-title {
    font-size: 1.8rem;
  }

  .service-name {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .visual-features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }

  .services-section {
    padding: 40px 0;
  }

  .section-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .service-nav {
    margin-bottom: 40px;
  }

  .nav-item {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .featured-services-grid {
    display: none;
  }

  .mobile-services-keywords {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
  }

  .featured-header {
    margin-bottom: 20px;
  }

  .featured-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  .featured-subtitle {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .service-badge {
    font-size: 0.8rem;
    padding: 6px 16px;
  }

  .service-name {
    font-size: 1.6rem;
    line-height: 1.3;
    margin-bottom: 15px;
  }

  .service-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .highlight-item {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .service-actions {
    flex-direction: column;
    gap: 12px;
  }

  .action-btn {
    padding: 14px 24px;
    font-size: 0.95rem;
  }

  .stats-section {
    padding: 40px 20px;
    margin-top: 50px;
  }

  .stats-title {
    font-size: 1.4rem;
    margin-bottom: 30px;
    line-height: 1.3;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .stat-item {
    padding: 20px 12px;
  }

  .stat-number {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  .stat-desc {
    font-size: 0.75rem;
    line-height: 1.3;
  }

  .visual-icon {
    font-size: 2.5rem;
    min-height: 120px;
  }

  .visual-icon:has(.icon-animation-container) {
    min-height: 180px;
  }

  .vertical-logo {
    max-height: 140px;
  }

  .visual-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .visual-features {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .visual-feature {
    padding: 12px;
    font-size: 0.8rem;
  }
}
</style>