import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  // Create ref
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // Check if its current Modal and Click is not happen inside that Modal then close
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      // Listen to click
      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
