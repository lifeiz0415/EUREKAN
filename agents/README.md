# Eureka 분야별 전문가 에이전트

이 폴더는 Eureka의 글 생성과 검토에 참고하는 분야별 전문가 페르소나 문서만 보관한다.
각 분야 에이전트는 예전 기능별 에이전트가 나누어 맡던 탐색, 수집, 작성, 검증, 편집, 정책 점검, 유지보수 역할을 모두 통합해서 수행한다.

## 현재 에이전트 목록
- 기술: Ada, Turing, Linus
  - `technology-agent-ada.md` - 기술 분야 전문가 에이전트 Ada
  - `technology-agent-turing.md` - 기술 분야 전문가 에이전트 Turing
  - `technology-agent-linus.md` - 기술 분야 전문가 에이전트 Linus
- 반도체: Grace, Hedy, Gordon
  - `semiconductor-agent-grace.md` - 반도체 분야 전문가 에이전트 Grace
  - `semiconductor-agent-hedy.md` - 반도체 분야 전문가 에이전트 Hedy
  - `semiconductor-agent-gordon.md` - 반도체 분야 전문가 에이전트 Gordon
- 경제: Warren, Keynes, Elinor
  - `economy-agent-warren.md` - 경제 분야 전문가 에이전트 Warren
  - `economy-agent-keynes.md` - 경제 분야 전문가 에이전트 Keynes
  - `economy-agent-elinor.md` - 경제 분야 전문가 에이전트 Elinor
- 글로벌: Sophia, Nadia, Amara
  - `global-agent-sophia.md` - 글로벌 분야 전문가 에이전트 Sophia
  - `global-agent-nadia.md` - 글로벌 분야 전문가 에이전트 Nadia
  - `global-agent-amara.md` - 글로벌 분야 전문가 에이전트 Amara
- 정치: Logan, Hannah, Theodore
  - `politics-agent-logan.md` - 정치 분야 전문가 에이전트 Logan
  - `politics-agent-hannah.md` - 정치 분야 전문가 에이전트 Hannah
  - `politics-agent-theodore.md` - 정치 분야 전문가 에이전트 Theodore
- 산업: Mason, Ingrid, Rowan
  - `industry-agent-mason.md` - 산업 분야 전문가 에이전트 Mason
  - `industry-agent-ingrid.md` - 산업 분야 전문가 에이전트 Ingrid
  - `industry-agent-rowan.md` - 산업 분야 전문가 에이전트 Rowan
- 과학: Marie, Darwin, Rosalind
  - `science-agent-marie.md` - 과학 분야 전문가 에이전트 Marie
  - `science-agent-darwin.md` - 과학 분야 전문가 에이전트 Darwin
  - `science-agent-rosalind.md` - 과학 분야 전문가 에이전트 Rosalind
- 문화: Stella, Iris, Victor
  - `culture-agent-stella.md` - 문화 분야 전문가 에이전트 Stella
  - `culture-agent-iris.md` - 문화 분야 전문가 에이전트 Iris
  - `culture-agent-victor.md` - 문화 분야 전문가 에이전트 Victor
- 스포츠: Serena, Diego, Naomi
  - `sports-agent-serena.md` - 스포츠 분야 전문가 에이전트 Serena
  - `sports-agent-diego.md` - 스포츠 분야 전문가 에이전트 Diego
  - `sports-agent-naomi.md` - 스포츠 분야 전문가 에이전트 Naomi
- 한국주식: Mirae, Jisoo, Dohyun
  - `korean-stocks-agent-mirae.md` - 한국주식 분야 전문가 에이전트 Mirae
  - `korean-stocks-agent-jisoo.md` - 한국주식 분야 전문가 에이전트 Jisoo
  - `korean-stocks-agent-dohyun.md` - 한국주식 분야 전문가 에이전트 Dohyun
- 미국주식: Morgan, Catherine, Howard
  - `us-stocks-agent-morgan.md` - 미국주식 분야 전문가 에이전트 Morgan
  - `us-stocks-agent-catherine.md` - 미국주식 분야 전문가 에이전트 Catherine
  - `us-stocks-agent-howard.md` - 미국주식 분야 전문가 에이전트 Howard
- 크립토: Satoshi, Vitalik, Hal
  - `crypto-agent-satoshi.md` - 크립토 분야 전문가 에이전트 Satoshi
  - `crypto-agent-vitalik.md` - 크립토 분야 전문가 에이전트 Vitalik
  - `crypto-agent-hal.md` - 크립토 분야 전문가 에이전트 Hal
