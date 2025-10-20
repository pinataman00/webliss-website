# 위블리스 웹사이트 - 필요한 서비스 목록

## 📦 배포에 필요한 서버 서비스

---

## 1. 필수 서비스

### 🌐 웹 서버 (둘 중 하나 선택)

#### Option A: Nginx (권장)
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```
- **버전**: 1.18 이상
- **용도**: 정적 파일 서빙, SPA 라우팅 지원
- **설정 파일 위치**: `/etc/nginx/sites-available/`

#### Option B: Apache
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install apache2

# CentOS/RHEL
sudo yum install httpd
```
- **버전**: 2.4 이상
- **용도**: 정적 파일 서빙
- **설정 파일 위치**: `/etc/apache2/sites-available/`

---

### 🔒 SSL/TLS 인증서 (HTTPS)

#### Option A: Let's Encrypt (무료, 권장)
```bash
# Nginx용
sudo apt install certbot python3-certbot-nginx

# Apache용
sudo apt install certbot python3-certbot-apache
```
- **기능**: 무료 SSL 인증서 자동 발급 및 갱신
- **유효기간**: 90일 (자동 갱신)

#### Option B: 회사 자체 SSL 인증서
- 회사에서 발급한 SSL 인증서 사용
- 수동으로 설정 필요

---

### 🔥 방화벽 설정

#### UFW (Ubuntu/Debian)
```bash
sudo apt install ufw

# 방화벽 활성화
sudo ufw enable

# 필요한 포트 허용
sudo ufw allow 22        # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
```

#### firewalld (CentOS/RHEL)
```bash
sudo yum install firewalld
sudo systemctl start firewalld

# 필요한 포트 허용
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

---

## 2. 권장 서비스 (선택사항)

### 📊 로그 관리

#### logrotate (로그 자동 정리)
```bash
# 대부분의 시스템에 기본 설치됨
sudo apt install logrotate  # Ubuntu/Debian
sudo yum install logrotate  # CentOS/RHEL
```
- **용도**: 웹 서버 로그 파일 자동 압축 및 삭제
- **설정**: `/etc/logrotate.d/nginx` 또는 `/etc/logrotate.d/apache2`

---

### 📈 서버 모니터링 (선택사항)

#### Netdata (실시간 모니터링)
```bash
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```
- **기능**: CPU, 메모리, 디스크, 네트워크 실시간 모니터링
- **접속**: http://서버IP:19999

#### fail2ban (보안 강화)
```bash
sudo apt install fail2ban  # Ubuntu/Debian
sudo yum install fail2ban  # CentOS/RHEL
```
- **기능**: 반복적인 로그인 실패 차단

---

## 3. 시스템 서비스 (자동 포함)

### systemd (프로세스 관리)
```bash
# Nginx 자동 시작 설정
sudo systemctl enable nginx
sudo systemctl start nginx

# Apache 자동 시작 설정
sudo systemctl enable apache2  # Ubuntu/Debian
sudo systemctl enable httpd    # CentOS/RHEL
```
- **기능**: 서버 재부팅 시 웹 서버 자동 시작

---

## 📋 설치 체크리스트

### 최소 구성 (필수만)
```
□ Nginx 또는 Apache 웹 서버
□ Certbot (Let's Encrypt SSL)
□ UFW 또는 firewalld (방화벽)
□ systemd 자동 시작 설정
```

### 권장 구성 (최적화)
```
□ Nginx 또는 Apache 웹 서버
□ Certbot (Let's Encrypt SSL)
□ UFW 또는 firewalld (방화벽)
□ systemd 자동 시작 설정
□ logrotate (로그 관리)
□ Netdata (모니터링)
□ fail2ban (보안)
```

---

## 🔧 서비스 설치 순서

### Ubuntu/Debian 기준
```bash
# 1. 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# 2. 웹 서버 설치
sudo apt install nginx -y

# 3. SSL 인증서 도구 설치
sudo apt install certbot python3-certbot-nginx -y

# 4. 방화벽 설정
sudo apt install ufw -y
sudo ufw allow 22
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 5. 자동 시작 설정
sudo systemctl enable nginx
sudo systemctl start nginx

# 6. (선택) 로그 관리
sudo apt install logrotate -y

# 7. (선택) 모니터링
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

### CentOS/RHEL 기준
```bash
# 1. 시스템 업데이트
sudo yum update -y

# 2. 웹 서버 설치
sudo yum install nginx -y

# 3. SSL 인증서 도구 설치
sudo yum install certbot python3-certbot-nginx -y

# 4. 방화벽 설정
sudo yum install firewalld -y
sudo systemctl start firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# 5. 자동 시작 설정
sudo systemctl enable nginx
sudo systemctl start nginx

# 6. (선택) 로그 관리
sudo yum install logrotate -y

# 7. (선택) 모니터링
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
```

---

## ⚠️ 중요 참고사항

### 1. 서비스 간 의존성
- **Certbot**은 **Nginx/Apache**가 먼저 설치되어야 함
- **방화벽**은 웹 서버 포트를 허용해야 함
- **systemd**는 대부분의 리눅스에 기본 포함

### 2. 보안 설정
- SSH 포트(22)는 특정 IP만 허용 권장
- 불필요한 서비스는 비활성화
- 정기적인 시스템 업데이트

### 3. 백업
- 웹 파일: `/var/www/dist`
- 설정 파일: `/etc/nginx/` 또는 `/etc/apache2/`
- SSL 인증서: `/etc/letsencrypt/`

---

## 📞 서비스별 확인 명령어

```bash
# 웹 서버 상태 확인
sudo systemctl status nginx      # Nginx
sudo systemctl status apache2    # Apache (Ubuntu)
sudo systemctl status httpd      # Apache (CentOS)

# 방화벽 상태 확인
sudo ufw status                  # UFW
sudo firewall-cmd --list-all     # firewalld

# SSL 인증서 확인
sudo certbot certificates

# 서비스 재시작
sudo systemctl restart nginx
sudo systemctl restart apache2
```

---

## 📊 서비스별 리소스 사용량 (참고)

| 서비스 | 메모리 사용량 | CPU 사용량 | 디스크 사용량 |
|--------|--------------|-----------|--------------|
| Nginx | 10-50MB | 1% 미만 | 100MB |
| Apache | 20-100MB | 1-2% | 150MB |
| Certbot | 설치만 | - | 50MB |
| UFW/firewalld | 5-10MB | 1% 미만 | 20MB |
| Netdata | 50-100MB | 2-3% | 200MB |

**총 예상 리소스**:
- 메모리: 약 200-300MB
- 디스크: 약 500MB-1GB

---

## ✅ 설치 완료 후 확인 사항

```
□ 웹 서버가 실행 중인가? (systemctl status)
□ 방화벽에서 80, 443 포트가 열려있는가?
□ 서버 재부팅 후 자동으로 시작되는가?
□ 브라우저에서 http://서버IP 접속이 되는가?
□ SSL 인증서가 설치되었는가? (HTTPS 접속)
```

---

**문의사항이 있으시면 언제든지 연락주세요!**
