const featuredPages = [
  {
    slug: "ai-agent-platform-war-2026",
    title: "AI 에이전트 전쟁에서 2026년 차세대 플랫폼을 지배할 주체는 누구일까",
    desk: "기술",
    publishedAt: "2026-05-11T10:00:00+09:00",
    summary: "에이전트형 AI가 검색, 업무 자동화, 개인 비서, 기업용 소프트웨어의 경계를 어떻게 바꾸는지 정리한 장문 분석입니다.",
  },
  {
    slug: "ai-semiconductor-power-race-2026",
    title: "AI 반도체 패권 경쟁에서 엔비디아 이후의 승자는 누구인가",
    desk: "반도체",
    publishedAt: "2026-05-10T10:00:00+09:00",
    summary: "GPU 중심 시장이 커스텀 칩, 메모리, 패키징, 전력 효율 경쟁으로 확장되는 구조를 풀어낸 장문 분석입니다.",
  },
  {
    slug: "hbm-memory-bandwidth-bottleneck-2026",
    title: "AI 시대의 새 병목 HBM과 메모리 대역폭 전쟁의 구조",
    desk: "반도체",
    publishedAt: "2026-05-12T10:00:00+09:00",
    summary: "AI 연산 성능을 좌우하는 메모리 대역폭, HBM 공급 제약, 패키징 병목을 함께 정리한 장문 분석입니다.",
  },
  {
    slug: "chiplet-advanced-packaging-era-2026",
    title: "칩렛과 2.5D·3D 패키징이 여는 반도체 조립 경쟁의 시대",
    desk: "반도체",
    publishedAt: "2026-05-11T09:00:00+09:00",
    summary: "미세공정만으로 성능을 높이기 어려워진 상황에서 칩렛과 첨단 패키징이 왜 핵심 경쟁력이 됐는지 설명합니다.",
  },
  {
    slug: "ai-data-center-power-efficiency-chip-2026",
    title: "전력 효율이 반도체 경쟁력으로 떠오른 이유와 AI 데이터센터의 칩 설계 기준",
    desk: "반도체",
    publishedAt: "2026-05-10T09:00:00+09:00",
    summary: "AI 데이터센터의 전력비와 발열, 냉각 문제가 칩 설계와 공정 선택의 우선순위를 어떻게 바꾸는지 다룹니다.",
  },
  {
    slug: "us-china-tariff-war-2026",
    title: "미중 관세전쟁 2라운드, 2026년 물가와 소비는 어떻게 변하나",
    desk: "경제",
    publishedAt: "2026-05-09T09:00:00+09:00",
    summary: "관세, 환율, 공급망, 소비심리의 연결이 생활비와 투자 흐름을 어떻게 흔드는지 정리한 장문 분석입니다.",
  },
  {
    slug: "hormuz-crisis-global-economy-2026",
    title: "호르무즈 해협 위기가 이란 충돌을 넘어 세계 경제를 흔드는 방식",
    desk: "글로벌",
    publishedAt: "2026-05-08T09:00:00+09:00",
    summary: "중동 긴장이 유가, 해운, 안보, 외교 구도에 어떤 파급을 만드는지 다룬 장문 분석입니다.",
  },
  {
    slug: "gaza-reconstruction-middle-east-order-2026",
    title: "가자 재건 가능성을 둘러싼 전쟁 이후 중동 질서의 새 변수",
    desk: "글로벌",
    publishedAt: "2026-05-07T09:00:00+09:00",
    summary: "가자 재건 논의가 인도주의와 지정학, 국제 원조, 지역 권력 균형에 미치는 영향을 정리한 장문 분석입니다.",
  },
  {
    slug: "korea-local-election-2026",
    title: "2026 지방선거 판세에서 유권자들이 가장 민감하게 보는 이슈",
    desk: "정치",
    publishedAt: "2026-05-06T09:00:00+09:00",
    summary: "유권자 관심이 생활물가, 지역 개발, 세대별 이동, 정당 피로감과 어떻게 연결되는지 살펴본 장문 분석입니다.",
  },
  {
    slug: "data-center-power-war-2026",
    title: "데이터센터 붐과 전력 전쟁 속 AI 시대에 가장 부족해지는 자원",
    desk: "산업",
    publishedAt: "2026-05-05T09:00:00+09:00",
    summary: "AI 인프라 확대가 전력, 냉각, 토지, 송전, 정책 인허가 경쟁으로 번지는 흐름을 다룬 장문 분석입니다.",
  },
  {
    slug: "ai-medical-diagnosis-2026",
    title: "AI가 의사보다 정확한지 묻기 전에 봐야 할 2026년 의료 진단 혁신의 실제 수준",
    desk: "과학",
    publishedAt: "2026-05-04T09:00:00+09:00",
    summary: "의료 AI의 진단 성능과 책임 문제, 현장 도입 조건을 균형 있게 정리한 장문 분석입니다.",
  },
  {
    slug: "creator-economy-news-consumption-2026",
    title: "유튜브 이후의 뉴스 소비에서 사람들이 언론보다 크리에이터를 찾는 이유",
    desk: "문화",
    publishedAt: "2026-05-03T09:00:00+09:00",
    summary: "영상 중심 소비와 신뢰 변화, 알고리즘 배분, 언론 브랜드 약화를 한 번에 보는 장문 분석입니다.",
  },
  {
    slug: "world-cup-2026-scale-2026",
    title: "2026 북중미 월드컵은 왜 역대 가장 거대한 월드컵이 될까",
    desk: "스포츠",
    publishedAt: "2026-05-02T09:00:00+09:00",
    summary: "월드컵 확대가 흥행과 이동, 중계권, 지역 경제, 국가 브랜드 경쟁에 미치는 영향을 풀어낸 장문 분석입니다.",
  },
];

