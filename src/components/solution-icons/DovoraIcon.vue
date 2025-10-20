<template>
  <div class="icon-animation-container">
    <!-- Main Document AI Icon -->
    <div class="main-icon-wrapper">
      <i class="fas fa-file-alt main-icon"></i>
      <i class="fas fa-search scan-icon"></i>
    </div>
  </div>
</template>

<script setup>
// No reactive state needed - pure CSS animation
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
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-icon {
  font-size: 5.5rem;
  color: white;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

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

/* Responsive */
@media (max-width: 576px) {
  .main-icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .main-icon {
    font-size: 3rem;
  }

  .scan-icon {
    font-size: 1.4rem;
  }
}
</style>
