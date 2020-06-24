import styled from "styled-components";

interface Image {
  url: string
}

export const ImageStyled = styled.div<Image>`
  background: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: all .2s ease-in-out;
`;

export const BackgroundStyled = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 24px 0px rgba(206,206,206,1);
  overflow: hidden;
  width: 100%;
  height: 170px;
`;

export const TitleStyled = styled.h2`
  font-size: 1rem;
  margin-top: 15px;
  transition: all .2s ease-in-out;
  color: ${props => props.theme.colors.color}
`;

export const InfosStyled = styled.p`
  font-size: 0.8rem;
  color: #b5b5b5;
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover ${TitleStyled} {
    color: #ff6519
  }
  &:hover ${ImageStyled} {
    transform: scale(1.2) rotate(7deg);
  }
`;
