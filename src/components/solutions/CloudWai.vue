<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">Cloud Management</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="CloudWai Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">CloudWai</span>
              <span class="solution-pronunciation">클라우드웨이</span>
            </h3>
            <p class="solution-catchphrase">AI시대, 클라우드로 향하는 가장 확실한 길</p>
          </div>
        </div>
        <p class="solution-tagline">클라우드 인프라 자동구성 및 통합관리 솔루션</p>
        <p class="solution-description">템플릿 기반 자동 생성부터 통합빌링, 모니터링까지 One-Stop으로 클라우드를 총괄 관리할 수 있는 Total Management
          Service입니다.</p>
      </div>
      <div class="solution-hero-visual">
        <div class="visual-container">
          <!-- Cloud Infrastructure Animation -->
          <div class="icon-animation-container">
            <!-- Main Cloud Icon -->
            <div class="main-icon-wrapper">
              <i class="fas fa-cloud main-icon" :class="{ pulse: mainIconActive }"></i>
            </div>

            <!-- Connection Lines -->
            <svg class="connection-lines" viewBox="0 0 300 50" preserveAspectRatio="none">
              <line x1="150" y1="0" x2="50" y2="50"
                    class="connection-line"
                    :class="{ active: activeServer === 'aws' }" />
              <line x1="150" y1="0" x2="150" y2="50"
                    class="connection-line"
                    :class="{ active: activeServer === 'azure' }" />
              <line x1="150" y1="0" x2="250" y2="50"
                    class="connection-line"
                    :class="{ active: activeServer === 'gcp' }" />
            </svg>

            <!-- Server Infrastructure Icons -->
            <div class="server-icons">
              <div class="server-icon" :class="{ active: activeServer === 'aws' }">
                <img :src="awsLogo" alt="AWS" class="server-logo">
                <span class="server-label">AWS</span>
              </div>
              <div class="server-icon" :class="{ active: activeServer === 'azure' }">
                <img :src="azureLogo" alt="Azure" class="server-logo">
                <span class="server-label">Azure</span>
              </div>
              <div class="server-icon" :class="{ active: activeServer === 'gcp' }">
                <img :src="gcpLogo" alt="GCP" class="server-logo">
                <span class="server-label">GCP</span>
              </div>
            </div>
          </div>

          <!-- Feature Points -->
          <div class="feature-points">
            <div class="feature-point" :class="{ active: activeFeature === 'provisioning' }">
              <i class="fas fa-bolt feature-icon"></i>
              <span>Provisioning</span>
            </div>
            <div class="feature-point" :class="{ active: activeFeature === 'billing' }">
              <i class="fas fa-dollar-sign feature-icon"></i>
              <span>Billing</span>
            </div>
            <div class="feature-point" :class="{ active: activeFeature === 'monitoring' }">
              <i class="fas fa-chart-line feature-icon"></i>
              <span>Monitoring</span>
            </div>
            <div class="feature-point" :class="{ active: activeFeature === 'dashboard' }">
              <i class="fas fa-th-large feature-icon"></i>
              <span>Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="solution-features">
      <h4>핵심 기능</h4>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-bolt"></i></div>
          <h5>자동화된 프로비저닝</h5>
          <p>템플릿 기반 클라우드 자원 자동 생성으로</p>
          <p>신속하고 정확한 인프라 구축을 실현하세요</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-dollar-sign"></i></div>
          <h5>통합 빌링 관리</h5>
          <p>복잡한 멀티 클라우드 비용을 한곳에서 관리하고,</p>
          <p> 상세한 인보이스로 투명성을 확보하세요</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-chart-bar"></i></div>
          <h5>실시간 모니터링</h5>
          <p>실시간 모니터링과 대시보드를 통해</p>
          <p>자원 사용량과 성능을 한눈에 확인하세요</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-map"></i></div>
          <h5>토폴로지 맵</h5>
          <p>클라우드 인프라 구조를 직관적인 맵으로 시각화하여</p>
          <p>관리와 운영 효율성을 극대화합니다</p>
        </div>
      </div>
    </div>

    <div class="use-case-section" :class="{ 'is-mobile': isMobile }">
      <h4 @click="toggleAccordion('useCase')">
        실사용 예시
        <span class="accordion-icon">{{ accordionStates.useCase ? '−' : '+' }}</span>
      </h4>
      <div class="accordion-content" v-show="accordionStates.useCase">
      <div class="before-after-container">
        <div class="before-card">
          <div class="card-header card-header-vertical">
            <font-awesome-icon :icon="['fas', 'face-frown']" class="card-icon-large" />
            <h6>BEFORE</h6>
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-desktop"></i></span>
              <span class="item-text">AWS, Azure, GCP 콘솔을 각각 접속해서 관리</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-money-bill-wave"></i></span>
              <span class="item-text">각 클라우드별 복잡한 빌링 시스템으로 비용 파악 어려움</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-clock"></i></span>
              <span class="item-text">인프라 구축에 수일 소요, 반복 작업 많음</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-chart-bar"></i></span>
              <span class="item-text">서비스별 모니터링 도구가 제각각, 통합 불가</span>
            </div>
          </div>
        </div>
        <div class="arrow-divider">→</div>
        <div class="after-card">
          <div class="card-header card-header-vertical">
            <img :src="logoImage" alt="CloudWai" class="card-logo" />
          </div>
          <div class="card-content">
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-bullseye"></i></span>
              <span class="item-text">단일 콘솔에서 멀티클라우드 통합 관리</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-dollar-sign"></i></span>
              <span class="item-text">통합 빌링으로 전체 비용 한눈에 파악 및 최적화</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-bolt"></i></span>
              <span class="item-text">템플릿 기반 3분 내 인프라 자동 배포</span>
            </div>
            <div class="card-item">
              <span class="item-icon"><i class="fas fa-chart-line"></i></span>
              <span class="item-text">통합 모니터링 대시보드로 실시간 추적</span>
            </div>
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
          <h5>Management Layer</h5>
          <div class="arch-components">
            <div class="arch-component">CloudWai Console</div>
            <div class="arch-component">Template Engine</div>
            <div class="arch-component">Workflow Manager</div>
          </div>
        </div>
        <div class="arch-layer">
          <h5>Orchestration Layer</h5>
          <div class="arch-components">
            <div class="arch-component">Multi-Cloud API</div>
            <div class="arch-component">Resource Manager</div>
            <div class="arch-component">Policy Engine</div>
          </div>
        </div>
        <div class="arch-layer">
          <h5>Cloud Infrastructure</h5>
          <div class="arch-components">
            <div class="arch-component">AWS</div>
            <div class="arch-component">Azure</div>
            <div class="arch-component">GCP</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImage from '../../assets/solutions-logo/logo-vertical/CloudWai_vertical.png'
