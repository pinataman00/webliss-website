<template>
  <div class="solution-detail">
    <div class="solution-hero">
      <div class="solution-hero-content">
        <div class="solution-badge">Natural Language to SQL</div>
        <div class="solution-header">
          <div class="header-logo">
            <img :src="symbolImage" alt="Siora Symbol" class="solution-header-logo">
          </div>
          <div class="header-text">
            <h3>
              <span class="solution-name">Siora</span>
              <span class="solution-pronunciation">시오라</span>
            </h3>
            <p class="solution-catchphrase">데이터와 대화하다, 인사이트를 발견하다</p>
          </div>
        </div>
        <p class="solution-tagline">자연어를 SQL로 변환하는 지능형 데이터 분석 플랫폼</p>
        <p class="solution-description">AI를 이용해 자연어 질의를 SQL로 자동 변환하여, SQL 전문 지식 없이도 누구나 쉽게 데이터를 추출하고 분석할 수 있는 혁신적인 플랫폼입니다.</p>
      </div>
      <div class="solution-hero-visual">
        <div class="icon-animation-container">
          <!-- Main Language to SQL Icon -->
          <div class="main-icon-wrapper">
            <i class="fas fa-question-circle main-icon" :class="{ hidden: iconTransformed }"></i>
            <i class="fas fa-lightbulb main-icon transformed-icon" :class="{ show: iconTransformed }"></i>
            <!-- <div class="icon-label">Just ask & Get Insight!</div> -->
          </div>

          <!-- Conversion Flow -->
          <div class="conversion-flow">
            <div class="flow-section" :class="{ active: activeStep === 'input' }">
              <i class="fas fa-keyboard"></i>
              <span>자연어 입력</span>
            </div>
            <!-- <div class="arrow-wrapper">
              <i class="fas fa-arrow-right conversion-arrow"></i>
            </div> -->
            <div class="flow-section" :class="{ active: activeStep === 'sql' }">
              <i class="fas fa-code"></i>
              <span>SQL 생성</span>
            </div>
            <!-- <div class="arrow-wrapper">
              <i class="fas fa-arrow-right conversion-arrow"></i>
            </div> -->
            <div class="flow-section" :class="{ active: activeStep === 'insight' }">
              <i class="fas fa-chart-line"></i>
              <span>인사이트 도출</span>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="process-steps">
            <!-- <div class="step" :class="{ active: activeProcess === 1 }"> -->
            <div class="step">
              <i class="fas fa-brain"></i>
              <span>NLP 분석</span>
            </div>
            <!-- <div class="step" :class="{ active: activeProcess === 2 }"> -->
            <div class="step">
              <i class="fas fa-sitemap"></i>
              <span>스키마 매핑</span>
            </div>
            <!-- <div class="step" :class="{ active: activeProcess === 3 }"> -->
            <div class="step">
              <i class="fas fa-cogs"></i>
              <span>쿼리 최적화</span>
            </div>
          </div>
        </div>
          <!-- <div class="sql-flow" ref="sqlFlowContainer">
            <div v-for="(step, index) in dataqSteps" :key="step.id" class="flow-item" :ref="`flowItem${index}`">
              <div class="sql-step" :class="{
                active: step.active,
                completed: step.completed,
                'step-visible': isFlowVisible
              }" @mouseenter="handleStepHover(index, true)" @mouseleave="handleStepHover(index, false)">
                {{ step.name }}
              </div>
              <div v-if="index < dataqSteps.length - 1" class="sql-arrow" :class="{
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

    <div class="solution-demo" :class="{ 'is-mobile': isMobile }">
      <h4 @click="toggleAccordion('demo')">
        자연어→SQL 변환 데모
        <span class="accordion-icon">{{ accordionStates.demo ? '−' : '+' }}</span>
      </h4>
      <div class="accordion-content" v-show="accordionStates.demo">
      <div class="demo-container">
        <div class="demo-query">
          <h5>자연어 질의</h5>
          <div class="query-example">
            "2024년에 가장 많이 판매된 제품 상위 5개의 목록과 매출금액을 알려줘"
          </div>
        </div>
        <div class="demo-arrow">↓</div>
        <div class="demo-sql">
          <h5>자동 생성된 SQL</h5>
          <div class="sql-code">
            <pre><code>SELECT
    product_name,
    SUM(sales_amount) as total_sales
