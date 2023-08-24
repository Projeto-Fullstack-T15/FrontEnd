import { styled } from 'styled-components';
import { buttonsVariables } from '../../../utils';
import { IStyleProps } from './interface';

export const ButtonStyle = styled.button<IStyleProps>`
  ${({ $size }) => {
    if ($size === 'large') {
      return `
        height: 48px;
        width: 146px;
    `;
    } else if ($size === 'small') {
      return `
        height: 38px;
        width: 119px;
    `;
    }
  }};

  ${({ $width }) => {
    if ($width) return `width: ${$width};`;
  }}

  ${({ $height }) => {
    if ($height) return `height: ${$height};`;
  }}

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

  border: solid 2px
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

  &:hover {
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

    border: solid 2px
      var(
        ${({ $type }) =>
          buttonsVariables.map((button) => {
            if (button.id === $type) {
              return button.hover.border;
            }
          })}
      );
  }

  &:focus {
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

    border: solid 2px
      var(
        ${({ $type }) =>
          buttonsVariables.map((button) => {
            if (button.id === $type) {
              return button.focus.border;
            }
          })}
      );
  }
`;
