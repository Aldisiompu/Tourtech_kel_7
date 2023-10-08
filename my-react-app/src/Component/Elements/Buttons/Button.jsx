import { Children } from "react";

const Button = (props) => {
  const { color, Children, onClick = () => {}, type = "button" } = props;
  return (
    <>
      <button
        type={type}
        className={`${color} hover:bg-blue-600 rounded px-3 text-white fw-bold text-sm w-full  `}
        onClick={onClick}
      >
        {Children}
      </button>
    </>
  );
};

export default Button;
