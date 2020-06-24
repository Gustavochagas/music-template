import React from 'react';

import { ImageStyled, CardStyled, TitleStyled, InfosStyled } from './styles';

interface CardProps {
  image: string,
  title: string,
  infos?: string
}

const Card = ({ image, title, infos }: CardProps) => {
  return (
    <CardStyled>
      <ImageStyled url={image} />
      <TitleStyled>{title}</TitleStyled>
      <InfosStyled>{infos}</InfosStyled>
    </CardStyled>
  );
}

export default Card;
