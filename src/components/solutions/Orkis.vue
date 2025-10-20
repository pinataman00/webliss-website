<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">Container Management</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="Orkis Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">Orkis</span>
              <span class="solution-pronunciation">오르키스</span>
            </h3>
            <p class="solution-catchphrase">완전 자동화된 DevOps의 교향곡</p>
          </div>
        </div>
        <p class="solution-tagline">MSA와 컨테이너 환경을 위한 통합 관리 솔루션</p>
        <p class="solution-description">Kubernetes 환경에서 MSA 도입과 컨테이너들을 효율적으로 관리하며, CI/CD부터 모니터링까지 완전 자동화된 DevOps 환경을
          제공합니다.</p>
      </div>
      <div class="solution-hero-visual">
        <div class="icon-animation-container">
          <!-- Main Kubernetes Icon -->
          <div class="main-icon-wrapper">
            <i class="fas fa-dharmachakra main-icon"></i>
            <!-- <div class="icon-label">Kubernetes Cluster</div> -->
          </div>

          <!-- Pipeline Flow -->
          <div class="pipeline-flow">
            <div class="pipeline-stage" :class="{ active: activePipelineStage === 'code' }">
              <i class="fas fa-code"></i>
              <span>Code</span>
            </div>
            <div class="pipeline-stage" :class="{ active: activePipelineStage === 'build' }">
              <i class="fas fa-hammer"></i>
              <span>Build</span>
            </div>
            <div class="pipeline-stage" :class="{ active: activePipelineStage === 'test' }">
              <i class="fas fa-vial"></i>
              <span>Test</span>
            </div>
            <div class="pipeline-stage" :class="{ active: activePipelineStage === 'deploy' }">
              <i class="fas fa-rocket"></i>
              <span>Deploy</span>
            </div>
          </div>

          <!-- Sub Icons -->
          <!-- <div class="sub-icons">
            <div class="sub-icon" :class="{ active: activePod === 1 }">
              <i class="fas fa-cube"></i>
            </div>
            <div class="sub-icon" :class="{ active: activePod === 2 }">
              <i class="fas fa-sync"></i>
            </div>
            <div class="sub-icon" :class="{ active: activePod === 3 }">
              <i class="fas fa-cogs"></i>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="solution-features">
      <h4>핵심 기능</h4>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-wrench"></i></div>
          <h5>컨테이너 오케스트레이션</h5>
          <p>컨테이너 관리와 효율적인 리소스 운영</p>
          <p>안정적인 서비스의 시작입니다</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-sync-alt"></i></div>
          <h5>자동화 파이프라인</h5>
          <p>애플리케이션 빌드부터 배포까지</p>
          <p>완전 자동화된 CI/CD 파이프라인 구축</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-eye"></i></div>
          <h5>관측 가능성</h5>
          <p>Log, Metrics, Traces 수집을 통한 강력한 모니터링 및 장애 예방</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
          <h5>Auto Scaling</h5>
          <p>부하에 따라 자동으로 확장되는 스케일링으로</p>
          <p>성능은 높이고 비용은 줄이세요</p>
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
            <h5>MSA 설계</h5>
            <p>기존 모놀리식 애플리케이션을 마이크로서비스로 분해 및 설계</p>
          </div>
        </div>
        <div class="step-arrow">→</div>
        <div class="use-case-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h5>컨테이너화</h5>
            <p>각 마이크로서비스를 Docker 컨테이너로 패키징 및 Kubernetes 배포</p>
          </div>
        </div>
        <div class="step-arrow">→</div>
        <div class="use-case-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h5>자동화 구축</h5>
            <p>CI/CD 파이프라인 구축으로 무중단 배포 및 실시간 모니터링 적용</p>
          </div>
        </div>
      </div>

      <div class="demo-example">
        <h5><i class="fas fa-lightbulb"></i> 사용 시나리오</h5>
        <p class="scenario-context">전자상거래 플랫폼을 MSA로 전환하여 확장성과 유지보수성 확보</p>

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
                <span class="item-icon negative-icon"><i class="fas fa-building"></i></span>
                <span class="item-text">모놀리식 구조로 배포 어려움</span>
              </div>
              <div class="card-item">
                <span class="item-icon negative-icon"><i class="fas fa-clock"></i></span>
                <span class="item-text">배포 시간 2-3시간 소요</span>
              </div>
              <div class="card-item">
                <span class="item-icon negative-icon"><i class="fas fa-search"></i></span>
                <span class="item-text">장애 원인 파악 지연</span>
              </div>
              <div class="card-item">
                <span class="item-icon negative-icon"><i class="fas fa-cog"></i></span>
                <span class="item-text">수동 인프라 관리</span>
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
              <img :src="logoImage" alt="Orkis" class="card-logo-header" />
            </div>
            <div class="card-content">
              <div class="card-item">
                <span class="item-icon positive-icon"><i class="fas fa-bullseye"></i></span>
                <span class="item-text">도메인별 마이크로서비스 분리</span>
              </div>
              <div class="card-item">
                <span class="item-icon positive-icon"><i class="fas fa-rocket"></i></span>
                <span class="item-text">1일 다수 무중단 배포</span>
              </div>
              <div class="card-item">
                <span class="item-icon positive-icon"><i class="fas fa-chart-bar"></i></span>
                <span class="item-text">실시간 모니터링 및 즉각 알림</span>
              </div>
              <div class="card-item">
                <span class="item-icon positive-icon"><i class="fas fa-sync-alt"></i></span>
                <span class="item-text">완전 자동화된 CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tech-stack-section">
        <h5><i class="fas fa-tools"></i> 핵심 기술 스택</h5>
        <div class="tech-stack-grid">
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="kubernetesLogo" alt="Kubernetes" class="tech-logo">
            </div>
            <h6>Kubernetes</h6>
            <p>컨테이너 오케스트레이션</p>
          </div>
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="jenkinsLogo" alt="Jenkins" class="tech-logo">
            </div>
            <h6>Jenkins</h6>
            <p>CI/CD 자동화</p>
          </div>
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="argoLogo" alt="ArgoCD" class="tech-logo">
            </div>
            <h6>ArgoCD</h6>
            <p>GitOps 기반 배포</p>
          </div>
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="dockerLogo" alt="Docker" class="tech-logo">
            </div>
            <h6>Docker</h6>
            <p>컨테이너 런타임</p>
          </div>
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="prometheusLogo" alt="Prometheus" class="tech-logo">
            </div>
            <h6>Prometheus</h6>
            <p>메트릭 수집</p>
          </div>
          <div class="tech-card">
            <div class="tech-logo-wrapper">
              <img :src="grafanaLogo" alt="Grafana" class="tech-logo">
            </div>
            <h6>Grafana</h6>
            <p>모니터링 대시보드</p>
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
          <h5>Development Layer</h5>
          <div class="arch-components">
            <div class="arch-component">Git Repository</div>
            <div class="arch-component">Code Quality Gate</div>
            <div class="arch-component">Container Registry</div>
          </div>
        </div>
        <div class="arch-layer">
          <h5>Orchestration Layer</h5>
          <div class="arch-components">
            <div class="arch-component">Kubernetes Cluster</div>
            <div class="arch-component">CI/CD Pipeline</div>
            <div class="arch-component">Service Mesh</div>
          </div>
        </div>
        <div class="arch-layer">
          <h5>Observability Layer</h5>
          <div class="arch-components">
            <div class="arch-component">Monitoring</div>
            <div class="arch-component">Logging</div>
            <div class="arch-component">Tracing</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImage from '../../assets/solutions-logo/Orkis.png'
