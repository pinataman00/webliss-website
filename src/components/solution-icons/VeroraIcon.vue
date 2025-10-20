<template>
  <div class="icon-animation-container">
    <!-- Main AI Robot Icon with Chat Bubbles -->
    <div class="main-icon-wrapper">
      <!-- Left Chat Bubble -->
      <div class="chat-bubble left-bubble" :class="{ show: activeBubble === 'left' }">
        <i class="fas fa-comment"></i>
      </div>

      <div>
        <i class="fas fa-robot main-icon"></i>
        <!-- <div class="icon-label">AI Assistant</div> -->
      </div>

      <!-- Right Chat Bubble -->
      <div class="chat-bubble right-bubble" :class="{ show: activeBubble === 'right' }">
        <i class="fas fa-comment-dots"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const activeBubble = ref(null)
let animationTimers = []

const startBubbleAnimation = () => {
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
  startBubbleAnimation()
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
  gap: 20px;
}

.main-icon {
  font-size: 5.5rem;
  color: white;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

.icon-label {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 10px;
  opacity: 0.9;
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
  top: 0;
  transform: scaleX(-1) scale(0.5);
}

.left-bubble.show {
  opacity: 1;
  transform: scaleX(-1) scale(1);
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

/* Responsive */
@media (max-width: 576px) {
  .main-icon {
    font-size: 2.5rem;
  }

  .icon-label {
    font-size: 0.75rem;
    margin-top: 8px;
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
}
</style>
