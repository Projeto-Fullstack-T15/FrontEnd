import styled from 'styled-components';
import { IStyledModalProps } from '../interfaces';

export const SectionModalStyle = styled.section<IStyledModalProps>`
  width: ${({ $width }) => {
    if ($width) return `${$width}`;
  }};

  height: ${({ $height }) => {
    if ($height) return `${$height}`;
  }};

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 80px;

  border-radius: 5px;
`;

export const TitleAndCloneStyle = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1rem;
  }

  svg {
    height: 24px;
    width: auto;

    cursor: pointer;
  }
`;
