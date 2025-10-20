# 위블리스 웹사이트 배포 가이드

## 📦 배포 패키지 정보

**패키지 파일**: `webliss-website-deploy.tar.gz` (약 4.6MB)
**배포 타입**: 정적 웹사이트 (Static Website)
**빌드 완료**: 2025년 10월 16일

---

## 🖥️ 서버 요구사항

### 1. 운영체제
- Linux (Ubuntu 20.04/22.04, CentOS 7/8, RHEL 8 등)
- 또는 Windows Server 2016 이상

### 2. 필수 소프트웨어
```bash
# 웹 서버 (둘 중 하나 선택)
□ Nginx 1.18 이상 (권장)
□ Apache 2.4 이상

# 기타
□ SSL 인증서 (HTTPS용)
```

### 3. 서버 스펙
```
최소 사양:
- CPU: 1 Core
- RAM: 512MB
- Storage: 1GB
- 네트워크: 공인 IP

권장 사양:
- CPU: 2 Core
- RAM: 2GB
- Storage: 10GB
- 네트워크: 공인 IP + 충분한 대역폭
```

---

## 🚀 배포 절차

### Step 1: 패키지 업로드
```bash
# 서버에 패키지 업로드 (scp 사용 예시)
scp webliss-website-deploy.tar.gz user@server-ip:/tmp/

# 또는 FTP/SFTP 도구 사용
```

### Step 2: 패키지 압축 해제
```bash
# 서버 접속
ssh user@server-ip

# 작업 디렉토리로 이동
cd /var/www/

# 압축 해제
sudo tar -xzf /tmp/webliss-website-deploy.tar.gz

# 결과: /var/www/dist 폴더 생성됨
```

### Step 3: 웹 서버 설정

#### Option A: Nginx 설정 (권장)

**1) Nginx 설치 (Ubuntu/Debian)**
```bash
sudo apt update
sudo apt install nginx
```

**2) 사이트 설정 파일 생성**
```bash
sudo nano /etc/nginx/sites-available/webliss
```

**3) 설정 내용 입력**
```nginx
server {
    listen 80;
    listen [::]:80;

    server_name www.we-bliss.com we-bliss.com;

    # 웹사이트 루트 디렉토리
    root /var/www/dist;
    index index.html;

    # 기본 설정 (단일 페이지 웹사이트)
    location / {
        try_files $uri $uri/ =404;
    }

    # 정적 파일 캐싱
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 압축
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_vary on;
    gzip_min_length 1000;
}
```

참고: nginx-simple.conf 파일도 함께 제공됩니다.

**4) 설정 활성화**
```bash
# 심볼릭 링크 생성
sudo ln -s /etc/nginx/sites-available/webliss /etc/nginx/sites-enabled/

# 기본 사이트 비활성화 (선택사항)
sudo rm /etc/nginx/sites-enabled/default

# 설정 테스트
sudo nginx -t

# Nginx 재시작
sudo systemctl restart nginx
```

#### Option B: Apache 설정

**1) Apache 설치**
```bash
sudo apt update
sudo apt install apache2
```

**2) 사이트 설정 파일 생성**
```bash
sudo nano /etc/apache2/sites-available/webliss.conf
```

**3) 설정 내용 입력**
```apache
<VirtualHost *:80>
    ServerName www.we-bliss.com
    ServerAlias we-bliss.com

    DocumentRoot /var/www/dist

    <Directory /var/www/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        # SPA 라우팅 지원
        FallbackResource /index.html
    </Directory>

    # 로그 파일
    ErrorLog ${APACHE_LOG_DIR}/webliss-error.log
    CustomLog ${APACHE_LOG_DIR}/webliss-access.log combined
</VirtualHost>
```

**4) 설정 활성화**
```bash
# mod_rewrite 활성화
sudo a2enmod rewrite

# 사이트 활성화
sudo a2ensite webliss

# Apache 재시작
sudo systemctl restart apache2
```

---

## 🔒 HTTPS (SSL) 설정

### Let's Encrypt (무료 SSL) 사용

