<template>
    <div class="background-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="background-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <!-- 은하수 그라디언트 -->
                <linearGradient id="galaxyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
                    <stop offset="25%" style="stop-color:#16213e;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#0f3460;stop-opacity:1" />
                    <stop offset="75%" style="stop-color:#533483;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
                </linearGradient>

                <!-- 은하수 스트림 그라디언트 -->
                <linearGradient id="milkyWayStream" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.05" />
                    <stop offset="20%" style="stop-color:#667eea;stop-opacity:0.15" />
                    <stop offset="40%" style="stop-color:#ffffff;stop-opacity:0.25" />
                    <stop offset="60%" style="stop-color:#764ba2;stop-opacity:0.2" />
                    <stop offset="80%" style="stop-color:#ffffff;stop-opacity:0.1" />
                    <stop offset="100%" style="stop-color:#667eea;stop-opacity:0.05" />
                </linearGradient>

                <!-- 데이터 노드 그라디언트 -->
                <radialGradient id="dataNodeGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                    <stop offset="50%" style="stop-color:#667eea;stop-opacity:0.6" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.2" />
                </radialGradient>

                <!-- 신경망 연결선 그라디언트 -->
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.1" />
                    <stop offset="50%" style="stop-color:#667eea;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.1" />
                </linearGradient>

                <!-- 글로우 효과들 -->
                <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="softGlow" />
                    <feGaussianBlur stdDeviation="2" result="sharpGlow" />
                    <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="sharpGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <!-- 은하수 마스크 -->
                <mask id="galaxyMask">
                    <path d="M0,600 Q400,400 800,500 Q1200,350 1600,450 Q1920,400 1920,600 L1920,1080 L0,1080 Z"
                        fill="white" />
                </mask>
            </defs>

            <!-- 우주 배경 -->
            <rect width="1920" height="1080" fill="url(#galaxyGradient)" />

            <!-- 별들의 배경 레이어 -->
            <g opacity="0.7">
                <circle cx="150" cy="100" r="0.8" fill="white" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="80" r="0.5" fill="white" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="120" r="0.7" fill="white" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="1200" cy="85" r="0.8" fill="white" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="1700" cy="95" r="0.6" fill="white" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 은하수 스트림 -->
            <g mask="url(#galaxyMask)">
                <path d="M-200,600 Q400,300 800,450 Q1200,250 1600,400 Q2000,300 2200,500" stroke="url(#milkyWayStream)"
                    stroke-width="150" fill="none" opacity="0.6">
                    <animate attributeName="stroke-width" values="150;180;150" dur="10s" repeatCount="indefinite" />
                </path>
            </g>

            <!-- 중앙 데이터 허브 네트워크 -->
            <g transform="translate(960, 540)">
                <!-- 중앙 핵심 노드 -->
                <circle r="15" fill="url(#dataNodeGradient)" filter="url(#nodeGlow)" opacity="0.9">
                    <animate attributeName="r" values="15;20;15" dur="4s" repeatCount="indefinite" />
                </circle>

                <!-- 주변 데이터 노드들 -->
                <g opacity="0.8">
                    <circle cx="0" cy="-120" r="8" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="104" cy="-60" r="6" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="6;9;6" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="104" cy="60" r="7" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="7;10;7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="120" r="8" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="8;11;8" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-104" cy="60" r="6" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="6;9;6" dur="3.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="-104" cy="-60" r="7" fill="url(#dataNodeGradient)" filter="url(#starGlow)">
                        <animate attributeName="r" values="7;10;7" dur="4.2s" repeatCount="indefinite" />
                    </circle>
                </g>

                <!-- 신경망 연결선들 -->
                <g stroke="url(#neuralGradient)" stroke-width="1" fill="none" opacity="0.7">
                    <line x1="0" y1="0" x2="0" y2="-120">
                        <animate attributeName="stroke-dasharray" values="0 120;120 0" dur="3s"
                            repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="104" y2="-60">
                        <animate attributeName="stroke-dasharray" values="0 150;150 0" dur="3.5s"
                            repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="104" y2="60">
                        <animate attributeName="stroke-dasharray" values="0 150;150 0" dur="4s"
                            repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="0" y2="120">
                        <animate attributeName="stroke-dasharray" values="0 120;120 0" dur="3.2s"
                            repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="-104" y2="60">
                        <animate attributeName="stroke-dasharray" values="0 150;150 0" dur="3.8s"
                            repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="0" x2="-104" y2="-60">
                        <animate attributeName="stroke-dasharray" values="0 150;150 0" dur="4.2s"
                            repeatCount="indefinite" />
                    </line>
                </g>
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