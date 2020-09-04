import React from 'react';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(elem => (
        <button key={elem} name={elem} onClick={e => onLeaveFeedback(e)}>
          {elem}
        </button>
      ))}
    </>
  );
}
