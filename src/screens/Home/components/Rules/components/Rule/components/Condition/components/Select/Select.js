import React from "react";
import downArrow from "./images/down-arrow.svg";

import Text from "components/Text";

require("./Select.css");

const SelectWithRef = React.forwardRef((props, ref) => {
  return (
    <Select ref={ref} {...props} />
  );
});

const Select = ({
  ref,
  myRef,
  options,
  selectedOption,
  updateOption,
  showDetail,
  toggleDetail
}) => {
  const content = Object.values(options).map(option =>
    <li
      onClick={(event) => updateOption(event)}
      name="operator"
      className="option"
      key={option}
    >
      {option}
    </li>
  );
  return (
    <div className='select-container' ref={myRef}>
      <div
        className='selected-option'
        onClick={toggleDetail}
      >
        <Text>
          {selectedOption}
        </Text>
        <img
          src={downArrow}
          alt="Down arrow"
        />
      </div>
      {
        showDetail ? (
          <ul className="option-container">
            {content}
          </ul>
        ) : null
      }
    </div>
  )
}

export default SelectWithRef;
