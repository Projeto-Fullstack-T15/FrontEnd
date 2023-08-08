import { styled } from 'styled-components';
import { IStyleProps } from './interface';
import { buttonsVariables } from '../../../utils';

export const ButtonStyle = styled.button<IStyleProps>`
  height: 48px;
  width: 146px;

  background-color: var(
    ${({ $type }) =>
      buttonsVariables.map((button) => {
        if (button.id === $type) {
          return button.background;
        }
      })}
  );
  color: var(
    ${({ $type }) =>
      buttonsVariables.map((button) => {
        if (button.id === $type) {
          return button.color;
        }
      })}
  );

  border: solid 1px
    var(
      ${({ $type }) =>
        buttonsVariables.map((button) => {
          if (button.id === $type) {
            return button.border;
          }
        })}
    );

  font-size: 1rem;
  font-weight: 600;

  border-radius: 4px;

  :hover {
    background-color: var(
      ${({ $type }) =>
        buttonsVariables.map((button) => {
          if (button.id === $type) {
            return button.hover.background;
          }
        })}
    );
    color: var(
      ${({ $type }) =>
        buttonsVariables.map((button) => {
          if (button.id === $type) {
            return button.hover.color;
          }
        })}
    );
  }

  :focus {
    background-color: var(
      ${({ $type }) =>
        buttonsVariables.map((button) => {
          if (button.id === $type) {
            return button.focus.background;
          }
        })}
    );
    color: var(
      ${({ $type }) =>
        buttonsVariables.map((button) => {
          if (button.id === $type) {
            return button.focus.color;
          }
        })}
    );
  }
`;
