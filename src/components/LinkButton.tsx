import styled from "styled-components"
import Link from 'next/link';

export type ButtonType = {
	// onClick?: React.MouseEventHandler<HTMLButtonElement>;
	href: string
};

const Btn = styled.div`
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
	color: #007bff;
	border-color: #007bff;
	:hover {
		color: #fff;
		background-color: #007bff;
		border-color: #007bff;
	}
`;

const LinkButton: React.FC<ButtonType> = (props) => {
	
	return (
		<Link href={props.href}>
			<Btn>{props.children}</Btn>
		</Link>
	);
};

export default LinkButton;