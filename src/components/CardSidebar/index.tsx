import React from 'react';

import {
  CardSidebarStyled,
  BackgroundStyled,
  ImageStyled
} from './styles';

interface CardProps {
  image: string,
  title: string,
  infos?: string
}

function CardSidebar({ image, title, infos }: CardProps) {
  function handleClick() {
    alert('click');
  }

  return (
    <CardSidebarStyled onClick={handleClick}>
      <BackgroundStyled>
        <ImageStyled url={image} />
      </BackgroundStyled>
    </CardSidebarStyled>
  );
}

export default CardSidebar;
