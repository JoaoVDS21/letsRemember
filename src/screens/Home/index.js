import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from 'react-native';
import { 
  Container, 
  DayRemembers,
  DayRemembersTitle,
  DayRemembersBody
} from './styles'
import CardShortcut from '../../components/CardShortcut';

import WordsIcon from '../../assets/words.svg'
import PhrasesIcon from '../../assets/phrases.svg'

export default () => {
  return (
    <Container>
      <CardShortcut 
        title="Words"
      >
        <WordsIcon width={60} height={50} fill="#000"/>
      </CardShortcut>
      <CardShortcut 
        title="Phrases"
      >
        <PhrasesIcon width={60} height={50} fill="#000"/>
      </CardShortcut>
      <DayRemembers>
        <DayRemembersTitle>
          Day Remembers
        </DayRemembersTitle>
        <DayRemembersBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem dolorem molestiae, unde aliquid eum consectetur esse sequi distinctio.
        </DayRemembersBody>
      </DayRemembers>
    </Container>
  )
}