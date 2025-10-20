<template>
  <div class="floating-actions">
    <!-- 메인 플로팅 버튼 (로고 - 연락처로 이동) -->
    <div class="main-floating-btn" @click="goToContact" v-show="!isInContactSection">
      <div class="btn-icon">
        <img :src="logo" alt="webliss logo" class="logo-img" />
        <div class="sparkle sparkle-1"></div>
        <div class="sparkle sparkle-2"></div>
        <div class="sparkle sparkle-3"></div>
      </div>
      <div class="pulse-ring"></div>
    </div>

    <!-- 서브 액션 버튼들 -->
    <transition-group name="sub-btn" tag="div" class="sub-actions" v-show="showSubButtons || isInContactSection">
      <!-- 전화 문의 버튼 (주석처리 - 나중에 사용 예정)
      <div 
        key="phone"
        class="sub-floating-btn phone-btn" 
        @click="makePhoneCall"
        :style="{ transitionDelay: '0.1s' }"
      >
        <div class="btn-icon">📞</div>
        <div class="btn-tooltip">전화 문의</div>
      </div>
      -->
      
      <!-- 이메일 버튼 (주석처리 - 나중에 사용 예정)
      <div 
        key="kakao"
        class="sub-floating-btn kakao-btn" 
        @click="openKakaoChat"
        :style="{ transitionDelay: '0.2s' }"
      >
        <div class="btn-icon">✉️</div>
        <div class="btn-tooltip">이메일</div>
      </div>
      -->
      
      <div
        key="top"
        class="sub-floating-btn top-btn"
        @click="scrollToTop"
        v-show="showScrollToTop || isInContactSection"
        :style="{ transitionDelay: '0.1s' }"
      >
        <div class="btn-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </div>
        <div class="btn-tooltip">맨 위로</div>
      </div>
    </transition-group>

    <!-- 채팅 상담 모달 (주석처리 - 나중에 사용 예정)
    <div class="chat-modal-overlay" v-if="showChatModal" @click="closeChatModal">
      <div class="chat-modal" @click.stop>
        <div class="modal-header">
          <h3>💬 상담 문의</h3>
          <button class="close-btn" @click="closeChatModal">×</button>
        </div>
        <div class="modal-body">
          <p>안녕하세요! MilkyWai입니다.</p>
          <p>어떤 서비스에 대해 문의하고 싶으신가요?</p>
          
          <div class="consultation-options">
            <button class="option-btn" @click="selectConsultation('cloud')">
              ☁️ 클라우드 서비스
            </button>
            <button class="option-btn" @click="selectConsultation('ai')">
              🤖 AI 서비스
            </button>
            <button class="option-btn" @click="selectConsultation('data')">
              📊 데이터 서비스
            </button>
            <button class="option-btn" @click="selectConsultation('devops')">
              ⚙️ DevOps 서비스
            </button>
          </div>
          
          <div class="contact-methods">
            <p>또는 직접 연락주세요:</p>
            <div class="contact-buttons">
              <button class="contact-btn" @click="makePhoneCall">
                📞 02-6672-3700
              </button>
              <button class="contact-btn" @click="openEmail">
                📧 이메일 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import logo from '../assets/company-ci/webliss-ci-symbol.svg'

