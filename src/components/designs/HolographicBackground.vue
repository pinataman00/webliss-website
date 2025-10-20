<template>
    <div class="background-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="background-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <!-- 홀로그램 그라디언트 -->
                <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0c0c0c;stop-opacity:1" />
                    <stop offset="20%" style="stop-color:#1a1a2e;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#16213e;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="80%" style="stop-color:#764ba2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#833ab4;stop-opacity:1" />
                </linearGradient>

                <!-- 홀로그램 스피어 그라디언트 -->
                <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                    <stop offset="30%" style="stop-color:#667eea;stop-opacity:0.7" />
                    <stop offset="60%" style="stop-color:#764ba2;stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:0.2" />
                </radialGradient>

                <!-- 홀로그램 글로우 -->
                <filter id="holoGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feGaussianBlur stdDeviation="2" result="sharpGlow" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="sharpGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <!-- 스캔라인 패턴 -->
                <pattern id="scanlines" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                    <rect width="4" height="1" fill="rgba(102,126,234,0.1)" />
                    <rect y="2" width="4" height="1" fill="rgba(102,126,234,0.05)" />
                </pattern>

                <!-- 데이터 매트릭스 패턴 -->
                <pattern id="dataMatrix" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="1" height="1" fill="rgba(255,255,255,0.1)" />
                    <rect x="10" y="10" width="1" height="1" fill="rgba(102,126,234,0.15)" />
                    <rect x="5" y="15" width="1" height="1" fill="rgba(118,75,162,0.1)" />
                </pattern>
            </defs>

            <!-- 배경 -->
            <rect width="100%" height="100%" fill="url(#holoGradient)" />

            <!-- 데이터 매트릭스 배경 -->
            <rect width="100%" height="100%" fill="url(#dataMatrix)" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="12s" repeatCount="indefinite" />
            </rect>

            <!-- 스캔라인 오버레이 -->
            <rect width="100%" height="100%" fill="url(#scanlines)" opacity="0.2">
                <animateTransform attributeName="transform" type="translateY" values="0;20;0" dur="2s"
                    repeatCount="indefinite" />
            </rect>

            <!-- 중앙 홀로그래픽 스피어 -->
            <g transform="translate(960, 540)">
                <!-- 메인 스피어 -->
                <circle r="120" fill="url(#sphereGradient)" filter="url(#holoGlow)" opacity="0.8">
                    <animate attributeName="r" values="110;130;110" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
                </circle>

                <!-- 스피어 링들 -->
                <ellipse rx="140" ry="30" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="rotateX" values="0;360" dur="8s"
                        repeatCount="indefinite" />
                </ellipse>

                <ellipse rx="30" ry="140" fill="none" stroke="rgba(102,126,234,0.7)" stroke-width="2"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="rotateY" values="0;360" dur="10s"
                        repeatCount="indefinite" />
                </ellipse>

                <ellipse rx="100" ry="100" fill="none" stroke="rgba(118,75,162,0.5)" stroke-width="1"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="12s"
                        repeatCount="indefinite" />
                </ellipse>

                <!-- 스피어 코어 -->
                <circle r="40" fill="rgba(255,255,255,0.9)" filter="url(#holoGlow)">
                    <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>

                <!-- 내부 데이터 스트림 -->
                <g>
                    <path d="M-30,0 Q0,-30 30,0 Q0,30 -30,0" stroke="rgba(255,255,255,0.8)" stroke-width="2" fill="none"
                        filter="url(#holoGlow)">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </path>
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="6s"
                        repeatCount="indefinite" />
                </g>

                <g>
                    <path d="M0,-25 Q25,0 0,25 Q-25,0 0,-25" stroke="rgba(102,126,234,0.7)" stroke-width="1" fill="none"
                        filter="url(#holoGlow)">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                    </path>
                    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="8s"
                        repeatCount="indefinite" />
                </g>
            </g>

            <!-- 궤도 데이터 노드들 -->
            <g transform="translate(960, 540)">
                <!-- 궤도 1 -->
                <g>
                    <circle cx="200" cy="0" r="8" fill="rgba(255,255,255,0.8)" filter="url(#holoGlow)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="15s"
                        repeatCount="indefinite" />
                </g>

                <!-- 궤도 2 -->
                <g>
                    <circle cx="250" cy="0" r="6" fill="rgba(102,126,234,0.9)" filter="url(#holoGlow)">
                        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" values="360;0" dur="20s"
                        repeatCount="indefinite" />
                </g>

                <!-- 궤도 3 -->
                <g>
                    <circle cx="300" cy="0" r="10" fill="rgba(118,75,162,0.7)" filter="url(#holoGlow)">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="25s"
                        repeatCount="indefinite" />
                </g>
            </g>

            <!-- 홀로그래픽 UI 인터페이스 -->
            <g opacity="0.6">
                <!-- 좌측 UI 패널 -->
                <g transform="translate(100, 300)">
                    <rect width="200" height="4" fill="rgba(102,126,234,0.7)" filter="url(#holoGlow)">
                        <animate attributeName="width" values="150;200;150" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <rect y="20" width="180" height="2" fill="rgba(255,255,255,0.5)" filter="url(#holoGlow)">
                        <animate attributeName="width" values="160;180;160" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect y="40" width="220" height="3" fill="rgba(118,75,162,0.6)" filter="url(#holoGlow)">
                        <animate attributeName="width" values="200;220;200" dur="5s" repeatCount="indefinite" />
                    </rect>
                </g>

                <!-- 우측 UI 패널 -->
                <g transform="translate(1620, 700)">
                    <rect width="150" height="3" fill="rgba(255,255,255,0.6)" filter="url(#holoGlow)">
                        <animate attributeName="width" values="130;150;130" dur="3.5s" repeatCount="indefinite" />
                    </rect>
                    <rect y="15" width="170" height="2" fill="rgba(102,126,234,0.5)" filter="url(#holoGlow)">
                        <animate attributeName="width" values="150;170;150" dur="4.2s" repeatCount="indefinite" />
                    </rect>
                </g>
            </g>

            <!-- 데이터 스트림 라인들 -->
            <g opacity="0.4">
                <path d="M0,200 Q400,300 800,200 Q1200,100 1600,200 Q1800,250 1920,200" stroke="rgba(102,126,234,0.6)"
                    stroke-width="2" fill="none" filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
                </path>

                <path d="M0,800 Q300,700 600,800 Q900,900 1200,800 Q1500,700 1920,800" stroke="rgba(118,75,162,0.5)"
                    stroke-width="2" fill="none" filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
                </path>
            </g>

            <!-- 플로팅 홀로그램 파티클들 -->
            <g>
                <rect x="200" y="200" width="3" height="3" fill="rgba(255,255,255,0.8)" filter="url(#holoGlow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;100,-50;0,0" dur="8s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="8s" repeatCount="indefinite" />
                </rect>

                <rect x="1600" y="600" width="2" height="2" fill="rgba(102,126,234,0.7)" filter="url(#holoGlow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;-80,30;0,0" dur="6s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
                </rect>

                <rect x="800" y="150" width="4" height="4" fill="rgba(118,75,162,0.6)" filter="url(#holoGlow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;50,70;0,0" dur="10s"
                        repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="10s" repeatCount="indefinite" />
                </rect>
            </g>

            <!-- 코너 홀로그램 인디케이터들 -->
            <g opacity="0.5">
                <!-- 좌상단 -->
                <path d="M20,20 L80,20 L80,80" stroke="rgba(102,126,234,0.8)" stroke-width="2" fill="none"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                </path>

                <!-- 우상단 -->
                <path d="M1900,20 L1840,20 L1840,80" stroke="rgba(255,255,255,0.7)" stroke-width="2" fill="none"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
                </path>

                <!-- 좌하단 -->
                <path d="M20,1060 L80,1060 L80,1000" stroke="rgba(118,75,162,0.6)" stroke-width="2" fill="none"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
                </path>

                <!-- 우하단 -->
                <path d="M1900,1060 L1840,1060 L1840,1000" stroke="rgba(102,126,234,0.8)" stroke-width="2" fill="none"
                    filter="url(#holoGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
                </path>
            </g>
        </svg>
    </div>


</template>

<script>
export default {
    name: 'HolographicBackground'
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