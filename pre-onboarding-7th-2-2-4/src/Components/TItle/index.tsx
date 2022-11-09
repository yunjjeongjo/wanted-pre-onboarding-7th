import styled from "styled-components";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 40px;
`;
const Text = styled.h2`
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray_800};
`;

export default Title;