import symbolImage from '../../assets/solutions-logo/logo-symbol/CloudWai_symbol.png'
import awsLogo from '../../assets/brands_ci/servers/aws.svg'
import azureLogo from '../../assets/brands_ci/servers/azure.svg'
import gcpLogo from '../../assets/brands_ci/servers/gcp.svg'

export default {
  name: 'CloudWai',
  data() {
    return {
      logoImage,
      symbolImage,
      awsLogo,
      azureLogo,
      gcpLogo,
      activeServer: null,
      activeFeature: null,
      mainIconActive: false,
      animationTimer: null,
      serverIndex: 0,
      featureIndex: 0,
      isMobile: false,
      accordionStates: {
        useCase: false,
        architecture: false
      }
    }
  },

  mounted() {
    this.startCloudAnimation();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
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

    startCloudAnimation() {
      this.animateMainIcon();
      this.animateServers();
      this.animateFeatures();
    },

    animateMainIcon() {
      // Main cloud icon pulse animation
      setInterval(() => {
        this.mainIconActive = true;
        setTimeout(() => {
          this.mainIconActive = false;
        }, 2000);
      }, 4000);

    },

    animateServers() {
      const servers = ['aws', 'azure', 'gcp'];

      const highlightServer = () => {
        this.activeServer = servers[this.serverIndex];
        this.serverIndex = (this.serverIndex + 1) % servers.length;

        this.animationTimer = setTimeout(() => {
          this.activeServer = null;
          this.animationTimer = setTimeout(highlightServer, 500);
        }, 1500);
      };

      this.animationTimer = setTimeout(highlightServer, 1000);
    },

    animateFeatures() {
      const features = ['provisioning', 'billing', 'monitoring', 'dashboard'];

      const highlightFeature = () => {
        this.activeFeature = features[this.featureIndex];
        this.featureIndex = (this.featureIndex + 1) % features.length;

        this.animationTimer = setTimeout(() => {
          this.activeFeature = null;
          this.animationTimer = setTimeout(highlightFeature, 800);
        }, 2000);
      };

      this.animationTimer = setTimeout(highlightFeature, 2000);
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

.solution-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.solution-header-logo {
  height: 5rem;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
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

.solution-catchphrase {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.85;
  margin: 0;
  margin-top: -25px;
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

/* ✅ Cloud Infrastructure Animation Styles */
.solution-hero-visual {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
}

.visual-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 450px;
  height: 100%;
}

.icon-animation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 350px;
}

/* Main Cloud Icon */
.main-icon-wrapper {
  text-align: center;
  margin-bottom: 5px;
}

.main-icon {
  font-size: 4rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  animation: cloudFloat 3s ease-in-out infinite;
}

@keyframes cloudFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* Connection Lines - 얇고 은은하게 */
.connection-lines {
  width: 100%;
  height: 30px;
  margin: -5px 0;
  position: relative;
}

.connection-line {
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 1;
  fill: none;
  transition: all 0.3s ease;
}

.connection-line.active {
  stroke: rgba(255, 255, 255, 0.5);
  stroke-width: 1.5;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
}

/* Server Icons */
.server-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.server-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  transition: all 0.3s ease;
}

.server-icon i {
  font-size: 2rem;
  color: white;
  margin-bottom: 8px;
  filter: drop-shadow(0 3px 10px rgba(255, 255, 255, 0.5));
}

.server-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 8px;
  filter: brightness(0) invert(1) drop-shadow(0 3px 10px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;
}

.server-icon.active .server-logo {
  filter: brightness(0) invert(1) drop-shadow(0 5px 15px rgba(255, 255, 255, 0.6));
  transform: scale(1.1);
}

.server-label {
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.9;
}

.cloud-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.1));
}

