import styled from "styled-components";
interface Props {
  title: string;
  context: string | Date | number;
}
const InfoItem = ({ title, context }: Props) => {
  const contextString = context.toString();
  return (
    <Item>
      <Title>{title}</Title>
      <Context>{contextString}</Context>
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

const Context = styled.span`
  font-size: 17px;
  font-weight: 400;
`;

export default InfoItem;
