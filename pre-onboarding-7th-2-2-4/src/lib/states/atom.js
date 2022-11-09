import { atom } from "recoil";

// 컴포넌트에서 아톰을 사용하기 위해 export를 사용해 내보냅니다.
export const serviceState = atom({
  key: "service",
  default: "매드업"
});

export const menuState = atom({
  key: "menu",
  default: "대시보드"
});

export const adState = atom({
  key: "ad",
  default: "전체 광고"
});
