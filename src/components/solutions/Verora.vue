<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">AI Chat Service</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="Verora Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">Verora</span>
              <span class="solution-pronunciation">베로라</span>
            </h3>
            <p class="solution-catchphrase">대화 속에서 진실을 드러내다</p>
          </div>
        </div>
        <p class="solution-tagline">생성형 AI 기반 지능형 채팅 서비스</p>
        <p class="solution-description">RAG(Retrieval-Augmented Generation) 기술로 기업 내부 데이터를 학습하여 정확하고 맞춤형 답변을 제공하는 24/7 AI 고객 지원 솔루션입니다</p>
      </div>
      <div class="solution-hero-visual">
        <div class="ai-diagram">
          <div class="icon-animation-container">
            <!-- Main AI Robot Icon -->
            <div class="main-icon-wrapper">
              <!-- Left Chat Bubble -->
              <div class="chat-bubble left-bubble" :class="{ show: activeBubble === 'left' }">
                <i class="fas fa-comment"></i>
              </div>

              <div>

                <!-- <i class="fas fa-robot main-icon" :class="{ pulse: mainIconActive }"></i> -->
                <i class="fas fa-robot main-icon"></i>
                <!-- <div class="icon-label">AI Assistant</div> -->
              </div>

              <!-- Right Chat Bubble -->
              <div class="chat-bubble right-bubble" :class="{ show: activeBubble === 'right' }">
                <i class="fas fa-comment-dots"></i>
              </div>

            </div>

            <!-- Chat Features -->
            <div class="chat-features">
              <div class="chat-feature" :class="{ active: activeChatFeature === 'question' }">
                <i class="fas fa-question-circle"></i>
                <span>사용자 질문</span>
              </div>
              <div class="chat-feature" :class="{ active: activeChatFeature === 'search' }">
                <i class="fas fa-search"></i>
                <span>RAG 검색</span>
              </div>
              <div class="chat-feature" :class="{ active: activeChatFeature === 'brain' }">
                <i class="fas fa-brain"></i>
                <span>AI 답변 생성</span>
              </div>
              <div class="chat-feature" :class="{ active: activeChatFeature === 'reply' }">
                <i class="fas fa-reply"></i>
                <span>맞춤형 응답</span>
              </div>
            </div>

            <!-- Interactive Elements -->
            <!-- <div class="interactive-elements">
              <div class="element" :class="{ active: activeElement === 'doc' }">
                <i class="fas fa-file-alt"></i>
              </div>
              <div class="element" :class="{ active: activeElement === 'data' }">
                <i class="fas fa-database"></i>
              </div>
              <div class="element" :class="{ active: activeElement === 'chat' }">
                <i class="fas fa-comments"></i>
              </div>
            </div> -->
          </div>

          <!-- <div class="ai-flow" ref="aiFlowContainer">
            <div v-for="(step, index) in veroraSteps" :key="step.id" class="flow-item" :ref="`flowItem${index}`">
              <div class="ai-step" :class="{
                active: step.active,
                completed: step.completed,
                'step-visible': isFlowVisible
              }" @mouseenter="handleStepHover(index, true)" @mouseleave="handleStepHover(index, false)">
                {{ step.name }}
              </div>
              <div v-if="index < veroraSteps.length - 1" class="ai-arrow" :class="{
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

    <div class="chat-demo-section" :class="{ 'is-mobile': isMobile }">
      <h4 @click="toggleAccordion('demo')">
        AI 챗봇 데모
        <span class="accordion-icon">{{ accordionStates.demo ? '−' : '+' }}</span>
      </h4>
      <div class="accordion-content" v-show="accordionStates.demo">
      <div class="chat-container">
        <div class="chat-header">
          <div class="chat-title">
            <img :src="logoImage" alt="Verora" class="chat-logo">
            <span class="online-status">● 온라인</span>
          </div>
        </div>
        <div class="chat-messages" ref="chatMessages">
          <div
            v-for="(message, index) in visibleMessages"
            :key="index"
            class="message"
            :class="{ 'user-message': message.isUser, 'ai-message': !message.isUser }"
          >
            <div class="message-content">
              <div v-if="!message.isUser" class="ai-avatar">
                <img :src="symbolImage" alt="Verora AI" class="ai-avatar-img">
              </div>
              <div class="message-bubble">
                <span v-if="message.isTyping" class="typing-indicator">
                  <span></span><span></span><span></span>
                </span>
                <span v-else>{{ message.text }}</span>
              </div>
              <div v-if="message.isUser" class="user-avatar"><i class="fas fa-user"></i></div>
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input type="text" placeholder="메시지를 입력하세요..." readonly>
          <button>전송</button>
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
import symbolImage from '../../assets/solutions-logo/logo-symbol/Verora_symbol.png'
import logoImage from '../../assets/solutions-logo/Verora.png'