const hotTopicsByDesk = {
  "기술": [
    "AI 에이전트가 검색창을 넘어 실제 업무 실행 도구로 자리 잡고 있습니다.",
    "개인 비서형 AI는 일정, 메일, 문서 작업을 한 흐름으로 묶는 방향으로 진화하고 있습니다.",
    "기업은 모델 성능보다 사내 시스템과 안전하게 연결되는 실행력을 더 중요하게 보기 시작했습니다.",
    "AI 서비스의 경쟁력은 답변 품질뿐 아니라 실패했을 때 복구하는 방식에서 갈리고 있습니다.",
    "개발 현장에서는 코딩 보조보다 코드베이스 전체를 이해하는 에이전트 수요가 커지고 있습니다.",
    "생성형 AI 제품은 단순 구독형 앱에서 업무 결과 중심 과금으로 이동할 가능성이 커졌습니다.",
    "보안과 개인정보 권한 관리는 AI 에이전트 확산의 가장 큰 신뢰 시험대가 되고 있습니다.",
    "사용자는 똑똑한 AI보다 반복해서 맡겨도 사고가 적은 AI를 선택하게 될 가능성이 높습니다.",
    "온디바이스 AI가 스마트폰과 노트북의 기본 기능으로 들어오며 클라우드 의존을 줄이고 있습니다.",
    "AI 브라우저는 검색 결과보다 사용자의 다음 행동을 대신 실행하는 방향으로 진화하고 있습니다.",
    "개인 데이터 금고와 AI 비서의 결합은 맞춤형 서비스의 새로운 기준으로 떠오르고 있습니다.",
    "멀티모달 AI는 텍스트와 이미지, 음성, 영상을 한 번에 이해하는 업무 도구로 확장되고 있습니다.",
    "AI 저작권 분쟁은 창작 시장의 수익 배분과 플랫폼 책임을 다시 묻고 있습니다.",
    "로봇 파운데이션 모델은 공장과 물류, 가정용 로봇의 학습 방식을 바꾸고 있습니다.",
    "양자컴퓨팅 보안 전환은 금융과 공공 시스템의 장기 과제로 부상하고 있습니다.",
    "디지털 신원 지갑은 로그인과 인증, 결제 경험을 하나의 흐름으로 묶고 있습니다.",
    "AI 안전성 평가는 제품 출시 전 필수 절차로 자리 잡으며 새로운 인증 시장을 만들고 있습니다.",
    "오픈소스 AI 모델 경쟁은 성능보다 배포 자유도와 운영 비용에서 차별화되고 있습니다."
  ],
  "반도체": [
    "AI 칩 경쟁은 GPU 단품보다 메모리, 패키징, 전력 효율을 함께 묶는 싸움으로 바뀌고 있습니다.",
    "HBM 공급 능력은 AI 서버 시장의 속도를 결정하는 핵심 병목으로 떠올랐습니다.",
    "빅테크의 커스텀 칩 개발은 범용 GPU 의존도를 낮추려는 장기 전략으로 해석됩니다.",
    "첨단 패키징 생산능력은 반도체 회사의 숨은 경쟁력으로 더 자주 언급되고 있습니다.",
    "데이터센터 전력비가 커지면서 칩 성능보다 전력당 연산량이 더 중요한 지표가 되고 있습니다.",
    "파운드리 경쟁은 미세공정뿐 아니라 고객별 최적화와 공급 안정성으로 확장되고 있습니다.",
    "각국의 반도체 지원 정책은 기술 경쟁을 산업 안보 경쟁으로 바꾸고 있습니다.",
    "투자자들은 AI 수요가 실제 반도체 매출로 이어지는 속도를 가장 예민하게 보고 있습니다.",
    "HBM4 전환 경쟁은 AI 서버 성능의 다음 병목을 둘러싼 핵심 승부처가 되고 있습니다.",
    "유리기판과 첨단 패키징 투자는 반도체 후공정의 전략적 가치를 크게 높이고 있습니다.",
    "AI 가속기 스타트업들은 특정 업무에 최적화한 칩으로 거대 GPU 시장의 틈을 노리고 있습니다.",
    "전력 반도체 수요는 전기차와 데이터센터, 재생에너지 확산을 따라 구조적으로 커지고 있습니다.",
    "차량용 반도체는 자율주행보다 안정성과 공급망 신뢰가 더 중요한 경쟁 기준이 되고 있습니다.",
    "미세공정 비용 급등은 설계 최적화와 칩렛 구조의 필요성을 더 강하게 만들고 있습니다.",
    "반도체 장비 수출 규제는 기술 로드맵뿐 아니라 고객 확보 전략까지 바꾸고 있습니다.",
    "메모리 반도체 회복은 AI 수요와 일반 IT 소비 회복 속도의 차이를 드러내고 있습니다.",
    "국가별 팹 유치 경쟁은 보조금보다 전력과 인력, 생태계 완성도가 관건이 되고 있습니다.",
    "반도체 재고 사이클은 AI 특수와 전통 수요 둔화가 겹치며 더 복잡하게 움직이고 있습니다."
  ],
  "경제": [
    "관세와 통상 갈등은 소비자가 체감하는 생활물가로 빠르게 번지고 있습니다.",
    "기업은 효율 중심 공급망에서 충격을 견디는 분산형 공급망으로 이동하고 있습니다.",
    "환율 변동은 수입물가와 해외 직구 비용을 통해 일상 소비를 직접 흔들고 있습니다.",
    "미중 갈등은 무역 뉴스이면서 동시에 투자, 고용, 산업 정책의 핵심 변수로 작동하고 있습니다.",
    "소비자는 가격뿐 아니라 원산지와 공급 안정성까지 구매 판단에 반영하기 시작했습니다.",
    "리쇼어링과 프렌드쇼어링은 일부 지역과 업종에 새로운 성장 기회를 만들고 있습니다.",
    "기업 실적은 매출 성장만큼 원가 방어와 가격 전가 능력으로 평가받고 있습니다.",
    "세계화의 초점은 더 싼 생산지보다 더 믿을 수 있는 거래망을 찾는 방향으로 바뀌고 있습니다.",
    "고금리 장기화는 가계부채와 부동산 시장의 회복 속도를 동시에 제한하고 있습니다.",
    "AI 투자 붐은 생산성 기대와 자산 가격 과열 논쟁을 함께 키우고 있습니다.",
    "원화와 엔화의 약세 흐름은 아시아 수출기업의 가격 경쟁과 수입물가를 흔들고 있습니다.",
    "중국 소비 회복 지연은 글로벌 기업의 매출 전략과 공급망 재편을 압박하고 있습니다.",
    "청년층 소비는 소유보다 경험과 구독, 중고 거래 중심으로 빠르게 이동하고 있습니다.",
    "기후 리스크는 보험료와 식품 가격, 인프라 투자 비용으로 경제 전반에 반영되고 있습니다.",
    "부동산 PF 부실 관리는 금융 안정과 지역 경기의 중요한 시험대가 되고 있습니다.",
    "디지털 화폐 실험은 결제 비용과 개인정보 보호 사이의 균형을 다시 묻고 있습니다.",
    "글로벌 기업의 가격 인상 전략은 소비자 피로와 브랜드 충성도의 한계를 시험하고 있습니다.",
    "노동시장 양극화는 임금 상승률보다 직무 전환 능력에서 더 뚜렷하게 드러나고 있습니다."
  ],
  "국제정치": [
    "호르무즈 해협 긴장은 실제 봉쇄 전에도 유가와 해운비를 먼저 흔들 수 있습니다.",
    "중동 리스크는 에너지 가격을 통해 각국의 물가와 선거 분위기까지 바꿀 수 있습니다.",
    "해상 안보 문제는 군사 충돌뿐 아니라 보험료와 물류 계약의 문제로도 번지고 있습니다.",
    "에너지 수입국은 외교 메시지와 비축유, 세금 정책을 동시에 고민해야 하는 상황에 놓였습니다.",
    "미국, 유럽, 중국, 인도의 대응은 중동 위기의 확산 여부를 판단하는 핵심 신호가 됩니다.",
    "원자재 가격 변동은 주식, 환율, 채권 시장을 동시에 움직이는 불확실성으로 작용합니다.",
    "지역 분쟁은 먼 나라 뉴스가 아니라 항공권, 택배비, 전기요금의 변수로 체감되고 있습니다.",
    "외교적 관리가 실패하면 작은 충돌도 세계 경제의 큰 리스크로 확대될 수 있습니다.",
    "미국 대선 이후 동맹 재조정 논의는 각국의 안보비용 계산을 다시 만들고 있습니다.",
    "남중국해 긴장은 해상 교역로와 군사 억지 전략의 핵심 변수로 계속 커지고 있습니다.",
    "유럽의 방위비 확대는 나토 내부 역할 분담과 산업 정책을 동시에 바꾸고 있습니다.",
    "중국과 러시아의 전략적 협력은 에너지와 군사, 외교 무대에서 새로운 균형을 만들고 있습니다.",
    "글로벌 사우스의 외교적 발언권은 기후와 부채, 안보 의제에서 더 강해지고 있습니다.",
    "북극 항로 경쟁은 기후 변화와 자원 개발, 군사 배치가 맞물린 새 지정학 이슈가 되고 있습니다.",
    "사이버 공격과 선거 개입 논란은 민주주의 국가들의 안보 개념을 넓히고 있습니다.",
    "핵확산 우려는 지역 분쟁이 장기화될수록 국제 협상의 우선순위로 다시 떠오르고 있습니다.",
    "난민과 국경 통제 문제는 인도주의와 국내 정치가 충돌하는 대표 의제가 되고 있습니다.",
    "국제기구 개혁 논의는 강대국 경쟁 속에서 실효성과 대표성의 한계를 드러내고 있습니다."
  ],
  "세계": [
    "가자 재건은 건물을 다시 세우는 일이 아니라 행정과 치안, 신뢰를 복구하는 문제입니다.",
    "국제 원조는 누가 돈을 내는지보다 누가 책임지고 감시하는지가 더 큰 쟁점이 되고 있습니다.",
    "전후 재건 논의는 인도주의 언어를 쓰지만 실제로는 지역 영향력 경쟁과 맞닿아 있습니다.",
    "주민 대표성과 안전 보장이 없으면 대규모 재건 계획도 지속되기 어렵습니다.",
    "병원, 학교, 전기, 물 같은 생활 기반 복구는 정치적 해법 없이는 완성되기 어렵습니다.",
    "걸프 국가와 서방, 국제기구의 역할 분담은 중동 질서 재편의 중요한 단서가 됩니다.",
    "전쟁 이후의 삶을 다루는 뉴스는 속보보다 오래 남는 인도주의적 질문을 던집니다.",
    "재건이 실패하면 다음 갈등의 씨앗이 남고, 성공하면 지역 질서의 새 기준이 될 수 있습니다.",
    "유럽의 극우 정당 약진은 이민과 물가, 안보 불안이 정치 지형을 바꾸고 있음을 보여줍니다.",
    "아프리카 도시화 속도는 주거와 전력, 일자리 정책의 거대한 시험대가 되고 있습니다.",
    "인도 경제의 성장세는 글로벌 공급망과 소비 시장의 중심 이동을 보여주는 신호로 읽힙니다.",
    "남미 자원 민족주의는 리튬과 구리, 농산물 공급망의 가격 변동성을 키우고 있습니다.",
    "동남아 디지털 경제는 젊은 인구와 모바일 금융 확산을 바탕으로 빠르게 커지고 있습니다.",
    "일본의 인구 감소 대응은 노동력 부족과 지역 소멸 문제의 선행 사례가 되고 있습니다.",
    "중동의 탈석유 전략은 관광과 금융, 첨단산업 투자 경쟁으로 구체화되고 있습니다.",
    "세계 식량 안보는 전쟁과 이상기후, 물류비 상승이 동시에 압박하는 구조가 됐습니다.",
    "글로벌 교육 격차는 AI 학습 도구 확산 이후 새로운 기회와 불평등을 함께 만들고 있습니다.",
    "도시 폭염 대응은 보건과 건축, 노동시간 정책을 연결하는 국제적 과제로 떠오르고 있습니다."
  ],
  "한국 정치": [
    "지방선거 표심은 거대 이념보다 생활물가와 주거 부담에 더 민감하게 반응하고 있습니다.",
    "지역 개발 공약은 이제 청사진보다 재원과 일정, 실현 가능성으로 평가받고 있습니다.",
    "청년층은 일자리와 이동성, 문화 인프라를 지역 선택의 핵심 조건으로 보고 있습니다.",
    "중장년층은 세금, 교통, 의료 접근성, 돌봄 문제를 지방정치의 중요한 기준으로 삼고 있습니다.",
    "정당 피로감이 커질수록 후보 개인의 지역 밀착성과 실행력이 더 중요해지고 있습니다.",
    "짧은 영상과 지역 커뮤니티는 선거 이슈가 확산되는 속도를 크게 바꾸고 있습니다.",
    "유권자는 전국 정치 분위기와 동네 생활 불편을 동시에 투표 판단에 반영하고 있습니다.",
    "이번 지방선거는 차기 전국 정치 흐름을 미리 보여주는 중간 점검 성격이 강합니다.",
    "연금개혁 논의는 세대 간 부담과 노후 안정의 균형을 둘러싼 핵심 정치 의제가 되고 있습니다.",
    "의대 정원과 지역 의료 문제는 복지 정책을 넘어 지역 균형 발전의 쟁점으로 확장되고 있습니다.",
    "부동산 세제 개편 논의는 집값 안정과 세수 확보 사이의 정치적 균형을 시험하고 있습니다.",
    "청년 정치 참여는 정당 조직보다 온라인 이슈 네트워크를 통해 더 빠르게 확산되고 있습니다.",
    "지방 재정 격차는 지역 공약의 실현 가능성을 가르는 중요한 기준으로 부상하고 있습니다.",
    "검찰과 사법 제도 개편 논의는 권력 견제와 수사 효율 사이의 오래된 갈등을 다시 드러냅니다.",
    "기후 공약은 산업 경쟁력과 전기요금, 지역 일자리 문제와 함께 평가받고 있습니다.",
    "플랫폼 노동자 보호 논의는 고용 형태 변화에 맞춘 새 사회안전망을 요구하고 있습니다.",
    "교육 격차 해소 정책은 입시 제도보다 지역과 가정 배경의 차이를 어떻게 줄일지가 관건입니다.",
    "정당의 공천 혁신은 유권자의 정치 불신을 줄일 수 있는 실질적 시험대가 되고 있습니다."
  ],
  "산업": [
    "데이터센터 경쟁은 서버를 많이 짓는 문제가 아니라 전력과 냉각을 확보하는 싸움이 됐습니다.",
    "AI 인프라 확장은 송전망, 용수, 부지, 인허가를 함께 요구하는 거대한 산업 프로젝트입니다.",
    "지역사회는 데이터센터의 세수 효과와 전력 부담을 동시에 따져 묻기 시작했습니다.",
    "클라우드 기업은 칩 확보만큼 안정적인 전력 계약과 빠른 인허가를 중요하게 보고 있습니다.",
    "전력당 연산량을 높이는 기술은 AI 데이터센터의 수익성을 좌우하는 핵심 경쟁력이 됐습니다.",
    "국가와 지방정부는 데이터센터를 디지털 경제의 공장처럼 유치하려는 전략을 세우고 있습니다.",
    "냉각 기술과 열 관리 방식은 친환경 데이터센터 논쟁의 중심으로 이동하고 있습니다.",
    "AI 수요가 커질수록 데이터센터의 사회적 정당성을 설명하는 능력도 중요해지고 있습니다.",
    "배터리 공급망 재편은 원자재 확보와 재활용 기술 경쟁을 동시에 밀어 올리고 있습니다.",
    "조선업 친환경 선박 수요는 암모니아와 메탄올 추진 기술 경쟁으로 이어지고 있습니다.",
    "항공우주 산업은 위성 데이터와 발사체 서비스가 결합되며 민간 시장을 넓히고 있습니다.",
    "스마트팩토리 투자는 자동화보다 현장 데이터를 어떻게 연결하느냐가 성패를 가르고 있습니다.",
    "물류 로봇과 자동창고 확산은 이커머스 비용 구조와 노동 수요를 바꾸고 있습니다.",
    "친환경 철강 전환은 탄소 규제와 전력 조달, 설비 투자 부담을 함께 요구하고 있습니다.",
    "바이오의약품 위탁생산 경쟁은 품질 인증과 글로벌 고객 신뢰가 핵심 자산이 되고 있습니다.",
    "K푸드 수출 성장은 현지화 전략과 원재료 공급 안정성을 동시에 시험하고 있습니다.",
    "콘텐츠 산업의 글로벌 확장은 IP 관리와 팬덤 플랫폼 운영 능력을 더 중요하게 만들고 있습니다.",
    "에너지 저장장치 시장은 재생에너지 확대와 전력망 안정 요구를 따라 빠르게 커지고 있습니다."
  ],
  "과학": [
    "의료 AI의 핵심 질문은 의사를 대체하느냐가 아니라 진단 품질을 어떻게 높이느냐입니다.",
    "영상의학과 병리 분야에서는 AI가 놓치기 쉬운 패턴을 먼저 표시하는 보조 역할로 주목받고 있습니다.",
    "환자 데이터의 다양성이 부족하면 의료 AI는 기존 의료 불평등을 더 키울 위험이 있습니다.",
    "높은 정확도 수치보다 실제 병원 환경에서 안정적으로 작동하는지가 더 중요한 검증 기준입니다.",
    "책임 소재가 명확하지 않으면 의료진은 AI 추천을 적극적으로 받아들이기 어렵습니다.",
    "의료 AI는 의사가 부족한 지역과 야간 진료, 사전 분류 영역에서 큰 도움을 줄 수 있습니다.",
    "환자는 빠른 진단만큼 설명 가능성과 개인정보 보호를 중요한 신뢰 조건으로 봅니다.",
    "규제와 임상 검증을 통과한 의료 AI는 느리게 확산되더라도 오래 쓰이는 인프라가 될 가능성이 큽니다.",
    "비만 치료제의 장기 효과 논쟁은 대사질환 관리와 의료비 구조를 다시 보게 만들고 있습니다.",
    "상온 초전도체 검증 논란은 과학 커뮤니케이션과 재현성의 중요성을 다시 드러냈습니다.",
    "유전자 편집 치료는 희귀질환을 넘어 일반 질병 치료의 가능성을 넓히고 있습니다.",
    "우주망원경 관측 데이터는 초기 우주와 외계 행성 연구의 질문을 새롭게 만들고 있습니다.",
    "기후 모델의 정교화는 지역별 재난 예측과 도시 계획의 근거로 더 자주 쓰이고 있습니다.",
    "뇌-컴퓨터 인터페이스 연구는 재활 치료와 인간 능력 확장 사이의 윤리 논쟁을 키우고 있습니다.",
    "해양 생태계 변화는 탄소 흡수와 수산업, 식량 안보를 연결하는 과학 이슈가 되고 있습니다.",
    "합성생물학은 의약품과 식품, 소재 생산 방식을 바꿀 수 있는 플랫폼 기술로 주목받고 있습니다.",
    "핵융합 실험의 진전은 상용화 시점보다 에너지 연구의 투자 방향을 바꾸고 있습니다.",
    "감염병 감시 기술은 공항과 병원, 하수 데이터 분석을 결합하는 방향으로 발전하고 있습니다."
  ],
  "문화·미디어": [
    "뉴스 소비는 포털 첫 화면보다 유튜브와 숏폼, 해설 크리에이터 중심으로 이동하고 있습니다.",
    "크리에이터는 객관성보다 친밀감과 반복 노출을 통해 관계 기반 신뢰를 만들고 있습니다.",
    "알고리즘은 강한 감정 반응과 명확한 입장을 가진 콘텐츠를 더 멀리 퍼뜨리는 경향이 있습니다.",
    "시청자는 사실 전달보다 그래서 내 삶에 어떤 의미가 있는지 설명해 주는 콘텐츠를 찾고 있습니다.",
    "언론사의 신뢰 약화는 크리에이터 뉴스 해설 시장이 커진 중요한 배경입니다.",
    "브랜드 광고는 대형 매체보다 충성도 높은 니치 크리에이터에게 더 정교하게 이동하고 있습니다.",
    "검증과 출처 공개가 약한 콘텐츠는 친밀감을 무기로 확증편향을 키울 수 있습니다.",
    "앞으로 뉴스의 경쟁력은 속보보다 맥락을 얼마나 명확하게 설명하느냐에서 갈릴 가능성이 큽니다.",
    "숏폼 드라마 시장은 모바일 시청 습관과 결제 모델을 동시에 바꾸고 있습니다.",
    "AI 음악과 영상 생성 도구는 창작자의 역할과 저작권 계약 방식을 다시 묻고 있습니다.",
    "스포츠 다큐멘터리는 팬덤과 리그 브랜드를 확장하는 핵심 콘텐츠 형식이 되고 있습니다.",
    "웹툰 원작 영상화는 플랫폼 간 IP 순환 구조를 더 정교하게 만들고 있습니다.",
    "뉴스레터와 독립 미디어는 깊이 있는 해설을 원하는 독자층을 다시 모으고 있습니다.",
    "팬 커뮤니티 플랫폼은 엔터테인먼트 소비를 관계형 구독 경제로 바꾸고 있습니다.",
    "게임과 영화의 경계는 실시간 그래픽 기술과 인터랙티브 서사로 점점 흐려지고 있습니다.",
    "지역 축제와 도시 브랜딩은 관광보다 생활문화 정체성을 보여주는 장으로 변하고 있습니다.",
    "오디오 콘텐츠의 재부상은 이동 시간과 집중 소비 습관의 변화를 반영하고 있습니다.",
    "크리에이터의 정치·사회 발언은 팬덤 신뢰와 공적 책임 사이의 긴장을 키우고 있습니다."
  ],
  "스포츠": [
    "2026 북중미 월드컵은 참가국 확대와 개최 도시 분산으로 역대급 이동 규모를 만들고 있습니다.",
    "팬 경험은 경기장 안의 90분뿐 아니라 항공, 숙박, 교통, 도시 여행까지 포함하는 흐름이 됐습니다.",
    "월드컵 중계권 경쟁은 방송사와 스트리밍 플랫폼의 글로벌 영향력을 가르는 시험대가 됩니다.",
    "개최 도시는 경기장을 넘어 관광, 안전, 문화 매력을 전 세계에 보여주는 브랜드 경쟁에 나섭니다.",
    "참가국 확대는 더 많은 국가 서사와 이민, 정체성 이야기를 월드컵 무대에 올립니다.",
    "상업성 확대와 선수 피로 문제는 대회 규모가 커질수록 더 큰 논쟁으로 남을 수 있습니다.",
    "팬들은 경기 관람뿐 아니라 숏폼, 굿즈, 여행 기록을 통해 월드컵을 참여형 콘텐츠로 소비합니다.",
    "이번 대회는 스포츠 이벤트가 현대 문화경제에서 얼마나 거대한 플랫폼이 되는지 보여줄 가능성이 큽니다.",
    "손흥민 이후 한국 축구의 세대교체는 대표팀 전술과 리그 육성 시스템을 함께 시험하고 있습니다.",
    "MLB와 KBO의 교류 확대는 선수 이동과 중계 시장의 새로운 기회를 만들고 있습니다.",
    "여자 스포츠 흥행은 중계권과 스폰서십, 유소년 참여 구조를 동시에 바꾸고 있습니다.",
    "e스포츠 올림픽 논의는 게임 산업과 전통 스포츠 제도의 경계를 다시 묻고 있습니다.",
    "스포츠 베팅 합법화 논의는 팬 참여와 경기 조작 위험 관리가 함께 필요한 쟁점입니다.",
    "선수 부상 데이터 분석은 경기력 관리와 구단 투자 전략의 핵심 도구로 자리 잡고 있습니다.",
    "기후 변화는 야외 스포츠 일정과 경기장 운영, 선수 건강 관리에 직접 영향을 주고 있습니다.",
    "아시아 축구 리그의 투자 확대는 선수 시장과 클럽 브랜드 경쟁을 새롭게 만들고 있습니다.",
    "마라톤과 생활체육 열풍은 건강 관리와 도시 이벤트 문화가 결합된 흐름으로 확산되고 있습니다.",
    "스트리밍 시대의 스포츠 중계는 실시간 채팅과 숏폼 하이라이트 중심으로 재편되고 있습니다."
  ]
};

