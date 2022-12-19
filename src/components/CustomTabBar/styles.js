import styled from 'styled-components';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const TabArea = styled.SafeAreaView`
  width: ${screenWidth - 30}px;
  height: 60px;

  position: absolute;
  bottom: 15px;
  
  margin: 0 15px;
  // elevation: 10;
  
  background: #41EFF9;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
`

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TabItemCenter = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  background: #fff;
  border-radius: 40px;
  border: 1px solid #41EFF9;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`