/* Cloud platform animation */
.cloud-platform {
  animation: gentle-float 5s ease-in-out infinite;
  transform-origin: center;
}

@keyframes gentle-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Connection line animations */
.connection-line {
  stroke-dashoffset: 0;
  animation: dataFlow 3s linear infinite;
}

.line1 {
  animation-delay: 0s;
}

.line2 {
  animation-delay: 1s;
}

.line3 {
  animation-delay: 2s;
}

@keyframes dataFlow {
  0% {
    stroke-dashoffset: 10;
    stroke-opacity: 0.3;
  }
  50% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
  100% {
    stroke-dashoffset: -10;
    stroke-opacity: 0.3;
  }
}

/* Server animations */
.server-group {
  transition: all 0.3s ease;
  transform-origin: center;
}

.server-group.active {
  transform: scale(1.1);
  filter: drop-shadow(0 5px 15px rgba(255, 255, 255, 0.4));
}

.server-group.active rect {
  stroke: white;
  stroke-width: 3;
  opacity: 1;
}

.server-status {
  animation: statusBlink 2s ease-in-out infinite;
}

@keyframes statusBlink {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0.4;
  }
}

/* Data particles glow effect */
.particle {
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.6));
}

/* Feature points styling */
.feature-points {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 12px;
  max-width: 450px;
  width: 100%;
}

.feature-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 90px;
  height: 100px;
}

.feature-point.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-point .feature-icon {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  background: none;
  margin: 0;
}

.feature-point.active .feature-icon {
  color: #ffd700;
  animation: featureGlow 1s ease-in-out infinite;
}

.feature-point span:last-child {
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
  text-align: center;
  white-space: nowrap;
  margin: 0;
}

@keyframes featureGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
  50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
}

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
  margin-bottom: 8px;
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

.before-after-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.before-card, .after-card {
  background: white;
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.before-card {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
  border: 2px solid #ffcccc;
}

.before-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(255, 107, 107, 0.15);
}

.after-card {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #bbf7d0;
}

