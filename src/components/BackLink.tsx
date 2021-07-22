import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export type ButtonType = {
	// onClick?: React.MouseEventHandler<HTMLButtonElement>;
	href: string;
};

const Btn = styled.div`
	display: inline-block;
    padding-top: 3px;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
	box-shadow 0.15s ease-in-out;
	color: #fff;
	background-color: #dc3545;
	border-color: #dc3545;
`;

const BackButton: React.FC<ButtonType> = props => {
	return (
        <>  
            <Image src="/back.svg" width={28} height={30} />
			
            <Link href={props.href}>
                {props.children} 
            </Link>
        </>
	);
};

export default BackButton;
