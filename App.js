import { Text, View, Button } from 'react-native';
import * as Tests from './funct/tests'
import * as Styles from './styles'

export default function App() {

  return (
    <View style={Styles.main.flexV}>

      <View style={Styles.main.flexV}>
        <Text>Hello, Styles!</Text>
      </View>

      <View style={Styles.main.flexH}>
        <Button 
          onPress={()=>{console.log(Tests.Hero)}}
          title='Console Hero'
        />
        <Button 
          onPress={()=>{console.log(Tests.expWitchesHouse)}}
          title='Console Expedition'
        />
        <Button 
          onPress={()=>{Tests.expWitchesHouse.send(Tests.Hero)}}
          title='Send'
        />
        <Button 
          onPress={()=>{
            Tests.Hero.gainXP(10)
            console.log('added 10 xp')
            console.log(Tests.Hero)
          }}
          title='add 10 xp'
        />
        <Button 
          onPress={()=>{
            Tests.Hero.gainXP(50)
            console.log('added 50 xp')
            console.log(Tests.Hero)
          }}
          title='add 50 xp'
        />
        <Button 
          onPress={()=>{
            Tests.Hero.gainXP(100)
            console.log('added 100 xp')
            console.log(Tests.Hero)
          }}
          title='add 100 xp'
        />
        <Button 
          onPress={()=>{
            Tests.Hero.gainXP(500)
            console.log('added 500 xp')
            console.log(Tests.Hero)
          }}
          title='add 500 xp'
        />
      </View>

    </View>
  );
}
