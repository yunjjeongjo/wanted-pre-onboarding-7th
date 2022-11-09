import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import { adState } from "@/lib/states/atom";
import { useRecoilState } from "recoil";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { adData } from "@/lib/assets/data/Wanted_FE_ad-list-data-set";
import ADItem from "../ADItem";

const ADView = () => {
  const [ad, setAd] = useRecoilState<string>(adState);
  const handleChange = (event: { target: { value: string } }) => {
    setAd(event.target.value);
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

      "&:focus": {
        borderRadius: "10px"
      }
    }
  }));
  return (
    <Container>
      <ViewHeader>
        <FormControl style={{ border: "none" }}>
          <Select
            id="demo-customized-select"
            value={ad}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={"전체 광고"}>전체 광고</MenuItem>
            <MenuItem value={"진행중"}>진행중</MenuItem>
            <MenuItem value={"중단됨"}>중단됨</MenuItem>
          </Select>
        </FormControl>
        <ADMakeButton>광고 만들기</ADMakeButton>
      </ViewHeader>
      <ADContents>
        {adData.ads.map((item, index) => {
          return <ADItem key={index} adInfo={item}></ADItem>;
        })}
      </ADContents>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 40px;
  width: 1039px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_white};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const ViewHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ADMakeButton = styled.button`
  width: 108px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.bg_white};
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;
const ADContents = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export default ADView;