import symbolImage from '../../assets/solutions-logo/logo-symbol/Orkis_symbol.png'
import kubernetesLogo from '../../assets/brands_ci/kubernetes.svg'
import jenkinsLogo from '../../assets/brands_ci/jenkins.svg'
import argoLogo from '../../assets/brands_ci/symbol/argo_symbol.svg'
import dockerLogo from '../../assets/brands_ci/symbol/docker_symbol.svg'
import prometheusLogo from '../../assets/brands_ci/prometheus.svg'
import grafanaLogo from '../../assets/brands_ci/symbol/grafana_symbol.svg'

export default {
  name: 'Orkis',
  data() {
    return {
      logoImage,
      symbolImage,
      kubernetesLogo,
      jenkinsLogo,
      argoLogo,
      dockerLogo,
      prometheusLogo,
      grafanaLogo,
      isMobile: false,
      accordionStates: {
        useCase: false,
        architecture: false
      },
      activePod: null,
      activePipelineStage: null,
      animationTimer: null,
      mainIconActive: false
    }
  },

  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    this.startOrchestrationAnimation();
  },

  beforeDestroy() {
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

    startOrchestrationAnimation() {
      this.animateMainIcon();
      this.animatePods();
      this.animatePipeline();
    },

    animateMainIcon() {
      this.mainIconActive = true;
      setInterval(() => {
        this.mainIconActive = !this.mainIconActive;
      }, 3000);
    },

    animatePods() {
      const pods = [1, 2, 3, 4];

      const highlightPod = () => {
        this.activePod = pods[this.podIndex || 0];
        this.podIndex = ((this.podIndex || 0) + 1) % pods.length;

        this.animationTimer = setTimeout(() => {
          this.activePod = null;
          this.animationTimer = setTimeout(highlightPod, 800);
        }, 1200);
      };

      this.animationTimer = setTimeout(highlightPod, 1000);
    },

    animatePipeline() {
      const stages = ['code', 'build', 'test', 'deploy', 'monitor'];

      const highlightStage = () => {
        this.activePipelineStage = stages[this.stageIndex || 0];
        this.stageIndex = ((this.stageIndex || 0) + 1) % stages.length;

        this.animationTimer = setTimeout(() => {
          this.activePipelineStage = null;
          this.animationTimer = setTimeout(highlightStage, 600);
        }, 1500);
      };

      this.animationTimer = setTimeout(highlightStage, 2000);
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

/* ✅ Font Awesome Icon Animation Styles */
.solution-hero-visual {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
}

.icon-animation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
}

.main-icon-wrapper {
  position: relative;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
}

.main-icon {
  font-size: 4rem;
  color: white;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  animation: helmSteer 4s ease-in-out infinite;
}

@keyframes helmSteer {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.icon-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 10px;
  opacity: 0.9;
}

/* Solution Hero Visual - Pipeline Flow */
.solution-hero-visual .pipeline-flow {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: nowrap;
  margin: 20px 0;
}

.solution-hero-visual .pipeline-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 75px;
  height: 75px;
}

