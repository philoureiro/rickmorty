import styled from "styled-components";

export const Container = styled.div`
  background-color: #c2c3c3;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  margin-bottom: 26px;
  height: 12.5rem;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 25px;
  :hover {
    transform: scale(1.1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    transform: scale(1.1);
  }
`;

export const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  :hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.text`
  font-weight: 800;
  font-size: 22px;
  color: black;
`;

export const Text = styled.text`
  color: black;
  font-size: 20px;
`;
