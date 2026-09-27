// 학기가 바뀔 때마다 여기 4개 값만 고치면 페이지 여러 곳(히어로, 소개, 연혁,
// 조직도, 활동 배지)에 자동으로 반영됩니다. HTML을 직접 찾아다니며 고칠 필요 없음.
const SITE_CONFIG = {
  generation: "13기",       // 현재 기수
  semester: "2026-2",       // 현재 학기 (YYYY-1 또는 YYYY-2)
  programCount: "12",       // 정기 프로그램 개수 (about/hero 통계에 표시)
  teamCount: "5",           // 운영 팀 개수 (about/hero 통계에 표시)
};
