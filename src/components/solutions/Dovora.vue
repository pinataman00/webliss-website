<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">AI Document Management</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="Dovora Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">Dovora</span>
              <span class="solution-pronunciation">도보라</span>
            </h3>
            <p class="solution-catchphrase">문서에서 지식으로, 지식에서 통찰로</p>
          </div>
        </div>
        <p class="solution-tagline">문서 내용 기반 지능형 답변 시스템</p>
        <p class="solution-description">기존 문서 관리의 복잡함을 해결하고 문서 내용을 기반으로 정확한 답변을 제공하여 환각 현상을 최소화하는 AI 기반 문서 관리 솔루션입니다.</p>
      </div>
      <div class="solution-hero-visual">
        <div class="icon-animation-container">
          <!-- Main Document AI Icon -->
          <div class="main-icon-wrapper">
            <i class="fas fa-file-alt main-icon"></i>
            <i class="fas fa-search scan-icon"></i>
            <!-- <div class="icon-label">Document AI</div> -->
          </div>

          <!-- Document Processing Flow -->
          <div class="processing-flow">
            <div class="process-stage" :class="{ active: activeStage === 'documents' }">
              <div class="stage-icons">
                <i class="fas fa-folder-open"></i>
                <i class="fas fa-file-pdf"></i>
                <i class="fas fa-file-word"></i>
              </div>
              <span>Documents</span>
            </div>
            <!-- <div class="flow-arrow">
              <i class="fas fa-arrow-right" :class="{ active: processActive }"></i>
            </div> -->
            <div class="process-stage" :class="{ active: activeStage === 'ai' }">
              <i class="fas fa-brain ai-brain"></i>
              <span>AI Processing</span>
            </div>
            <!-- <div class="flow-arrow">
              <i class="fas fa-arrow-right" :class="{ active: answerActive }"></i>
            </div> -->
            <div class="process-stage" :class="{ active: activeStage === 'answer' }">
              <i class="fas fa-comments"></i>
              <span>Smart Answer</span>
            </div>
          </div>

          <!-- Feature Highlights -->
          <div class="feature-highlights">
            <!-- <div class="highlight" :class="{ active: activeFeature === 1 }"> -->
            <div class="highlight">
              <i class="fas fa-shield-alt"></i>
              <span>Secure</span>
            </div>
            <!-- <div class="highlight" :class="{ active: activeFeature === 2 }"> -->
            <div class="highlight">
              <i class="fas fa-search"></i>
              <span>Smart Search</span>
            </div>
            <!-- <div class="highlight" :class="{ active: activeFeature === 3 }"> -->
            <div class="highlight">
              <i class="fas fa-bullseye"></i>
              <span>Accurate</span>
            </div>
          </div>
        </div>

          <!-- <div class="document-flow" ref="documentFlowContainer">
            <div v-for="(step, index) in dovoraSteps" :key="step.id" class="flow-item" :ref="`flowItem${index}`">
              <div class="document-step" :class="{
                active: step.active,
                completed: step.completed,
                'step-visible': isFlowVisible
              }" @mouseenter="handleStepHover(index, true)" @mouseleave="handleStepHover(index, false)">
                {{ step.name }}
              </div>
              <div v-if="index < dovoraSteps.length - 1" class="document-arrow" :class="{
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
          <p v-for="desc in feature.descriptions" :key="desc">{{ desc }}</p>
        </div>
      </div>
    </div>

    <div class="document-demo-section" :class="{ 'is-mobile': isMobile }">
      <h4 @click="toggleAccordion('demo')">
        문서 검색 데모
        <span class="accordion-icon">{{ accordionStates.demo ? '−' : '+' }}</span>
      </h4>
      <div class="accordion-content" v-show="accordionStates.demo">
      <div class="demo-container">
        <div class="demo-query">
          <h5>사용자 질문</h5>
          <div class="query-example">
            "2024년 연간 보고서에서 우리 회사의 매출 성장률이 얼마인지 알려줘"
          </div>
        </div>
        <div class="demo-arrow">↓</div>
        <div class="demo-process">
          <h5>AI 문서 분석</h5>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-icon"><i class="fas fa-search"></i></div>
              <div class="step-content">
                <h6>문서 검색</h6>
                <p>관련 문서 자동 탐색</p>
                <div class="step-detail">2024_annual_report.pdf 발견</div>
              </div>
            </div>
            <div class="process-step">
              <div class="step-icon"><i class="fas fa-brain"></i></div>
              <div class="step-content">
                <h6>내용 분석</h6>
                <p>문서 내용 정밀 분석</p>
                <div class="step-detail">매출 관련 섹션 추출 (p.15)</div>
              </div>
            </div>
            <div class="process-step">
              <div class="step-icon"><i class="fas fa-check-circle"></i></div>
              <div class="step-content">
                <h6>정확도 검증</h6>
                <p>답변 신뢰도 확인</p>
                <div class="step-detail">신뢰도: 98.5%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-arrow">↓</div>
        <div class="demo-answer">
          <h5>생성된 답변</h5>
          <div class="answer-content">
            <div class="answer-text">
              <p><strong>2024년 매출 성장률은 전년 대비 23.5% 증가</strong>했습니다.</p>
              <p>구체적으로 2023년 매출 1,250억원에서 2024년 1,544억원으로 상승하여, 294억원의 매출 증가를 기록했습니다.</p>
            </div>
            <div class="answer-source">
              <div class="source-icon"><i class="fas fa-file-alt"></i></div>
              <div class="source-info">
                <strong>출처:</strong> 2024_annual_report.pdf, 15페이지<br>
                <span class="confidence">신뢰도: 98.5%</span>
              </div>
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
        <div class="arch-layer" v-for="layer in architectureLayers" :key="layer.id">
          <h5>{{ layer.title }}</h5>
          <div class="arch-components">
            <div v-for="component in layer.components" :key="component" class="arch-component">
              {{ component }}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import symbolImage from '../../assets/solutions-logo/logo-symbol/Dovora_symbol.png'

