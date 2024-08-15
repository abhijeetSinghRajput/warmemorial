import React, { useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { IoMdAddCircle } from 'react-icons/io';

function typeEffect(list, element) {
  if (!element) return;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function updateText() {
    const segment = list[textIndex];
    const updatedText = isDeleting
      ? segment.slice(0, charIndex--)
      : segment.slice(0, charIndex++);
    
    element.textContent = updatedText;
    if (!isDeleting && charIndex > segment.length) {
      isDeleting = true;
      setTimeout(updateText, 2000); // Pause after typing
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      charIndex = 0;
      textIndex = (textIndex + 1) % list.length; // Move to the next text
      setTimeout(updateText, 2000); // Pause before starting new text
    } else {
      setTimeout(updateText, isDeleting ? 50 : 100); // Speed of typing and deleting
    }
  }

  updateText();
}

function Landing() {
  const textRef = useRef(null);
  const list = [
    'independence day',
    'indian army',
    'war memorial',
    // 'indian navy',
    // 'indian airforce',
  ];

  useEffect(() => {
    typeEffect(list, textRef.current);
  }, [list]);

  return (
    <div id="landing">
      <button>
      <Link to='/addwarrior/undefined'>
        add warrior
      </Link>
      </button>
      <div className='text' ref={textRef}>indian army</div>
      <div className="img-container">
        <img src='./assets/army1.png' alt="Army" />
      </div>
    </div>
  );
}

export default Landing;