FROM sales s
JOIN products p ON s.product_id = p.id
WHERE YEAR(s.sale_date) = 2024
GROUP BY product_name
ORDER BY total_sales DESC
LIMIT 5;</code></pre>
          </div>
        </div>
        <div class="demo-arrow">↓</div>
        <div class="demo-insight">
          <h5>도출된 인사이트</h5>
          <div class="insight-cards">
            <div class="insight-card primary">
              <div class="insight-icon"><i class="fas fa-chart-bar"></i></div>
              <div class="insight-content">
                <h6>매출 집중도 분석</h6>
                <p>상위 5개 제품이 전체 매출의 <strong>45%</strong>를 차지하여 높은 집중도를 보임</p>
              </div>
            </div>
            <div class="insight-card success">
              <div class="insight-icon"><i class="fas fa-lightbulb"></i></div>
              <div class="insight-content">
                <h6>최고 성과 제품</h6>
                <p>제품 A가 2위 대비 <strong>2배 이상</strong> 높은 매출을 기록하며 주력 제품으로 확인</p>
              </div>
            </div>
            <div class="insight-card warning">
              <div class="insight-icon"><i class="fas fa-chart-line"></i></div>
              <div class="insight-content">
                <h6>전략적 제안</h6>
                <p>상위 제품군 집중 마케팅 및 재고 관리로 <strong>매출 극대화</strong> 가능</p>
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
      <div class="architecture-flow">
        <div class="arch-step" v-for="layer in architectureLayers" :key="layer.id">
          <div class="arch-icon" v-html="layer.icon"></div>
          <h5>{{ layer.title }}</h5>
          <div class="arch-description">{{ layer.description }}</div>
          <div class="arch-components">
            <span v-for="component in layer.components" :key="component" class="arch-component">
              {{ component }}
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import symbolImage from '../../assets/solutions-logo/logo-symbol/Siora_symbol.png'

