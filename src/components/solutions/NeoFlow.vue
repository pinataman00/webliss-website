<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">Data Integration</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="NeoFlow Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">NeoFlow</span>
              <span class="solution-pronunciation">네오플로우</span>
            </h3>
            <p class="solution-catchphrase">데이터의 흐름을 새롭게 정의하다</p>
          </div>
        </div>
        <p class="solution-tagline">통합 데이터 플랫폼 구축 솔루션</p>
        <p class="solution-description">다양한 데이터 소스로부터 수집, 가공, 적재까지 전 과정을 자동화하여 기업의 데이터 통합 관리를 간편하게 만들어주는 종합 솔루션입니다.</p>
      </div>
      <div class="solution-hero-visual">
        <div class="icon-animation-container">
          <!-- Main ETL Icon -->
          <div class="main-icon-wrapper">
            <div class="stream-icon-container">
              <i class="fas fa-minus stream-line line-1"></i>
              <i class="fas fa-minus stream-line line-2"></i>
              <i class="fas fa-minus stream-line line-3"></i>
            </div>
            <!-- <div class="icon-label">Data Pipeline</div> -->
          </div>

          <!-- ETL Process Flow -->
          <div class="etl-flow">
            <div class="etl-stage" :class="{ active: activeStage === 'extract' }">
              <i class="fas fa-download"></i>
              <span>Extract</span>
            </div>
            <!-- <div class="flow-arrow">
              <i class="fas fa-arrow-right" :class="{ active: extractActive }"></i>
            </div> -->
            <div class="etl-stage" :class="{ active: activeStage === 'transform' }">
              <i class="fas fa-cogs"></i>
              <span>Transform</span>
            </div>
            <!-- <div class="flow-arrow">
              <i class="fas fa-arrow-right" :class="{ active: transformActive }"></i>
            </div> -->
            <div class="etl-stage" :class="{ active: activeStage === 'load' }">
              <i class="fas fa-upload"></i>
              <span>Load</span>
            </div>
          </div>

          <!-- Data Sources & Destination -->
          <!-- <div class="sources-destinations">
            <div class="destination">
              <i class="fas fa-warehouse"></i>
              <span>Data Warehouse</span>
              <div class="sources">
                <i class="fas fa-database"></i>
                <i class="fas fa-file-alt"></i>
                <i class="fas fa-globe"></i>
              </div>
            </div>
          </div> -->
        </div>
        <!-- <div class="data-flow" ref="dataFlowContainer">
            <div v-for="(step, index) in pipelineSteps" :key="step.id" class="flow-item" :ref="`flowItem${index}`">
              <div class="data-step" :class="{
                active: step.active,
                completed: step.completed,
                'step-visible': isFlowVisible
              }" @mouseenter="handleStepHover(index, true)" @mouseleave="handleStepHover(index, false)">
                {{ step.name }}
              </div>
              <div v-if="index < pipelineSteps.length - 1" class="data-arrow" :class="{
                active: step.completed,
                'arrow-visible': isFlowVisible
              }">
                <span class="arrow-horizontal">→</span>
                <span class="arrow-vertical">↓</span>
              </div>
            </div>
          </div> -->
      </div>
    </div>

    <div class="solution-features">
    <h4>핵심 기능</h4>
    <div class="features-grid">
      <div class="feature-item" v-for="feature in features" :key="feature.id">
        <div class="feature-icon" v-html="feature.icon"></div>
        <h5>{{ feature.title }}</h5>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>

  <div class="use-case-section" :class="{ 'is-mobile': isMobile }">
    <h4 @click="toggleAccordion('useCase')">
      실사용 예시
      <span class="accordion-icon">{{ accordionStates.useCase ? '−' : '+' }}</span>
    </h4>
    <div class="accordion-content" v-show="accordionStates.useCase">
    <div class="use-case-demo">
      <div class="use-case-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h5>데이터 소스 연결</h5>
          <p>Oracle DB, MySQL, MongoDB, API, 로그 파일 등 다양한 데이터 소스 연결</p>
        </div>
      </div>
      <div class="step-arrow">→</div>
      <div class="use-case-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h5>ETL 프로세스</h5>
          <p>데이터 정제, 변환, 표준화 작업을 통해 분석 가능한 형태로 가공</p>
        </div>
      </div>
      <div class="step-arrow">→</div>
      <div class="use-case-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h5>데이터 웨어하우스</h5>
          <p>통합된 데이터를 Data Lake 또는 DW에 적재하여 분석 환경 구축</p>
        </div>
      </div>
    </div>

    <div class="demo-example">
      <h5><i class="fas fa-lightbulb"></i> 사용 시나리오</h5>
      <p class="scenario-context">제조업체의 전사 데이터 통합 및 실시간 생산 대시보드 구축</p>

      <div class="before-after-container">
        <div class="before-card">
          <div class="card-header">
            <div class="header-badge before-badge">
              <i class="fas fa-times-circle"></i>
              <span>BEFORE</span>
            </div>
            <h6>기존 방식의 문제점</h6>
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-icon negative-icon"><i class="fas fa-folder"></i></span>
              <span class="item-text">다양한 데이터 소스 수동 관리</span>
            </div>
            <div class="card-item">
              <span class="item-icon negative-icon"><i class="fas fa-clock"></i></span>
              <span class="item-text">데이터 통합 작업 수일 소요</span>
            </div>
            <div class="card-item">
              <span class="item-icon negative-icon"><i class="fas fa-exclamation-triangle"></i></span>
              <span class="item-text">데이터 품질 불안정</span>
            </div>
            <div class="card-item">
              <span class="item-icon negative-icon"><i class="fas fa-chart-bar"></i></span>
              <span class="item-text">실시간 현황 파악 불가</span>
            </div>
          </div>
        </div>

        <div class="arrow-divider">
          <i class="fas fa-arrow-right"></i>
        </div>

        <div class="after-card">
          <div class="card-header">
            <div class="header-badge after-badge">
              <i class="fas fa-check-circle"></i>
              <span>AFTER</span>
            </div>
            <img :src="logoImage" alt="NeoFlow" class="card-logo-header" />
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-icon positive-icon"><i class="fas fa-link"></i></span>
              <span class="item-text">모든 데이터 소스 자동 통합</span>
            </div>
            <div class="card-item">
              <span class="item-icon positive-icon"><i class="fas fa-bolt"></i></span>
              <span class="item-text">30초 단위 실시간 동기화</span>
            </div>
            <div class="card-item">
              <span class="item-icon positive-icon"><i class="fas fa-check"></i></span>
              <span class="item-text">99.8% 데이터 품질 신뢰도</span>
            </div>
            <div class="card-item">
              <span class="item-icon positive-icon"><i class="fas fa-chart-line"></i></span>
              <span class="item-text">실시간 생산 대시보드 제공</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="data-sources-section">
      <h5><i class="fas fa-plug"></i> 지원 데이터 소스</h5>
      <p class="sources-description">다양한 데이터 소스와 손쉽게 연결하여 통합 데이터 플랫폼을 구축하세요</p>

      <div class="source-category">
        <h6>Database</h6>
        <div class="source-cards">
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="mysqlLogo" alt="MySQL" class="source-logo">
            </div>
            <div class="source-card-name">MySQL</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="postgresqlLogo" alt="PostgreSQL" class="source-logo">
            </div>
            <div class="source-card-name">PostgreSQL</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="oracleLogo" alt="Oracle DB" class="source-logo">
            </div>
            <div class="source-card-name">Oracle DB</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="mongodbLogo" alt="MongoDB" class="source-logo">
            </div>
            <div class="source-card-name">MongoDB</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="redisLogo" alt="Redis" class="source-logo">
            </div>
            <div class="source-card-name">Redis</div>
          </div>
        </div>
      </div>

      <div class="source-category">
        <h6>Cloud Storage</h6>
        <div class="source-cards">
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="awsS3Logo" alt="AWS S3" class="source-logo">
            </div>
            <div class="source-card-name">AWS S3</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="azureBlobLogo" alt="Azure Blob" class="source-logo">
            </div>
            <div class="source-card-name">Azure Blob</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="googleCloudStorageLogo" alt="Google Cloud Storage" class="source-logo">
            </div>
            <div class="source-card-name">Google Cloud Storage</div>
          </div>
        </div>
      </div>

      <div class="source-category">
        <h6>Application & API</h6>
        <div class="source-cards">
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="salesforceLogo" alt="Salesforce" class="source-logo">
            </div>
            <div class="source-card-name">Salesforce</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="sapErpLogo" alt="SAP ERP" class="source-logo">
            </div>
            <div class="source-card-name">SAP ERP</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon"><i class="fas fa-link"></i></div>
            <div class="source-card-name">REST API</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="graphqlLogo" alt="GraphQL" class="source-logo">
            </div>
            <div class="source-card-name">GraphQL</div>
          </div>
        </div>
      </div>

      <div class="source-category">
        <h6>Streaming & Files</h6>
        <div class="source-cards">
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="apacheKafkaLogo" alt="Apache Kafka" class="source-logo">
            </div>
            <div class="source-card-name">Apache Kafka</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon">
              <img :src="excelCsvLogo" alt="CSV / Excel" class="source-logo">
            </div>
            <div class="source-card-name">CSV / Excel</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon"><i class="fas fa-file-alt"></i></div>
            <div class="source-card-name">JSON / XML</div>
          </div>
          <div class="source-card">
            <div class="source-card-icon"><i class="fas fa-file-code"></i></div>
            <div class="source-card-name">Log Files</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pipeline-stats-section">
      <h5><i class="fas fa-chart-line"></i> 파이프라인 성능 지표</h5>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-bolt"></i></div>
          <div class="stat-value">50,000+</div>
          <div class="stat-label">초당 처리 레코드</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-bullseye"></i></div>
          <div class="stat-value">99.8%</div>
          <div class="stat-label">데이터 품질 신뢰도</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-sync-alt"></i></div>
          <div class="stat-value">실시간</div>
          <div class="stat-label">데이터 동기화</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon"><i class="fas fa-chart-bar"></i></div>
          <div class="stat-value">30+</div>
          <div class="stat-label">지원 데이터 포맷</div>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div class="solution-architecture" :class="{ 'is-mobile': isMobile }">
    <h4 @click="toggleAccordion('architecture')">
      시스템 아키텍처
      <span class="accordion-icon">{{ accordionStates.architecture ? '−' : '+' }}</span>
    </h4>
    <div class="accordion-content" v-show="accordionStates.architecture">
    <div class="architecture-diagram">
      <div class="arch-layer">
        <h5>Data Sources</h5>
        <div class="arch-components">
          <div class="arch-component">RDBMS</div>
          <div class="arch-component">NoSQL</div>
          <div class="arch-component">Files & APIs</div>
        </div>
      </div>
      <div class="arch-layer">
        <h5>Processing Engine</h5>
        <div class="arch-components">
          <div class="arch-component">Data Pipeline</div>
          <div class="arch-component">ETL/ELT Engine</div>
          <div class="arch-component">Stream Processing</div>
        </div>
      </div>
      <div class="arch-layer">
        <h5>Data Storage</h5>
        <div class="arch-components">
          <div class="arch-component">Data Lake</div>
          <div class="arch-component">Data Warehouse</div>
          <div class="arch-component">Analytics Store</div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import logoImage from '../../assets/solutions-logo/NeoFlow.png'