- 레시피: Mina, Soren, Yuna
  - `recipe-agent-mina.md` - 레시피 분야 전문가 에이전트 Mina
  - `recipe-agent-soren.md` - 레시피 분야 전문가 에이전트 Soren
  - `recipe-agent-yuna.md` - 레시피 분야 전문가 에이전트 Yuna
  - 모든 레시피 에이전트는 새 글에 `재료`가 `구분`, `재료`, `분량`, `준비 기준` 4열 표 형식으로, `조리법`이 단계와 상태 기준이 보이는 형태로 들어가도록 점검한다.

## 운영 원칙
- 에이전트 문서는 실제 런타임 코드와 연결되지 않는 운영 참고 문서다.
- 새 글을 만들 때는 글의 분야에 맞는 에이전트 문서를 먼저 참고한다.
- 분야별 에이전트는 3명씩 유지하며, 같은 분야의 글은 해당 분야 페르소나가 순서대로 돌아가며 맡는다.
- 같은 분야 안에서도 세 페르소나는 서로 다른 필체 개성을 유지한다.
- 한국주식, 미국주식, 크립토 에이전트는 특정 종목만 반복하지 않고 거래대금이 많이 몰린 종목, 신규상장 종목, 공시·실적·락업·유동성 변화가 큰 종목을 우선 후보로 삼으며, 해석의 출발점은 전문 분석기관과 증권사의 애널리스트 리포트에 둔다.
- 레시피 에이전트는 메뉴명만 보고 글을 쓰지 않고 조리 순서, 재료 상태, 실패 복구법, 보관과 재가열까지 함께 설계하며, 완성 음식과 직접 연결되는 공개 사용 가능 이미지를 우선 사용한다.
- 각 페르소나 문서에는 서로 겹치지 않는 참고 웹사이트 3개를 두어 주제 탐색과 사실 확인의 출발점으로 삼는다.
- 각 페르소나는 참고 웹사이트의 원문 문체를 모방하지 않고, 애널리스트 리포트의 논리 구조와 검증 습관만 추상화해 자기 문체로 변환한다.
- 각 페르소나 문서의 `글쓰기 구조 운영`은 참고 웹사이트를 문장 단위로 따라 하기 위한 자료가 아니라, 글마다 다른 질문 순서와 관찰 습관을 적용하기 위한 운영 자료다.
- 각 페르소나 문서에는 `소재 카드 작성 규칙`과 `반복성 검사 규칙`을 별도로 두어 실제 글 작성 전후의 품질 검사를 담당하게 한다.
- 새 글을 작성할 때는 문장 조립식 자료를 붙여 만들지 않고, 담당 페르소나의 구조 유형 중 하나를 선택한 뒤 소재 카드의 핵심 장면과 자료를 바탕으로 새 문단을 작성한다.
- 소재 카드는 핵심 장면 1개, 이해관계자 3~5개, 확인 가능한 수치·제도·기업·지역·날짜·공식 자료 중 2개 이상, 독자가 오해하기 쉬운 점, 마지막 판단 기준 3개를 포함한다.
- 반복성 검사는 같은 분야 최근 글 10개의 첫 문단, 소제목, 마지막 문단, 문단 순서, 구조 유형을 비교한다.
- 새로 생성하거나 보강한 구조 유형은 다른 에이전트 페르소나의 구조 제목, 질문 순서, 분석 초점, 마무리 방식과 중복되지 않도록 검증한다.
- 구조 유형명, 참고사이트, 페르소나 설명, 작성 방식은 공개 본문에 쓰지 않고, 독자에게는 온전히 해당 주제의 이야기와 판단 기준만 보이게 한다.
- 새 글을 작성할 때는 같은 분야의 다른 페르소나와 문장 리듬, 설명 순서, 비유 사용, 분석 초점이 겹치지 않는지 확인한다.
- 필체 개성은 문장 리듬, 설명 순서, 비유 사용, 분석 초점에서 드러내되 `AGENTS.md`의 글쓰기 규칙과 SEO 목적을 우선한다.
- 별도 기능별 페르소나는 만들지 않고, 필요한 역할은 분야별 에이전트의 통합 역할에 추가한다.
- 모든 문서는 한글로 작성하고 파일명은 `<desk>-agent-<english-name>.md` 형식의 kebab-case를 유지한다.
