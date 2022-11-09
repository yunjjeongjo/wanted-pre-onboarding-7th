import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Attribute {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

interface Insurance {
  name: string;
  description: string;
}

interface AdditionalProducts {
  name: string;
  amount: number;
}

interface CarInfoResponse {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date | string;
  createdAt: Date | string;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}

interface Props {
  carInfo: CarInfoResponse;
}

// const dummyData: CarInfoResponse = {
//   id: 1,
//   startDate: "2022-10-05T10:28:08.442Z",
//   createdAt: "2022-10-05T10:28:08.442Z",
//   attribute: {
//     brand: "현대",
//     name: "아반떼 CN7",
//     segment: "C",
//     fuelType: "gasoline",
//     imageUrl: ""
//   },
//   amount: 600000,
//   insurance: [
//     {
//       name: "대인",
//       description: "무한"
//     },
//     {
//       name: "대물",
//       description: "10억"
//     }
//   ],
//   additionalProducts: [
//     {
//       name: "하이파킹 주차권",
//       amount: 150000
//     }
//   ]
// };

const CarItem = ({ carInfo }: Props) => {
  const { brand, name, segment, fuelType, imageUrl } = carInfo.attribute;
  const { id, amount } = carInfo;
  const navigate = useNavigate();
  return (
    <ItemContainer
      onClick={() => {
        navigate(`/detail/${id}`, { replace: false });
      }}
    >
      <InfoWrapper>
        <TextContainer>
          <Title>{brand}</Title>
          <Title>{name}</Title>
          <SubTitle>
            {segment}/{fuelType}
          </SubTitle>
          <SubTitle>월 {amount}원 부터</SubTitle>
        </TextContainer>
        {imageUrl ? (
          <Image src={imageUrl}></Image>
        ) : (
          <DefaultImage>이미지 준비중</DefaultImage>
        )}
      </InfoWrapper>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  &:nth-child(2) {
    margin-bottom: 8px;
  }
`;
const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DefaultImage = styled.div`
  width: 152px;
  height: 80px;
  background-color: #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
const Image = styled.img`
  width: 152px;
  height: 80px;
`;

export default CarItem;
