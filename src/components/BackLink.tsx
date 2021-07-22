import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export type ButtonType = {
	// onClick?: React.MouseEventHandler<HTMLButtonElement>;
	href: string;
};

const Pointer = styled.div`
	cursor: pointer;
	margin-top: 4px;
`;

const BackButton: React.FC<ButtonType> = props => {
	return (
		<>
			<Link href={props.href}>
				<Pointer>
					<Image src="/back.svg" width={28} height={30} />
				</Pointer>
			</Link>

			<Link href={props.href}>{props.children}</Link>
		</>
	);
};

export default BackButton;
