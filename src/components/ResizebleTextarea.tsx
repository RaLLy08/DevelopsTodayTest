import { ChangeEvent, useRef, useState  } from "react";
import styled from "styled-components";

type TextareaType = {
	error: boolean;
	height: number;
};

const Textarea = styled.textarea<TextareaType>`
	margin: 0.6rem;
	padding: 0.9rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	overflow: hidden;
	resize: none;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	width: 100%;
	:hover,
	:focus,
	:active {
		outline: none;
		border-color: #0070f3;
	}
	${({ height }) =>
		height &&
		`
    		height: ${height}px;
  		`};
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
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const ResizebleTextarea: React.FC<ResizebleTextareaType> = ({ value, onChange, minRows = 1, maxRows = 5, error }) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [height, setHeight] = useState(56);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		// const currentRows = Math.round(event.target.scrollHeight / (textareaLineHeight * minRows));
		
		if (event.target.scrollHeight > height) {
			setHeight(event.target.scrollHeight + 2);
		}
	};

	return (
		<Textarea
			ref={textareaRef}
			height={height}
			error={!!error}
			value={value}
			rows={minRows}
			onChange={e => {
				onChange && onChange(e);
				handleChange(e);
			}}
		/>
	);
};

export default ResizebleTextarea;