.solution-hero-visual .pipeline-stage.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.solution-hero-visual .pipeline-stage i {
  font-size: 1.3rem;
  color: white;
  transition: all 0.3s ease;
}

.solution-hero-visual .pipeline-stage.active i {
  color: #ffd700;
  animation: featureGlow 1s ease-in-out infinite;
}

.solution-hero-visual .pipeline-stage span {
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
  text-align: center;
  white-space: nowrap;
}

@keyframes featureGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
  50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
}

.sub-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.sub-icon {
  position: absolute;
  padding: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.sub-icon:nth-child(1) {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.sub-icon:nth-child(2) {
  bottom: 15px;
  left: 15px;
}

.sub-icon:nth-child(3) {
  bottom: 15px;
  right: 15px;
}

.sub-icon.active {
  background: rgba(255, 255, 255, 1);
  border-color: #667eea;
  transform: translateX(-50%) scale(1.15);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.sub-icon:nth-child(2).active {
  transform: scale(1.15);
}

.sub-icon:nth-child(3).active {
  transform: scale(1.15);
}

.sub-icon i {
  font-size: 1.2rem;
  color: #667eea;
  transition: all 0.3s ease;
}

.sub-icon.active i {
  color: #5a6fd8;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes iconGlow {
  from { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
  to { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6); }
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
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
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
  
  .solution-features { padding: 40px 30px; }
  .features-grid { grid-template-columns: 1fr; gap: 25px; }
  
  .use-case-demo { flex-direction: column; }
  .step-arrow { transform: rotate(90deg); }

  .architecture-diagram { flex-direction: column; }

  .before-after-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .arrow-divider {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
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
    font-size: 0.95rem;
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
    max-width: 100%;
    gap: 20px;
  }

  .main-icon {
    font-size: 2.5rem;
  }

  .main-icon-wrapper {
    margin-bottom: 15px;
  }

  .pipeline-flow {
    gap: 12px;
  }

  .solution-hero-visual .pipeline-stage {
    width: 70px;
    height: 70px;
    padding: 8px;
  }

  .solution-hero-visual .pipeline-stage i {
    font-size: 1.2rem;
  }

  .solution-hero-visual .pipeline-stage span {
    font-size: 0.65rem;
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
    margin-bottom: 5px;
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
    min-width: auto;
    width: 100%;
    padding: 20px;
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

  .tech-stack-section {
    padding: 18px;
    margin-top: 20px;
  }

  .tech-stack-section h5 {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  .tech-stack-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .tech-card {
    padding: 18px 15px;
  }

  .tech-logo-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  .tech-card h6 {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }

  .tech-card p {
    font-size: 0.75rem;
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
}

/* Tech Stack Section */
.tech-stack-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.tech-stack-section h5 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #333;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tech-card {
  background: #f8f9fa;
  padding: 25px 20px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: #667eea;
  background: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
}

.tech-logo-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.tech-card h6 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
}

.tech-card p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
}

/* Responsive Design for Tech Stack */
@media (max-width: 968px) {
  .tech-stack-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
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

  .tech-stack-section {
    padding: 20px;
  }

  .tech-stack-grid {
    grid-template-columns: 1fr;
  }

  .tech-card {
    padding: 20px 15px;
  }
}
</style>