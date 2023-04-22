import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
      }}>
      <Text>Bienvenido:</Text>
    </View>

  );
}

export default App;