import symbolImage from '../../assets/solutions-logo/logo-symbol/NeoFlow_symbol.png'
import mysqlLogo from '../../assets/brands_ci/symbol/mysql_symbol.svg'
import postgresqlLogo from '../../assets/brands_ci/postgresql.svg'
import oracleLogo from '../../assets/brands_ci/symbol/oracle_symbol.svg'
import mongodbLogo from '../../assets/brands_ci/symbol/mogodb_symbol.svg'
import redisLogo from '../../assets/brands_ci/redis.svg'
import awsS3Logo from '../../assets/brands_ci/aws_s3.png'
import azureBlobLogo from '../../assets/brands_ci/azure_blob.svg'
import googleCloudStorageLogo from '../../assets/brands_ci/google_cloud_storage.svg'
import salesforceLogo from '../../assets/brands_ci/salesforce.svg'
import sapErpLogo from '../../assets/brands_ci/sap_erp.svg'
import graphqlLogo from '../../assets/brands_ci/symbol/graphql_symbol.svg'
import apacheKafkaLogo from '../../assets/brands_ci/symbol/kafka_symbol.svg'
import excelCsvLogo from '../../assets/brands_ci/excel_csv.svg'

export default {
  name: 'NeoFlow',
  data() {
    return {
      logoImage,
      symbolImage,
      mysqlLogo,
      postgresqlLogo,
      oracleLogo,
      mongodbLogo,
      redisLogo,
      awsS3Logo,
      azureBlobLogo,
      googleCloudStorageLogo,
      salesforceLogo,
      sapErpLogo,
      graphqlLogo,
      apacheKafkaLogo,
      excelCsvLogo,
      isMobile: false,
      accordionStates: {
        useCase: false,
        architecture: false
      },
      isFlowVisible: false,
      animationTimer: null,
      activeSource: null,
      mainIconActive: false,
      activeStage: null,
      extractActive: false,
      transformActive: false,
      loadActive: false,
      pipelineSteps: [
        { id: 1, name: '수집', active: false, completed: false },
        { id: 2, name: '가공', active: false, completed: false },
        { id: 3, name: '적재', active: false, completed: false },
        { id: 4, name: '분석', active: false, completed: false }
      ],
      features: [
        {
          id: 1,
          icon: '<i class="fas fa-plug"></i>',
          title: '다양한 소스 연계',
          description: '데이터베이스, 파일, API... 모든 소스를 유연하게 통합해 하나의 데이터 허브를 완성합니다'
        },
        {
          id: 2,
          icon: '<i class="fas fa-cog"></i>',
          title: 'ETL 자동화',
          description: '데이터 추출·변환·적재 전 과정을 자동화하여, 압도적인 속도와 효율을 제공합니다'
        },
        {
          id: 3,
          icon: '<i class="fas fa-calendar-alt"></i>',
          title: '스케줄링 관리',
          description: '지능형 스케줄링과 모니터링으로 끊김 없는 안정적인 데이터 플로우를 구현합니다'
        },
        {
          id: 4,
          icon: '<i class="fas fa-chart-line"></i>',
          title: '데이터 품질 관리',
          description: '정교한 품질 검증과 이상 탐지로, 신뢰할 수 있는 데이터 기반 의사결정을 지원합니다'
        }
      ]
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);

    this.showDataFlow();
    this.startMainIconAnimation();
    this.startETLAnimation();
    this.startDataSourceAnimation();

    setTimeout(() => {
      this.startPipelineDemo();
    }, 1000);
  },

  beforeUnmount() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    window.removeEventListener('resize', this.checkMobile);
  },

  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 576;
      if (!this.isMobile) {
        this.accordionStates.useCase = true;
        this.accordionStates.architecture = true;
      }
    },

    toggleAccordion(section) {
      if (this.isMobile) {
        this.accordionStates[section] = !this.accordionStates[section];
      }
    },

    showDataFlow() {
      this.isFlowVisible = true;
    },

    handleStepHover(index, isHover) {
      if (isHover) {
        console.log(`Data Step ${index + 1} hovered: ${this.pipelineSteps[index].name}`);
      }
    },

    startPipelineDemo() {
      this.resetPipeline();

      this.pipelineSteps.forEach((step, index) => {
        this.animationTimer = setTimeout(() => {
          step.active = true;

          this.animationTimer = setTimeout(() => {
            step.active = false;
            step.completed = true;
          }, 800);
        }, index * 900);
      });

      const totalDuration = this.pipelineSteps.length * 900 + 800 + 2000;
      this.animationTimer = setTimeout(() => {
        this.startPipelineDemo();
      }, totalDuration);
    },

    resetPipeline() {
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
      }

      this.pipelineSteps.forEach(step => {
        step.active = false;
        step.completed = false;
      });
    },

    startMainIconAnimation() {
      this.mainIconActive = true;
      setInterval(() => {
        this.mainIconActive = !this.mainIconActive;
      }, 3000);
    },

    startETLAnimation() {
      const stages = ['extract', 'transform', 'load'];
      let currentIndex = 0;

      const animateStage = () => {
        if (currentIndex > 0) {
          const prevStage = stages[currentIndex - 1];
          this[prevStage + 'Active'] = false;
        }

        const currentStage = stages[currentIndex];
        this.activeStage = currentStage;
        this[currentStage + 'Active'] = true;

        currentIndex = (currentIndex + 1) % stages.length;

        setTimeout(() => {
          this.activeStage = null;
          if (currentIndex === 0) {
            this[stages[2] + 'Active'] = false;
          }
          setTimeout(animateStage, 800);
        }, 1500);
      };

      setTimeout(animateStage, 1000);
    },

    startDataSourceAnimation() {
      setInterval(() => {
        this.activeSource = !this.activeSource;
      }, 2500);
    }
  },

  beforeDestroy() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
  }
}
</script>

