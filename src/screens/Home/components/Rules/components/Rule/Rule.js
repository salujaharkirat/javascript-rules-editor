import React from "react";
import PropTypes from "prop-types";

import Condition from "./components/Condition";

import doc from "./images/doc.svg";
import add from "./images/add.svg";
import deleteIcon from "./images/delete.svg";


const propTypes = {
  // deleteCondition: PropTypes.func.isRequired,
  deleteRule: PropTypes.func.isRequired,
  rule: PropTypes.object.isRequired,
  addCondition: PropTypes.func.isRequired
};

const Rule = ({
  rule,
  deleteRule,
  addCondition
}) => {
  const content = [];
  for (const condition of rule.conditions) {
    content.push(
      <Condition
        key={condition.id}
        condition={condition}
        ruleId={rule.id}
      />
    );
  }
  return (
    <div
      style={{
        border: '2px solid #6686F7',
        marginTop: '30px',
        width: '50%',
        padding: '30px',
        background: "#E6EBFE",
        borderRadius: '1.5em 1em',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img
          src={deleteIcon}
          onClick={() => deleteRule(rule.id)}
          alt="Delete Rule"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: -2,
          top: -2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            padding: 10,
            background: '#6686F7',
            borderRadius: '2em',
            marginRight: '0.8em'
          }}
        >
          <img
            src={doc}
            className="App-logo"
            alt="logo"
          />
        </div>
        <span
          style={{
            fontFamily: 'nunito',
            color: "#4a4a4a",
            fontSize: "0.85em"
          }}
        >
          When
          &nbsp;
            <b
              style={{
                color: "#6686F7",
                textDecoration: "underline",
                fontSize: "1em"
              }}
            >
              All
            </b>
            &nbsp;
          of the conditions meet
        </span>
      </div>
      <div style={{marginTop: 30}}>
        {content}
      </div>
      <div
        style={{
          display: 'inline-block'
        }}
      >
        <div
          style={{
            background: "#FFE7E5",
            border: '1px solid #F77566',
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            borderRadius: '2em 0.8em 0.8em 2em'
          }}
        >
          <div
            style={{
              background: "#F77566",
              display: 'inline-block',
              padding: '0.4em',
              borderRadius: '2em'
            }}
          >
            <img
              src={add}
              onClick={addCondition}
              alt="Add Condition"
            />
          </div>
          <div
            style={{
              padding: '0em 1em 0em 1em'

            }}
          >
            <span
              style={{
                fontFamily: 'nunito',
                fontSize: '0.9em',
                fontWeight: '700',
                color: "#F77566"
              }}
            >
              Add Condition
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}


Rule.propTypes = propTypes;

export default Rule;
