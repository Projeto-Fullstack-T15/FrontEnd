import styled from "styled-components";
import { TrackStyleProps } from "./interface";

export const RangeInputStyle = styled.div`
  	position: relative;
	width: 100%;
	margin: auto;
	height: max-content;
	padding: 0.25rem;
	box-sizing: border-box;

	>input[type="range"] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 100%;
		outline: none;
		position: absolute;
		margin: auto;
		top: 50% + 0.25rem;
		bottom: 0;
		background-color: transparent;
		z-index: 1;
		pointer-events: none;
	}

	>input[type="range"]::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		height: 0.25rem;
	}

	>input[type="range"]::-moz-range-track {
		-moz-appearance: none;
		height: 0.25rem;
	}

	>input[type="range"]::-ms-track  {
		appearance: none;
		height: 0.25rem;
	}

	>input[type="range"]::-webkit-slider-thumb{
		-webkit-appearance: none;
		width: 0.75rem;
		height: 0.75rem;
		cursor: pointer;
		border-radius: 50%;
		background-color: #9747FF;
		pointer-events: auto;
		margin-top: -0.5rem;

		&:active {
			background-color: white;
			border: 3px solid blue;
		}
	}

	>input[type="range"]::-moz-range-thumb{
		-moz-appearance: none;
		width: 1.75rem;
		height: 1.75rem;
		cursor: pointer;
		border-radius: 50%;
		background-color: blue;
		pointer-events: auto;

		&:active {
			background-color: white;
			border: 3px solid blue;
		}
	}

	>input[type="range"]::-ms-thumb {
		appearance: none;
		width: 1.75rem;
		height: 1.75rem;
		cursor: pointer;
		border-radius: 50%;
		background-color: blue;
		pointer-events: auto;

		&:active {
			background-color: white;
			border: 3px solid blue;
		}
	}

	>p {
		position: absolute;
		bottom: 5rem;
		font-size: 2rem;
	}

`;

export const TrackStyle = styled.div<TrackStyleProps>`
 	width: 100%;
	height: 0.25rem;
	background-color: rgba(0,0,0, 0.1);
	${(props) => {
		return `background: linear-gradient(to right, rgba(0,0,0, 0.15) ${props.p1}%, #9747FF ${props.p1}%, #9747FF ${props.p2}%, rgba(0,0,0, 0.15) ${props.p2}%);`
	}}
	border-radius: 0.25rem;
`;