import { Text, View, Button } from 'react-native';
import * as Tests from './funct/tests'
import * as Styles from './styles'
import * as chars from './funct/chars'
import * as expeditions from './funct/expeditions'


export default function App() {

  return (
    <View style={Styles.main.flexV}>

      <View style={Styles.main.flexV}>
        <Text>Hello, Styles!</Text>
      </View>

      <View style={Styles.main.flexH}>
        <Button 
          onPress={()=>{console.log(chars.Hero)}}
          title='Console Hero'
        />
        <Button 
          onPress={()=>{console.log(expeditions.WitchesHouse)}}
          title='Console Expedition'
        />
        <Button 
          onPress={()=>{expeditions.WitchesHouse.send(chars.Hero)}}
          title='Send'
        />
        <Button 
          onPress={()=>{
            chars.Hero.gainXP(10)
            console.log('added 10 xp')
            console.log(chars.Hero)
          }}
          title='add 10 xp'
        />
        <Button 
          onPress={()=>{
            chars.Hero.gainXP(50)
            console.log('added 50 xp')
            console.log(chars.Hero)
          }}
          title='add 50 xp'
        />
        <Button 
          onPress={()=>{
            chars.Hero.gainXP(100)
            console.log('added 100 xp')
            console.log(chars.Hero)
          }}
          title='add 100 xp'
        />
        <Button 
          onPress={()=>{
            chars.Hero.gainXP(500)
            console.log('added 500 xp')
            console.log(chars.Hero)
          }}
          title='add 500 xp'
        />
      </View>

    </View>
  );
}
