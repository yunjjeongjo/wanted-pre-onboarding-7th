import styled from "styled-components";

interface Props {
  title: string;
}

const InfoHeader = ({ title }: Props) => {
  return <Header>{title}</Header>;
};

const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: #0094ff;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 17px;
  font-weight: 700;
`;

export default InfoHeader;
