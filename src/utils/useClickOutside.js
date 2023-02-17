import React from "react";

const useClickOutside = (ref, onClickOutside, excludedTargets = []) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !excludedTargets.includes(event.target.id) &&
        !excludedTargets.includes(event.target.className)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, excludedTargets]);
};

export default useClickOutside;
