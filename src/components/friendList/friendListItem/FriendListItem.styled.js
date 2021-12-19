import styled from "@emotion/styled";

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px 4px 4px 4px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const ItemStatus = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border-radius: 50%;

    background-color: ${(props) => {
      switch (props.isOnline) {
        case true:
          return "green";

        case false:
          return "red";

        default:
          return "black";
      }
    }};
  }
`;
export const ItemImage = styled.img`
  display: block;
  margin-right: 25px;
`;
export const ItemName = styled.p`
  margin: 0;
`;
