import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 24px;
  margin-top: 64px;
  @media (min-width: 720px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 720px) {
    max-width: 1120px;
    margin: 0 auto;
  }

  & > input {
    margin-bottom: 24px;
  }

  input + button {
    margin-left: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  margin-top: 24px;
  button:first-child {
    margin-right: 24px;
  }
`;

export const InputList = styled.div`
  span {
    position: absolute;
    margin-left: 12px;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: #e9e9e9;
  }
  input[type='checkbox']:checked:before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;

export const List = styled.li`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.primary};
`;
