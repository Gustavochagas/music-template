import styled from "styled-components";

export const CardSidebarStyled = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  box-shadow: 1px 1px 24px 0px rgba(206,206,206,1);
  border-radius: 30px;
  padding: 10px;
`;

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
