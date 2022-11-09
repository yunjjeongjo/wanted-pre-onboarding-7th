import styled from "styled-components";
import { ReactComponent as DashBoard } from "@/lib/assets/Icon/dashboard.svg";
import { ReactComponent as Advertisement } from "@/lib/assets/Icon/advertisment.svg";
import { useNavigate } from "react-router-dom";
import { menuState } from "@/lib/states/atom";
import { useRecoilState } from "recoil";

interface Props {
  content: string;
}

const Menu = ({ content }: Props) => {
  // eslint-disable-next-line
  const [menu, setMenu] = useRecoilState<string>(menuState);
  const navigate = useNavigate();
  const handleClick = () => {
    setMenu(content);
    if (content === "대시보드") {
      navigate("/", { replace: false });
    } else {
      navigate("/management", { replace: false });
    }
  };
  return (
    <>
      {content === menu ? (
        <MenuActive onClick={handleClick}>
          {content === "대시보드" ? (
            <>
              <DashBoard fill="#586CF5"></DashBoard>
              <Content>{content}</Content>
            </>
          ) : (
            <>
              <Advertisement fill="#586CF5"></Advertisement>
              <Content>{content}</Content>
            </>
          )}
        </MenuActive>
      ) : (
        <MenuUnActive onClick={handleClick}>
          {content === "대시보드" ? (
            <>
              <DashBoard fill="#3A474E"></DashBoard>
              <Content>{content}</Content>
            </>
          ) : (
            <>
              <Advertisement fill="#3A474E"></Advertisement>
              <Content>{content}</Content>
            </>
          )}
        </MenuUnActive>
      )}
    </>
  );
};

const MenuActive = styled.div`
  display: flex;
  align-items: center;
  padding-left: 22px;
  width: 240px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray_50};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

const MenuUnActive = styled.div`
  display: flex;
  align-items: center;
  padding-left: 22px;
  width: 240px;
  height: 60px;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  ${({ theme }) => theme.colors.gray_800};
`;

const Content = styled.p`
  margin-left: 12px;
`;

export default Menu;
