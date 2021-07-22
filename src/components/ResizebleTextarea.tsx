import { ChangeEvent, ChangeEventHandler, HtmlHTMLAttributes, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";


const Textarea = styled.textarea`
	margin: 0.6rem;
	padding: 0.9rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	width: 100%;
	:hover,
	:focus,
	:active {
		outline: none;
		border-color: #0070f3;
	}
	${({ error }) =>
		error &&
		`
    		border-color: red;
  		`}
`;



type ResizebleTextareaType = {
	value?: string;
	minRows?: number;
	maxRows?: number;
	error?: boolean;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const ResizebleTextarea: React.FC<ResizebleTextareaType> = ({ value, onChange, minRows = 1, maxRows = Infinity, error }) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [rows, setRows] = useState(minRows);
	const [currentValue, setValue] = useState('');
	const textareaLineHeight = 48;
	const prevRow = useRef(72);
	
	// if (error && textareaRef.current) {
	// 	textareaRef.current.style.borderColor = 'red';
	// } else if (textareaRef.current) {
	// 	textareaRef.current.style. = active;
	// }

	// const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		// const currentRows = Math.round(event.target.scrollHeight / (textareaLineHeight * minRows));

		// if (event.target.scrollHeight !== prevRow.current) {
		// 	prevRow.current = event.target.scrollHeight;
		// 	setRows(rows + 1);
		// }
		// setRows(currentRows);
		// setValue(event.target.value);
	// };

	return <Textarea error={error} ref={textareaRef} value={value} rows={rows} onChange={onChange} />;
};

export default ResizebleTextarea;