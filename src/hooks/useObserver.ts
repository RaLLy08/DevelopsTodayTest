import { useRef, useCallback } from 'react';

const useObserver = callback => {
	const target = useRef(null);
	const observer = useRef(null);
	const setTarget = useCallback(
		node => {
			if (target.current && observer.current) {
				observer.current.unobserve(target.current);
				observer.current.disconnect();
				observer.current = null;
			}
			if (node) {
				observer.current = new IntersectionObserver(callback);
				observer.current.observe(node);
				target.current = node;
			}
		},
		[target]
	);

	return setTarget;
};

export default useObserver;
