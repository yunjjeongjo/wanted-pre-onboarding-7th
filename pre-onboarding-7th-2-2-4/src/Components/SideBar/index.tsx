import styled from "styled-components";
import { ReactComponent as Logo } from "@/lib/assets/Icon/logo.svg";
import FormControl from "@mui/material/FormControl";
import { serviceState } from "@/lib/states/atom";
import { useRecoilState } from "recoil";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Menu from "../Menu";
import Guide from "../Guide";

const SideBar = () => {
  const [service, setService] = useRecoilState<string>(serviceState);
  const handleChange = (event: { target: { value: string } }) => {
    setService(event.target.value);
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      backgroundColor: theme.colors.bg_white,
      padding: "15px 20px",
      display: "flex",
      alignItems: "center",
      width: "190px",
      height: "60px",
      border: "1px solid #EDEFF1",
      borderRadius: "10px",
      fontWeight: 700,
      fontSize: 16,
      color: theme.colors.gray_800,
      lineHeight: "19px",
      // Use the system font instead of the default Roboto font.

      "&:focus": {
        borderRadius: "10px"
      }
    }
  }));
  return (
    <Container>
      <Logo></Logo>
      <Line></Line>
      <Category>서비스</Category>
      <FormControl fullWidth style={{ border: "none" }}>
        <Select
          id="demo-customized-select"
          value={service}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"매드업"}>매드업</MenuItem>
          <MenuItem value={"서비스 추가하기"} disabled>
            서비스 추가하기
          </MenuItem>
        </Select>
      </FormControl>
      <Category>광고 센터</Category>
      <Menu content="대시보드"></Menu>
      <Menu content="광고관리"></Menu>
      <Guide></Guide>
      <Phrase>레버는 함께 만들어갑니다.</Phrase>
      <TermsOfService>이용약관</TermsOfService>
    </Container>
  );
};

const Container = styled.div`
  width: 320px;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg_white};
  padding: 60px 40px;
`;
const Line = styled.div`
  height: 60px;
  width: 240px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_50};
`;
const Category = styled.span`
  display: block;
  margin: 53px 0px 13px 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray_300};
`;
const Phrase = styled.p`
  margin-top: 40px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray_300};
`;
const TermsOfService = styled.p`
  margin-top: 40px;
  margin-left: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray_300};
  text-decoration: underline;
`;

export default SideBar;
