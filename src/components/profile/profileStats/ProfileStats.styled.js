import styled from "@emotion/styled";

export const ListStats = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0;
  padding-left: 0;
  background-color: #d8d8d8;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px;
  border-top: 1px solid #8b8b8b;
  :not(:last-child) {
    border-right: 1px solid #8b8b8b;
  }
`;

export const ItemQuantity = styled.span`
  font-weight: 700;
  color: #212121;
`;
