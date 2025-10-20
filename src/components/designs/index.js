// src/components/designs/index.js

// 1️⃣ 먼저 모든 컴포넌트를 import
import MilkywayBackground from './MilkywayBackground.vue'
import MinimalBackground from './MinimalBackground.vue'
import CyberBackground from './CyberBackground.vue'
import FluidBackground from './FluidBackground.vue'
import NeuralBackground from './NeuralBackground.vue' // 
import HolographicBackground from './HolographicBackground.vue'

// 2️⃣ 그 다음에 export
export { 
  MilkywayBackground,
  MinimalBackground, 
  CyberBackground,
  FluidBackground,
  NeuralBackground,
  HolographicBackground
}

// 3️⃣ 배경 컴포넌트 매핑 객체도 export
export const backgroundComponents = {
  milkyway: MilkywayBackground,
  minimal: MinimalBackground,
  cyber: CyberBackground,
  fluid: FluidBackground,
  neural: NeuralBackground,
  holographic: HolographicBackground
}