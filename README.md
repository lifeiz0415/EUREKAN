# Eurekan.org

위키, 블로그, 뉴스.

Eurekan.org는 지금 사람들이 많이 궁금해하는 이슈를 분야별 장문 글로 보여주는 정적 단일 페이지 위키/매거진입니다. 별도 백엔드, 데이터베이스, 프레임워크 없이 `index.html`, `style.css`, `app.js`, `pages/*.html`, `images/`만으로 읽기 중심 사이트를 구성합니다.

## 프로젝트 성격

- **제품 형태**: 정적 단일 페이지형 위키/매거진
- **핵심 목표**: 최신 관심 주제를 기술, 경제, 글로벌, 정치, 산업, 과학, 문화, 스포츠, 한국주식, 미국주식, 크립토, 레시피 등 분야별 장문 페이지로 제공
- **구현 방식**: 바닐라 자바스크립트 기반 단일 페이지 앱
- **콘텐츠 원천**: `app.js`의 매니페스트와 `pages/<slug>.html` 최종 정적 글 페이지
- **상세 페이지 상호작용**: 뉴스레터 신청

## 주요 기능

- 홈 상단 인기 주제 무한 카드 슬라이더
- 분야별 최신 글 카드 섹션과 `+ 더보기` 전체 보기
- 제목, 요약, 분야 기반 검색
- `pages/<slug>.html` 정적 상세 페이지 라우팅
- `?desk=<분야>` 분야별 전체 보기 라우팅
- 기존 `?page`, `#page`, `#desk` 주소 호환
- 정적 HTML 상세 페이지 제공 및 최종 HTML 본문 기반 상호작용 보강
- 필요한 글의 외부 이미지 URL 또는 `images/` 자산 기반 카드 썸네일과 검색엔진용 이미지 메타데이터 제공
- 상세 페이지 음성 읽기 버튼
- 상세 페이지 전용 뉴스레터 신청 UI
- 라우트별 제목, 설명, 표준 주소, 오픈 그래프, 트위터 카드, 구조화 데이터 갱신
- `robots.txt`, `sitemap.xml` 기반 검색엔진 수집 보조

## 파일 구조

```text
README.md
AGENTS.md
index.html
style.css
app.js
data.json
robots.txt
sitemap.xml
images/
  .gitkeep
pages/
  <slug>.html
agents/
  README.md
  <desk>-agent-<name>.md
```

### 핵심 파일 역할

| 파일 | 역할 |
| --- | --- |
| `index.html` | 정적 단일 페이지 앱 껍데기, 기본 검색엔진 최적화 head, 화면 DOM 구조 |
| `style.css` | 전체 레이아웃, 카드, 상세 페이지, 뉴스레터, 슬라이더 스타일 |
| `app.js` | 매니페스트, 라우팅, 렌더링, 검색, 음성 읽기, 뉴스레터 저장, 검색엔진 최적화 메타 갱신 |
| `pages/*.html` | 글별 본문, title, description, canonical, Open Graph, Twitter 카드, Article JSON-LD를 포함한 최종 정적 페이지 |
| `data.json` | 뉴스레터 구독자 저장용 정적 JSON 데이터 |
| `robots.txt` | 검색엔진 크롤링 정책 |
| `sitemap.xml` | 검색엔진 제출용 URL 목록 |
| `images/` | 생성형 이미지 또는 직접 관리하는 공개용 이미지 자산 |
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

1. `app.js`의 `featuredPages` 또는 `hotTopicsByDesk`에 페이지 메타데이터를 등록합니다.
2. 매니페스트의 `slug`와 같은 이름으로 `pages/<slug>.html` 최종 정적 글 페이지를 생성합니다.
3. 정적 글 페이지에는 전체 본문과 글별 SEO 메타데이터를 함께 포함합니다.
4. 글에 이미지가 꼭 필요하면 저작권과 접근성을 확인한 외부 이미지 URL 또는 `images/` 안의 직접 관리 이미지 경로를 `app.js` 매니페스트의 `image` 객체와 `pages/<slug>.html`의 본문 이미지, Open Graph, Twitter 카드, JSON-LD에 직접 반영합니다. 화면에 보이는 카드와 본문 이미지는 가로 2:세로 1 비율로 표시합니다.
5. 자동 토픽 페이지는 `hotTopicsByDesk`의 토픽 문장 하나가 페이지 하나가 됩니다.
6. 매니페스트의 글을 추가하거나 slug를 바꾸면 같은 변경에서 `pages/<slug>.html`, 필요한 이미지 메타데이터, `sitemap.xml`도 갱신합니다.

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
- `sitemap.xml`에 홈, 분야, `pages/<slug>.html` 글 URL이 포함됐는지 확인
- 홈 첫 화면 대표 이미지가 바뀌면 `index.html`의 `preconnect`와 `preload` URL도 함께 갱신
- Google Search Console에 실제 `sitemap.xml` 제출
- 새 글 또는 slug 변경 시 `pages/<slug>.html`과 `sitemap.xml` 갱신

## 개발 제약

- React, Vue, Svelte 같은 프레임워크를 도입하지 않습니다.
- Python/Node 백엔드, 서버 라우터, 데이터베이스를 도입하지 않습니다.
- 로그인, 회원가입, 결제 기능을 추가하지 않습니다.
- 사용자-facing 런타임 코드는 루트의 `index.html`, `style.css`, `app.js` 중심으로 유지합니다.
- 운영 규칙과 현재 구조의 진실은 `AGENTS.md`를 기준으로 관리합니다.
- 새 글을 만들 때는 해당 분야의 `agents/<desk>-agent-<name>.md`를 참고해 주제 선정, 작성, 검증, SEO 정합성을 함께 점검합니다. 한국주식, 미국주식, 크립토 분야는 특정 종목 고정이 아니라 거래대금이 몰린 종목, 신규상장 종목, 공시·실적·락업·유동성 이슈를 우선 후보로 삼습니다. 레시피 분야는 조리 순서, 재료 상태, 실패 복구법, 보관과 재가열 기준을 함께 다룹니다.