<style scoped>
.solution-detail {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.solution-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 60px;
  padding: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.solution-hero-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.solution-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.solution-hero h3 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.solution-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
}

.header-logo {
  flex-shrink: 0;
}

.solution-header-logo {
  height: 5rem;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.solution-header h3 {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.solution-name {
  /* 영문 솔루션명 */
}

.solution-pronunciation {
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.7;
}

.solution-catchphrase {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.85;
  margin: 0;
  margin-top: -15px;
}

.solution-tagline {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: auto;
  opacity: 0.9;
}

.solution-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.87);
}

.solution-hero-visual {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
}

.data-diagram {
  text-align: center;
  position: relative;
  width: 100%;
}

/* ✅ Font Awesome Icon Animation Styles */
.solution-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 0 40px;
}

.icon-animation-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  height: 100%;
}

.main-icon-wrapper {
  text-align: center;
  margin-top: 40px;
  margin-bottom: auto;
  z-index: 3;
}

.stream-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
}

.stream-line {
  font-size: 4rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  opacity: 0;
  transform: scaleX(0);
  width: 100%;
  line-height: 0.4;
}

.stream-line.line-1 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0s;
  /* padding: 0px; */
}

.stream-line.line-2 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0.3s;
  margin-left: -40px;
}

.stream-line.line-3 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0.6s;
}

