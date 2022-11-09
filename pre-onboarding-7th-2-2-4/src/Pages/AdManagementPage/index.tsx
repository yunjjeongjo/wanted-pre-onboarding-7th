import ADView from "@/Components/ADView";
import Title from "@/Components/TItle";
import styled from "styled-components";

const ADManagementPage = () => {
  return (
    <PageContainer>
      <Title title="광고관리"></Title>
      <ADView></ADView>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ADManagementPage;
