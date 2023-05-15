import React, { useState } from 'react';


const Section1 = () => {
  const text = 'In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.'
  const [para, setPara] = useState(text);
  const [words, setWords] = useState(text.split(" "));

  let spans = ''
  words.forEach((element,i) => {
    spans += `<span id='span-${i}' style='opacity: 0.125'>${element}</span> `
  })

  const handleScroll = () => {
    const scrollPosition = para.scrollTop;

    for (let i = 0; i < words.length; i++) {
      if (scrollPosition >= i) {
        document.getElementById(`span-${i}`).style.opacity = 1;
      }
    }
  };

  return (
    <div className="font-bold w-full text-6xl text-white">
      <p id="paragraph" className='px-6 w-3/4 mx-auto my-10 leading-none' onScroll={handleScroll}>
      <div dangerouslySetInnerHTML={{ __html: spans }} />
      </p>
    </div>
  );
};

export default Section1