export default {
  name: 'Dovora',
  data() {
    return {
      symbolImage,
      isFlowVisible: false,
      animationTimer: null,
      mainIconActive: false,
      activeStage: null,
      activeFeature: null,
      processActive: false,
      answerActive: false,
      isMobile: false,
      accordionStates: {
        demo: false,
        architecture: false
      },
      dovoraSteps: [
        { id: 1, name: '문서 업로드', active: false, completed: false },
        { id: 2, name: '문서 분석', active: false, completed: false },
        { id: 3, name: '질의 처리', active: false, completed: false },
        { id: 4, name: '정확한 답변', active: false, completed: false }
      ],
      features: [
        {
          id: 1,
          icon: '<i class="fas fa-clipboard"></i>',
          title: '문서 기반 답변',
          descriptions: [
            '문서 정보를 기반으로 한 답변으로',
            '환각 현상을 최소화하여 신뢰할 수 있는 정보를 제공합니다'
          ]
        },
        {
          id: 2,
          icon: '<i class="fas fa-shield-alt"></i>',
          title: '구축형 솔루션',
          descriptions: [
            '구축형 솔루션 제공으로 기업 및 고객 정보를',
            '안전하게 보호하여 보안성을 강화합니다'
          ]
        },
        {
          id: 3,
          icon: '<i class="fas fa-bolt"></i>',
          title: '경량화된 LLM',
          descriptions: [
            '경량화된 LLM 사용으로 비용을 절감하면서도',
            '높은 성능을 유지하는 효율적인 솔루션입니다'
          ]
        },
        {
          id: 4,
          icon: '<i class="fas fa-search"></i>',
          title: '지능형 검색',
          descriptions: [
            '고객 니즈와 결론을 통합적으로 관리하여',
            '효율적인 문서 검색과 정보 접근이 가능합니다'
          ]
        },
        {
          id: 5,
          icon: '<i class="fas fa-bullseye"></i>',
          title: '정확성 향상',
          descriptions: [
            '문서 내용을 기반으로 한 답변으로',
            '정확성을 크게 향상시키고 오류를 최소화합니다'
          ]
        },
        {
          id: 6,
          icon: '<i class="fas fa-chart-bar"></i>',
          title: '사용량 모니터링',
          descriptions: [
            '시스템 사용량과 성능을 실시간으로 모니터링하여',
            '최적의 운영 환경을 유지합니다'
          ]
        }
      ],
      architectureLayers: [
        {
          id: 1,
          title: 'User Interface',
          components: ['질의응답 서버', 'Web Interface', 'API Gateway']
        },
        {
          id: 2,
          title: 'Processing Layer',
          components: ['문서분석 서버', 'AI Hub 엔진', '임베딩 API']
        },
        {
          id: 3,
          title: 'Data Layer',
          components: ['QA Database', '문서데이터', '인공지능 모델']
        },
        {
          id: 4,
          title: 'AI Models',
          components: ['sLLMs', 'sLLM', 'TableQA sLLM']
        }
      ]
    }
  },
  mounted() {
    this.showDocumentFlow();
    this.startMainIconAnimation();
    this.startDocumentProcessingAnimation();
    this.startFeatureHighlights();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    setTimeout(() => {
      this.startDovoraDemo();
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
        this.accordionStates.demo = true;
        this.accordionStates.architecture = true;
      }
    },

    toggleAccordion(section) {
      if (this.isMobile) {
        this.accordionStates[section] = !this.accordionStates[section];
      }
    },

    showDocumentFlow() {
      this.isFlowVisible = true;
    },

    handleStepHover(index, isHover) {
      if (isHover) {
        console.log(`Dovora Step ${index + 1} hovered: ${this.dovoraSteps[index].name}`);
      }
    },

    startDovoraDemo() {
      this.resetDocumentFlow();

      this.dovoraSteps.forEach((step, index) => {
        this.animationTimer = setTimeout(() => {
          step.active = true;

          this.animationTimer = setTimeout(() => {
            step.active = false;
            step.completed = true;
          }, 800);
        }, index * 900);
      });

      const totalDuration = this.dovoraSteps.length * 900 + 800 + 2000;
      this.animationTimer = setTimeout(() => {
        this.startDovoraDemo();
      }, totalDuration);
    },

    resetDocumentFlow() {
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
      }

      this.dovoraSteps.forEach(step => {
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

    startDocumentProcessingAnimation() {
      const stages = ['documents', 'ai', 'answer'];
      let currentIndex = 0;

      const animateProcess = () => {
        // 이전 단계 비활성화
        this.processActive = false;
        this.answerActive = false;

        // 현재 단계 활성화
        this.activeStage = stages[currentIndex];

        // 화살표 애니메이션
        if (currentIndex === 1) {
          this.processActive = true;
        } else if (currentIndex === 2) {
          this.answerActive = true;
        }

        currentIndex = (currentIndex + 1) % stages.length;

        setTimeout(() => {
          this.activeStage = null;
          setTimeout(animateProcess, 800);
        }, 1500);
      };

      setTimeout(animateProcess, 1000);
    },

    startFeatureHighlights() {
      const features = [1, 2, 3];
      let currentIndex = 0;

      const highlightFeature = () => {
        this.activeFeature = features[currentIndex];
        currentIndex = (currentIndex + 1) % features.length;

        setTimeout(() => {
          this.activeFeature = null;
          setTimeout(highlightFeature, 1000);
        }, 1200);
      };

      setTimeout(highlightFeature, 2000);
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
  align-items: center;
}

.document-diagram {
  text-align: center;
  position: relative;
  width: 100%;
}

/* Font Awesome 아이콘 애니메이션 스타일 */
.icon-animation-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.main-icon-wrapper {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  z-index: 3;
}

.main-icon {
  font-size: 4rem;
  color: white;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

/* 문서 스캔 아이콘 */
.scan-icon {
  position: absolute;
  top: 10%;
  left: 30%;
  font-size: 1.8rem;
  color: #ffa726;
  opacity: 1;
  filter: drop-shadow(0 0 12px rgba(255, 167, 38, 0.8));
  animation: documentScan 4s ease-in-out infinite;
  z-index: 4;
}

@keyframes documentScan {
  0% {
    top: 10%;
    left: 30%;
    opacity: 0.7;
    transform: scale(0.9);
  }
  15% {
    opacity: 1;
    transform: scale(1);
  }
  25% {
    top: 25%;
    left: 50%;
  }
  40% {
    top: 35%;
    left: 70%;
  }
  50% {
    top: 45%;
    left: 65%;
    opacity: 1;
    transform: scale(1.05);
  }
  65% {
    top: 55%;
    left: 50%;
  }
  80% {
    top: 65%;
    left: 35%;
  }
  90% {
    opacity: 0.7;
    transform: scale(0.9);
  }
  100% {
    top: 10%;
    left: 30%;
    opacity: 0.7;
    transform: scale(0.9);
  }
}

.icon-label {
  margin-top: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
}

.processing-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;
  width: 100%;
}

.process-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  width: 120px;
  height: 120px;
}

.process-stage.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
}

.stage-icons {
  display: flex;
  gap: 10px;
}

.stage-icons i, .process-stage i {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.ai-brain {
  font-size: 2rem !important;
}

.process-stage.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.process-stage span {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
  text-align: center;
  line-height: 1.2;
  margin-top: 10px;
}

.flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-arrow i {
  font-size: 1.3rem;
  color: white;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.flow-arrow i.active {
  color: #4CAF50;
  opacity: 1;
  animation: arrowPulse 1s infinite;
}

.feature-highlights {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  /* border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3); */
  transition: all 0.3s ease;
  min-width: 80px;
}

.highlight.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.highlight i {
  font-size: 1.3rem;
  color: white;
  transition: all 0.3s ease;
}

.highlight.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.highlight span {
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
  from { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
  to { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6); }
}

@keyframes arrowPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}


.document-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  min-height: 80px;
  flex-wrap: wrap;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.document-step {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  min-width: 80px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  opacity: 0.7;
  transform: translateY(0);
}

.document-step.step-visible {
  opacity: 1;
  animation: stepSlideIn 0.6s ease forwards;
}

.document-step:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.document-arrow {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(1);
}

.document-arrow.arrow-visible {
  opacity: 1;
  animation: arrowSlideIn 0.4s ease forwards;
}

.arrow-horizontal { display: inline; }
.arrow-vertical { display: none; }

.document-arrow.active {
  color: rgba(76, 175, 80, 0.9);
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.document-step.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  animation: pulse 1s ease-in-out infinite;
}

.document-step.completed {
  background: rgba(76, 175, 80, 0.3);
  border-color: rgba(76, 175, 80, 0.7);
}

.document-step.completed::after {
  content: '✓';
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: #333;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  animation: checkmarkPop 0.3s ease;
}

@keyframes stepSlideIn {
  0% { opacity: 0.7; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes arrowSlideIn {
  0% { opacity: 0.7; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25); }
  50% { box-shadow: 0 15px 45px rgba(102, 126, 234, 0.4); }
}

@keyframes checkmarkPop {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
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
  grid-template-columns: repeat(3, 1fr);
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

.document-demo-section {
  padding: 60px;
  background: #f8f9fa;
}

.document-demo-section h4 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.demo-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.demo-query, .demo-process, .demo-answer {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.demo-query h5, .demo-process h5, .demo-answer h5 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #667eea;
}

.query-example {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #333;
  border-left: 4px solid #667eea;
  font-style: italic;
}

.demo-arrow {
  text-align: center;
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  border-color: #667eea;
  background: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.step-content h6 {
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
}

.step-detail {
  background: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #667eea;
  font-weight: 600;
  border: 1px solid #e9ecef;
}

.answer-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.answer-text {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.answer-text p {
  color: #333;
  line-height: 1.8;
  margin-bottom: 12px;
}

.answer-text p:last-child {
  margin-bottom: 0;
}

.answer-text strong {
  color: #667eea;
  font-size: 1.05rem;
}

.answer-source {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 10px;
  border: 2px solid #a5d6a7;
}

.source-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.source-info {
  flex: 1;
  font-size: 0.95rem;
  color: #2e7d32;
  line-height: 1.6;
}

.source-info strong {
  color: #1b5e20;
}

.confidence {
  display: inline-block;
  margin-top: 5px;
  padding: 4px 10px;
  background: white;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
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
  .document-demo-section.is-mobile h4,
  .solution-architecture.is-mobile h4 {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.3s ease;
  }

  .document-demo-section.is-mobile h4:hover,
  .solution-architecture.is-mobile h4:hover {
    color: #667eea;
  }

  .document-demo-section.is-mobile h4:active,
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

  .document-demo-section.is-mobile .accordion-content,
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

@media (max-width: 968px) {
  .solution-hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 30px;
    gap: 40px;
  }

  .solution-hero h3 { font-size: 2.2rem; }
  .solution-tagline { font-size: 1.2rem; }

  .solution-features, .document-demo-section, .solution-architecture { padding: 40px 30px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }

  /* Font Awesome 아이콘 모바일 대응 */
  .icon-animation-container {
    height: 280px;
  }

  .processing-flow {
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .flow-arrow {
    transform: rotate(90deg);
  }

  .feature-highlights {
    gap: 20px;
    margin-top: 20px;
  }

  .highlight {
    min-width: 60px;
    padding: 12px;
  }

  .document-flow { flex-direction: column; gap: 15px; }
  .flow-item { flex-direction: column; gap: 15px; }
  .document-step { min-width: 100px; padding: 12px 20px; }

  .arrow-horizontal { display: none; }
  .arrow-vertical { display: inline; }

  .architecture-diagram { flex-direction: column; }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .process-step {
    padding: 18px;
  }

  .step-icon {
    font-size: 2rem;
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

  .main-icon {
    font-size: 2.5rem;
  }

  .main-icon-wrapper {
    height: 70px;
    margin-bottom: 20px;
  }

  .processing-flow {
    gap: 15px;
  }

  .process-stage {
    width: 90px;
    height: 90px;
    padding: 12px;
  }

  .process-stage i {
    font-size: 1.3rem;
  }

  .ai-brain {
    font-size: 1.5rem !important;
  }

  .process-stage span {
    font-size: 0.75rem;
  }

  .feature-highlights {
    gap: 15px;
  }

  .highlight {
    min-width: 65px;
    padding: 10px;
  }

  .highlight i {
    font-size: 1.1rem;
  }

  .highlight span {
    font-size: 0.7rem;
  }

  .solution-features, .document-demo-section, .solution-architecture {
    padding: 25px 20px;
  }

  .solution-features h4, .document-demo-section h4, .solution-architecture h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
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

  .demo-container {
    gap: 20px;
  }

  .demo-query, .demo-process, .demo-answer {
    padding: 20px;
  }

  .demo-query h5, .demo-process h5, .demo-answer h5 {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .query-example {
    padding: 15px;
    font-size: 0.9rem;
  }

  .demo-arrow {
    font-size: 1.5rem;
    margin: 3px 0;
  }

  .process-step {
    padding: 15px;
  }

  .step-icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .step-content h6 {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }

  .step-content p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  .step-detail {
    padding: 6px 10px;
    font-size: 0.75rem;
  }

  .answer-content {
    gap: 15px;
  }

  .answer-text {
    padding: 15px;
  }

  .answer-text p {
    font-size: 0.85rem;
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .answer-text strong {
    font-size: 0.95rem;
  }

  .answer-source {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

  .source-icon {
    font-size: 2rem;
  }

  .source-info {
    font-size: 0.85rem;
  }

  .confidence {
    padding: 3px 8px;
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
</style>