const topicDateBlockSize = Math.max(...Object.values(hotTopicsByDesk).map((topics) => topics.length));

const deskSlugs = {
  "기술": "technology",
  "반도체": "semiconductor",
  "경제": "economy",
  "글로벌": "global",
  "국제정치": "international-politics",
  "세계": "world",
  "정치": "politics",
  "한국 정치": "korea-politics",
  "산업": "industry",
  "과학": "science",
  "문화": "culture",
  "문화·미디어": "culture-media",
  "스포츠": "sports",
};

const topicSlugsByDesk = {
  "기술": [
    "technology-ai-agent-search-workflow-execution-tools-2026",
    "technology-ai-personal-assistant-calendar-email-documents-2026",
    "technology-enterprise-internal-systems-safe-integration-2026",
    "technology-ai-failure-recovery-2026",
    "technology-agent-developer-codebase-2026",
    "technology-ai-generative-subscription-pricing-2026",
    "technology-ai-agent-security-privacy-permissions-2026",
    "technology-reliable-ai-user-choice-2026",
    "technology-ai-on-device-smartphone-laptop-cloud-2026",
    "technology-ai-browser-search-action-execution-2026",
    "technology-ai-personal-data-vault-2026",
    "technology-ai-multimodal-text-image-voice-video-2026",
    "technology-ai-copyright-creator-accountability-2026",
    "technology-robot-foundation-model-factory-logistics-home-2026",
    "technology-security-quantum-computing-2026",
    "technology-digital-identity-wallet-2026",
    "technology-ai-safety-evaluation-certification-market-2026",
    "technology-ai-open-source-2026",
  ],
  "반도체": [
    "semiconductor-ai-gpu-chip-memory-packaging-power-efficiency-2026",
    "semiconductor-hbm-ai-server-2026",
    "semiconductor-big-tech-custom-chip-gpu-dependence-2026",
    "semiconductor-advanced-packaging-capacity-competition-2026",
    "semiconductor-chip-data-center-power-cost-compute-2026",
    "semiconductor-foundry-process-node-2026",
    "semiconductor-chip-subsidy-policy-2026",
    "semiconductor-ai-investors-investment-2026",
    "semiconductor-hbm4-ai-hbm-server-2026",
    "semiconductor-packaging-advanced-glass-substrate-investment-2026",
    "semiconductor-ai-gpu-chip-accelerator-startup-2026",
    "semiconductor-data-center-power-electric-vehicle-energy-electricity-2026",
    "semiconductor-automotive-autonomous-driving-supply-chain-2026",
    "semiconductor-chip-process-node-2026",
    "semiconductor-export-controls-equipment-2026",
    "semiconductor-ai-it-memory-2026",
    "semiconductor-fab-attraction-power-talent-ecosystem-2026",
    "semiconductor-ai-inventory-cycle-2026",
  ],
  "경제": [
    "economy-tariff-trade-conflict-living-costs-2026",
    "economy-enterprise-supply-chain-distributed-2026",
    "economy-exchange-rate-import-prices-shopping-2026",
    "economy-us-china-conflict-investment-jobs-2026",
    "economy-consumer-origin-supply-stability-2026",
    "economy-reshoring-friendshoring-2026",
    "economy-enterprise-corporate-earnings-costs-2026",
    "economy-globalization-trusted-trade-networks-2026",
    "economy-high-rates-household-debt-real-estate-2026",
    "economy-ai-investment-productivity-asset-prices-2026",
    "economy-won-yen-weakness-export-prices-2026",
    "economy-enterprise-supply-chain-china-consumption-2026",
    "economy-youth-spending-subscription-2026",
    "economy-investment-climate-risk-insurance-food-prices-infrastructure-2026",
    "economy-pf-real-estate-project-finance-risk-2026",
    "economy-privacy-digital-currency-2026",
    "economy-enterprise-price-hikes-brand-loyalty-2026",
    "economy-labor-market-polarization-2026",
  ],
  "국제정치": [
    "global-hormuz-strait-blockade-oil-prices-shipping-costs-2026",
    "global-middle-east-energy-prices-elections-2026",
    "global-maritime-security-insurance-logistics-contracts-2026",
    "global-energy-importers-oil-reserves-diplomacy-taxes-2026",
    "global-middle-east-us-europe-china-india-2026",
    "global-exchange-rate-commodities-stocks-bonds-2026",
    "global-regional-conflict-airfares-delivery-costs-electricity-2026",
    "global-diplomacy-failure-economic-risk-2026",
    "global-us-election-alliance-realignment-security-costs-2026",
    "global-china-south-sea-2026",
    "global-europe-defense-spending-nato-2026",
    "global-energy-china-diplomacy-russia-2026",
    "global-south-diplomacy-climate-debt-security-2026",
    "global-arctic-route-climate-resource-development-2026",
    "global-elections-cyber-attacks-2026",
    "global-regional-conflict-nuclear-proliferation-2026",
    "global-india-refugees-humanitarian-2026",
    "global-international-organizations-2026",
  ],
  "세계": [
    "global-gaza-reconstruction-governance-security-trust-2026",
    "global-international-aid-accountability-2026",
    "global-india-reconstruction-postwar-humanitarian-2026",
    "global-safe-reconstruction-local-representation-2026",
    "global-gaza-hospitals-schools-utilities-recovery-2026",
    "global-middle-east-international-organizations-gulf-2026",
    "global-postwar-life-humanitarian-questions-2026",
    "global-reconstruction-failure-conflict-order-2026",
    "global-europe-far-right-immigration-politics-2026",
    "global-africa-urbanization-jobs-2026",
    "global-supply-chain-india-economy-2026",
    "global-latin-america-resource-nationalism-supply-chain-2026",
    "global-southeast-asia-digital-economy-2026",
    "global-japan-population-decline-2026",
    "global-investment-middle-east-post-oil-tourism-2026",
    "global-food-security-war-climate-logistics-2026",
    "global-ai-education-gap-2026",
    "global-integration-urban-heat-2026",
  ],
  "한국 정치": [
    "politics-local-election-voters-living-costs-housing-2026",
    "politics-regional-development-funding-schedule-feasibility-2026",
    "politics-youth-jobs-cultural-infrastructure-2026",
    "politics-middle-aged-voters-taxes-transport-healthcare-2026",
    "politics-party-fatigue-candidates-2026",
    "politics-video-elections-short-local-communities-2026",
    "politics-national-mood-local-life-voting-2026",
    "politics-elections-local-election-national-2026",
    "politics-pension-reform-2026",
    "politics-healthcare-medical-school-quota-regional-2026",
    "politics-real-estate-tax-reform-revenue-2026",
    "politics-youth-participation-online-issue-networks-2026",
    "politics-local-finance-2026",
    "politics-prosecution-judicial-reform-2026",
    "politics-electricity-jobs-climate-pledges-2026",
    "politics-safe-jobs-platform-workers-2026",
    "politics-education-gap-2026",
    "politics-nomination-reform-2026",
  ],
  "산업": [
    "industry-server-data-center-cooling-2026",
    "industry-ai-infrastructure-grid-water-permits-2026",
    "industry-data-center-local-community-tax-revenue-2026",
    "industry-enterprise-cloud-chip-permits-companies-power-contracts-2026",
    "industry-ai-data-center-compute-2026",
    "industry-data-center-digital-economy-local-government-2026",
    "industry-data-center-cooling-thermal-management-2026",
    "industry-ai-data-center-social-license-2026",
    "industry-supply-chain-commodities-battery-recycling-rehabilitation-2026",
    "industry-shipbuilding-green-ships-2026",
    "industry-aerospace-satellite-data-2026",
    "industry-integration-investment-smart-factory-floor-data-2026",
    "industry-logistics-robots-automated-warehouse-labor-2026",
    "industry-investment-green-steel-2026",
    "industry-biopharma-contract-manufacturing-2026",
    "industry-k-food-export-localization-supply-2026",
    "industry-ip-content-fandom-2026",
    "industry-energy-storage-renewables-grid-stability-2026",
  ],
  "과학": [
    "science-ai-healthcare-medical-diagnosis-2026",
    "science-ai-video-radiology-pathology-2026",
    "science-ai-healthcare-medical-patient-data-2026",
    "science-hospitals-hospital-verification-2026",
    "science-ai-accountability-healthcare-liability-clinicians-2026",
    "science-ai-healthcare-medical-night-care-triage-2026",
    "science-privacy-diagnosis-explainability-2026",
    "science-ai-healthcare-medical-clinical-validation-verification-infrastructure-2026",
    "science-healthcare-obesity-drugs-metabolic-disease-2026",
    "science-room-temperature-superconductor-reproducibility-verification-2026",
    "science-gene-editing-rare-disease-2026",
    "science-space-telescope-exoplanets-2026",
    "science-climate-model-disaster-prediction-2026",
    "science-brain-computer-interface-rehabilitation-2026",
    "science-integration-food-security-marine-ecosystem-2026",
    "science-synthetic-biology-medicine-food-materials-2026",
    "science-investment-energy-fusion-2026",
    "science-hospitals-hospital-infectious-disease-surveillance-wastewater-data-2026",
  ],
  "문화·미디어": [
    "culture-news-consumption-youtube-short-form-creator-2026",
    "culture-creator-objectivity-intimacy-2026",
    "culture-algorithm-emotional-reaction-2026",
    "culture-audience-fact-delivery-2026",
    "culture-creator-newsroom-2026",
    "culture-creator-brand-2026",
    "culture-intimacy-verification-2026",
    "culture-news-context-explanation-2026",
    "culture-short-form-drama-2026",
    "culture-ai-video-copyright-creator-2026",
    "culture-fandom-brand-content-format-2026",
    "culture-ip-video-webtoon-2026",
    "culture-newsletter-independent-media-2026",
    "culture-fan-community-subscription-economy-2026",
    "culture-game-film-interactive-storytelling-2026",
    "culture-local-festival-city-branding-identity-2026",
    "culture-audio-content-listening-habits-2026",
    "culture-accountability-fandom-creator-2026",
  ],
  "스포츠": [
    "sports-north-america-world-cup-host-cities-2026",
    "sports-fan-experience-travel-hotels-transport-2026",
    "sports-world-cup-broadcast-rights-streaming-2026",
    "sports-safe-brand-host-cities-tourism-2026",
    "sports-immigration-world-cup-2026",
    "sports-commercialization-player-fatigue-2026",
    "sports-short-form-world-cup-2026",
    "sports-events-culture-economy-platform-2026",
    "sports-korean-football-generation-change-tactics-2026",
    "sports-mlb-kbo-2026",
    "sports-broadcast-rights-sponsorship-women-2026",
    "sports-esports-olympics-games-traditional-sports-2026",
    "sports-betting-fan-engagement-integrity-2026",
    "sports-investment-data-analysis-player-injury-2026",
    "sports-climate-change-schedules-venues-health-2026",
    "sports-investment-brand-asian-football-2026",
    "sports-marathon-recreational-2026",
    "sports-short-form-streaming-broadcasting-2026",
  ],
};

