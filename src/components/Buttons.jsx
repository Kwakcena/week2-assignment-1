import React from 'react';
import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          number={i}
          onClick={onClick}
        />
      ))}
    </p>
  );
}
