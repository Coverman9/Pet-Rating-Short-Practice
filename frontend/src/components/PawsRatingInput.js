import { useState } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [count, setCount] = useState(rating);
  return (
    <>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={onChange}
      />
      <div className="rating-input">
        <div className={count < 1 ? "empty" : "filled"}
          onMouseEnter={(() => setCount(1))}
          onMouseLeave={(() => setCount(rating))}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 2 ? "empty" : "filled"}
          onMouseEnter={(() => setCount(2))}
          onMouseLeave={(() => setCount(rating))}>

          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 3 ? "empty" : "filled"}
          onMouseEnter={(() => setCount(3))}
          onMouseLeave={(() => setCount(rating))}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 4 ? "empty" : "filled"}
          onMouseEnter={(() => setCount(4))}
          onMouseLeave={(() => setCount(rating))}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={count < 5 ? "empty" : "filled"}
          onMouseEnter={(() => setCount(5))}
          onMouseLeave={(() => setCount(rating))}>
          <i className="fa fa-paw"></i>
        </div>
      </div>
    </>
  );
};

export default PawsRatingInput;
