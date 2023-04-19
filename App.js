import { Text, View, Button } from 'react-native';
import * as Tests from './funct/tests'
import * as Styles from './styles'

export default function App() {

  return (
    <View style={Styles.main.flexV}>
      <Text>Hello, Styles!</Text>
    </View>
  );
}
