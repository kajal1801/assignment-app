import React, { useRef, useEffect, useState } from 'react';


const Section1 = () => {
  const text = 'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.'
  const [words, setWords] = useState(text.split(" "));

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const spansRef = useRef([]);

  useEffect(() => {
    const handleScroll = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const newIndex = currentWordIndex + direction;

      if(newIndex < 0){
        spansRef.current[currentWordIndex].style.opacity = 0.125;
      }
      if (newIndex >= 0 && newIndex < spansRef.current.length) {
        if (direction === 1) {
          spansRef.current[currentWordIndex].style.opacity = 1;
          spansRef.current[newIndex].style.opacity = 1;
          setCurrentWordIndex(newIndex);
        } else {
          spansRef.current[currentWordIndex].style.opacity = 0.125;
          setCurrentWordIndex(currentWordIndex - 1);
        }
      }
    };
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentWordIndex]);


  return (
    <div className="font-bold w-full text-6xl text-white p-20">
      <p>
        {words.map((word, index) => (
          <span key={index} ref={el => spansRef.current[index] = el} style={{ opacity: 0.125 }}>
            {word}{` `}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Section1