const deskEmoji = {
  "기술": "🤖",
  "반도체": "🧩",
  "경제": "💹",
  "글로벌": "🌍",
  "국제정치": "🌍",
  "세계": "🌍",
  "정치": "🗳️",
  "한국 정치": "🗳️",
  "산업": "🏭",
  "과학": "🔬",
  "문화": "🎬",
  "문화·미디어": "🎬",
  "스포츠": "🏆",
};

const deskAgentNames = {
  "기술": "Ada",
  "반도체": "Grace",
  "경제": "Warren",
  "글로벌": "Sophia",
  "국제정치": "Sophia",
  "세계": "Sophia",
  "정치": "Logan",
  "한국 정치": "Logan",
  "산업": "Mason",
  "과학": "Marie",
  "문화": "Stella",
  "문화·미디어": "Stella",
  "스포츠": "Serena",
};

const CARD_MIN_WIDTH = 280;
const CARD_GAP = 16;
const MAX_SECTION_ROWS = 1;
const SLIDER_SEQUENCE_REPEAT_COUNT = 16;
const TRANSLATE_TEXT_LIMIT = 4800;
const SITE_NAME = "Eureka";
const SCHEMA_CONTEXT = "https://schema.org";
const SEO_LANGUAGE = "ko-KR";
const DEFAULT_ROBOTS = "index, follow";
const TWITTER_CARD_TYPE = "summary";
const DEFAULT_SEO_DESCRIPTION = "Eureka는 지금 사람들이 가장 궁금해하는 기술, 경제, 글로벌, 정치, 산업, 과학, 문화, 스포츠 이슈를 장문으로 정리하는 정적 위키 매거진입니다.";
const APP_BASE_URL = new URL("./", import.meta.url);
const translationLanguages = [
  { code: "ko", translateCode: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", translateCode: "en", label: "영어", flag: "🇺🇸" },
  { code: "ja", translateCode: "ja", label: "일본어", flag: "🇯🇵" },
  { code: "zh-CN", translateCode: "zh-CN", label: "중국어", flag: "🇨🇳" },
  { code: "fr", translateCode: "fr", label: "프랑스어", flag: "🇫🇷" },
  { code: "es", translateCode: "es", label: "스페인어", flag: "🇪🇸" },
  { code: "ru", translateCode: "ru", label: "러시아어", flag: "🇷🇺" },
  { code: "hi", translateCode: "hi", label: "힌디어", flag: "🇮🇳" },
];

const topicPages = Object.entries(hotTopicsByDesk).flatMap(([desk, topics], deskIndex) =>
  topics.map((title, topicIndex) => ({
    slug: createTopicSlug(desk, topicIndex),
    title,
    desk: normalizeDesk(desk),
    publishedAt: createTopicPublishedAt(deskIndex, topicIndex),
    summary: "",
  })),
);

const pages = [...featuredPages, ...topicPages];

const pageListNode = document.querySelector("#page-list");
const emptyStateNode = document.querySelector("#empty-state");
const listHeadingNode = document.querySelector("#list-heading");
const searchNode = document.querySelector("#page-search");
const searchFieldNode = document.querySelector(".search-field");
const deskMenuNode = document.querySelector("#desk-menu");
const listViewNode = document.querySelector("#list-view");
const articleViewNode = document.querySelector("#article-view");
const articleDeskNode = document.querySelector("#article-desk");
const articleTitleNode = document.querySelector("#article-title");
const articleMetaNode = document.querySelector("#article-meta");
const articleSummaryNode = document.querySelector("#article-summary");
const articleBodyNode = document.querySelector("#article-body");
const voiceButtonNode = document.querySelector("#voice-button");
const voiceStatusNode = document.querySelector("#voice-status");
const translateButtonsNode = document.querySelector("#translate-buttons");
const translateStatusNode = document.querySelector("#translate-status");
const newsletterTitleNode = document.querySelector("#newsletter-title");
const newsletterCopyNode = document.querySelector("#newsletter-copy");
const newsletterPanelNode = document.querySelector(".article-newsletter");
const newsletterFormNode = document.querySelector("#newsletter-form");
const newsletterEmailNode = document.querySelector("#newsletter-email");
const newsletterMessageNode = document.querySelector("#newsletter-message");

let dataFileHandle = null;
let dataStore = createEmptyDataStore();
let activePage = null;
let activeArticleSpeechText = "";
let activeUtterance = null;
let activeTranslationLanguage = translationLanguages[0];
let resizeRenderTimer = 0;
const sectionPageState = new Map();

function createTopicSlug(desk, topicIndex) {
  return topicSlugsByDesk[desk]?.[topicIndex] || `${deskSlugs[desk] || "topic"}-${String(topicIndex + 1).padStart(2, "0")}`;
}

function createTopicPublishedAt(deskIndex, topicIndex) {
  const date = new Date(Date.UTC(2026, 4, 1));
  date.setUTCDate(date.getUTCDate() - (deskIndex * topicDateBlockSize) - topicIndex);
  return `${date.toISOString().slice(0, 10)}T09:00:00+09:00`;
}

function normalizeDesk(desk = "") {
  const normalizedDesk = String(desk).trim();
  if (normalizedDesk === "국제정치" || normalizedDesk === "세계") return "글로벌";
  if (normalizedDesk === "한국 정치") return "정치";
  if (normalizedDesk === "문화·미디어" || normalizedDesk === "문화미디어") return "문화";
  return normalizedDesk;
}

function normalizeArticleMarkdown(markdown = "") {
  return String(markdown)
    .replace(/^한 줄 요약:.*(?:\r?\n\s*\r?\n)?/gm, "")
    .replaceAll("공개 위키 항목", "기준점")
    .replaceAll("국제정치", "글로벌")
    .replaceAll("세계 분야", "글로벌 분야")
    .replaceAll("세계 이슈", "글로벌 이슈")
    .replaceAll("문화·미디어", "문화")
    .replaceAll("문화미디어", "문화");
}

function createEmptyDataStore() {
  return { newsletter_subscribers: [], updated_at: new Date().toISOString() };
}

function isSpeechSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPageDescription(page) {
  const summary = String(page.summary || "").trim();
  if (summary) return summary;
  return `${page.desk} 분야에서 ${page.title}라는 주제를 깊이 있게 정리한 Eureka 장문 분석입니다.`;
}

function getDeskDescription(desk, count = 0) {
  return `${desk} 분야의 최신 관심 주제 ${count}개를 장문 기사로 모았습니다.`;
}

function getAssetUrl(path) {
  return new URL(path, APP_BASE_URL).toString();
}

function getHomeUrl() {
  return getAssetUrl("./");
}

function getArticleUrl(slug) {
  return getAssetUrl(`pages/${encodeURIComponent(slug)}.html`);
}

function getStaticArticleSlugFromPath() {
  const match = decodeURIComponent(window.location.pathname).match(/\/pages\/([^/]+)\.html$/);
  return match ? match[1] : "";
}

function getRouteUrl(routeType = "home", value = "") {
  if (routeType === "page" && value) return getArticleUrl(value);

  const url = new URL(getHomeUrl());
  url.hash = "";
  url.search = "";
  if (routeType === "desk" && value) url.searchParams.set("desk", value);
  return url.toString();
}

function getOrCreateMeta(attribute, attributeValue) {
  const existing = [...document.head.querySelectorAll("meta")]
    .find((node) => node.getAttribute(attribute) === attributeValue);
  if (existing) return existing;

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, attributeValue);
  document.head.append(meta);
  return meta;
}

