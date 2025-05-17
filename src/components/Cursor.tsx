import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.classList.contains('cursor-pointer')) {
        setLinkHovered(true);
      }
    };

    const handleLinkHoverLeave = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleLinkHoverEnter);
    document.addEventListener('mouseout', handleLinkHoverLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleLinkHoverEnter);
      document.removeEventListener('mouseout', handleLinkHoverLeave);
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-[999] rounded-full mix-blend-difference transition-transform duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '50px' : '12px',
          height: linkHovered ? '50px' : '12px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%)`,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      ></div>
    </>
  );
};

export default Cursor;