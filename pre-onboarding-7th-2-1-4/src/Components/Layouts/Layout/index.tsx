import styled from "styled-components";
import Header from "../Header";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header></Header>
        {children}
      </Container>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
`;

const Container = styled.div`
  width: 390px;
  background-color: white;
`;

export default Layout;
