import { styled } from "styled-components";

export const StyledModal = styled.aside`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 50%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    >div {
        background-color: white;
        width: 32.5rem;
        box-sizing: border-box;
        border-radius: 0.5rem;

        >header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            width: 100%;
            padding: 1rem 1.5rem;

            >h2 {
                font-size: 1rem;
                font-size: 500;
                color: var(--grey1);
            }

            >button {
                font-size: 1.5rem;
                background: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--grey4);
            }
        }
    }

`;