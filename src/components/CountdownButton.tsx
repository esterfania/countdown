import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

interface CountdownButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  isDisabled?: boolean;
}
const ButtonWrapper = styled.button`
  border-radius: 5px;
  border: none;
  height: 5rem;
  display: block;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.25rem;
  transition: background-color 0.2s;
  font-weight: 600;
  svg {
    vertical-align: middle;
    margin-left: 5px;
  }
  &:not(:disabled):hover {
    filter: brightness(0.8);
  }
`;

const ButtonDefault = styled(ButtonWrapper)`
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.grayLine};

  &:disabled {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.text};
    cursor: not-allowed;
    border-bottom: 0.25rem solid ${(props) => props.theme.colors.green};
  }
`;
const ButtonActive = styled(ButtonWrapper)`
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
`;

export function CountdownButton(props: CountdownButtonProps) {
  return props.active ? (
    <ButtonActive type="button" onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
      {<FeatherIcon align-center icon="x" />}
    </ButtonActive>
  ) : (
    <ButtonDefault type="button" onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
      {!props.isDisabled ? (
        <FeatherIcon align-center icon="play" />
      ) : (
        <FeatherIcon align-center icon="check-circle" />
      )}
    </ButtonDefault>
  );
}
