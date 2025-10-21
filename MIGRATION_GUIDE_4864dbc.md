# 커밋 4864dbc 구현 가이드 (밀키웨이 프로젝트용)

## 개요
이 가이드는 webliss-website 프로젝트의 커밋 4864dbc 내용을 밀키웨이 프로젝트에 동일하게 구현하기 위한 상세 지침입니다.

## 변경된 파일 목록
1. `src/App.vue` (44줄 변경)
2. `src/components/HeaderComponent.vue` (2줄 변경)
3. `src/components/HeroSection.vue` (14줄 추가)
4. `src/components/SolutionsSection.vue` (23줄 추가)

---

## 1. HeroSection.vue 수정

### 1-1. 기본 Hero 스타일에 padding-top 추가

**위치**: `<style scoped>` 섹션의 `.hero` 클래스

**변경 전:**
```css
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**변경 후:**
```css
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Header와 겹치지 않도록 상단 여백 확보 */
  padding-top: 70px;
}
```

### 1-2. 작은 모바일 미디어 쿼리에 padding 추가

**위치**: `@media (max-width: 480px)` 섹션 시작 부분

**변경 전:**
```css
/* 작은 모바일 */
@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  ...
}
```

**변경 후:**
```css
/* 작은 모바일 */
@media (max-width: 480px) {
  .hero {
    /* 작은 화면에서도 충분한 여백 확보 */
    padding-top: 80px;
  }

  .hero h1 {
    font-size: 1.8rem;
  }
  ...
}
```

### 1-3. 모바일 미디어 쿼리에 padding 추가

**위치**: `@media (max-width: 768px)` 섹션 시작 부분

**변경 전:**
```css
/* 모바일 대응 */
@media (max-width: 768px) {
  .hero-content {
    padding: 0 30px;
  }
  ...
}
```

**변경 후:**
```css
/* 모바일 대응 */
@media (max-width: 768px) {
  .hero {
    /* 모바일에서 Header와 더 많은 여백 확보 */
    padding-top: 90px;
  }

  .hero-content {
    padding: 0 30px;
  }
  ...
}
```

### 1-4. 솔루션 ID 수정

**위치**: `<template>` 섹션의 services-preview

**변경 전:**
```vue
<div class="service-tag" @click="goToSolution('dapq')">AI Chatbot</div>
```

**변경 후:**
```vue
<div class="service-tag" @click="goToSolution('verora')">AI Chatbot</div>
```

---

## 2. HeaderComponent.vue 수정

### 2-1. Verora 솔루션 ID 수정

**위치**: `setup()` 함수 내부의 solutions ref 배열

**변경 전:**
```javascript
{
  id: 'dapq',
  name: 'Verora',
  pron: '베로라',
  description: 'RAG 기반 생성형 AI 채팅 서비스',
  icon: veroraSymbol
},
```

**변경 후:**
```javascript
{
  id: 'verora',
  name: 'Verora',
  pron: '베로라',
  description: 'RAG 기반 생성형 AI 채팅 서비스',
  icon: veroraSymbol
},
```

---

## 3. App.vue 수정

### 3-1. handleSolutionSelected 메서드 수정

**위치**: `methods` 섹션

**변경 전:**
```javascript
handleSolutionSelected(solutionId) {
  console.log('Header 드롭다운에서 솔루션 선택:', solutionId)
  this.activeSolution = solutionId

  // Solutions 섹션으로 부드럽게 스크롤
  setTimeout(() => {
    const solutionsSection = document.querySelector('#solutions')
    if (solutionsSection) {
      const offsetTop = solutionsSection.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }, 100)
},
```

**변경 후:**
```javascript
handleSolutionSelected(solutionId) {
  console.log('Header 드롭다운에서 솔루션 선택:', solutionId)
  this.activeSolution = solutionId

  // solution-nav부터 보이도록 스크롤
  setTimeout(() => {
    const solutionNav = document.querySelector('.solution-nav')
    if (solutionNav) {
      const navRect = solutionNav.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const headerHeight = 70 // 헤더 높이
      const additionalOffset = window.innerWidth <= 768 ? 30 : 40 // 모바일/PC 여백

      // solution-nav 상단이 헤더 아래 충분한 여백과 함께 보이도록 계산
      const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
},
```

### 3-2. goToSolution 메서드 수정

**위치**: `methods` 섹션

**변경 전:**
```javascript
goToSolution(solutionType) {
  // 해당 솔루션 탭 활성화
  this.activeSolution = solutionType

  // Solutions 섹션으로 스크롤
  const solutionsSection = document.querySelector('#solutions')
  if (solutionsSection) {
    const offsetTop = solutionsSection.offsetTop - 70
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
},
```

**변경 후:**
```javascript
goToSolution(solutionType) {
  // 해당 솔루션 탭 활성화
  this.activeSolution = solutionType

  // solution-nav부터 보이도록 스크롤
  setTimeout(() => {
    const solutionNav = document.querySelector('.solution-nav')
    if (solutionNav) {
      const navRect = solutionNav.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const headerHeight = 70 // 헤더 높이
      const additionalOffset = window.innerWidth <= 768 ? 30 : 40 // 모바일/PC 여백

      // solution-nav 상단이 헤더 아래 충분한 여백과 함께 보이도록 계산
      const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
},
```

---

## 4. SolutionsSection.vue 수정

### 4-1. watch 추가

**위치**: `export default` 객체의 `emits` 속성 다음

**추가할 코드:**
```javascript
emits: ['change-solution'],
watch: {
  // activeSolution prop이 변경되면 모바일에서 가로 스크롤 조정
  activeSolution(newVal) {
    if (window.innerWidth <= 768) {
      this.$nextTick(() => {
        this.scrollActiveButtonIntoView(newVal)
      })
    }
  }
},
mounted() {
  ...
}
```

### 4-2. scrollToSolutionDetail 메서드 수정

**위치**: `methods` 섹션

**변경 전:**
```javascript
scrollToSolutionDetail() {
  this.$nextTick(() => {
    setTimeout(() => {
      const solutionNav = document.querySelector('.solution-nav')

      if (solutionNav) {
        const navRect = solutionNav.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const headerHeight = 80 // 헤더 높이
        const additionalOffset = 20 // nav 위쪽 여백

        // solution-nav 상단이 헤더 아래 20px 위치에 오도록 계산
        const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }, 200)
  })
}
```

**변경 후:**
```javascript
scrollToSolutionDetail() {
  this.$nextTick(() => {
    setTimeout(() => {
      const solutionNav = document.querySelector('.solution-nav')

      if (solutionNav) {
        const navRect = solutionNav.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const headerHeight = 70 // 헤더 높이
        const additionalOffset = window.innerWidth <= 768 ? 30 : 40 // 모바일/PC 여백

        // solution-nav 상단이 헤더 아래 충분한 여백과 함께 보이도록 계산
        const targetPosition = scrollTop + navRect.top - headerHeight - additionalOffset

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }, 200)
  })
}
```

### 4-3. CSS - solutions-section에 padding-top 추가

**위치**: `<style scoped>` 섹션

**변경 전:**
```css
.solutions-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}
```

**변경 후:**
```css
.solutions-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  /* solution-nav가 잘리지 않도록 상단 여백 추가 */
  padding-top: 120px;
}
```

### 4-4. CSS - 모바일 미디어 쿼리에 padding-top 추가

**위치**: `@media (max-width: 768px)` 섹션 시작 부분

**변경 전:**
```css
@media (max-width: 768px) {
  .section-subtitle {
    font-size: 0.95rem;
  }
  ...
}
```

**변경 후:**
```css
@media (max-width: 768px) {
  .solutions-section {
    /* 모바일에서도 충분한 상단 여백 확보 */
    padding-top: 100px;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }
  ...
}
```

---

## 테스트 체크리스트

구현 후 다음 사항들을 테스트하세요:

### 데스크톱 (PC)
- [ ] HeroSection이 Header와 겹치지 않는지 확인
- [ ] Header의 Solutions 드롭다운에서 Verora 클릭 시 정상 작동
- [ ] 솔루션 선택 시 solution-nav가 헤더 아래 40px 여백과 함께 보이는지 확인
- [ ] HeroSection의 서비스 태그 클릭 시 올바른 솔루션으로 이동

### 모바일 (768px 이하)
- [ ] HeroSection이 Header와 겹치지 않는지 확인 (90px 여백)
- [ ] 솔루션 선택 시 solution-nav가 헤더 아래 30px 여백과 함께 보이는지 확인
- [ ] active 솔루션 버튼이 자동으로 화면 중앙에 스크롤되는지 확인
- [ ] Header 모바일 메뉴에서 Verora 선택 시 정상 작동

### 작은 모바일 (480px 이하)
- [ ] HeroSection이 Header와 겹치지 않는지 확인 (80px 여백)
- [ ] 모든 기능이 정상 작동하는지 확인

---

## 주의사항

1. **파일 경로**: 밀키웨이 프로젝트의 파일 구조가 다를 경우 파일 경로를 적절히 수정하세요.

2. **솔루션 ID**: 밀키웨이 프로젝트에서 사용하는 솔루션 ID가 다를 경우, 해당 ID에 맞게 수정하세요.

3. **CSS 클래스 이름**: `.solution-nav`, `.hero`, `.solutions-section` 등의 클래스 이름이 동일한지 확인하세요.

4. **Header 높이**: 밀키웨이 프로젝트의 실제 Header 높이가 70px인지 확인하고, 다르면 적절히 조정하세요.

---

## 커밋 정보
- **커밋 해시**: 4864dbcb53085ad38e4569bfcda1c2f656e520a5
- **작성일**: 2025-10-21
- **변경 파일**: 4개
- **변경 라인**: +64, -19