function setMeta(name, content) {
  getOrCreateMeta("name", name).setAttribute("content", content);
}

function setPropertyMeta(property, content) {
  getOrCreateMeta("property", property).setAttribute("content", content);
}

function removePropertyMeta(property) {
  document.head.querySelectorAll(`meta[property="${property}"]`).forEach((node) => node.remove());
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.append(canonical);
  }
  canonical.setAttribute("href", url);
}

function setStructuredData(data) {
  let script = document.querySelector("#structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    document.head.append(script);
  }
  script.textContent = JSON.stringify(data);
}

function createStructuredData(schemaType, fields = {}) {
  return {
    ...fields,
    "@context": SCHEMA_CONTEXT,
    "@type": schemaType,
  };
}

function clearArticleMeta() {
  removePropertyMeta("article:section");
  removePropertyMeta("article:published_time");
  removePropertyMeta("article:modified_time");
}

function setArticleMeta(page) {
  setPropertyMeta("article:section", page.desk);
  setPropertyMeta("article:published_time", page.publishedAt);
  setPropertyMeta("article:modified_time", page.publishedAt);
}

function updateSeo({ title, description, url, ogType = "website", robots = DEFAULT_ROBOTS, structuredData }) {
  document.title = title;
  setMeta("description", description);
  setMeta("robots", robots);
  setCanonical(url);
  setPropertyMeta("og:type", ogType);
  setPropertyMeta("og:locale", "ko_KR");
  setPropertyMeta("og:site_name", SITE_NAME);
  setPropertyMeta("og:title", title);
  setPropertyMeta("og:description", description);
  setPropertyMeta("og:url", url);
  if (ogType !== "article") clearArticleMeta();
  setMeta("twitter:card", TWITTER_CARD_TYPE);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setStructuredData(structuredData);
}

