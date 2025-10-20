<template>
  <div class="icon-animation-container">
    <!-- Bar Chart -->
    <div class="chart-container bar-chart">
      <div class="bar bar-1"></div>
      <div class="bar bar-2"></div>
      <div class="bar bar-3"></div>
      <div class="bar bar-4"></div>
    </div>

    <!-- Line Chart -->
    <div class="chart-container line-chart">
      <svg class="line-svg" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <polyline class="line-path"
                  points="10,60 40,30 70,45 100,15"
                  fill="none"
                  stroke="white"
                  stroke-width="3"/>
        <circle class="dot dot-1" cx="10" cy="60" r="4" fill="white"/>
        <circle class="dot dot-2" cx="40" cy="30" r="4" fill="white"/>
        <circle class="dot dot-3" cx="70" cy="45" r="4" fill="white"/>
        <circle class="dot dot-4" cx="100" cy="15" r="4" fill="white"/>
      </svg>
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
  align-items: center;
  justify-content: center;
}

.chart-container {
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
}

/* Bar Chart Styles */
.bar-chart {
  opacity: 1;
  animation: fadeInOut 6s ease-in-out infinite;
}

.bar {
  width: 16px;
  background: white;
  border-radius: 4px 4px 0 0;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
  transform-origin: bottom;
  opacity: 0;
}

.bar-1 {
  height: 60px;
  animation: barRise 6s ease-out infinite;
  animation-delay: 0.1s;
}

.bar-2 {
  height: 90px;
  animation: barRise 6s ease-out infinite;
  animation-delay: 0.3s;
}

.bar-3 {
  height: 45px;
  animation: barRise 6s ease-out infinite;
  animation-delay: 0.5s;
}

.bar-4 {
  height: 75px;
  animation: barRise 6s ease-out infinite;
  animation-delay: 0.7s;
}

@keyframes barRise {
  0%, 10% {
    opacity: 0;
    transform: scaleY(0);
  }
  15%, 40% {
    opacity: 1;
    transform: scaleY(1);
  }
  45%, 100% {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Line Chart Styles */
.line-chart {
  opacity: 0;
  animation: fadeInOut 6s ease-in-out infinite;
  animation-delay: 3s;
  align-items: center;
}

.line-svg {
  width: 120px;
  height: 80px;
  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.3));
}

.line-path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 6s ease-in-out infinite;
  animation-delay: 3s;
}

.dot {
  opacity: 0;
  transform: scale(0);
}

.dot-1 {
  animation: dotAppear 6s ease-out infinite;
  animation-delay: 3.2s;
}

.dot-2 {
  animation: dotAppear 6s ease-out infinite;
  animation-delay: 3.4s;
}

.dot-3 {
  animation: dotAppear 6s ease-out infinite;
  animation-delay: 3.6s;
}

.dot-4 {
  animation: dotAppear 6s ease-out infinite;
  animation-delay: 3.8s;
}

@keyframes drawLine {
  0%, 10% {
    stroke-dashoffset: 200;
  }
  15%, 40% {
    stroke-dashoffset: 0;
  }
  45%, 100% {
    stroke-dashoffset: 200;
  }
}

@keyframes dotAppear {
  0%, 12% {
    opacity: 0;
    transform: scale(0);
  }
  15%, 40% {
    opacity: 1;
    transform: scale(1);
  }
  45%, 100% {
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes fadeInOut {
  0%, 10% {
    opacity: 0;
  }
  15%, 40% {
    opacity: 1;
  }
  45%, 100% {
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 576px) {
  .bar {
    width: 12px;
  }

  .bar-1 {
    height: 40px;
  }

  .bar-2 {
    height: 60px;
  }

  .bar-3 {
    height: 30px;
  }

  .bar-4 {
    height: 50px;
  }

  .line-svg {
    width: 90px;
    height: 60px;
  }
}
</style>