.after-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(34, 197, 94, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.card-header-vertical {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  padding: 20px;
  border-bottom: none;
}

.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.card-icon-large {
  font-size: 4rem;
  color: #dc2626;
}

.card-logo {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.card-header h6 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.card-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.card-item:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.item-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1.4;
}

.item-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
}

.arrow-divider {
  font-size: 3rem;
  color: #667eea;
  font-weight: bold;
  text-align: center;
  flex-shrink: 0;
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
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hide accordion icon on PC */
.accordion-icon {
  display: none;
}

/* Accordion styles for mobile */
@media (max-width: 576px) {
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

/* Responsive Design */
@media (max-width: 968px) {
  .solution-hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 30px;
    gap: 40px;
  }

  .solution-hero h3 { font-size: 2.2rem; }
  .solution-tagline { font-size: 1.2rem; }

  .icon-animation-container {
    max-width: 100%;
    gap: 3px;
  }

  .main-icon {
    font-size: 3rem;
  }

  .main-icon-wrapper {
    margin-bottom: 3px;
  }

  .connection-lines {
    height: 25px;
    margin: -3px 0;
  }

  .server-icons {
    gap: 20px;
  }

  .server-icon {
    padding: 10px;
  }

  .server-icon i {
    font-size: 1.5rem;
  }

  .server-logo {
    width: 40px;
    height: 40px;
  }

  .feature-points {
    flex-wrap: wrap;
    max-width: 100%;
    gap: 10px;
  }

  .feature-point {
    width: calc(50% - 5px);
    height: 85px;
    padding: 10px;
  }

  .feature-point .feature-icon {
    font-size: 1.3rem;
  }

  .feature-point span:last-child {
    font-size: 0.7rem;
  }

  .solution-features { padding: 40px 30px; }
  .features-grid { grid-template-columns: 1fr; gap: 25px; }

  .before-after-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .arrow-divider {
    transform: rotate(90deg);
    font-size: 2.5rem;
  }

  .architecture-diagram { flex-direction: column; }
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

  .visual-container {
    gap: 25px;
  }

  .icon-animation-container {
    gap: 2px;
  }

  .main-icon {
    font-size: 2.5rem;
  }

  .main-icon-wrapper {
    margin-bottom: 2px;
  }

  .connection-lines {
    height: 20px;
    margin: -2px 0;
  }

  .server-icons {
    gap: 15px;
  }

  .server-icon {
    padding: 8px;
  }

  .server-icon i {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  .server-logo {
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
  }

  .server-label {
    font-size: 0.7rem;
  }

  .feature-points {
    gap: 12px;
    flex-wrap: nowrap;
  }

  .feature-point {
    width: 70px;
    height: 70px;
    padding: 8px;
    gap: 6px;
  }

  .feature-point .feature-icon {
    font-size: 1.2rem;
    padding-top: 6px;
  }

  .feature-point span:last-child {
    font-size: 0.65rem;
    padding-bottom: 6px;
  }

  .solution-features {
    padding: 25px 20px;
  }

  .solution-features h4 {
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
    margin-bottom: 5px;
  }

  .use-case-section {
    padding: 25px 20px;
  }

  .use-case-section h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .before-card, .after-card {
    padding: 15px;
  }

  .card-header {
    margin-bottom: 15px;
    padding-bottom: 12px;
  }

  .card-header-vertical {
    padding: 15px;
    gap: 10px;
  }

  .card-header h6 {
    font-size: 0.95rem;
  }

  .card-icon {
    font-size: 1.3rem;
  }

  .card-icon-large {
    font-size: 3rem;
  }

  .card-logo {
    max-width: 150px;
  }

  .card-content {
    gap: 10px;
  }

  .card-item {
    padding: 10px 8px;
    gap: 8px;
  }

  .item-icon {
    font-size: 1.1rem;
    line-height: 1;
  }

  .item-text {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .arrow-divider {
    font-size: 1.5rem;
    margin: 3px 0;
  }

  .solution-architecture {
    padding: 25px 20px;
  }

  .solution-architecture h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .arch-layer {
    padding: 20px;
  }

  .arch-layer h5 {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .arch-component {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
}

</style>