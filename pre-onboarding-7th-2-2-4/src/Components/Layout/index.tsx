import styled from "styled-components";
import Header from "../Header";
import SideBar from "../SideBar";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <SideBar></SideBar>
      <PageWrapper>
        <Header></Header>
        {children}
      </PageWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_50};
`;
export default Layout;
