import styled from "styled-components";
import { ReactComponent as GuideIcon } from "@/lib/assets/Icon/guide.svg";
const Guide = () => {
  return (
    <Container>
      <GuideIcon></GuideIcon>
      <TextContainer>
        <MainText>레버 이용 가이드</MainText>
        <SubText>시작하기 전에 알아보기</SubText>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 100px;
  margin-top: 230px;
  background-color: ${({ theme }) => theme.colors.secondary_blue};
  border-radius: 10px;
`;

const TextContainer = styled.div`
  margin-left: 8px;
`;
const MainText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gray_800};
`;
const SubText = styled.p`
  margin-top: 7px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray_300};
`;

export default Guide;
