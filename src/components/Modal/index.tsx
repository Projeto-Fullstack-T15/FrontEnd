import { ReactNode } from "react";
import { StyledModal } from "./style"
import { IoMdClose } from "react-icons/io";

interface ModalProps {
	children: ReactNode;
	title: string;
	closeFunction: () => void;
}

export const Modal = ({ children, title, closeFunction }: ModalProps) => {
	return (
		<StyledModal>
			<div>
				<header>
					<h2> {title} </h2>
					<button>
						<IoMdClose />
					</button>
				</header>
				{children}
			</div>
		</StyledModal>
	);
}