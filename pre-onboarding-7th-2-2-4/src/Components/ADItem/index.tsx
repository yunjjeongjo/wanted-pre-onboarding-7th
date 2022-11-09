import styled from "styled-components";

interface Props {
  adInfo: {
    id: number;
    adType: string;
    title: string;
    budget: number;
    status: string;
    startDate: string;
    endDate: null | string;
    report: {
      cost: number;
      convValue: number;
      roas: number;
    };
  };
}
const ADItem = ({ adInfo }: Props) => {
  //   const { adType, title, budget, startDate } = adInfo;
  function typetoTitle(adType: string) {
    if (adType === "web") {
      return `웹광고_${adInfo.startDate}`;
    } else {
      return `앱광고_${adInfo.startDate}`;
    }
  }
  return (
    <Container>
      <Title>{typetoTitle(adInfo.adType)}</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 420px;
  width: 305px;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export default ADItem;
