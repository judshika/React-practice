import React, { useRef, useEffect } from 'react';
function FocusInput() {
  const inputRef = useRef(null); 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input type="text" ref={inputRef} placeholder="Type here..." />
    </div>
  );
}

export default FocusInput;
