import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [count, setCount] = useState(rating);
  console.log("onChange", onChange)
  return (
    <>
      {/* <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
      /> */}
      <div className="rating-input">
        <div className={count < 1 ? "empty" : "filled"}
          // if (onChange)
          onMouseEnter={!disabled ? (() => setCount(1)) : undefined}
          onMouseLeave={!disabled ? (() => setCount(rating)) : undefined}
          onClick={!disabled ? (() => onChange(1)) : undefined}
          // onClick={onChange ? (() => onChange(setRating(1))) : undefined}
        >
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 2 ? "empty" : "filled"}
          onMouseEnter={!disabled ? (() => setCount(2)) : undefined}
          onMouseLeave={!disabled ? (() => setCount(rating)) : undefined}
          onClick={!disabled ? (() => onChange(2)) : undefined}
          >

          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 3 ? "empty" : "filled"}
          onMouseEnter={!disabled ? (() => setCount(3)) : undefined}
          onMouseLeave={!disabled ? (() => setCount(rating)) : undefined}
          onClick={!disabled ? (() => onChange(3)) : undefined}
          >
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 4 ? "empty" : "filled"}
          onMouseEnter={!disabled ? (() => setCount(4)) : undefined}
          onMouseLeave={!disabled ? (() => setCount(rating)) : undefined}
          onClick={!disabled ? (() => onChange(4)) : undefined}
          >
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 5 ? "empty" : "filled"}
          onMouseEnter={!disabled ? (() => setCount(5)) : undefined}
          onMouseLeave={!disabled ? (() => setCount(rating)) : undefined}
          onClick={!disabled ? (() => onChange(5)) : undefined}
          >
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
