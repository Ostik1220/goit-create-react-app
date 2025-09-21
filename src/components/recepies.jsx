import PropTypes from "prop-types";

export const Recepies = ({data}) => {
const newList = data.map((item) => (
            <li>
            <h2>{item.name}</h2>
            <p>час приготування {item.time}</p>
            <p>Калорій: {item.calories}</p>
            <img src={item.image} alt={item.name} />
            <p>Складність: {item.difficulty}</p>
            </li>
  ));
  return newList;
}


Recepies.propTypes = {
      data: PropTypes.array.isRequired
}