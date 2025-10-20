<template>
  <div class="icon-animation-container">
    <!-- Main Consulting Icon -->
    <div class="main-icon-wrapper">
      <!-- Left Speech Bubble (tail on left) -->
      <i class="fas fa-comment left-bubble" :class="{ show: activeBubble === 'left' }"></i>

      <!-- Right Speech Bubble (tail on right) -->
      <i class="fas fa-comment right-bubble" :class="{ show: activeBubble === 'right' }"></i>
    </div>

    <!-- Consulting/Collaboration Icon -->
    <div class="consulting-icon-wrapper">
      <i class="fas fa-handshake consulting-icon"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeBubble = ref(null)
let animationTimers = []

const startConsultingAnimation = () => {
  const animate = () => {
    activeBubble.value = 'left'

    const timer1 = setTimeout(() => {
      activeBubble.value = 'right'

      const timer2 = setTimeout(() => {
        activeBubble.value = null
        const timer3 = setTimeout(animate, 1000)
        animationTimers.push(timer3)
      }, 1500)
      animationTimers.push(timer2)
    }, 1500)
    animationTimers.push(timer1)
  }

  const initialTimer = setTimeout(animate, 500)
  animationTimers.push(initialTimer)
}

onMounted(() => {
  startConsultingAnimation()
})

onBeforeUnmount(() => {
  animationTimers.forEach(timer => clearTimeout(timer))
  animationTimers = []
})
</script>

<style scoped>
.icon-animation-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-icon-wrapper {
  position: relative;
  text-align: center;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
}

/* Speech Bubbles */
.left-bubble,
.right-bubble {
  font-size: 5rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.4s ease;
}

/* Left Bubble - tail on left side, positioned higher */
.left-bubble {
  transform: scaleX(-1) scale(0.5);
  align-self: flex-start;
  margin-top: -20px;
}

.left-bubble.show {
  opacity: 1;
  transform: scaleX(-1) scale(1);
  animation: bubblePopLeft 1.5s ease-in-out;
}

/* Right Bubble - tail on right side, positioned lower */
.right-bubble {
  align-self: flex-end;
  margin-bottom: -20px;
}

.right-bubble.show {
  opacity: 1;
  transform: scale(1);
  animation: bubblePop 1.5s ease-in-out;
}

@keyframes bubblePop {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(10px);
  }
  20% {
    opacity: 1;
    transform: scale(1.1) translateY(0);
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
    transform: scale(0.8) translateY(-10px);
  }
}

@keyframes bubblePopLeft {
  0% {
    opacity: 0;
    transform: scaleX(-1) scale(0.5) translateY(10px);
  }
  20% {
    opacity: 1;
    transform: scaleX(-1) scale(1.1) translateY(0);
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
    transform: scaleX(-1) scale(0.8) translateY(-10px);
  }
}

/* Consulting Icon */
.consulting-icon-wrapper {
  margin-top: 20px;
  text-align: center;
}

.consulting-icon {
  font-size: 3.5rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

/* Responsive */
@media (max-width: 576px) {
  .left-bubble,
  .right-bubble {
    font-size: 2.8rem;
  }

  .main-icon-wrapper {
    gap: 35px;
  }

  .consulting-icon {
    font-size: 2.5rem;
  }

  .consulting-icon-wrapper {
    margin-top: 15px;
  }
}
</style>
