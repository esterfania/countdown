import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.grayLine};
  border-radius: 5px;
  border: none;
  height: 5rem;
  display: block;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.25rem;
  transition: background-color 0.2s;
  font-weight: 600;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.blueDark};
  }

  &:disabled {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.text};
    cursor: not-allowed;
    border-bottom: 0.25rem solid ${(props) => props.theme.green};
  }
  > img {
    padding-left: 0.5rem;
    vertical-align: middle;
  }
`;
const ButtonWrapperActive = styled.button`
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  border: none;
  height: 5rem;
  display: block;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.25rem;
  transition: background-color 0.2s;
  font-weight: 600;

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }
`;
interface CountdownButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  isDisabled?: boolean;
}

export function CountdownButton(props: CountdownButtonProps) {
  return props.active ? (
    <ButtonWrapperActive type="button" onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </ButtonWrapperActive>
  ) : (
    <ButtonWrapper type="button" onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </ButtonWrapper>
  );
}
