import React from 'react';

interface RichProps {
  text: string;
}

export default function Rich({ text }: RichProps) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-bold text-dark">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
