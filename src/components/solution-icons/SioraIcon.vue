<template>
  <div class="icon-animation-container">
    <!-- Main Icon with Transformation -->
    <div class="main-icon-wrapper">
      <i class="fas fa-question-circle main-icon" :class="{ hidden: iconTransformed }"></i>
      <i class="fas fa-lightbulb main-icon transformed-icon" :class="{ show: iconTransformed }"></i>
      <!-- <div class="icon-label">Just ask & Get Insight!</div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const iconTransformed = ref(false)
let animationTimers = []

const startMainIconAnimation = () => {
  const animate = () => {
    iconTransformed.value = true

    const timer = setTimeout(() => {
      iconTransformed.value = false
      const nextTimer = setTimeout(animate, 2500)
      animationTimers.push(nextTimer)
    }, 2500)
    animationTimers.push(timer)
  }

  const initialTimer = setTimeout(animate, 1000)
  animationTimers.push(initialTimer)
}

onMounted(() => {
  startMainIconAnimation()
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
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.main-icon {
  position: absolute;
  font-size: 5.5rem;
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

/* Responsive */
@media (max-width: 576px) {
  .main-icon-wrapper {
    height: 70px;
  }

  .main-icon {
    font-size: 2.5rem;
  }

  .icon-label {
    margin-top: 60px;
    font-size: 0.85rem;
  }
}
</style>
