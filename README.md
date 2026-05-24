# Eurekan

위키, 블로그, 뉴스.

Eurekan은 지금 사람들이 많이 궁금해하는 이슈를 분야별 장문 글로 보여주는 정적 단일 페이지 위키/매거진입니다. 별도 백엔드, 데이터베이스, 프레임워크 없이 `index.html`, `style.css`, `app.js`, 루트 안내 페이지, `pages/*.html`, `images/*.webp`, `audios/*.mp3`만으로 읽기 중심 사이트를 구성합니다.

## 프로젝트 성격

- **제품 형태**: 정적 단일 페이지형 위키/매거진
- **핵심 목표**: 최신 관심 주제를 기술, 경제, 글로벌, 정치, 산업, 과학, 문화, 스포츠, 한국주식, 미국주식, 크립토, 레시피 등 분야별 장문 페이지로 제공
- **구현 방식**: 바닐라 자바스크립트 기반 단일 페이지 앱
- **콘텐츠 원천**: `app.js`의 매니페스트와 `pages/<slug>.html` 최종 정적 글 페이지
- **상세 페이지 상호작용**: 뉴스레터 신청
- **사이트 신뢰 페이지**: 소개, 문의, 개인정보처리방침, 면책고지

## 주요 기능

- 홈 상단 인기 주제 무한 카드 슬라이더
- 분야별 최신 글 카드 섹션과 `+ 더보기` 전체 보기
- 제목, 요약, 분야 기반 검색
- `pages/<slug>.html` 정적 상세 페이지 라우팅
- `?desk=<분야>` 분야별 전체 보기 라우팅
- 기존 `?page`, `#page`, `#desk` 주소 호환
- 정적 HTML 상세 페이지 제공 및 최종 HTML 본문 기반 상호작용 보강
- 공개 외부 이미지를 원본으로 삼은 로컬 WebP 카드 썸네일과 검색엔진용 이미지 메타데이터 제공
- 상세 페이지 음성 읽기 버튼
- 상세 페이지 전용 뉴스레터 신청 UI
- 공통 하단의 소개, 문의, 개인정보처리방침, 면책고지 링크
- 라우트별 제목, 설명, 표준 주소, 오픈 그래프, 트위터 카드, 구조화 데이터 갱신
- `robots.txt`, `sitemap.xml` 기반 검색엔진 수집 보조

## 파일 구조

```text
README.md
AGENTS.md
index.html
about.html
contact.html
privacy.html
disclaimer.html
style.css
app.js
data.json
robots.txt
sitemap.xml
ads.txt
pages/
  <slug>.html
images/
  <slug>-220.webp
  <slug>-330.webp
  <slug>-500.webp
  <slug>-960.webp
  <slug>-1280.webp
audios/
  <slug>.mp3
agents/
  README.md
  <desk>-agent-<name>.md
```

### 핵심 파일 역할

| 파일 | 역할 |
| --- | --- |
| `index.html` | 정적 단일 페이지 앱 껍데기, 기본 검색엔진 최적화 head, 화면 DOM 구조 |
| `about.html` | 사이트 소개와 운영 목적 안내 |
| `contact.html` | 오류 제보, 저작권, 개인정보, 광고 관련 문의 채널 안내 |
| `privacy.html` | 뉴스레터 이메일 수집, 쿠키, Google 광고와 개인 맞춤 광고 고지 |
| `disclaimer.html` | 금융·크립토·건강 콘텐츠의 투자·의료 조언 아님 고지 |
| `style.css` | 전체 레이아웃, 카드, 상세 페이지, 뉴스레터, 슬라이더 스타일 |
| `app.js` | 매니페스트, 라우팅, 렌더링, 검색, 음성 읽기, 뉴스레터 저장, 검색엔진 최적화 메타 갱신 |
| `pages/*.html` | 글별 본문, title, description, canonical, Open Graph, Twitter 카드, Article JSON-LD를 포함한 최종 정적 페이지 |
| `data.json` | 뉴스레터 구독자 저장용 정적 JSON 데이터 |
| `robots.txt` | 검색엔진 크롤링 정책 |
| `sitemap.xml` | 검색엔진 제출용 URL 목록 |
| `ads.txt` | Google AdSense 판매자 인증 파일 |
| `images/*.webp` | 글별 대표 이미지를 로컬 전송량에 맞게 변환한 WebP 후보 |
| `audios/*.mp3` | 글별 음성 읽기용 MP3 파일 |
| `AGENTS.md` | 프로젝트 운영 규칙과 구현 제약 |
| `agents/<desk>-agent-<name>.md` | 글 생성과 검토에 참고하는 분야별 전문가 페르소나 문서 |

## 로컬 실행

정적 파일 서버로 루트 디렉터리를 열면 됩니다.

```bash
python3 -m http.server 8000
```

브라우저에서 아래 주소로 확인합니다.

```text
http://localhost:8000/
```

