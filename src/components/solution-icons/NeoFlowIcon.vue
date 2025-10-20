<template>
  <div class="icon-animation-container">
    <!-- Main ETL Icon -->
    <div class="main-icon-wrapper">
      <div class="stream-icon-container">
        <i class="fas fa-minus stream-line line-1"></i>
        <i class="fas fa-minus stream-line line-2"></i>
        <i class="fas fa-minus stream-line line-3"></i>
      </div>
      <!-- <div class="icon-label">Data Pipeline</div> -->
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
  text-align: center;
  z-index: 3;
}

.stream-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
}

.stream-line {
  font-size: 5.5rem;
  color: white;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  opacity: 0;
  transform: scaleX(0);
  width: 100%;
  line-height: 0.4;
}

.stream-line.line-1 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0s;
}

.stream-line.line-2 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0.3s;
  margin-left: -40px;
}

.stream-line.line-3 {
  animation: streamBuild 3s ease-in-out infinite;
  animation-delay: 0.6s;
}

@keyframes streamBuild {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  15% {
    opacity: 1;
    transform: scaleX(1);
  }
  85% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(0);
  }
}

.icon-label {
  margin-top: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.9;
  color: white;
}

/* Responsive */
@media (max-width: 576px) {
  .stream-line {
    font-size: 3rem;
  }

  .stream-line.line-2 {
    margin-left: -30px;
  }

  .icon-label {
    font-size: 0.75rem;
    margin-top: 10px;
  }
}
</style>