export default {
  name: 'FloatingActionButtons',
  data() {
    return {
      showSubButtons: false,
      showScrollToTop: false,
      isInContactSection: false,
      // showChatModal: false, // 주석처리 - 나중에 사용 예정
      logo,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    
    // 메인 버튼 hover 이벤트
    const mainBtn = document.querySelector('.main-floating-btn')
    if (mainBtn) {
      mainBtn.addEventListener('mouseenter', () => {
        // 맨 위로 버튼이 표시되어야 할 때만 서브 버튼 표시
        if (this.showScrollToTop) {
          this.showSubButtons = true
        }
      })
      
      // 전체 floating-actions 영역에서 마우스가 벗어날 때 숨김
      const floatingActions = document.querySelector('.floating-actions')
      floatingActions.addEventListener('mouseleave', () => {
        this.showSubButtons = false
      })
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showScrollToTop = window.scrollY > 300
      this.checkContactSection()
    },

    checkContactSection() {
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        const sectionTop = contactSection.offsetTop - 100
        const sectionBottom = contactSection.offsetTop + contactSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        this.isInContactSection = scrollPosition >= sectionTop && scrollPosition <= sectionBottom
      }
    },
    
    goToContact() {
      // Contact 섹션으로 스크롤 이동
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    },
    
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    /* 주석처리된 메서드들 - 나중에 사용 예정
    openChatConsultation() {
      this.showChatModal = true
    },
    
    closeChatModal() {
      this.showChatModal = false
    },
    
    selectConsultation(type) {
      // 각 서비스별 상담 로직
      const consultationTypes = {
        cloud: '클라우드 서비스',
        ai: 'AI 서비스', 
        data: '데이터 서비스',
        devops: 'DevOps 서비스'
      }
      
      alert(`${consultationTypes[type]} 상담을 요청하셨습니다. 곧 연락드리겠습니다!`)
      this.closeChatModal()
      
      // 실제로는 여기서 상담 요청 API 호출 등을 할 수 있음
      // this.$emit('consultation-requested', { type, timestamp: new Date() })
    },
    
    makePhoneCall() {
      window.location.href = 'tel:02-6672-3700'
    },
    
    openKakaoChat() {
      // 실제 카카오톡 채널 URL로 변경해야 함
      window.open('https://pf.kakao.com/_your_channel_id', '_blank')
      // 또는 모바일에서는 카카오톡 앱으로 직접 연결
      // window.location.href = 'kakaotalk://plusfriend/chat/_your_channel_id'
    },
    
    openEmail() {
      window.location.href = 'mailto:contact@we-bliss.com?subject=서비스 문의&body=안녕하세요. Webliss 서비스에 대해 문의드립니다.'
    }
    */
  }
}
</script>

<style scoped>
.floating-actions {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.logo-img {
  height: 20px;
  filter: brightness(0) invert(1);
}

.main-floating-btn {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  border: none;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.main-floating-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

.main-floating-btn .btn-icon {
  font-size: 1.5rem;
  margin-bottom: 2px;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border: 3px solid rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.sparkle {
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
}

.sparkle-1 {
  width: 4px;
  height: 4px;
  top: 15%;
  right: 20%;
  animation: sparkle-animation 2s infinite ease-in-out;
}

.sparkle-2 {
  width: 3px;
  height: 3px;
  top: 60%;
  left: 15%;
  animation: sparkle-animation 2s infinite ease-in-out 0.7s;
}

.sparkle-3 {
  width: 2px;
  height: 2px;
  top: 30%;
  left: 70%;
  animation: sparkle-animation 2s infinite ease-in-out 1.4s;
}

@keyframes sparkle-animation {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.sub-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.sub-floating-btn {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  color: white;
  border: none;
}

.phone-btn {
  background: linear-gradient(135deg, #28a745, #20c997);
}

.kakao-btn {
  background: linear-gradient(135deg, #fee500, #ffd43b);
  color: #333;
}

.top-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 60px;
  height: 60px;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.sub-floating-btn:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.top-btn:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.sub-floating-btn .btn-icon {
  font-size: 1.2rem;
}

.top-btn .btn-icon {
  font-size: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-tooltip {
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.btn-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: #333;
}

.sub-floating-btn:hover .btn-tooltip {
  opacity: 1;
  visibility: visible;
  right: 65px;
}

/* 애니메이션 */
.sub-btn-enter-active {
  transition: all 0.3s ease;
}

.sub-btn-leave-active {
  transition: all 0.3s ease;
}

.sub-btn-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.sub-btn-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* 채팅 모달 (주석처리된 스타일들) */
/*
.chat-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.chat-modal {
  background: white;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-body p {
  margin-bottom: 15px;
  color: #666;
  line-height: 1.6;
}

.consultation-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
}

.option-btn {
  padding: 12px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.option-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.contact-methods {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.contact-methods p {
  margin-bottom: 15px;
  font-weight: 600;
  color: #333;
}

.contact-buttons {
  display: flex;
  gap: 10px;
}

.contact-btn {
  flex: 1;
  padding: 12px;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/

/* 모바일 대응 */
@media (max-width: 768px) {
  .floating-actions {
    bottom: 20px;
    right: 20px;
  }
  
  .main-floating-btn {
    width: 60px;
    height: 60px;
  }
  
  .main-floating-btn .btn-icon {
    font-size: 1.3rem;
  }
  
  .sub-floating-btn {
    width: 45px;
    height: 45px;
  }
  
  .sub-floating-btn .btn-icon {
    font-size: 1rem;
  }
  
  /*
  .consultation-options {
    grid-template-columns: 1fr;
  }
  
  .contact-buttons {
    flex-direction: column;
  }
  */
}
</style>