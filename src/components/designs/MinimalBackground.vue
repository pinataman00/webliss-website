<template>
    <div class="background-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="background-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
                <!-- 메인 그라디언트 -->
                <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
                </linearGradient>

                <!-- 데이터 플로우 그라디언트 -->
                <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0" />
                    <stop offset="30%" style="stop-color:#ffffff;stop-opacity:0.8" />
                    <stop offset="70%" style="stop-color:#ffffff;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                </linearGradient>

                <!-- 기하학적 요소 그라디언트 -->
                <radialGradient id="geometricGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
                    <stop offset="70%" style="stop-color:#ffffff;stop-opacity:0.1" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                </radialGradient>

                <!-- 글로우 효과 -->
                <filter id="softGlow2" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <!-- 배경 -->
            <rect width="1920" height="1080" fill="url(#modernGradient)" />

            <!-- 대각선 데이터 스트림들 -->
            <g opacity="0.4">
                <path d="M-200,800 Q400,600 800,700 Q1200,550 1600,650 Q2000,500 2200,600"
                    stroke="url(#dataFlowGradient)" stroke-width="3" fill="none">
                    <animate attributeName="stroke-dasharray" values="0 2000;2000 0" dur="15s"
                        repeatCount="indefinite" />
                </path>
                <path d="M-100,950 Q500,750 900,850 Q1300,700 1700,800 Q2100,650 2300,750"
                    stroke="url(#dataFlowGradient)" stroke-width="2" fill="none">
                    <animate attributeName="stroke-dasharray" values="0 2200;2200 0" dur="18s"
                        repeatCount="indefinite" />
                </path>
            </g>

            <!-- 중앙 기하학적 구조 -->
            <g transform="translate(960, 540)" opacity="0.6">
                <!-- 외곽 원형 궤도 -->
                <circle r="200" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1">
                    <animate attributeName="stroke-dasharray" values="0 1256;1256 0" dur="20s"
                        repeatCount="indefinite" />
                </circle>
                <circle r="150" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1">
                    <animate attributeName="stroke-dasharray" values="0 942;942 0" dur="15s" repeatCount="indefinite" />
                </circle>
                <circle r="100" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5">
                    <animate attributeName="stroke-dasharray" values="0 628;628 0" dur="10s" repeatCount="indefinite" />
                </circle>

                <!-- 중앙 허브 -->
                <circle r="8" fill="white" opacity="0.8" filter="url(#softGlow2)">
                    <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
                </circle>

                <!-- 궤도상의 데이터 포인트들 -->
                <g>
                    <circle r="3" fill="white" opacity="0.7">
                        <animateMotion dur="20s" repeatCount="indefinite"
                            path="M200,0 A200,200 0 1,1 -200,0 A200,200 0 1,1 200,0" />
                    </circle>
                    <circle r="2.5" fill="#667eea" opacity="0.8">
                        <animateMotion dur="20s" begin="5s" repeatCount="indefinite"
                            path="M200,0 A200,200 0 1,1 -200,0 A200,200 0 1,1 200,0" />
                    </circle>
                    <circle r="2.5" fill="white" opacity="0.6">
                        <animateMotion dur="15s" repeatCount="indefinite"
                            path="M150,0 A150,150 0 1,0 -150,0 A150,150 0 1,0 150,0" />
                    </circle>
                    <circle r="2" fill="white" opacity="0.8">
                        <animateMotion dur="10s" repeatCount="indefinite"
                            path="M100,0 A100,100 0 1,1 -100,0 A100,100 0 1,1 100,0" />
                    </circle>
                </g>
            </g>

            <!-- 데이터 바들 -->
            <g transform="translate(200, 300)" opacity="0.3">
                <rect x="0" y="0" width="3" height="50" fill="white">
                    <animate attributeName="height" values="50;120;50" dur="4s" repeatCount="indefinite" />
                </rect>
                <rect x="10" y="20" width="2" height="80" fill="#667eea">
                    <animate attributeName="height" values="80;150;80" dur="3.5s" repeatCount="indefinite" />
                </rect>
                <rect x="18" y="10" width="2.5" height="60" fill="white">
                    <animate attributeName="height" values="60;130;60" dur="5s" repeatCount="indefinite" />
                </rect>
            </g>
        </svg>
    </div>

    <!-- 오리지널 클라우드 배경 -->
    <div class="hero-background" v-show="currentBackground === 'original'">
        <!-- <svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" class="hero-svg"> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="hero-svg">
            <defs>
                <linearGradient id="original-bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
                </linearGradient>

                <linearGradient id="original-cloudMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.25" />
                    <stop offset="30%" style="stop-color:#ffffff;stop-opacity:0.4" />
                    <stop offset="70%" style="stop-color:#ffffff;stop-opacity:0.2" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.1" />
                </linearGradient>

                <filter id="original-cloudGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="softGlow" />
                    <feGaussianBlur stdDeviation="2" result="sharpGlow" />
                    <feMerge>
                        <feMergeNode in="softGlow" />
                        <feMergeNode in="sharpGlow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="1920" height="1080" fill="url(#original-bgGradient)" />

            <!-- 중앙 클라우드 -->
            <g transform="translate(960, 540)" filter="url(#original-cloudGlow)">
                <path
                    d="M-70,-25 C-85,-45 -105,-35 -95,-15 C-110,5 -75,25 -35,20 C-15,35 25,30 45,10 C65,25 85,10 75,-15 C90,-35 50,-45 10,-40 C-10,-55 -50,-45 -70,-25 Z"
                    fill="url(#original-cloudMainGradient)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"
                    opacity="0.9">
                    <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="8s"
                        repeatCount="indefinite" />
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