export default {
  name: 'Verora',
  data() {
    return {
      symbolImage,
      logoImage,
      isFlowVisible: false,
      animationTimer: null,
      chatTimer: null,
      bubbleTimer: null,
      currentMessageIndex: 0,
      currentBubble: 'user',
      mainIconActive: false,
      activeChatFeature: null,
      activeElement: null,
      activeBubble: null,
      featureIndex: 0,
      elementIndex: 0,
      conversationTimer: null,
      visibleMessages: [],
      isMobile: false,
      accordionStates: {
        demo: false,
        architecture: false
      },
      veroraSteps: [
        { id: 1, name: '사용자 질의', active: false, completed: false },
        { id: 2, name: 'RAG 검색', active: false, completed: false },
        { id: 3, name: 'AI 답변 생성', active: false, completed: false },
        { id: 4, name: '맞춤형 응답', active: false, completed: false }
      ],
      chatMessages: [
        { id: 1, text: "안녕하세요! 회사의 휴가 정책에 대해 알고 싶어요.", isUser: true },
        { id: 2, text: "네, 도와드리겠습니다! 휴가 정책 문서를 검색 중입니다...", isUser: false, isTyping: true },
        { id: 3, text: "회사의 휴가 정책에 따르면 연차는 입사 1년 후 15일이 부여되며, 반차 사용도 가능합니다. 국경일과 대체공휴일도 적용됩니다. 더 자세한 사항이 궁금하시면 언제든 말씀해 주세요!", isUser: false },
        { id: 4, text: "그럼 병가는 어떻게 되나요?", isUser: true },
        { id: 5, text: "병가는 연간 최대 30일까지 사용 가능하며, 의사 진단서 제출이 필요합니다. 3일 이상 연속 병가 시 반드시 진단서를 제출해야 하고, 병가 기간 중에는 기본급의 70%가 지급됩니다.", isUser: false }
      ],
      features: [
        {
          id: 1,
          icon: '<i class="fas fa-comments"></i>',
          title: 'RAG 기반 검색',
          descriptions: [
            'Retrieval-Augmented Generation 기술로',
            '기업 내부 문서에서 정확한 정보를 검색하여 응답합니다'
          ]
        },
        {
          id: 2,
          icon: '<i class="fas fa-book"></i>',
          title: '다양한 문서 지원',
          descriptions: [
            'PDF, Word, Excel, PPT 등 다양한 문서 형식을',
            '자동으로 학습하여 지식베이스를 구축합니다'
          ]
        },
        {
          id: 3,
          icon: '<i class="fas fa-bullseye"></i>',
          title: '맞춤형 학습',
          descriptions: [
            '기업 고유의 데이터와 용어를 반영한',
            '맞춤형 AI 모델로 정확도를 극대화합니다'
          ]
        },
        {
          id: 4,
          icon: '<i class="fas fa-clock"></i>',
          title: '24/7 고객 지원',
          descriptions: [
            '언제든지 즉각적이고 정확한 응답으로',
            '고객 만족도를 향상시키고 운영 비용을 절감합니다'
          ]
        },
        {
          id: 5,
          icon: '<i class="fas fa-sync-alt"></i>',
          title: '실시간 업데이트',
          descriptions: [
            '새로운 문서나 정보가 추가될 때마다',
            '자동으로 학습하여 최신 정보를 제공합니다'
          ]
        },
        {
          id: 6,
          icon: '<i class="fas fa-shield-alt"></i>',
          title: '보안 및 프라이버시',
          descriptions: [
            '기업 데이터의 보안을 보장하며',
            'On-premise 또는 Private Cloud 배포 지원'
          ]
        }
      ],
      architectureLayers: [
        {
          id: 1,
          title: 'Data Layer',
          components: ['문서 임베딩', 'Vector DB', '지식베이스']
        },
        {
          id: 2,
          title: 'AI Engine',
          components: ['RAG 검색', 'LLM 모델', 'Completion']
        },
        {
          id: 3,
          title: 'Interface',
          components: ['채팅 UI', 'API', 'Integration']
        }
      ]
    }
  },
  mounted() {
    this.showAiFlow();
    this.startMainIconAnimation();
    this.startChatFeatureAnimation();
    this.startElementAnimation();
    this.startBubbleAnimation();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    setTimeout(() => {
      this.startVeroraDemo();
    }, 1000);
    setTimeout(() => {
      this.startChatDemo();
    }, 2000);
  },
  beforeUnmount() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    if (this.chatTimer) {
      clearTimeout(this.chatTimer);
    }
    if (this.bubbleTimer) {
      clearTimeout(this.bubbleTimer);
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

    startMainIconAnimation() {
      setInterval(() => {
        this.mainIconActive = true;
        setTimeout(() => {
          this.mainIconActive = false;
        }, 2000);
      }, 4000);
    },

    startChatFeatureAnimation() {
      const features = ['question', 'search', 'brain', 'reply'];

      const highlightFeature = () => {
        this.activeChatFeature = features[this.featureIndex];
        this.featureIndex = (this.featureIndex + 1) % features.length;

        setTimeout(() => {
          this.activeChatFeature = null;
          setTimeout(highlightFeature, 500);
        }, 1500);
      };

      setTimeout(highlightFeature, 1000);
    },

    startElementAnimation() {
      const elements = ['doc', 'data', 'chat'];

      const highlightElement = () => {
        this.activeElement = elements[this.elementIndex];
        this.elementIndex = (this.elementIndex + 1) % elements.length;

        setTimeout(() => {
          this.activeElement = null;
          setTimeout(highlightElement, 800);
        }, 1200);
      };

      setTimeout(highlightElement, 2000);
    },

    startBubbleAnimation() {
      const bubbles = ['left', 'right'];
      let bubbleIndex = 0;

      const showBubble = () => {
        this.activeBubble = bubbles[bubbleIndex];
        bubbleIndex = (bubbleIndex + 1) % bubbles.length;

        this.bubbleTimer = setTimeout(() => {
          this.activeBubble = null;
          this.bubbleTimer = setTimeout(showBubble, 600);
        }, 1800);
      };

      this.bubbleTimer = setTimeout(showBubble, 500);
    },

    showAiFlow() {
      this.isFlowVisible = true;
    },

    handleStepHover(index, isHover) {
      if (isHover) {
        console.log(`Verora Step ${index + 1} hovered: ${this.veroraSteps[index].name}`);
      }
    },

    startVeroraDemo() {
      this.resetAiFlow();

      this.veroraSteps.forEach((step, index) => {
        this.animationTimer = setTimeout(() => {
          step.active = true;

          this.animationTimer = setTimeout(() => {
            step.active = false;
            step.completed = true;
          }, 800);
        }, index * 900);
      });

      const totalDuration = this.veroraSteps.length * 900 + 800 + 2000;
      this.animationTimer = setTimeout(() => {
        this.startVeroraDemo();
      }, totalDuration);
    },

    resetAiFlow() {
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
      }

      this.veroraSteps.forEach(step => {
        step.active = false;
        step.completed = false;
      });
    },

    startChatDemo() {
      this.currentMessageIndex = 0;
      this.visibleMessages = [];
      this.showNextMessage();
    },

    showNextMessage() {
      if (this.currentMessageIndex < this.chatMessages.length) {
        const message = { ...this.chatMessages[this.currentMessageIndex] };

        if (message.isTyping) {
          // 타이핑 인디케이터 먼저 보여주기
          this.visibleMessages.push(message);

          // 2초 후 실제 메시지로 교체
          this.chatTimer = setTimeout(() => {
            const updatedMessage = { ...message, isTyping: false };
            this.visibleMessages[this.visibleMessages.length - 1] = updatedMessage;

            // 다음 메시지 스케줄
            this.chatTimer = setTimeout(() => {
              this.currentMessageIndex++;
              this.showNextMessage();
            }, 1500);
          }, 2000);
        } else {
          this.visibleMessages.push(message);

          // 다음 메시지 스케줄
          this.chatTimer = setTimeout(() => {
            this.currentMessageIndex++;
            this.showNextMessage();
          }, message.isUser ? 2000 : 3000);
        }
      } else {
        // 모든 메시지 표시 완료 후 3초 대기 후 다시 시작
        this.chatTimer = setTimeout(() => {
          this.startChatDemo();
        }, 3000);
      }
    },

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

.ai-diagram {
  text-align: center;
  position: relative;
  width: 100%;
}

/* Font Awesome Icon Animation Styles */
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.main-icon {
  font-size: 4rem;
  color: white;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

/* Chat Bubbles */
.chat-bubble {
  position: absolute;
  font-size: 1.8rem;
  color: white;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.4s ease;
}

.left-bubble {
  left: -60px;
  top: 20;
  transform: scaleX(-1);
}

.left-bubble.show {
  opacity: 1;
  transform: scaleX(-1);
  animation: bubblePopLeft 1.8s ease-in-out;
}

.right-bubble {
  right: -60px;
  top: 0;
}

.right-bubble.show {
  opacity: 1;
  transform: scale(1);
  animation: bubblePop 1.8s ease-in-out;
}

@keyframes bubblePop {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  20% {
    opacity: 1;
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes bubblePopLeft {
  0% {
    opacity: 0;
    transform: scaleX(-1) scale(0.5);
  }
  20% {
    opacity: 1;
    transform: scaleX(-1) scale(1.1);
  }
  40% {
    transform: scaleX(-1) scale(1);
  }
  80% {
    opacity: 1;
    transform: scaleX(-1) scale(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(-1) scale(0.8);
  }
}

.main-icon.pulse {
  animation: iconPulse 2s ease-in-out infinite;
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

.icon-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 10px;
  opacity: 0.9;
}

/* Chat Features */
.chat-features {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap;
  margin: 20px 0;
}

.chat-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 90px;
  height: 90px;
}

.chat-feature.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.chat-feature i {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.chat-feature.active i {
  color: #ffd700;
  animation: featureGlow 1s ease-in-out infinite;
}

.chat-feature span {
  font-size: 0.75rem;
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

/* Interactive Elements */
.interactive-elements {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 15px;
}

.element {
  padding: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.element.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.15);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.element i {
  font-size: 1.2rem;
  color: white;
  transition: all 0.3s ease;
}

.element.active i {
  color: #4CAF50;
  animation: elementPulse 1.5s ease-in-out infinite;
}

@keyframes elementPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}



.ai-flow {
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

.ai-step {
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

.ai-step.step-visible {
  opacity: 1;
  animation: stepSlideIn 0.6s ease forwards;
}

.ai-step:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.ai-arrow {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(1);
}

.ai-arrow.arrow-visible {
  opacity: 1;
  animation: arrowSlideIn 0.4s ease forwards;
}

.arrow-horizontal { display: inline; }
.arrow-vertical { display: none; }

.ai-arrow.active {
  color: rgba(76, 175, 80, 0.9);
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.ai-step.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  animation: pulse 1s ease-in-out infinite;
}

.ai-step.completed {
  background: rgba(76, 175, 80, 0.3);
  border-color: rgba(76, 175, 80, 0.7);
}

.ai-step.completed::after {
  content: '✓';
  position: absolute;
  top: -8px;
  right: -8px;
  background: #4CAF50;
  color: white;
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

/* Chat Demo Styles */
.chat-demo-section {
  padding: 60px;
  background: #f8f9fa;
}

.chat-demo-section h4 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.chat-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 1.1rem;
}

.chat-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1) drop-shadow(0 0 0.5px white) drop-shadow(0 0 0.5px white);
}

.chat-icon {
  font-size: 1.2rem;
}

.online-status {
  margin-left: auto;
  font-size: 0.9rem;
  color: #4CAF50;
}

.chat-messages {
  padding: 20px;
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message {
  animation: messageSlideIn 0.5s ease-out;
}

.message-content {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.user-message .message-content {
  justify-content: flex-end;
}

.ai-message .message-content {
  justify-content: flex-start;
}

.ai-avatar, .user-avatar {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  border-radius: 8px;
}

.ai-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6px;
}

.ai-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1) drop-shadow(0 0 1px white) drop-shadow(0 0 1px white);
}

.user-avatar {
  background: #f0f0f0;
}

.message-bubble {
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  line-height: 1.5;
  font-size: 0.95rem;
}

.user-message .message-bubble {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom-right-radius: 6px;
}

.ai-message .message-bubble {
  background: #f8f9fa;
  color: #333;
  border-bottom-left-radius: 6px;
}

.typing-indicator {
  display: inline-block;
}

.typing-indicator span {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #bbb;
  margin: 0 2px;
  animation: typingDots 1.4s infinite ease-in-out both;
}

.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

.chat-input {
  padding: 20px;
  background: #f8f9fa;
  display: flex;
  gap: 10px;
  border-top: 1px solid #e9ecef;
}

.chat-input input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  font-size: 0.95rem;
  background: white;
}

.chat-input button {
  padding: 12px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.chat-input button:hover {
  opacity: 0.9;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typingDots {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
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

  .solution-features { padding: 40px 30px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }

  .ai-flow { flex-direction: column; gap: 15px; }
  .flow-item { flex-direction: column; gap: 15px; }
  .ai-step { min-width: 100px; padding: 12px 20px; }

  .arrow-horizontal { display: none; }
  .arrow-vertical { display: inline; }

  .architecture-diagram { flex-direction: column; }

  .chat-demo-section { padding: 40px 20px; }
  .chat-container { margin: 0 10px; }
  .chat-messages { min-height: 300px; max-height: 300px; padding: 15px; }
  .message-bubble { max-width: 85%; font-size: 0.9rem; }
}

/* Hide accordion icon on PC */
.accordion-icon {
  display: none;
}

/* Accordion styles for mobile */
@media (max-width: 576px) {
  .chat-demo-section.is-mobile h4,
  .solution-architecture.is-mobile h4 {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.3s ease;
  }

  .chat-demo-section.is-mobile h4:hover,
  .solution-architecture.is-mobile h4:hover {
    color: #667eea;
  }

  .chat-demo-section.is-mobile h4:active,
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

  .chat-demo-section.is-mobile .accordion-content,
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
    max-width: 100%;
    gap: 20px;
  }

  .main-icon {
    font-size: 2.5rem;
  }

  .main-icon-wrapper {
    margin-bottom: 15px;
    gap: 15px;
  }

  .chat-bubble {
    font-size: 1.3rem;
  }

  .left-bubble {
    left: -45px;
  }

  .right-bubble {
    right: -45px;
  }

  .chat-features {
    gap: 12px;
  }

  .chat-feature {
    width: 70px;
    height: 70px;
    padding: 8px;
  }

  .chat-feature i {
    font-size: 1.2rem;
  }

  .chat-feature span {
    font-size: 0.65rem;
  }

  .solution-features, .chat-demo-section, .solution-architecture {
    padding: 25px 20px;
  }

  .solution-features h4, .chat-demo-section h4, .solution-architecture h4 {
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

  .chat-container {
    margin: 0;
  }

  .chat-header {
    padding: 15px;
  }

  .chat-title {
    font-size: 1rem;
    gap: 8px;
  }

  .chat-icon {
    font-size: 1.1rem;
  }

  .online-status {
    font-size: 0.8rem;
  }

  .chat-messages {
    min-height: 200px;
    max-height: 200px;
    padding: 15px;
    gap: 12px;
  }

  .ai-avatar, .user-avatar {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .message-bubble {
    max-width: 80%;
    padding: 10px 14px;
    font-size: 0.85rem;
    border-radius: 15px;
  }

  .user-message .message-bubble {
    border-bottom-right-radius: 5px;
  }

  .ai-message .message-bubble {
    border-bottom-left-radius: 5px;
  }

  .chat-input {
    padding: 15px;
    gap: 8px;
  }

  .chat-input input {
    padding: 10px 14px;
    font-size: 0.85rem;
  }

  .chat-input button {
    padding: 10px 16px;
    font-size: 0.85rem;
  }

  .typing-indicator span {
    width: 6px;
    height: 6px;
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