@keyframes streamBuild {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  15% {
    opacity: 1;
    transform: scaleX(1);
  }
  85% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0);
  }
}

.icon-label {
  margin-top: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  /* color: white; */
  opacity: 0.9;
}

.etl-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0;
  width: 100%;
}

.etl-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  min-width: 100px;
}

.etl-stage.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
}

.etl-stage i {
  font-size: 2rem;
  color: white;
  transition: all 0.3s ease;
}

.etl-stage.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.etl-stage span {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
}

.flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-arrow i {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.flow-arrow i.active {
  color: #4CAF50;
  opacity: 1;
  animation: arrowPulse 1s infinite;
}

.sources-destinations {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
}

.sources,
.destination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 12px;
  /* background: rgba(255, 255, 255, 0.1); */
  /* border: 2px solid rgba(255, 255, 255, 0.3); */
  transition: all 0.3s ease;
  min-width: 120px;
}

.sources.active,
.destination.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.sources {
  position: relative;
  flex-direction: row !important;
  gap: 10px;
}

.sources i {
  font-size: 1.2rem;
  color: white;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.sources.active i {
  opacity: 1;
  animation: iconGlow 1s infinite alternate;
}

.destination i {
  font-size: 2rem;
  color: white;
  transition: all 0.3s ease;
}

.destination.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.sources span,
.destination span {
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
  text-align: center;
}

@keyframes iconPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconGlow {
  from {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  to {
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6);
  }
}

@keyframes arrowPulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
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

/* ✅ 수정된 데이터 파이프라인 스타일 */
.data-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  min-height: 80px;
  /* 최소 높이 보장 */
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* ✅ 핵심 수정: 초기 상태에서도 보이도록 설정 */
.data-step {
  background: rgba(255, 255, 255, 0.2);
  padding: 15px 35px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  min-width: 50px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  /* ✅ 초기에도 보이도록 변경 */
  opacity: 0.7;
  transform: translateY(0);
}

/* ✅ 보임 상태 클래스 추가 */
.data-step.step-visible {
  opacity: 1;
  animation: stepSlideIn 0.6s ease forwards;
}

.data-step:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.data-arrow {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  /* ✅ 초기에도 보이도록 변경 */
  opacity: 0.7;
  transform: scale(1);
}

/* ✅ 보임 상태 클래스 추가 */
.data-arrow.arrow-visible {
  opacity: 1;
  animation: arrowSlideIn 0.4s ease forwards;
}

.arrow-horizontal {
  display: inline;
}

.arrow-vertical {
  display: none;
}

.data-arrow.active {
  color: rgba(76, 175, 80, 0.9);
  transform: scale(1.1);
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

/* ✅ 새로운 애니메이션 */
@keyframes stepSlideIn {
  0% {
    opacity: 0.7;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes arrowSlideIn {
  0% {
    opacity: 0.7;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 진행 상태 표시 */
.data-step.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  animation: pulse 1s ease-in-out infinite;
}

.data-step.completed {
  background: rgba(76, 175, 80, 0.3);
  border-color: rgba(76, 175, 80, 0.7);
}

.data-step.completed::after {
  content: '✓';
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: #333;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  animation: checkmarkPop 0.3s ease;
}

@keyframes pulse {

  0%,
  100% {
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  }

  50% {
    box-shadow: 0 15px 45px rgba(102, 126, 234, 0.4);
  }
}

@keyframes checkmarkPop {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

/* 솔루션 기능 섹션 */
.solution-features {
  padding: 60px;
  background: white;
}

.solution-features h4 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.feature-item {
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  background: white;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: white;
}

.feature-item h5 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

.use-case-section {
  padding: 60px;
  background: #f8f9fa;
}

.use-case-section h4 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.use-case-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: nowrap;
}

.use-case-step {
  background: white;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1;
  max-width: 280px;
  position: relative;
  transition: transform 0.3s ease;
}

.use-case-step:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 auto 15px auto;
}

.step-content h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.step-content p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.step-arrow {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: bold;
}

.demo-example {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.demo-example h5 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.scenario-context {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

.before-after-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 25px;
  align-items: stretch;
}

.before-card,
.after-card {
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.before-card {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border: 2px solid #fecaca;
}

.before-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(239, 68, 68, 0.15);
  border-color: #fca5a5;
}

.after-card {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border: 2px solid #bfdbfe;
}

.after-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.15);
  border-color: #93c5fd;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  min-height: 120px;
  justify-content: flex-start;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  width: fit-content;
}

.before-badge {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.after-badge {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.header-badge i {
  font-size: 1rem;
}

.card-logo-header {
  width: 100%;
  max-width: 200px;
  height: 50px;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

.card-header h6 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 auto;
  line-height: 1.6;
  text-align: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.card-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card-item:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
}

.item-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1.4;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.negative-icon {
  color: #dc2626;
  background: rgba(220, 38, 38, 0.1);
}

.positive-icon {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.1);
}

.card-item:hover .negative-icon {
  background: rgba(220, 38, 38, 0.15);
  transform: scale(1.1);
}

.card-item:hover .positive-icon {
  background: rgba(37, 99, 235, 0.15);
  transform: scale(1.1);
}

.item-icon i {
  font-size: 1rem;
}

.item-text {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.6;
  font-weight: 500;
}

.arrow-divider {
  font-size: 2.2rem;
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.7;
}

.arrow-divider i {
  animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% {
    transform: translateX(0);
    opacity: 0.7;
  }
  50% {
    transform: translateX(5px);
    opacity: 1;
  }
}

.solution-architecture {
  padding: 60px;
  background: #f8f9fa;
}

.solution-architecture h4 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.architecture-diagram {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.arch-layer {
  flex: 1;
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.arch-layer h5 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #667eea;
}

.arch-components {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arch-component {
  background: #f8f9fa;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #555;
  transition: background-color 0.3s ease;
}

.arch-component:hover {
  background: #667eea;
  color: white;
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

/* 모바일 반응형 */
@media (max-width: 768px) {
  .solution-hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 30px;
    gap: 40px;
  }

  .solution-hero h3 {
    font-size: 2.2rem;
  }

  .solution-tagline {
    font-size: 1.2rem;
  }

  .solution-features {
    padding: 40px 30px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  /* Font Awesome 아이콘 모바일 대응 */
  .icon-animation-container {
    height: 280px;
  }

  .etl-flow {
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }

  .sources-destinations {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .sources,
  .destination {
    min-width: 100px;
  }

  .sources {
    flex-direction: row;
    gap: 10px;
  }

  /* 모바일에서 세로 배치 */
  .data-flow {
    flex-direction: column;
    gap: 15px;
  }

  .flow-item {
    flex-direction: column;
    gap: 15px;
  }

  .data-step {
    min-width: 120px;
    padding: 12px 25px;
  }

  .data-arrow {
    font-size: 1.3rem;
  }

  .arrow-horizontal {
    display: none;
  }

  .arrow-vertical {
    display: inline;
  }

  .data-arrow.active {
    transform: scale(1.1);
  }

  .use-case-demo {
    flex-direction: column;
  }

  .step-arrow {
    transform: rotate(90deg);
  }

  .architecture-diagram {
    flex-direction: column;
  }

  .use-case-step {
    min-width: auto;
    width: 100%;
  }

  .before-after-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .arrow-divider {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
}

/* Data Sources Section */
.data-sources-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.data-sources-section h5 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.sources-description {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 40px;
}

.source-category {
  margin-bottom: 35px;
}

.source-category:last-child {
  margin-bottom: 0;
}

.source-category h6 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #667eea;
}

.source-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.source-card {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  min-width: 150px;
  flex: 1;
  text-align: center;
}

.source-card:hover {
  transform: translateY(-3px);
  border-color: #667eea;
  background: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
}

.source-card-icon {
  font-size: 1.8rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.source-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.source-card-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
}

/* Pipeline Stats Section */
.pipeline-stats-section {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.pipeline-stats-section h5 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 35px;
  color: #333;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 25px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 968px) {
  .source-cards {
    gap: 12px;
  }

  .source-card {
    min-width: 130px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Hide accordion icon on PC */
.accordion-icon {
  display: none;
}

@media (max-width: 576px) {
  .solution-hero {
    padding: 50px 20px;
    gap: 45px;
  }

  .solution-hero h3 {
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 0px;
  }

  .solution-name {
    text-align: center;
  }

  .solution-pronunciation {
    font-size: 1rem;
    text-align: center;
    margin-top: -10px;
    margin-bottom: -5px;
  }

  .solution-header {
    flex-direction: column;
    margin-bottom: 40px;
    align-items: center;
    gap: 5px;
  }

  .solution-header-logo {
    height: 3.6rem;
  }

  .solution-catchphrase {
    text-align: center;
    margin-top: 0;
  }

  .solution-tagline {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 15px;
  }

  .solution-description {
    font-size: 0.95rem;
    line-height: 1.8;
    text-align: center;
    margin-top: 10px;
  }

  .solution-badge {
    display: block;
    text-align: center;
    margin: 0 auto 25px;
  }

  .icon-animation-container {
    height: auto;
    max-width: 100%;
    gap: 15px;
  }

  .main-icon-wrapper {
    height: 70px;
    margin-bottom: 20px;
  }

  .stream-line {
    font-size: 2.5rem;
  }

  .etl-flow {
    gap: 8px;
  }

  .etl-stage {
    min-width: 70px;
    padding: 10px 8px;
  }

  .etl-stage i {
    font-size: 1.25rem;
  }

  .etl-stage span {
    font-size: 0.7rem;
  }

  .solution-features, .use-case-section, .solution-architecture {
    padding: 25px 20px;
  }

  .solution-features h4, .use-case-section h4, .solution-architecture h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .features-grid {
    gap: 15px;
  }

  .feature-item {
    padding: 20px;
  }

  .feature-item h5 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .feature-item p {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .use-case-demo {
    gap: 15px;
    margin-bottom: 30px;
  }

  .use-case-step {
    padding: 20px;
    min-width: 180px;
  }

  .step-number {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .step-content h5 {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .step-content p {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .step-arrow {
    font-size: 1.3rem;
  }

  .demo-example {
    padding: 20px;
  }

  .demo-example h5 {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }

  .scenario-context {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  .before-after-container {
    gap: 15px;
  }

  .before-card, .after-card {
    padding: 18px;
  }

  .card-header {
    margin-bottom: 15px;
    padding-bottom: 12px;
    gap: 10px;
  }

  .header-badge {
    padding: 6px 12px;
    font-size: 0.75rem;
  }

  .header-badge i {
    font-size: 0.85rem;
  }

  .card-logo-header {
    max-width: 130px;
  }

  .card-header h6 {
    font-size: 1rem;
  }

  .card-content {
    gap: 10px;
  }

  .card-item {
    padding: 10px 8px;
    gap: 10px;
  }

  .item-icon {
    width: 26px;
    height: 26px;
  }

  .item-icon i {
    font-size: 0.9rem;
  }

  .item-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .arrow-divider {
    font-size: 1.8rem;
  }

  .data-sources-section,
  .pipeline-stats-section {
    padding: 20px;
    margin-top: 20px;
  }

  .data-sources-section h5,
  .pipeline-stats-section h5 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .sources-description {
    font-size: 0.85rem;
    margin-bottom: 25px;
  }

  .source-category {
    margin-bottom: 25px;
  }

  .source-category h6 {
    font-size: 0.95rem;
    margin-bottom: 15px;
    padding-left: 8px;
  }

  .source-cards {
    gap: 10px;
  }

  .source-card {
    min-width: 100%;
    flex: none;
    padding: 15px 18px;
  }

  .source-card-icon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }

  .source-card-name {
    font-size: 0.85rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 20px 18px;
  }

  .stat-icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .stat-value {
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .arch-layer {
    padding: 20px;
  }

  .arch-layer h5 {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .arch-components {
    gap: 8px;
  }

  .arch-component {
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  /* Accordion styles for mobile */
  .use-case-section.is-mobile h4,
  .solution-architecture.is-mobile h4 {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.3s ease;
  }

  .use-case-section.is-mobile h4:hover,
  .solution-architecture.is-mobile h4:hover {
    color: #667eea;
  }

  .use-case-section.is-mobile h4:active,
  .solution-architecture.is-mobile h4:active {
    transform: scale(0.98);
  }

  .accordion-icon {
    display: inline;
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
    margin-left: 10px;
  }

  .accordion-content {
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }

  .use-case-section.is-mobile .accordion-content,
  .solution-architecture.is-mobile .accordion-content {
    animation: accordionSlideDown 0.3s ease;
  }

  @keyframes accordionSlideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>