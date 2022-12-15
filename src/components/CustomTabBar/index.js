import React from 'react';

import HomeIcon from '../../assets/home.svg';
import { TabArea, TabItemCenter } from './styles'

export default ({state, navigation}) => {
  return (
    <TabArea>
      <TabItemCenter>
        <HomeIcon width={24} height={24} fill="#41EFF9"/>
      </TabItemCenter>
    </TabArea>
  )
}