function updateHomeSeo() {
  const url = getRouteUrl();
  updateSeo({
    title: SITE_NAME,
    description: DEFAULT_SEO_DESCRIPTION,
    url,
    structuredData: createStructuredData("WebSite", {
      name: SITE_NAME,
      url,
      description: DEFAULT_SEO_DESCRIPTION,
      inLanguage: SEO_LANGUAGE,
    }),
  });
}

function updateDeskSeo(desk, count) {
  const title = `${desk} | ${SITE_NAME}`;
  const description = getDeskDescription(desk, count);
  const url = getRouteUrl("desk", desk);
  updateSeo({
    title,
    description,
    url,
    structuredData: createStructuredData("CollectionPage", {
      name: title,
      url,
      description,
      inLanguage: SEO_LANGUAGE,
      isPartOf: { "@type": "WebSite", name: SITE_NAME },
    }),
  });
}

function updateArticleSeo(page) {
  const title = `${page.title} | ${SITE_NAME}`;
  const description = getPageDescription(page);
  const url = getRouteUrl("page", page.slug);
  updateSeo({
    title,
    description,
    url,
    ogType: "article",
    structuredData: createStructuredData("Article", {
      headline: page.title,
      description,
      url,
      datePublished: page.publishedAt,
      dateModified: page.publishedAt,
      articleSection: page.desk,
      inLanguage: SEO_LANGUAGE,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Person", name: getDeskAgentName(page.desk) },
      publisher: { "@type": "Organization", name: SITE_NAME },
      isPartOf: { "@type": "WebSite", name: SITE_NAME },
    }),
  });
  setArticleMeta(page);
}

function updateMissingSeo(slug) {
  const description = slug ? `요청한 문서(${slug})를 찾을 수 없습니다.` : "요청한 문서를 찾을 수 없습니다.";
  updateSeo({
    title: `문서를 찾을 수 없습니다 | ${SITE_NAME}`,
    description,
    url: getRouteUrl(),
    robots: "noindex, follow",
    structuredData: createStructuredData("WebPage", {
      name: "문서를 찾을 수 없습니다",
      description,
      inLanguage: SEO_LANGUAGE,
    }),
  });
}

function normalizeDataStore(value) {
  if (!value || typeof value !== "object") return createEmptyDataStore();
  return {
    newsletter_subscribers: Array.isArray(value.newsletter_subscribers)
      ? value.newsletter_subscribers.map(normalizeSubscriber)
      : [],
    updated_at: typeof value.updated_at === "string" ? value.updated_at : new Date().toISOString(),
  };
}

function normalizeSubscriber(subscriber) {
  if (!subscriber || typeof subscriber !== "object") return subscriber;
  return {
    ...subscriber,
    interests: Array.isArray(subscriber.interests)
      ? [...new Set(subscriber.interests.map(normalizeDesk).filter(Boolean))]
      : [],
  };
}

function getCurrentRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  const hashParams = new URLSearchParams(hash);
  const hashSlug = hashParams.get("page");
  if (hashSlug) return { type: "page", value: hashSlug };
  const hashDesk = hashParams.get("desk");
  if (hashDesk) return { type: "desk", value: hashDesk };

  const queryParams = new URLSearchParams(window.location.search);
  const querySlug = queryParams.get("page");
  if (querySlug) return { type: "page", value: querySlug };
  const queryDesk = queryParams.get("desk");
  if (queryDesk) return { type: "desk", value: queryDesk };

  const staticSlug = getStaticArticleSlugFromPath();
  if (staticSlug) return { type: "page", value: staticSlug };

  return { type: "home", value: "" };
}

function getDeskList() {
  return [...new Set(pages.map((page) => page.desk))];
}

function getDeskLabel(desk) {
  return `${deskEmoji[desk] || "📌"} ${desk}`;
}

function getDeskAgentName(desk) {
  return deskAgentNames[desk] || deskAgentNames[normalizeDesk(desk)] || "Eureka";
}

function formatPublishedAt(value = "") {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  if (!match) return value;
  const [, year, month, day, hour, minute, second] = match;
  return `${year}.${month}.${day} ${hour}:${minute}:${second} KST`;
}

function getArticleMetaText(page) {
  return `작성자 ${getDeskAgentName(page.desk)} · 발행시각 ${formatPublishedAt(page.publishedAt)}`;
}

function formatCountLabel(count) {
  return `(${count})`;
}

function renderDeskMenu() {
  deskMenuNode.innerHTML = getDeskList()
    .map((desk) => `<a class="desk-menu__link" href="${escapeHtml(getRouteUrl("desk", desk))}">${escapeHtml(getDeskLabel(desk))}</a>`)
    .join("");
}

function renderCards(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? pages.filter((page) => `${page.desk} ${page.title} ${page.summary}`.toLowerCase().includes(normalized))
    : pages;
  const latestByDesk = getLatestPagesByDesk(pages);

  listHeadingNode.textContent = normalized
    ? `🔎 검색 결과 ${formatCountLabel(filtered.length)}`
    : `🔥 지금 사람들이 많이 궁금해하는 주제 ${formatCountLabel(latestByDesk.length)}`;
  emptyStateNode.hidden = filtered.length > 0;
  if (normalized) {
    pageListNode.innerHTML = `
      <div class="card-grid">
        ${filtered.map((page) => renderCard(page)).join("")}
      </div>
    `;
    return;
  }

  pageListNode.innerHTML = `
    <section class="trending-section" aria-label="지금 사람들이 많이 궁금해하는 주제">
      ${renderTrendingSlider(latestByDesk)}
    </section>
    <div class="desk-sections">
      ${renderDeskSections(pages)}
    </div>
  `;
  refreshSliderLoops();
}

function getSectionPageSize() {
  const width = pageListNode.clientWidth || listViewNode.clientWidth || window.innerWidth;
  const columns = Math.max(1, Math.floor((width + CARD_GAP) / (CARD_MIN_WIDTH + CARD_GAP)));
  return columns * MAX_SECTION_ROWS;
}

