import PropTypes from "prop-types";
import { IoMdTimer } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import {
  Photo,
  Name,
  Item,
  RecepieList,
  List,
  Statics,
  DifficultyBox,
  DifficultyList,
  Difficulty,
  ChosenDifficulty,
  DifficultyName,
} from "./Recepie.styled.jsx";

export const Recepies = ({ data }) => {
  const newList = data.map((item) => {
    const difficulties = ["easy", "medium", "hard"];

    return (
      <Item key={item.name}>
        <Photo src={item.image} alt={item.name} />
        <Name>{item.name}</Name>

        <List>
          <Statics><IoMdTimer /> <p>{item.time} min</p></Statics>
          <Statics><IoStatsChart /> <p>{item.calories} calories</p></Statics>
          <Statics><AiTwotonePieChart /> <p>{item.servings} servings</p></Statics>
        </List>

        <DifficultyBox>
          <DifficultyName>Difficulty</DifficultyName>
          <DifficultyList>
            {difficulties.map((level, i) => (
              <li key={level}>
                {item.difficulty === i ? (
                  <ChosenDifficulty>{level}</ChosenDifficulty>
                ) : (
                  <Difficulty>{level}</Difficulty>
                )}
              </li>
            ))}
          </DifficultyList>
        </DifficultyBox>
      </Item>
    );
  });

  return <RecepieList>{newList}</RecepieList>;
};

Recepies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      difficulty: PropTypes.number.isRequired,
    })
  ).isRequired,
};
