import axios from "axios";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import CarItem from "../CarItem";
// import React, { useState, useEffect } from "react";
// import CarItem from "../CarItem";

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

interface CarInfoResponse {
  payload: CarInfo[];
}

interface Props {
  category: string;
}

const CarList = ({ category }: Props) => {
  const getCarData = async () => {
    if (category === "all") {
      const API_URL = `${process.env.REACT_APP_API_END_POINT}/api/cars`;
      const { data } = await axios.get(API_URL);
      return data;
    } else {
      const API_URL = `${process.env.REACT_APP_API_END_POINT}/api/cars?segment=${category}`;
      const { data } = await axios.get(API_URL);
      return data;
    }
  };

  const { isLoading, data } = useQuery<CarInfoResponse, Error>(
    ["fetchCarInfo", category],
    getCarData
  );
  return (
    <>
      {isLoading ? (
        <NotList>불러오는 중</NotList>
      ) : data && data.payload.length !== 0 ? (
        data.payload.map((carInfo) => {
          return <CarItem key={carInfo.id} carInfo={carInfo}></CarItem>;
        })
      ) : (
        <NotList>차량이 없습니다</NotList>
      )}
    </>
  );
};

const NotList = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
`;

export default CarList;