function renderTrendingSlider(items) {
  const cards = Array.from({ length: SLIDER_SEQUENCE_REPEAT_COUNT }, (_, sequenceIndex) =>
    items.map((page) => renderCard(page, "page-card--rail", sequenceIndex > 0)).join(""),
  ).join("");

  return `
      <div class="trending-window">
        <div class="trending-track" data-slider-ready="false" data-slider-item-count="${items.length}">
          ${cards}
        </div>
      </div>
  `;
}

function refreshSliderLoops() {
  window.requestAnimationFrame(() => {
    document.querySelectorAll(".trending-track").forEach((track) => {
      const itemCount = Number(track.dataset.sliderItemCount || 0);
      const cards = [...track.querySelectorAll(".page-card--rail")];
      const firstCard = cards[0];
      const nextCycleFirstCard = cards[itemCount];
      const distance = firstCard && nextCycleFirstCard
        ? nextCycleFirstCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left
        : 0;
      if (!distance) return;

      track.style.setProperty("--slide-distance", `${distance}px`);
      track.style.setProperty("--slide-duration", `${Math.max(36, distance / 62)}s`);
      track.dataset.sliderReady = "true";
    });
  });
}

function getLatestPagesByDesk(items) {
  const latestByDesk = new Map();

  items.forEach((page, index) => {
    const current = latestByDesk.get(page.desk);
    if (!current || getPublishedTime(page, index) > getPublishedTime(current.page, current.index)) {
      latestByDesk.set(page.desk, { page, index });
    }
  });

  return [...latestByDesk.values()]
    .sort((left, right) => getPublishedTime(right.page, right.index) - getPublishedTime(left.page, left.index))
    .map((item) => item.page);
}

function getPublishedTime(page, index) {
  const time = Date.parse(page.publishedAt || "");
  return Number.isNaN(time) ? -index : time;
}

function renderCard(page, extraClass = "", duplicate = false) {
  return `
    <a class="page-card ${extraClass}" href="${escapeHtml(getArticleUrl(page.slug))}" data-page-slug="${encodeURIComponent(page.slug)}"${duplicate ? " aria-hidden=\"true\" tabindex=\"-1\"" : ""}>
      <p class="eyebrow">${escapeHtml(page.desk)}</p>
      <h3>${escapeHtml(page.title)}</h3>
    </a>
  `;
}

function renderDeskSections(items) {
  const desks = getDeskList();
  const sectionPageSize = getSectionPageSize();
  return desks
    .map((desk) => {
      const deskId = `desk-${encodeURIComponent(desk)}`;
      const deskPages = items
        .filter((page) => page.desk === desk)
        .sort((left, right) => getPublishedTime(right, 0) - getPublishedTime(left, 0));
      const totalPages = Math.ceil(deskPages.length / sectionPageSize);
      const currentPage = Math.min(sectionPageState.get(desk) || 0, Math.max(totalPages - 1, 0));
      const visiblePages = deskPages.slice(
        currentPage * sectionPageSize,
        (currentPage + 1) * sectionPageSize,
      );

      return `
        <section class="desk-section" aria-labelledby="${deskId}">
          <div class="section-head section-head--compact">
            <div>
              <h3 id="${deskId}">${escapeHtml(`${getDeskLabel(desk)} ${formatCountLabel(deskPages.length)}`)}</h3>
            </div>
            <a class="more-link" href="${escapeHtml(getRouteUrl("desk", desk))}">+ 더보기</a>
          </div>
          <div class="card-grid card-grid--compact">
            ${visiblePages.map((page) => renderCard(page)).join("")}
          </div>
          ${renderSectionPagination(desk, currentPage, totalPages)}
        </section>
      `;
    })
    .join("");
}

