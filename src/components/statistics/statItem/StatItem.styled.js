import styled from "@emotion/styled";

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px;
  background-color: ${randomColors};
`;
export const ItemLabel = styled.span`
  color: white;
`;
export const ItemPercentage = styled.span`
  font-size: 24px;
  line-height: 1.18;
  color: white;
`;

function randomColors() {
  const red = Math.floor(Math.random() * (256 - 0) + 0);
  const green = Math.floor(Math.random() * (256 - 0) + 0);
  const blue = Math.floor(Math.random() * (256 - 0) + 0);
  return `rgb(${red}, ${green}, ${blue})`;
}
