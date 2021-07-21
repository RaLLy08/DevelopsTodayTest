import { useEffect, useMemo, useRef, useState } from "react";

interface AnimateTextInterface {
	speed?: number;
	text: string;
}

// type StepPointType = 'n' | 'n^2' | 'n^2&swap';

// type IndexedValueType = {
// 	readonly index: number;
// 	readonly value: any;
// };

// interface SortingGeneratorInterface<
// 	T = Array<IndexedValueType>,
// 	TReturn = Array<IndexedValueType>,
// 	TNext = Array<IndexedValueType>
// > extends Iterator<T, TReturn, TNext> {
// 	// NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
// 	next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
// 	return(value: TReturn): IteratorResult<T, TReturn>;
// 	throw(e: any): IteratorResult<T, TReturn>;
// 	[Symbol.iterator](): Generator<T, TReturn, TNext>;
// }

// function* bubbleSort(array: Array<IndexedValueType>, stepPoint: StepPointType = 'n'): SortingGeneratorInterface {
// 	const newState = [...array];
// 	let swapped;

// 	while (!swapped) {
// 		swapped = true;
// 		for (let i = 0; i < newState.length - 1; i++) {
// 			if (newState[i + 1].index < newState[i].index) {
// 				[newState[i], newState[i + 1]] = [newState[i + 1], newState[i]];
// 				swapped = false;

// 				if (stepPoint === 'n^2&swap') yield [...newState];
// 			}

// 			if (stepPoint === 'n^2') yield [...newState];
// 		}
// 		if (stepPoint === 'n') yield [...newState];
// 	}

// 	return newState;
// }

const strToSteps = (str: string): Array<string> => {
	let result: Array<string> = [];

	Array.from(str).reduce((prev, curr) => {
		result.push(prev + curr);
		return prev + curr;
	}, "")

	return result;
};


const AnimateText = (props: AnimateTextInterface) => {
	const { text, speed = 100 } = props;
    // const bubbledFrames = bubbleSort(frames)
	const frames: Array<string> = useMemo(() => strToSteps(text), []); 
	// by words speed / 10 or word math
	// const sortedText: Array<WordForSortType> = Array.from(text).map((el, i) => ({ value: el, index: i }));
	// const mixedText: Array<WordForSortType> = sortedText.sort(() => Math.random() - 0.5);
	
	const [frame, setFrame] = useState<string>(frames[0]);
	const timeoutRef = useRef<any>();
	const countRef = useRef<number>(1);

	useEffect(() => {
		countRef.current = 0;
		// init();
		const update = () => {
			setFrame(frames[countRef.current]);

			if (countRef.current < frames.length - 1) {
				timeoutRef.current = setTimeout(() => {
					update();
				}, speed);

				countRef.current += 1;
			} else {
				countRef.current = 0;
			}
		};

		update();

		return () => clearTimeout(timeoutRef.current);
	}, [frames]);
	// clsx(!isDone && classes.textBox, 'flex')
	return (
		<>
            {frame}
		</>
	);
};

export default AnimateText;
