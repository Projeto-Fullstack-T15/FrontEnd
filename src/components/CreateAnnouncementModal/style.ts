import { styled } from "styled-components";

export const AnnouncementFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.625rem;
    padding-bottom: 1.25rem;

    >h3 {
        font-family: var(--font-body);
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: black;
    }
`;

export const FullWidthInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    position: relative;

    >label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--grey1);
    }

    >input {
        box-sizing: border-box;
        height: 3rem;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        border: 0.1rem solid var(--grey7);
        font-size: 1rem;
        color: var(--grey3);
    }

    >svg {
        position: absolute;
        top: calc(55% );
        right: 1rem;
        font-size: 1rem;
        color: var(--grey4);
        cursor: pointer;
        
        :hover {
            color: var(--grey2);
            transform: scale(1.1);
            transition: 120ms ease-in-out;
        }
    }
`;

export const HalfInputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.875rem;
    row-gap: 1.5rem;
`

export const HalfWidthInput = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 0.5rem;
    width: calc(50% - 0.5rem);
    box-sizing: border-box;

    >label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--grey1);
    }

    >input {
        box-sizing: border-box;
        height: 3rem;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        border: 0.1rem solid var(--grey7);
        font-size: 1rem;
        width: 100%;
        color: var(--grey3);
    }
`;

export const FullWidthSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    >label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--grey1);
    }

    >div {
        width: 100%;
        position: relative;

        >select {
            box-sizing: border-box;
            height: 3rem;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.625rem;
            flex-shrink: 0;
            border-radius: 0.25rem;
            border: 0.1rem solid var(--grey7);
            font-size: 1rem;
            color: var(--grey3);
            width: 100%;
            appearance: none;

            :focus, :active, :hover {
                outline: 0;
                border: 0.1rem solid var(--grey-5)
            }

            >option {
                height: 3rem;
            }
        }

        >svg {
            font-size: 1.25rem;
            color: var(--grey4);
            pointer-events: none;

            position: absolute;
            top: calc(50% - 0.625rem);
            right: 1.25rem;
        }
    }
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    >label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--grey1);
    }

    >textarea {
        resize: vertical;
        min-height: 2rem;
        height: 5rem;
        max-height: 10rem;
        padding: 0.5rem 1rem;
        gap: 0.625rem;
        border-radius: 0.25rem;
        border: 0.1rem solid var(--grey7);
        font-size: 1rem;
    }    
`;

export const AddFieldButton = styled.button`
    padding: 0.75rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    border: 0.1rem solid var(--brand-4);
    background-color: var(--brand4);
    color: var(--brand1);
    font-weight: 500;

    &:active{
        filter: brightness(1.1);
    }

    &:hover{
        transition: 125ms ease-in-out;
        border: 0.1rem solid var(--brand-1);
        background-color: var(--brand1);
        color: var(--brand4);
    }
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.625rem;
    margin-top: 1.126rem;
`;

export const CancelButton = styled.button`
    padding: 0.75rem 1.75rem;
    display: inline-flex;
    height: 3rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    border: 0.1rem solid var(--grey6);
    background: var(--grey6);
    color: var(--grey2);
    font-size: 1rem;

    &:active{
        filter: brightness(1.1);
    }

    &:hover{
        transition: 125ms ease-in-out;
        border: 0.1rem solid var(--grey2);
        background-color: var(--grey2);
        color: var(--grey6);
    }
`;

export const CreateAnnouncementButton = styled.button`
    padding: 0.75rem 1.75rem;
    display: inline-flex;
    height: 3rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    border: 0.1rem solid var(--brand3);
    background-color: var(--brand3);
    color: var(--brand4);
    font-size: 1rem;

    &:active{
        filter: brightness(1.1);
    }

    &:disabled {
        pointer-events: none;
    }

    &:hover{
        transition: 125ms ease-in-out;
        border: 0.1rem solid var(--brand1);
        background-color: var(--brand1);
        color: var(--brand4);
    }
`;