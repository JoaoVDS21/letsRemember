import React from 'react';

import {Container, SubTitle, Title} from './styles'

export default ({children, title}) => {
  return (
    <Container>
      {children}
      <SubTitle>Ir para</SubTitle>
      <Title>
        {title}
      </Title>
    </Container>
  )
}