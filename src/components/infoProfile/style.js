import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${(props) => props.theme.textPrimary};
`;

export const Link = styled.a`
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
cursor: pointer;

&:hover{
    opacity: .7;
}
`;

export const ProfileImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;
