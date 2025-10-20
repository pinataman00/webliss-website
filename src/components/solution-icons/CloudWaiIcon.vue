<template>
  <div class="icon-animation-container">
    <!-- Main Cloud Icon -->
    <div class="main-icon-wrapper">
      <i class="fas fa-cloud main-icon" :class="{ pulse: mainIconActive }"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mainIconActive = ref(false)
let animationTimer = null

const animateMainIcon = () => {
  animationTimer = setInterval(() => {
    mainIconActive.value = !mainIconActive.value
  }, 3000)
}

onMounted(() => {
  animateMainIcon()
})

onBeforeUnmount(() => {
  if (animationTimer) {
    clearInterval(animationTimer)
  }
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
  text-align: center;
  z-index: 3;
}

.main-icon {
  font-size: 5.5rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  animation: cloudFloat 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.main-icon.pulse {
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

/* Responsive */
@media (max-width: 576px) {
  .main-icon {
    font-size: 3rem;
  }
}
</style>
