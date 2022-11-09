import React, { useCallback } from "react";
import Categories from "@/Components/Categories";
import CarList from "@/Components/CarList";
import { categoryState } from "@/lib/states/atom";
import { useRecoilState } from "recoil";

const MainPage = () => {
  const [category, setCategory] = useRecoilState<string>(categoryState);
  const handleClick = useCallback(
    (category: string): void => setCategory(category),
    []
  );
  return (
    <>
      <Categories
        handleClick={handleClick}
        selectedOption={category}
      ></Categories>
      <CarList category={category}></CarList>
    </>
  );
};

export default MainPage;
