import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
const scrollAtom = atom({
  key: 'scrollAtom',
  default: 0,
});

export function useSetScroll() {
  const setScrollPosition = useSetRecoilState(scrollAtom);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return setScrollPosition;
}

export function useScroll() {
  return useRecoilValue(scrollAtom);
}
