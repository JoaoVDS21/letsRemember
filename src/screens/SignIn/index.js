import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default () => {

  const navigation = useNavigation();
  
  function loadInitialInfo(){
    setTimeout(() => {
      navigation.reset({
        routes: [{name: 'MainTab'}]
      })
    }, 1500)
  }
  
  useEffect(() => {
    loadInitialInfo()
  }, [])
  
  return (
    <View>
      <Text>Tela SignIn</Text>
    </View>
  )
}