#### Nginx + Certbot
```bash
# Certbot 설치
sudo apt install certbot python3-certbot-nginx

# SSL 인증서 발급 및 자동 설정
sudo certbot --nginx -d we-bliss.com -d www.we-bliss.com

# 자동 갱신 테스트
sudo certbot renew --dry-run
```

#### Apache + Certbot
```bash
# Certbot 설치
sudo apt install certbot python3-certbot-apache

# SSL 인증서 발급 및 자동 설정
sudo certbot --apache -d we-bliss.com -d www.we-bliss.com
```

---

## 🌐 DNS 설정

도메인 DNS 레코드에 다음을 추가하세요:

```
타입: A
호스트: @
값: [서버 공인 IP]
TTL: 3600

타입: A
호스트: www
값: [서버 공인 IP]
TTL: 3600
```

---

## ✅ 배포 확인

### 1. 웹 브라우저 테스트
```
http://서버IP
http://we-bliss.com
https://we-bliss.com (SSL 설정 후)
```

### 2. 주요 섹션 테스트
- 홈페이지 메인 화면
- 서비스 섹션 (Services)
- 레퍼런스 섹션 (고객사)
- 솔루션 섹션 (CloudWai, Orkis, NeoFlow 탭)
- 회사정보 섹션
- 문의하기 섹션

### 3. 성능 테스트
```bash
# 응답 시간 확인
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://we-bliss.com

# 페이지 로드 확인
curl -I https://we-bliss.com
```

---

## 🔧 문제 해결

### 1. 404 오류 발생
**원인**: 파일 경로 또는 권한 문제
**해결**:
- 파일 경로 확인: `/var/www/dist/index.html` 존재 여부
- 파일 권한 확인 (아래 참조)

### 2. 정적 파일이 로드되지 않음
**원인**: 파일 권한 문제
**해결**:
```bash
sudo chown -R www-data:www-data /var/www/dist
sudo chmod -R 755 /var/www/dist
```

### 3. HTTPS 접속 안 됨
**원인**: 방화벽에서 443 포트 차단
**해결**:
```bash
sudo ufw allow 'Nginx Full'  # Nginx
sudo ufw allow 'Apache Full'  # Apache
```

---

## 📊 파일 구조

압축 해제 후 폴더 구조:
```
dist/
├── index.html              # 메인 HTML 파일
├── favicon.svg             # 파비콘
├── og_image.jpeg          # OG 이미지
├── og-image.png           # OG 이미지
├── vite.svg               # Vite 로고
└── assets/                # 빌드된 JS, CSS, 이미지 파일
    ├── index-[hash].js
    ├── index-[hash].css
    └── [기타 리소스 파일들]
```

---

## 📝 추가 최적화 (선택사항)

### 1. CDN 설정
- Cloudflare 또는 AWS CloudFront 사용
- 전 세계 사용자에게 빠른 속도 제공

### 2. 모니터링 설정
```bash
# 서버 모니터링
sudo apt install netdata

# 로그 분석
sudo apt install goaccess
```

### 3. 백업 설정
```bash
# 일일 백업 스크립트
#!/bin/bash
tar -czf /backup/webliss-$(date +%Y%m%d).tar.gz /var/www/dist
```

---

## 📞 지원

문제가 발생하면 다음 정보를 포함하여 연락하세요:
- 서버 OS 및 버전
- 웹 서버 종류 (Nginx/Apache)
- 오류 로그 (`/var/log/nginx/error.log` 또는 `/var/log/apache2/error.log`)
- 브라우저 콘솔 오류

---

**배포 완료 후 반드시 확인하세요:**
- [ ] 메인 페이지가 정상 로드되는지
- [ ] 모든 섹션이 정상 표시되는지 (Services, Solutions, Contact 등)
- [ ] 솔루션 탭 전환이 작동하는지 (CloudWai, Orkis, NeoFlow)
- [ ] 모바일에서도 잘 보이는지
- [ ] HTTPS가 정상 작동하는지
- [ ] 성능이 만족스러운지 (페이지 로드 3초 이내)
