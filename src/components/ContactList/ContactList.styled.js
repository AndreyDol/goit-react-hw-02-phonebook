import styled from 'styled-components';

export const ListWrap = styled.ul`
  width: 300px;
  flex-direction: column;
  display: flex;
  gap: 12px;
`;

export const ItemWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrap = styled.button`
  margin-left: 20px;
  border: 0px solid gray;
  border-radius: 1px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: aqua;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
