import { useState, useCallback } from 'react';
import useObserver from './useObserver';

const useInView = () => {
	const [state, setState] = useState(false);
	const callback = useCallback(([entry], observer) => {
		const inThreshold = observer.thresholds.some(treshold => entry.intersectionRatio >= treshold);
		const inView = inThreshold && entry.isIntersecting;
		setState(inView);
	}, []);
	const setTarget = useObserver(callback);
	return [setTarget, state];
};

export default useInView;
