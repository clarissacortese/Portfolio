import { useCallback } from "react";
import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  
  const delay = 18;

  const dot = useRef(null);
  const dotOutline = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const toggleCursorVisibility = useCallback(() => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  }, [dot, dotOutline, cursorVisible]);

  const toggleCursorSize = useCallback(() => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }, [cursorEnlarged, dot, dotOutline]);

  const mouseOverEvent = useCallback(() => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  }, [cursorEnlarged, toggleCursorSize]);

  const mouseOutEvent = useCallback(() => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  }, [cursorEnlarged, toggleCursorSize]);

  const mouseEnterEvent = useCallback(() => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  }, [cursorVisible, toggleCursorVisibility]);

  const mouseLeaveEvent = useCallback(() => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  }, [cursorVisible, toggleCursorVisibility]);

  const mouseMoveEvent = useCallback((e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    endX.current = e.pageX;
    endY.current = e.pageY;
    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  }, [cursorVisible, toggleCursorVisibility, dot, endX, endY]);

  const animateDotOutline = useCallback(() => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }, [_x, _y, endX, endY, delay, dotOutline]);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, [animateDotOutline, mouseEnterEvent, mouseLeaveEvent, mouseMoveEvent, mouseOutEvent, mouseOverEvent]);

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  )
}