import styled from "styled-components";

interface OptionType {
  key: string;
  name: string;
}

const options: OptionType[] = [
  { key: "all", name: "전체" },
  { key: "E", name: "대형" },
  { key: "D", name: "중형" },
  { key: "C", name: "소형" },
  { key: "SUV", name: "SUV" }
];

interface CategoryType {
  handleClick: (category: string) => void;
  selectedOption: string;
}

const Categories = ({ handleClick, selectedOption }: CategoryType) => {
  return (
    <Container>
      {options.map(({ key, name }: OptionType) =>
        selectedOption === key ? (
          <SelectedCategory key={key} onClick={() => handleClick(key)}>
            {name}
          </SelectedCategory>
        ) : (
          <UnSelectedCategory key={key} onClick={() => handleClick(key)}>
            {name}
          </UnSelectedCategory>
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-left: 12px;
  align-items: center;
`;

const SelectedCategory = styled.div`
  width: 67px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 62px;
  background-color: black;
  color: white;
  margin-right: 8px;
  font-weight: 700;
  cursor: pointer;
`;

const UnSelectedCategory = styled.div`
  width: 67px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 62px;
  background-color: #d9d9d9;
  color: black;
  margin-right: 8px;
  font-weight: 700;
  cursor: pointer;
`;

export default Categories;
