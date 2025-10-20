<template>
    <div class="background-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="background-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <!-- AI 뉴럴 그라디언트 -->
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2D1B69;stop-opacity:1" />
                    <stop offset="25%" style="stop-color:#11998E;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="75%" style="stop-color:#f093fb;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
                </linearGradient>

                <!-- 뉴런 그라디언트 -->
                <radialGradient id="neuronGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#667eea;stop-opacity:0.8" />
                    <stop offset="70%" style="stop-color:#764ba2;stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:#2D1B69;stop-opacity:0.1" />
                </radialGradient>

                <!-- 시냅스 글로우 -->
                <filter id="synapseGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <!-- 펄스 효과 -->
                <filter id="pulseGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="softGlow" />
                    <feGaussianBlur stdDeviation="8" result="wideGlow" />
                    <feMerge>
                        <feMergeNode in="wideGlow" />
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <!-- 배경 -->
            <rect width="100%" height="100%" fill="url(#neuralGradient)" />

            <!-- 뉴럴 네트워크 층들 -->
            <!-- 입력층 -->
            <g transform="translate(200, 540)">
                <circle cy="-150" r="15" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cy="-50" r="15" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cy="50" r="15" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cy="150" r="15" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 히든층 1 -->
            <g transform="translate(600, 540)">
                <circle cy="-200" r="12" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cy="-100" r="12" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.9s" repeatCount="indefinite" />
                </circle>
                <circle cy="0" r="12" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle cy="100" r="12" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.1s" repeatCount="indefinite" />
                </circle>
                <circle cy="200" r="12" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.6s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 히든층 2 -->
            <g transform="translate(1000, 540)">
                <circle cy="-180" r="10" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cy="-60" r="10" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.0s" repeatCount="indefinite" />
                </circle>
                <circle cy="60" r="10" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cy="180" r="10" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.7s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 출력층 -->
            <g transform="translate(1400, 540)">
                <circle cy="-100" r="18" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cy="0" r="18" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cy="100" r="18" fill="url(#neuronGradient)" filter="url(#pulseGlow)">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3.2s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 시냅스 연결선들 -->
            <g opacity="0.6">
                <!-- 입력층 -> 히든층1 -->
                <line x1="215" y1="390" x2="588" y2="340" stroke="#667eea" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="215" y1="490" x2="588" y2="440" stroke="#667eea" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="215" y1="590" x2="588" y2="540" stroke="#667eea" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" />
                </line>
                <line x1="215" y1="690" x2="588" y2="640" stroke="#667eea" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.8s" repeatCount="indefinite" />
                </line>

                <!-- 히든층1 -> 히든층2 -->
                <line x1="612" y1="340" x2="988" y2="360" stroke="#f093fb" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
                </line>
                <line x1="612" y1="440" x2="988" y2="480" stroke="#f093fb" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.5s" repeatCount="indefinite" />
                </line>
                <line x1="612" y1="540" x2="988" y2="600" stroke="#f093fb" stroke-width="2" filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5.2s" repeatCount="indefinite" />
                </line>

                <!-- 히든층2 -> 출력층 -->
                <line x1="1010" y1="360" x2="1382" y2="440" stroke="#f5576c" stroke-width="3"
                    filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="1010" y1="480" x2="1382" y2="540" stroke="#f5576c" stroke-width="3"
                    filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3.3s" repeatCount="indefinite" />
                </line>
                <line x1="1010" y1="600" x2="1382" y2="640" stroke="#f5576c" stroke-width="3"
                    filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
                </line>
            </g>

            <!-- 데이터 펄스들 -->
            <g>
                <circle cx="300" cy="300" r="8" fill="#ffffff" filter="url(#pulseGlow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;400,100;800,-50;1200,150"
                        dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="700" r="6" fill="#11998E" filter="url(#pulseGlow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0;450,-200;900,100;1350,-100"
                        dur="8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" dur="8s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- AI 브레인 시각화 중앙 -->
            <g transform="translate(960, 540)" opacity="0.4">
                <ellipse rx="150" ry="80" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2">
                    <animate attributeName="rx" values="130;170;130" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="70;90;70" dur="6s" repeatCount="indefinite" />
                </ellipse>

                <ellipse rx="100" ry="50" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1">
                    <animate attributeName="rx" values="90;110;90" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="45;55;45" dur="4s" repeatCount="indefinite" />
                </ellipse>

                <!-- 중앙 AI 코어 -->
                <circle r="25" fill="rgba(255,255,255,0.8)" filter="url(#pulseGlow)">
                    <animate attributeName="r" values="20;30;20" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            <!-- 부가 신경망 브랜치들 -->
            <g opacity="0.3">
                <path d="M1600,200 Q1700,250 1800,200 Q1850,150 1900,200" stroke="#667eea" stroke-width="2" fill="none"
                    filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="5s" repeatCount="indefinite" />
                </path>

                <path d="M100,800 Q150,750 200,800 Q250,850 300,800" stroke="#f093fb" stroke-width="2" fill="none"
                    filter="url(#synapseGlow)">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
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