import styled from 'styled-components';

export const TabArea = styled.SafeAreaView`
  height: 60px;
  background: #41EFF9;
  flex-direction: row;
  justify-content: space-evenly;
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