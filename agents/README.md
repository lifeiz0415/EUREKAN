# Eureka Agent Personas

이 폴더는 Eureka에서 사용되는 에이전트 페르소나 문서 모음이다.

## 목적
- 각 에이전트의 역할, 입력, 출력, 책임, 금지 사항을 분리해 문서화한다.
- 기능이 늘어나면 같은 규칙으로 새로운 에이전트 문서를 계속 추가할 수 있다.
- 운영자는 이 문서들을 참고해 역할별 작업 결과를 검토한다.

## 현재 에이전트 목록
- `trend-scout.md` - Arin
- `source-curator.md` - Mira
- `wiki-drafter.md` - Elias
- `link-weaver.md` - Nia
- `factcheck-auditor.md` - Jun
- `privacy-compliance-auditor.md` - Hana
- `copyright-compliance-auditor.md` - Theo
- `policy-risk-reviewer.md` - Mina
- `critic-editor.md` - Clara
- `maintenance-gardener.md` - Rowan
- `expansion-engine.md` - Leo
- `improvement-editor.md` - Iris
- `autoresearch-operator.md` - Soren
- `admin-guardian.md` - Freya
- `technology-desk-agent.md` - Atlas
- `economy-desk-agent.md` - Ethan
- `politics-desk-agent.md` - Petra
- `world-desk-agent.md` - Marco
- `travel-desk-agent.md` - Talia
- `science-desk-agent.md` - Nova
- `culture-desk-agent.md` - Lyra
- `society-desk-agent.md` - Sera

## 조직 구조 원칙
- Eureka의 에이전트는 기능 조직과 주제별 전문 데스크 조직이 겹쳐 있는 매트릭스 구조를 따른다.
- 기능 조직은 탐색, 수집, 생성, 연결, 검증, 유지보수, 실험, 운영 검토 흐름을 담당한다.
- 전문 데스크 조직은 특정 분야 문맥을 깊게 이해하고, 일반 에이전트의 판단을 보강한다.
- 모든 AI 에이전트의 결과는 최종적으로 `admin-guardian.md`가 상징하는 운영 검토자에게 올라간다.

## 확장 원칙
- 새 에이전트 파일명은 역할이 드러나는 kebab-case 영어명을 쓴다.
- 모든 문서는 한글로 작성한다.
- 각 문서는 최소한 아래 섹션을 가진다.
  - 역할
  - 목적
  - 입력
  - 출력
  - 핵심 책임
  - 금지 사항
  - 운영 검토 기준
