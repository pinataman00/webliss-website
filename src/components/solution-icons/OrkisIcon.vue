<template>
  <div class="icon-animation-container">
    <!-- Main Kubernetes Icon -->
    <div class="main-icon-wrapper">
      <i class="fas fa-dharmachakra main-icon" :class="{ pulse: mainIconActive }"></i>
      <!-- <div class="icon-label">Kubernetes Cluster</div> -->
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
  animation: helmSteer 4s ease-in-out infinite;
  transition: all 0.3s ease;
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
  margin-top: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 576px) {
  .main-icon {
    font-size: 3rem;
  }

  .icon-label {
    font-size: 0.75rem;
    margin-top: 10px;
  }
}
</style>
