import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';

import { Container, Text, LogoIcon } from './styles'

export default () => {

  const navigate = useNavigation();
  
  function loadInitialInfo(){    
    setTimeout(() => {
      navigate.navigate('SignIn')
    }, 1500)
  }
  
  useEffect(() => {
    loadInitialInfo();
  })
  return (
    <Container>
      <LogoIcon>LETS REMEMBER</LogoIcon>
      <Text>Bora memorizar essas palavras</Text>
    </Container>
  )
}