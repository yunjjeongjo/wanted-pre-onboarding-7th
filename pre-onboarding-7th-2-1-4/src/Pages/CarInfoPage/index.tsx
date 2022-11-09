import axios from "axios";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import InfoHeader from "@/InfoHeader";
import InfoItem from "@/InfoItem";
import React, { useState, useEffect } from "react";

interface Attribute {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

interface Insurance {
  name: string;
  description: string;
}

interface AdditionalProducts {
  name: string;
  amount: number;
}

interface CarInfo {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}

const CarInforPage = () => {
  const { id } = useParams();
  const getCarData = async () => {
    const API_URL = `${process.env.REACT_APP_API_END_POINT}/api/cars`;
    const { data } = await axios.get(API_URL);
    return data.payload;
  };

  const { isLoading, data } = useQuery<CarInfo[], Error, CarInfo | undefined>(
    ["fetchCarInfo", id],
    getCarData,
    {
      select: (list) => list.find((item) => item.id === Number(id))
    }
  );

  const [insurance, setInsurance] = useState<Insurance[]>();
  const [additional, setAdditioanl] = useState<AdditionalProducts[]>();
  useEffect(() => {
    if (data?.insurance) {
      setInsurance(data.insurance);
    }
    if (data?.additionalProducts) {
      setAdditioanl(data.additionalProducts);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <NotList>불러오는 중입니다</NotList>
      ) : data ? (
        <>
          <Image src={data.attribute.imageUrl}></Image>
          <Profile>
            <Brand>{data.attribute.brand}</Brand>
            <Name>{data.attribute.name}</Name>
          </Profile>
          <PriceWrapper>
            <Price>월 {data.amount}원</Price>
          </PriceWrapper>
          <InfoHeader title={"차량 정보"}></InfoHeader>
          <InfoItem title={"차종"} context={data.attribute.segment}></InfoItem>
          <InfoItem title={"연료"} context={data.attribute.fuelType}></InfoItem>
          <InfoItem title={"이용 가능일"} context={data.startDate}></InfoItem>
          {insurance && insurance.length > 0 && (
            <InfoHeader title={"보험"}></InfoHeader>
          )}
          {insurance &&
            insurance.length > 0 &&
            insurance.map((item, index) => {
              return (
                <InfoItem
                  key={index}
                  title={item.name}
                  context={item.description}
                ></InfoItem>
              );
            })}
          {additional && additional.length > 0 && (
            <InfoHeader title={"추가상품"}></InfoHeader>
          )}
          {additional &&
            additional.length > 0 &&
            additional.map((item, index) => {
              return (
                <InfoItem
                  key={index}
                  title={item.name}
                  context={item.amount}
                ></InfoItem>
              );
            })}
        </>
      ) : (
        <NotList>차량 정보가 없습니다</NotList>
      )}
    </>
  );
};

const Image = styled.img`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  height: 205px;
`;

const Profile = styled.div`
  padding: 20px 20px 34px 20px;
`;
const Brand = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
`;
const Name = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;
const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
`;
const Price = styled.h3`
  font-size: 17px;
  position: relative;
  right: 22px;
`;
const NotList = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;

export default CarInforPage;
