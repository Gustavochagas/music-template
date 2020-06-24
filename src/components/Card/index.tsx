import React from 'react';

import { ImageStyled, CardStyled, TitleStyled, InfosStyled, BackgroundStyled } from './styles';

interface CardProps {
  image: string,
  title: string,
  infos?: string
}

function Card({ image, title, infos }: CardProps) {
  function handleClick() {
    alert('click');
  }

  return (
    <CardStyled onClick={handleClick}>
      <BackgroundStyled>
        <ImageStyled url={image} />
      </BackgroundStyled>
      <TitleStyled>{title}</TitleStyled>
      <InfosStyled>{infos}</InfosStyled>
    </CardStyled>
  );
}

export default Card;
