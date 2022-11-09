import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import IconBack from "../IconBack";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [title, setTitle] = useState("전체차량");

  const handleTitle = useCallback(() => {
    if (pathname === "/") {
      setTitle("전체차량");
    } else if (pathname.match("/detail/*")) {
      setTitle("차량상세");
    } else {
      setTitle("NotFound");
    }
  }, [pathname]);

  useEffect(() => {
    handleTitle();
  }, [pathname]);

  return (
    <Container>
      {title === "차량상세" && (
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconBack></IconBack>
        </IconButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

const IconButton = styled.button`
  position: absolute;
  left: 10px;
  border: none;
  background-color: transparent;
`;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 700;
`;
export default Header;
