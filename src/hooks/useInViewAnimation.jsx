// hooks/useInViewAnimation.js
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useInViewAnimation(threshold = 0.2, once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });
  return [ref, isInView];
}
    