export default {
  name: 'Siora',
  data() {
    return {
      symbolImage,
      isFlowVisible: false,
      animationTimer: null,
      typingTimer: null,
      conversionTimer: null,
      currentTypingText: '',
      currentSqlText: { line1: '', line2: '', line3: '', line4: '' },
      isTyping: false,
      isConverting: false,
      mainIconActive: false,
      iconTransformed: false,
      activeStep: null,
      activeProcess: null,
      isMobile: false,
      accordionStates: {
        demo: false,
        architecture: false
      },
      typingQueries: [
        '작년 매출이 높은 제품 5개',
        '고객별 주문 횟수 조회',
        '지역별 판매량 통계'
      ],
      sqlQueries: [
        {
          line1: 'SELECT product_name,',
          line2: '  SUM(sales) as total',
          line3: 'FROM products',
          line4: 'ORDER BY total DESC LIMIT 5'
        },
        {
          line1: 'SELECT customer_name,',
          line2: '  COUNT(*) as orders',
          line3: 'FROM orders',
          line4: 'GROUP BY customer_name'
        },
        {
          line1: 'SELECT region,',
          line2: '  SUM(quantity) as sales',
          line3: 'FROM sales',
          line4: 'GROUP BY region'
        }
      ],
      currentQueryIndex: 0,
      dataqSteps: [
        { id: 1, name: '자연어 입력', active: false, completed: false },
        { id: 2, name: 'AI 분석', active: false, completed: false },
        { id: 3, name: 'SQL 생성', active: false, completed: false },
        { id: 4, name: '결과 반환', active: false, completed: false }
      ],
      features: [
        {
          id: 1,
          icon: '<i class="fas fa-comments"></i>',
          title: '자연어 이해',
          descriptions: [
            '복잡한 비즈니스 질문을 자연어로 입력하면',
            'AI가 의도를 정확히 파악하여 SQL로 변환합니다'
          ]
        },
        {
          id: 2,
          icon: '<i class="fas fa-brain"></i>',
          title: '스키마 자동 분석',
          descriptions: [
            '데이터베이스 스키마를 자동으로 분석하여',
            '테이블 관계와 컬럼 정보를 지능적으로 매핑합니다'
          ]
        },
        {
          id: 3,
          icon: '<i class="fas fa-bolt"></i>',
          title: '실시간 SQL 생성',
          descriptions: [
            '질의와 동시에 최적화된 SQL을 생성하여',
            '빠르고 정확한 데이터 분석이 가능합니다'
          ]
        },
        {
          id: 4,
          title: '메타데이터 활용',
          icon: '<i class="fas fa-chart-bar"></i>',
          descriptions: [
            '테이블 간 관계, 컬럼 의미, 비즈니스 규칙을',
            '학습하여 더욱 정확한 SQL을 생성합니다'
          ]
        },
        {
          id: 5,
          icon: '<i class="fas fa-bullseye"></i>',
          title: '성능 최적화',
          descriptions: [
            '쿼리 성능을 고려한 최적화된 SQL을 생성하여',
            '대용량 데이터에서도 빠른 응답을 보장합니다'
          ]
        },
        {
          id: 6,
          icon: '<i class="fas fa-chart-line"></i>',
          title: '인사이트 자동 도출',
          descriptions: [
            '분석 결과에서 비즈니스 인사이트를 자동으로 도출하여',
            '의사결정에 필요한 통찰을 제공합니다'
          ]
        }
      ],
      architectureLayers: [
        {
          id: 1,
          icon: '<i class="fas fa-microphone"></i>',
          title: 'Natural Language Processing',
          description: '사용자 질의 이해 및 의도 파악',
          components: ['NLP Engine', 'Intent Recognition', 'Entity Extraction']
        },
        {
          id: 2,
          icon: '<i class="fas fa-database"></i>',
          title: 'Metadata Management',
          description: '데이터베이스 스키마 분석 및 관리',
          components: ['Schema Analyzer', 'Relationship Mapping', 'Data Dictionary']
        },
        {
          id: 3,
          icon: '<i class="fas fa-wrench"></i>',
          title: 'SQL Generation Engine',
          description: 'AI 기반 SQL 자동 생성',
          components: ['Query Builder', 'Optimization Engine', 'Validation Layer']
        },
        {
          id: 4,
          icon: '<i class="fas fa-chart-bar"></i>',
          title: 'Result Processing',
          description: '결과 처리 및 인사이트 도출',
          components: ['Data Visualization', 'Insight Engine', 'Report Generator']
        }
      ]
    }
  },
  mounted() {
    this.showSqlFlow();
    this.startMainIconAnimation();
    this.startConversionAnimation();
    this.startProcessAnimation();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    setTimeout(() => {
      this.startSioraDemo();
    }, 1000);
  },
  beforeUnmount() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
    if (this.conversionTimer) {
      clearTimeout(this.conversionTimer);
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

    showSqlFlow() {
      this.isFlowVisible = true;
    },

    handleStepHover(index, isHover) {
      if (isHover) {
        console.log(`Siora Step ${index + 1} hovered: ${this.dataqSteps[index].name}`);
      }
    },

    startSioraDemo() {
      this.resetSqlFlow();

      this.dataqSteps.forEach((step, index) => {
        this.animationTimer = setTimeout(() => {
          step.active = true;

          this.animationTimer = setTimeout(() => {
            step.active = false;
            step.completed = true;
          }, 800);
        }, index * 900);
      });

      const totalDuration = this.dataqSteps.length * 900 + 800 + 2000;
      this.animationTimer = setTimeout(() => {
        this.startSioraDemo();
      }, totalDuration);
    },

    resetSqlFlow() {
      if (this.animationTimer) {
        clearTimeout(this.animationTimer);
      }

      this.dataqSteps.forEach(step => {
        step.active = false;
        step.completed = false;
      });
    },

    startMainIconAnimation() {
      setInterval(() => {
        this.iconTransformed = !this.iconTransformed;
      }, 2500);
    },

    startConversionAnimation() {
      const steps = ['input', 'sql', 'insight'];
      let currentIndex = 0;

      const animateStep = () => {
        this.activeStep = steps[currentIndex];
        this.isConverting = true;

        setTimeout(() => {
          this.isConverting = false;
          currentIndex = (currentIndex + 1) % steps.length;

          setTimeout(() => {
            this.activeStep = null;
            setTimeout(animateStep, 800);
          }, 800);
        }, 1200);
      };

      setTimeout(animateStep, 1000);
    },

    startProcessAnimation() {
      const processes = [1, 2, 3];
      let currentIndex = 0;

      const animateProcess = () => {
        this.activeProcess = processes[currentIndex];
        currentIndex = (currentIndex + 1) % processes.length;

        setTimeout(() => {
          this.activeProcess = null;
          setTimeout(animateProcess, 800);
        }, 1200);
      };

      setTimeout(animateProcess, 2000);
    },

    startNlpToSqlAnimation() {
      this.currentQueryIndex = 0;
      this.animateTyping();
    },

    animateTyping() {
      const currentQuery = this.typingQueries[this.currentQueryIndex];
      const currentSql = this.sqlQueries[this.currentQueryIndex];

      // 기존 텍스트 초기화
      this.currentTypingText = '';
      this.currentSqlText = { line1: '', line2: '', line3: '', line4: '' };
      this.isTyping = true;
      this.isConverting = false;

      // 자연어 타이핑 애니메이션
      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < currentQuery.length) {
          this.currentTypingText += currentQuery[charIndex];
          charIndex++;
          this.typingTimer = setTimeout(typeChar, 100);
        } else {
          this.isTyping = false;

          // 타이핑 완료 후 변환 시작
          this.typingTimer = setTimeout(() => {
            this.startConversion(currentSql);
          }, 800);
        }
      };
      typeChar();
    },

    startConversion(sqlQuery) {
      this.isConverting = true;

      // SQL 생성 애니메이션
      this.conversionTimer = setTimeout(() => {
        this.animateSqlGeneration(sqlQuery);
      }, 1000);
    },

    animateSqlGeneration(sqlQuery) {
      const lines = ['line1', 'line2', 'line3', 'line4'];
      let lineIndex = 0;

      const generateLine = () => {
        if (lineIndex < lines.length) {
          const lineKey = lines[lineIndex];
          const lineText = sqlQuery[lineKey];
          let charIndex = 0;

          const typeLineChar = () => {
            if (charIndex < lineText.length) {
              this.currentSqlText[lineKey] += lineText[charIndex];
              charIndex++;
              this.conversionTimer = setTimeout(typeLineChar, 50);
            } else {
              lineIndex++;
              this.conversionTimer = setTimeout(generateLine, 300);
            }
          };
          typeLineChar();
        } else {
          this.isConverting = false;

          // 완료 후 다음 쿼리로 이동
          this.conversionTimer = setTimeout(() => {
            this.currentQueryIndex = (this.currentQueryIndex + 1) % this.typingQueries.length;
            this.animateTyping();
          }, 3000);
        }
      };
      generateLine();
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

.solution-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sql-diagram {
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
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.main-icon {
  position: absolute;
  font-size: 4rem;
  color: white;
  transition: all 0.6s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  opacity: 1;
  transform: scale(1) rotateY(0deg);
}

.main-icon.hidden {
  opacity: 0;
  transform: scale(0.8) rotateY(90deg);
}

.transformed-icon {
  opacity: 0;
  transform: scale(0.8) rotateY(-90deg);
  color: #ffd700;
}

.transformed-icon.show {
  opacity: 1;
  transform: scale(1) rotateY(0deg);
  animation: lightbulbGlow 2.5s ease-in-out infinite;
}

@keyframes lightbulbGlow {
  0%, 100% {
    filter: drop-shadow(0 4px 15px rgba(255, 215, 0, 0.3));
  }
  50% {
    filter: drop-shadow(0 4px 25px rgba(255, 215, 0, 0.8));
  }
}

.icon-label {
  margin-top: 80px;
  font-size: 1.0rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
}

.conversion-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  width: 100%;
  flex-wrap: nowrap;
}

.flow-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  min-width: 100px;
  flex-shrink: 0;
}

