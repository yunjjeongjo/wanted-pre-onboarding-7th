import styled from "styled-components";
import { ReactComponent as Notice } from "@/lib/assets/Icon/notice.svg";
import { ReactComponent as Settings } from "@/lib/assets/Icon/settings.svg";
import { ReactComponent as Avatar } from "@/lib/assets/Icon/avatar.svg";
const Header = () => {
  return (
    <>
      <Container>
        <Notice></Notice>
        <Settings></Settings>
        <AvatarWrapper>
          <Avatar></Avatar>
          <UserName>원티드님</UserName>
        </AvatarWrapper>
      </Container>
      <Line></Line>
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-left: 10px;
  margin-right: 40px;
  ${({ theme }) => theme.colors.gray_800}
`;

const Line = styled.div`
  height: 1px;
  width: 1040px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_50};
  margin: 0 auto;
`;
export default Header;
