<template>
    <div class="background-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="background-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <!-- 사이버 그리드 그라디언트 (고유 ID) -->
                <linearGradient id="cyber-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#1a1a2e;stop-opacity:1" />
                    <stop offset="70%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                </linearGradient>

                <!-- 네온 글로우 (고유 ID) -->
                <filter id="cyber-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="softGlow" />
                    <feGaussianBlur stdDeviation="2" result="sharpGlow" />
                    <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="sharpGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <!-- 그리드 패턴 (고유 ID) -->
                <pattern id="cyber-grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(102,126,234,0.2)" stroke-width="1" />
                </pattern>
            </defs>

            <!-- 배경 -->
            <rect width="100%" height="100%" fill="url(#cyber-gradient)" />

            <!-- 그리드 오버레이 -->
            <rect width="100%" height="100%" fill="url(#cyber-grid-pattern)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="8s" repeatCount="indefinite" />
            </rect>

            <!-- 중앙 허브 네트워크 -->
            <g transform="translate(960, 540)">
                <!-- 메인 코어 -->
                <circle r="60" fill="none" stroke="#667eea" stroke-width="3" filter="url(#cyber-neon-glow)">
                    <animate attributeName="r" values="55;70;55" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle r="20" fill="#ffffff" opacity="0.9">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>

                <!-- 연결 노드들 -->
                <g>
                    <circle cx="150" cy="0" r="12" fill="#667eea" filter="url(#cyber-neon-glow)" />
                    <line x1="60" y1="0" x2="138" y2="0" stroke="#667eea" stroke-width="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                    </line>
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="20s"
                        repeatCount="indefinite" />
                </g>

                <g>
                    <circle cx="120" cy="0" r="8" fill="#764ba2" filter="url(#cyber-neon-glow)" />
                    <line x1="60" y1="0" x2="112" y2="0" stroke="#764ba2" stroke-width="2" opacity="0.5">
                        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <animateTransform attributeName="transform" type="rotate" values="0;-360" dur="15s"
                        repeatCount="indefinite" />
                </g>

                <g>
                    <circle cx="200" cy="0" r="10" fill="#ffffff" filter="url(#cyber-neon-glow)" />
                    <line x1="60" y1="0" x2="190" y2="0" stroke="#ffffff" stroke-width="2" opacity="0.4">
                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
                    </line>
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="25s"
                        repeatCount="indefinite" />
                </g>
            </g>

            <!-- 데이터 플로우 라인들 -->
            <g opacity="0.4">
                <path d="M100,200 Q500,300 900,250 T1700,200" stroke="#667eea" stroke-width="2" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
                </path>

                <path d="M200,800 Q600,700 1000,750 T1800,800" stroke="#764ba2" stroke-width="2" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
                </path>
            </g>

            <!-- 플로팅 데이터 포인트들 -->
            <g>
                <circle cx="300" cy="300" r="4" fill="#667eea" filter="url(#cyber-neon-glow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;50,-30;0,0" dur="5s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite" />
                </circle>

                <circle cx="1600" cy="700" r="3" fill="#ffffff" filter="url(#cyber-neon-glow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;-40,20;0,0" dur="4s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" />
                </circle>

                <circle cx="800" cy="150" r="2" fill="#764ba2" filter="url(#cyber-neon-glow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;30,40;0,0" dur="6s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 코너 네온 라인들 -->
            <g opacity="0.3">
                <path d="M0,0 L100,0 L100,100" stroke="#667eea" stroke-width="3" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
                </path>

                <path d="M1920,0 L1820,0 L1820,100" stroke="#764ba2" stroke-width="3" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                </path>

                <path d="M0,1080 L100,1080 L100,980" stroke="#ffffff" stroke-width="3" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.2;0.4;0.2" dur="5s" repeatCount="indefinite" />
                </path>

                <path d="M1920,1080 L1820,1080 L1820,980" stroke="#667eea" stroke-width="3" fill="none"
                    filter="url(#cyber-neon-glow)">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.5s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'CyberBackground'
}
</script>

<style scoped>
/* .background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
</style>