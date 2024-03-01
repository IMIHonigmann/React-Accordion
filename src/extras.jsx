import { useEffect, useState } from 'react';

function MyComponent() {
  const [images, setData] = useState(null);
  const [currentIndex, setIndex] = useState(1);
  const [animate, setAnimate] = useState(false);
  const animationTimer = 200;
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  const fixedStyle = {
    position: 'fixed', 
    zIndex: 100, 
    top: 50,
    right: 50, 
    margin: '20px'
  }

  const scrollToElement = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const scrollToBottom = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
  }


  const changeIndex = (amount) => {
    const newIndex = currentIndex + amount;
    setTimeout(() => {
      if (newIndex >= images.length) {
        setIndex(1);
      } else if (newIndex < 1) {
        setIndex(images.length - 1);
      } else {
        setIndex(newIndex);
      }
    }, animationTimer);
    setAnimate(true);
  };
  
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, animationTimer);
      return () => clearTimeout(timeout);
    }
  }, [animate]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
    .then(res => {
      if(!res.ok) {
        throw new Error('Request failed')
      }
      return res.json();
    })
    .then(data => data.images)
    .then(data => setData(data));
  }, []);


  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <button onClick={scrollToBottom} style={fixedStyle}>v</button>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src={images[currentIndex]} style={{ width: '100%' }} className={animate ? 'fade-out' : 'fade-in'}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(255, 255, 255, 0.5)', padding: '5px' }}>
      {currentIndex}
      <div>
        <button onClick={() => changeIndex(-1)}  style={{ position: 'absolute', top: '50%', left: '-200%', transform: 'translate(-600%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '5px', paddingTop: '200px' }}>
          👈
        </button>
        <button onClick={() => changeIndex(+1)}  style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(600%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '5px', paddingTop: '200px' }}>
          👉
        </button>
      </div>
      </div>
    </div>

    <p style={{fontSize: '100px'}}>
      {dummyText}
    </p>
    <button onClick={scrollToElement}>Scroll to Top</button>
    </>
  );
}

export default MyComponent;