파일을 직접 열어도 일부 화면은 보일 수 있지만, `pages/*.html`, `data.json` fetch 동작을 확인하려면 정적 서버 사용을 권장합니다.

## 콘텐츠 추가 절차

1. `app.js`의 `featuredPages`에 페이지 메타데이터를 등록합니다.
2. 매니페스트의 `slug`와 같은 이름으로 `pages/<slug>.html` 최종 정적 글 페이지를 생성합니다.
3. 정적 글 페이지에는 전체 본문과 글별 SEO 메타데이터를 함께 포함합니다.
4. 글에 이미지가 꼭 필요하면 저작권과 접근성을 확인한 공개 외부 이미지를 고르고, `images/<slug>-220.webp`, `images/<slug>-330.webp`, `images/<slug>-500.webp`, `images/<slug>-960.webp`, `images/<slug>-1280.webp` 로컬 후보로 변환합니다.
5. `app.js` 매니페스트에는 원본 추적용 `image.externalSrc`, `image.sourceUrl`, `image.alt`를 남기고, `pages/<slug>.html`의 본문 이미지, Open Graph, Twitter 카드, JSON-LD에는 로컬 WebP 대표 경로를 반영합니다.
6. 매니페스트의 글을 추가하거나 slug를 바꾸면 같은 변경에서 `pages/<slug>.html`, 필요한 이미지 메타데이터, `audios/<slug>.mp3`, `sitemap.xml`도 갱신합니다.
7. 애드센스, 뉴스레터, 외부 분석 도구처럼 개인정보·광고 고지와 연결되는 기능을 바꾸면 `privacy.html`, `disclaimer.html`, 공통 푸터도 함께 확인합니다.

## 뉴스레터 데이터 저장

뉴스레터 신청 UI는 상세 페이지에만 표시됩니다. 사용자가 보고 있는 글의 정규화된 분야가 관심 분야로 저장됩니다.

`data.json`은 아래 구조를 기준으로 사용합니다.

```json
{
  "newsletter_subscribers": [],
  "updated_at": "ISO-8601"
}
```

브라우저가 파일 시스템 접근 기능을 지원하면 연결된 `data.json`에 직접 저장하고, 지원하지 않으면 업데이트된 `data.json` 파일을 내려받아 사용자가 교체하는 방식으로 동작합니다.

## 검색엔진 최적화 배포 전 확인

현재 앱은 검색엔진이 글 본문과 메타데이터를 바로 읽을 수 있도록 카드 링크에 `pages/<slug>.html` 정적 글 페이지를 사용합니다. 분야 링크는 `?desk=<분야>` 쿼리 라우팅을 사용하며, 기존 `?page`, `#page`, `#desk` 주소도 호환합니다. 글별 정적 HTML에는 title, description, canonical, Open Graph, Twitter 카드, Article JSON-LD가 포함됩니다.

배포 전에는 반드시 아래 항목을 확인합니다.

- `robots.txt`의 sitemap URL이 `https://lifeiz0415.github.io/EUREKAN/sitemap.xml`인지 확인
- `sitemap.xml`에 홈, 소개, 문의, 개인정보처리방침, 면책고지, 분야, `pages/<slug>.html` 글 URL이 포함됐는지 확인
- 모든 공개 화면 하단에서 소개, 문의, 개인정보처리방침, 면책고지로 이동할 수 있는지 확인
- 뉴스레터 이메일 수집과 Google 광고 쿠키·개인 맞춤 광고 고지가 개인정보처리방침에 반영됐는지 확인
- 홈 첫 화면 대표 이미지가 바뀌면 `index.html`의 로컬 WebP `preload` URL도 함께 갱신
- Google Search Console에 실제 `sitemap.xml` 제출
- 새 글 또는 slug 변경 시 `pages/<slug>.html`과 `sitemap.xml` 갱신

## 개발 제약

- React, Vue, Svelte 같은 프레임워크를 도입하지 않습니다.
- Python/Node 백엔드, 서버 라우터, 데이터베이스를 도입하지 않습니다.
- 로그인, 회원가입, 결제 기능을 추가하지 않습니다.
- 사용자-facing 런타임 코드는 루트의 `index.html`, `style.css`, `app.js` 중심으로 유지합니다.
- 운영 규칙과 현재 구조의 진실은 `AGENTS.md`를 기준으로 관리합니다.
- 새 글을 만들 때는 해당 분야의 `agents/<desk>-agent-<name>.md`를 참고해 주제 선정, 작성, 검증, SEO 정합성을 함께 점검합니다. 한국주식, 미국주식, 크립토 분야는 특정 종목 고정이 아니라 거래대금이 몰린 종목, 신규상장 종목, 공시·실적·락업·유동성 이슈를 우선 후보로 삼습니다. 레시피 분야는 조리 순서, 재료 상태, 실패 복구법, 보관과 재가열 기준을 함께 다룹니다.
