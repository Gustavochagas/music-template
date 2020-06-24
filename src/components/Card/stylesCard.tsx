import styled from "styled-components";

export const CardStyled = styled.image`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

interface Image {
  url: string
}

export const ImageStyled = styled.image<Image>`
  background: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 1px 1px 24px 0px rgba(206,206,206,1);
  display: flex;
  width: 100%;
  height: 170px;
`;

export const TitleStyled = styled.h2`
  font-size: 1rem;
  margin-top: 15px;
  color: ${props => props.theme.colors.color}
`;

export const InfosStyled = styled.p`
  font-size: 0.8rem;
  color: #b5b5b5;
`;