function renderDeskDetail(desk) {
  stopArticleSpeech(true);
  const normalizedDesk = normalizeDesk(desk);
  const deskPages = pages
    .filter((page) => page.desk === normalizedDesk)
    .sort((left, right) => getPublishedTime(right, 0) - getPublishedTime(left, 0));

  updateDeskSeo(normalizedDesk, deskPages.length);
  searchFieldNode.hidden = false;
  listViewNode.hidden = false;
  articleViewNode.hidden = true;
  activePage = null;
  listHeadingNode.textContent = `${getDeskLabel(normalizedDesk)} 전체 보기 ${formatCountLabel(deskPages.length)}`;
  emptyStateNode.hidden = deskPages.length > 0;
  pageListNode.innerHTML = `
    <div class="desk-detail-summary">${escapeHtml(`${normalizedDesk} 분야의 주제 ${deskPages.length}개를 모았습니다.`)}</div>
    <div class="card-grid card-grid--compact">
      ${deskPages.map((page) => renderCard(page)).join("")}
    </div>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSectionPagination(desk, currentPage, totalPages) {
  if (totalPages <= 1) return "";

  return `
    <nav class="section-pagination" aria-label="${escapeHtml(desk)} 페이지 이동">
      ${Array.from({ length: totalPages }, (_, pageIndex) => `
        <button class="pagination-button${pageIndex === currentPage ? " pagination-button--active" : ""}" type="button" data-desk-page="${encodeURIComponent(desk)}" data-page-index="${pageIndex}" aria-current="${pageIndex === currentPage ? "page" : "false"}">
          ${pageIndex + 1}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderArticleContent(markdown, page) {
  const paragraphs = markdown
    .split(/\n\s*\n/g)
    .map((item) => item.trim())
    .filter(Boolean);

  const middleIndex = Math.max(1, Math.floor(paragraphs.length / 2));
  const before = paragraphs.slice(0, middleIndex).map(renderParagraph).join("");
  const after = paragraphs.slice(middleIndex).map(renderParagraph).join("");
  const relatedPages = pages
    .filter((item) => item.desk === page.desk && item.slug !== page.slug)
    .sort((left, right) => getPublishedTime(right, 0) - getPublishedTime(left, 0));
  const trendingPages = getLatestPagesByDesk(pages).filter((item) => item.slug !== page.slug);

  articleBodyNode.innerHTML = `
    ${before}
    ${renderArticleSliderSection(`${deskEmoji[page.desk] || "📌"} 같은 분야 더 보기`, relatedPages)}
    ${after}
    ${renderArticleSliderSection("🔥 지금 사람들이 많이 보는 주제", trendingPages)}
  `;
  refreshSliderLoops();
}

function renderParagraph(paragraph) {
  return `<p>${escapeHtml(paragraph)}</p>`;
}

function renderArticleSliderSection(title, items) {
  if (!items.length) return "";

  return `
    <section class="article-slider-section" aria-label="${escapeHtml(title)}">
      <h3>${escapeHtml(title)}</h3>
      ${renderTrendingSlider(items)}
    </section>
  `;
}

function setVoiceReady(text = "") {
  activeArticleSpeechText = text;
  if (!isSpeechSupported()) {
    voiceButtonNode.disabled = true;
    voiceStatusNode.textContent = "이 브라우저는 음성 읽기를 지원하지 않습니다.";
    return;
  }

  voiceButtonNode.disabled = !activeArticleSpeechText;
  voiceButtonNode.textContent = "음성으로 읽어주기";
  if (!activeArticleSpeechText) voiceStatusNode.textContent = "";
}

function stopArticleSpeech(clearStatus = false) {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
  activeUtterance = null;
  voiceButtonNode.textContent = "음성으로 읽어주기";
  if (clearStatus) voiceStatusNode.textContent = "";
}

function toggleArticleSpeech() {
  if (!isSpeechSupported()) {
    voiceStatusNode.textContent = "이 브라우저는 음성 읽기를 지원하지 않습니다.";
    return;
  }

  if (activeUtterance) {
    stopArticleSpeech(true);
    return;
  }

  if (!activeArticleSpeechText) {
    voiceStatusNode.textContent = "읽을 본문을 아직 불러오지 못했습니다.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(activeArticleSpeechText);
  utterance.lang = "ko-KR";
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.onstart = () => {
    activeUtterance = utterance;
    voiceButtonNode.textContent = "음성읽기 중지하기";
    voiceStatusNode.textContent = "";
  };
  utterance.onend = () => {
    activeUtterance = null;
    voiceButtonNode.textContent = "음성으로 읽어주기";
    voiceStatusNode.textContent = "읽기가 끝났습니다.";
  };
  utterance.onerror = () => {
    activeUtterance = null;
    voiceButtonNode.textContent = "음성으로 읽어주기";
    voiceStatusNode.textContent = "음성 읽기를 중단했습니다.";
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function renderTranslateButtons() {
  translateButtonsNode.innerHTML = translationLanguages
    .map((language) => `
      <button class="translate-language-button" type="button" data-translate-code="${escapeHtml(language.code)}" aria-pressed="${language.code === activeTranslationLanguage.code ? "true" : "false"}" title="${escapeHtml(language.label)}">
        <span aria-hidden="true">${escapeHtml(language.flag)}</span>
        <span class="visually-hidden">${escapeHtml(language.label)}</span>
      </button>
    `)
    .join("");
  updateTranslateButtons();
}

function updateTranslateButtons() {
  translateButtonsNode.querySelectorAll("[data-translate-code]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.translateCode === activeTranslationLanguage.code ? "true" : "false");
  });
}

function createTranslateUrl(language, text) {
  const translateUrl = new URL("https://translate.google.com/");
  translateUrl.searchParams.set("sl", "ko");
  translateUrl.searchParams.set("tl", language.translateCode);
  translateUrl.searchParams.set("text", text);
  translateUrl.searchParams.set("op", "translate");
  return translateUrl.toString();
}

function getTranslateText() {
  const sourceText = activeArticleSpeechText || [articleTitleNode.textContent, articleBodyNode.textContent].filter(Boolean).join("\n\n");
  return sourceText.trim().slice(0, TRANSLATE_TEXT_LIMIT);
}

function handleTranslateLanguage(code) {
  const language = translationLanguages.find((item) => item.code === code);
  if (!language) return;

  activeTranslationLanguage = language;
  updateTranslateButtons();

  if (language.code === "ko") {
    translateStatusNode.textContent = "한국어 원문을 유지합니다.";
    return;
  }

  const translateText = getTranslateText();
  if (!translateText) {
    translateStatusNode.textContent = "번역할 본문을 아직 불러오지 못했습니다.";
    return;
  }

  translateStatusNode.textContent = activeArticleSpeechText.length > TRANSLATE_TEXT_LIMIT
    ? `${language.label} 번역을 새 탭에서 엽니다. 긴 본문은 앞부분부터 번역합니다.`
    : `${language.label} 번역을 새 탭에서 엽니다.`;
  window.open(createTranslateUrl(language, translateText), "_blank", "noopener,noreferrer");
}

function showListView() {
  stopArticleSpeech(true);
  updateHomeSeo();
  searchFieldNode.hidden = false;
  listViewNode.hidden = false;
  articleViewNode.hidden = true;
  activePage = null;
  renderCards(searchNode.value);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function hasStaticArticleBody(page) {
  return getStaticArticleSlugFromPath() === page.slug && articleBodyNode.textContent.trim().length > 0;
}

function showArticleShell(page, { preserveBody = false } = {}) {
  const pageSummary = String(page.summary || "").trim();
  stopArticleSpeech(true);
  articleDeskNode.textContent = page.desk;
  articleTitleNode.textContent = page.title;
  articleMetaNode.textContent = getArticleMetaText(page);
  articleSummaryNode.textContent = pageSummary;
  articleSummaryNode.hidden = !pageSummary;
  if (!preserveBody) articleBodyNode.innerHTML = "<p>문서를 불러오는 중입니다.</p>";
  newsletterPanelNode.hidden = false;
  newsletterTitleNode.textContent = "";
  newsletterCopyNode.textContent = "";
  newsletterMessageNode.textContent = "";
  activePage = page;
  setVoiceReady("");

  updateArticleSeo(page);
  searchFieldNode.hidden = false;
  listViewNode.hidden = true;
  articleViewNode.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMissingArticle(slug) {
  stopArticleSpeech(true);
  articleDeskNode.textContent = "오류";
  articleTitleNode.textContent = "문서를 찾을 수 없습니다";
  articleMetaNode.textContent = "";
  articleSummaryNode.textContent = slug ? `요청한 문서(${slug})가 manifest에 없습니다.` : "선택한 페이지 정보가 없습니다.";
  articleSummaryNode.hidden = false;
  articleBodyNode.innerHTML = "<p>목록으로 돌아가 다시 선택해 주세요.</p>";
  newsletterPanelNode.hidden = true;
  newsletterTitleNode.textContent = "";
  newsletterCopyNode.textContent = "";
  newsletterMessageNode.textContent = "";
  activePage = null;
  setVoiceReady("");

  updateMissingSeo(slug);
  searchFieldNode.hidden = false;
  listViewNode.hidden = true;
  articleViewNode.hidden = false;
}

async function renderArticle(slug) {
  const page = pages.find((item) => item.slug === slug);
  if (!page) {
    showMissingArticle(slug);
    return;
  }

  const preserveStaticBody = hasStaticArticleBody(page);
  const staticArticleText = preserveStaticBody ? articleBodyNode.textContent.trim() : "";
  showArticleShell(page, { preserveBody: preserveStaticBody });

  try {
    const response = await fetch(getAssetUrl(`pages/${encodeURIComponent(page.slug)}.md`), { cache: "no-store" });
    if (!response.ok) throw new Error("본문 파일을 읽지 못했습니다.");
    const markdown = normalizeArticleMarkdown(await response.text());
    renderArticleContent(markdown, page);
    setVoiceReady([page.title, page.summary, markdown].filter(Boolean).join("\n\n"));
  } catch (error) {
    if (!preserveStaticBody) {
      articleBodyNode.innerHTML = `<p>${escapeHtml(error.message || "본문을 불러오는 중 문제가 발생했습니다.")}</p>`;
    }
    setVoiceReady([page.title, page.summary, staticArticleText].filter(Boolean).join("\n\n"));
  }
}

function syncViewFromLocation() {
  const route = getCurrentRoute();
  if (route.type === "page") {
    renderArticle(route.value);
    return;
  }

  if (route.type === "desk") {
    renderDeskDetail(route.value);
    return;
  }

  showListView();
}

function handleRouteLinkClick(event) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest("a[href]");
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const url = new URL(link.getAttribute("href"), window.location.href);
  const homePath = new URL(getHomeUrl()).pathname;
  const isRoutedSearch = url.searchParams.has("page") || url.searchParams.has("desk");
  if (url.origin !== window.location.origin || url.pathname !== homePath || !isRoutedSearch) return;

  event.preventDefault();
  history.pushState(null, "", `${url.pathname}${url.search}`);
  syncViewFromLocation();
}

async function loadDataStore() {
  try {
    const response = await fetch(getAssetUrl("data.json"), { cache: "no-store" });
    if (!response.ok) throw new Error("data.json을 읽지 못했습니다.");
    dataStore = normalizeDataStore(await response.json());
  } catch {
    dataStore = createEmptyDataStore();
  }
}

async function prepareWritableDataStore() {
  if (dataFileHandle || !window.showOpenFilePicker) {
    return;
  }

  try {
    const [handle] = await window.showOpenFilePicker({
      multiple: false,
      types: [{ description: "JSON Files", accept: { "application/json": [".json"] } }],
    });

    dataFileHandle = handle;
    const file = await handle.getFile();
    dataStore = normalizeDataStore(JSON.parse(await file.text()));
  } catch (error) {
    if (error.name !== "AbortError") throw error;
  }
}

async function persistDataStore() {
  dataStore.updated_at = new Date().toISOString();

  if (dataFileHandle) {
    const writable = await dataFileHandle.createWritable();
    await writable.write(JSON.stringify(dataStore, null, 2));
    await writable.close();
    return true;
  }

  const blob = new Blob([JSON.stringify(dataStore, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.json";
  link.click();
  URL.revokeObjectURL(url);
  return false;
}

async function handleNewsletterSubmit(event) {
  event.preventDefault();
  if (!activePage) {
    newsletterMessageNode.textContent = "문서 상세 화면에서만 뉴스레터를 신청할 수 있습니다.";
    return;
  }

  const email = newsletterEmailNode.value.trim().toLowerCase();
  if (!email) return;

  await prepareWritableDataStore();

  const subscribers = Array.isArray(dataStore.newsletter_subscribers) ? dataStore.newsletter_subscribers : [];
  const existing = subscribers.find((item) => String(item.email || "").toLowerCase() === email);

  if (existing) {
    const nextInterests = Array.isArray(existing.interests) ? existing.interests : [];
    const activeDesk = normalizeDesk(activePage.desk);
    if (!nextInterests.includes(activeDesk)) nextInterests.push(activeDesk);
    existing.interests = nextInterests;
    existing.last_page_slug = activePage.slug;
    existing.updated_at = new Date().toISOString();
  } else {
    subscribers.push({
      email,
      interests: [normalizeDesk(activePage.desk)],
      last_page_slug: activePage.slug,
      subscribed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
  }

  dataStore.newsletter_subscribers = subscribers;
  const savedToFile = await persistDataStore();
  newsletterMessageNode.textContent = savedToFile
    ? "뉴스레터 신청이 완료되었습니다."
    : "신청이 완료되었습니다. 내려받은 data.json 파일로 기존 파일을 교체해 주세요.";
  newsletterFormNode.reset();
}

searchNode.addEventListener("input", () => {
  if (!articleViewNode.hidden) {
    history.pushState(null, "", getHomeUrl());
    showListView();
    return;
  }

  renderCards(searchNode.value);
});
pageListNode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-desk-page]");
  if (!button) return;
  sectionPageState.set(decodeURIComponent(button.dataset.deskPage || ""), Number(button.dataset.pageIndex || 0));
  renderCards(searchNode.value);
});
voiceButtonNode.addEventListener("click", toggleArticleSpeech);
translateButtonsNode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-translate-code]");
  if (!button) return;

  handleTranslateLanguage(button.dataset.translateCode || "ko");
});
window.addEventListener("hashchange", syncViewFromLocation);
window.addEventListener("popstate", syncViewFromLocation);
document.addEventListener("click", handleRouteLinkClick);
window.addEventListener("resize", () => {
  clearTimeout(resizeRenderTimer);
  resizeRenderTimer = window.setTimeout(() => {
    if (!listViewNode.hidden && !searchNode.value.trim()) {
      renderCards(searchNode.value);
      return;
    }

    refreshSliderLoops();
  }, 120);
});
newsletterFormNode.addEventListener("submit", (event) => {
  handleNewsletterSubmit(event).catch((error) => {
    newsletterMessageNode.textContent = error.message || "뉴스레터 저장에 실패했습니다.";
  });
});

renderDeskMenu();
renderTranslateButtons();
loadDataStore().finally(syncViewFromLocation);