.flow-section.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
}

.flow-section i {
  font-size: 1.8rem;
  color: white;
  transition: all 0.3s ease;
}

.flow-section.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.flow-section span {
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
  text-align: center;
  white-space: nowrap;
}

.arrow-wrapper {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.conversion-arrow {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.conversion-arrow.active {
  color: #4CAF50;
  transform: scale(1.2);
  animation: arrowPulse 1s infinite;
}

.ai-badge {
  background: white;
  color: #667eea;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
}

.process-steps {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* padding: 15px; */
  border-radius: 12px;
  /* background: rgba(255, 255, 255, 0.1); */
  /* border: 2px solid rgba(255, 255, 255, 0.3); */
  transition: all 0.3s ease;
  min-width: 100px;
}

.step.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.step i {
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.step.active i {
  color: #ffd700;
  animation: iconGlow 1s infinite alternate;
}

.step span {
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
  0%, 100% { transform: scale(1.2); }
  50% { transform: scale(1.3); }
}



.sql-flow {
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

.sql-step {
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

.sql-step.step-visible {
  opacity: 1;
  animation: stepSlideIn 0.6s ease forwards;
}

.sql-step:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.sql-arrow {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(1);
}

.sql-arrow.arrow-visible {
  opacity: 1;
  animation: arrowSlideIn 0.4s ease forwards;
}

.arrow-horizontal { display: inline; }
.arrow-vertical { display: none; }

.sql-arrow.active {
  color: rgba(76, 175, 80, 0.9);
  transform: scale(1.2);
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.sql-step.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
  animation: pulse 1s ease-in-out infinite;
}

.sql-step.completed {
  background: rgba(76, 175, 80, 0.3);
  border-color: rgba(76, 175, 80, 0.7);
}

.sql-step.completed::after {
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
  50% { box-shadow: 0 15px 45px rgba(79, 195, 247, 0.4); }
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

.solution-demo {
  padding: 60px;
  background: #f8f9fa;
}

.solution-demo h4 {
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

.demo-query, .demo-sql {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.demo-query h5, .demo-sql h5 {
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

.sql-code {
  background: #263238;
  border-radius: 10px;
  padding: 20px;
  overflow-x: auto;
}

.sql-code pre {
  margin: 0;
  color: #fff;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.demo-arrow {
  text-align: center;
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

.demo-insight {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.demo-insight h5 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #667eea;
}

.insight-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.insight-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: default;
}

.insight-card:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.insight-card.primary {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-color: #90caf9;
}

.insight-card.success {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-color: #bbf7d0;
}

.insight-card.warning {
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
  border-color: #ffe9a0;
}

.insight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  line-height: 1;
}

.insight-content {
  flex: 1;
}

.insight-content h6 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
}

.insight-content p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.insight-content strong {
  color: #667eea;
  font-weight: 700;
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

.architecture-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.arch-step {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.arch-step:hover {
  transform: translateY(-5px);
}

.arch-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.arch-step h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #667eea;
}

.arch-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
}

.arch-components {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.arch-component {
  background: #f8f9fa;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
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
  .solution-demo.is-mobile h4,
  .solution-architecture.is-mobile h4 {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.3s ease;
  }

  .solution-demo.is-mobile h4:hover,
  .solution-architecture.is-mobile h4:hover {
    color: #667eea;
  }

  .solution-demo.is-mobile h4:active,
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

  .solution-demo.is-mobile .accordion-content,
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

@media (max-width: 1200px) {
  .architecture-flow { grid-template-columns: repeat(2, 1fr); }
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

  .solution-features, .solution-demo, .solution-architecture { padding: 40px 30px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); gap: 25px; }

  .insight-card {
    flex-direction: row;
    padding: 20px;
    gap: 15px;
  }

  .insight-icon {
    font-size: 2rem;
  }

  .sql-flow { flex-direction: column; gap: 15px; }
  .flow-item { flex-direction: column; gap: 15px; }
  .sql-step { min-width: 100px; padding: 12px 20px; }

  .arrow-horizontal { display: none; }
  .arrow-vertical { display: inline; }

  .architecture-flow { grid-template-columns: 1fr; }

  /* Font Awesome 아이콘 모바일 대응 */
  .icon-animation-container { height: 280px; }

  .conversion-flow {
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .arrow-wrapper {
    transform: rotate(90deg);
  }

  .process-steps {
    gap: 20px;
    flex-wrap: wrap;
  }

  .step {
    min-width: 80px;
    padding: 12px;
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

  .icon-label {
    margin-top: 60px;
    font-size: 0.85rem;
  }

  .conversion-flow {
    gap: 12px;
  }

  .flow-section {
    padding: 12px 10px;
    min-width: 85px;
  }

  .flow-section i {
    font-size: 1.4rem;
  }

  .flow-section span {
    font-size: 0.75rem;
  }

  .process-steps {
    gap: 15px;
  }

  .step {
    min-width: 70px;
    padding: 10px;
  }

  .step i {
    font-size: 1.2rem;
  }

  .step span {
    font-size: 0.7rem;
  }

  .solution-features, .solution-demo, .solution-architecture {
    padding: 25px 20px;
  }

  .solution-features h4, .solution-demo h4, .solution-architecture h4 {
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

  .demo-query, .demo-sql, .demo-insight {
    padding: 20px;
  }

  .demo-query h5, .demo-sql h5, .demo-insight h5 {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .query-example {
    padding: 15px;
    font-size: 0.95rem;
  }

  .sql-code {
    padding: 15px;
  }

  .sql-code pre {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .demo-arrow {
    font-size: 1.5rem;
    margin: 3px 0;
  }

  .insight-cards {
    gap: 15px;
  }

  .insight-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
    gap: 12px;
  }

  .insight-icon {
    font-size: 2rem;
  }

  .insight-content h6 {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }

  .insight-content p {
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .architecture-flow {
    gap: 20px;
  }

  .arch-step {
    padding: 20px;
  }

  .arch-icon {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  .arch-step h5 {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .arch-description {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }

  .arch-component {
    padding: 8px 12px;
    font-size: 0.75rem;
  }
}
</style>