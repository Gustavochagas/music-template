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
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
`;

export const ContentStyled = styled.div`
  flex: 1;
  margin-left: 15px;
`;

export const TitleStyled = styled.h2`
  font-size: 1rem;
  transition: all .2s ease-in-out;
  color: ${props => props.theme.colors.color};
  width: 100%;
`;

export const InfosStyled = styled.p`
  font-size: 0.8rem;
  color: #888888;
  width: 100%;
`;

export const CardSidebarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-bottom: 1px solid #ececec;
  &:hover ${TitleStyled} {
    color: #ff6519
  }
`;
