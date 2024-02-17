import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const containerPublications = styled.div`
  width: 100%;
  /* display: flex; */
  /* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  height: calc(100vh - 322px);
  /* height: 320px; */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.textPrimary};
    border-radius: 20px;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Content = styled.div`
  display: flex;
  width: 240px;
  gap: 20px;
  flex-direction: column;
`;

export const PublicationImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 20px;
`;



