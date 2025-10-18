import styled from "styled-components";

export const Photo = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
`;

export const Name = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecepieList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  padding: 0 10px;
  background-color: white;
  border-radius: 30px;
`;

export const Statics = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const DifficultyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  background-color: white;
  border-radius: 30px;
  padding: 10px;
`;

export const DifficultyList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;

export const Difficulty = styled.p`
  background-color: burlywood;
  border-radius: 30px;
  padding: 5px 10px;
`;

export const ChosenDifficulty = styled.p`
  background-color: red;
  border-radius: 30px;
  color: white;
  padding: 5px 10px;
`;

export const DifficultyName = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 5px;
`;