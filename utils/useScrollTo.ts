import React from "react";

type ScrollOptions = {
  scrollBehavior?: ScrollBehavior;
};

export default function useScrollTo<T extends HTMLElement | null>(
  target: React.RefObject<T> | T,
  options: ScrollOptions = {}
) {
  return React.useCallback(() => {
    if (target === null) {
      return;
    }
    const current = target instanceof HTMLElement ? target : target.current;
    const {scrollBehavior = "auto"} = options;
    let scrollTarget: number;
    if (current) {
      scrollTarget = current.offsetTop;
      window.scroll({top: scrollTarget, behavior: scrollBehavior});
    }
  }, [options, target]);
}
