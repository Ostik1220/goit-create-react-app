import PropTypes from "prop-types";
import styles from "./recepie.module.css";
import { IoMdTimer } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";


export const Recepies = ({ data }) => {
  const newList = data.map((item) => {
    let difficulty = "";

    if (item.difficulty === 0) {
       difficulty = <>
      <ul className={styles.difficultyList}> 
            <li className={styles.chosen}>
           <p className={styles.chosenDifficulty}>easy</p> 
           </li>
           <li className={styles.difficulties}>
           <p className={styles.difficulty}>medium</p> 
           </li>
           <li className={styles.difficulties} >
           <p className={styles.difficulty}>hard</p> 
           </li>
      </ul>
      </>;
    } else if (item.difficulty === 1) {
      difficulty = <>
      <ul className={styles.difficultyList}> 
            <li className={styles.difficulties}>
           <p className={styles.difficulty}>easy</p> 
           </li>
            <li className={styles.chosen}>
           <p className={styles.chosenDifficulty}>medium</p> 
           </li>
            <li className={styles.difficulties}>
           <p className={styles.difficulty}>hard</p> 
           </li>
      </ul>
      </>;
    } else if (item.difficulty === 2) {
      difficulty = <>
      <ul className={styles.difficultyList}> 
            <li className={styles.difficulties}>
           <p className={styles.difficulty}>easy</p> 
           </li>
           <li className={styles.difficulties}>
           <p className={styles.difficulty}>medium</p> 
           </li>
           <li className={styles.chosen}>
           <p className={styles.chosenDifficulty}>hard</p> 
           </li>
      </ul>
      </>;
    }

    return (
      <li key={item.name}  className={styles.item}>
        <img src={item.image} alt={item.name} className={styles.photo}/>
        <h2 className={styles.name}>{item.name}</h2>
        <ul className={styles.list}>
        <li className={styles.statics}><IoMdTimer/>  <p className={styles.time}>{item.time} min</p></li>
        <li className={styles.statics}><IoStatsChart/>  <p className={styles.calories}>{item.calories} calories</p></li>
        <li className={styles.statics}><AiTwotonePieChart/>  <p className={styles.servings}>{item.servings} servings</p></li>
        </ul>
        <div className={styles.difficultyBox}>
            <p className={styles.difficultyName}>Difficulty</p>
            {difficulty}
        </div>
      </li>
    );
  });

  return <ul className={styles.recepies}>{newList}</ul>;
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
