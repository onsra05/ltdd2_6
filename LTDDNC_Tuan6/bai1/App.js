import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from 'react-native';

const App = () => {
  const fadeInOut = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeInOut, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const position = useRef(new Animated.Value(0)).current
  const position1 = useRef(new Animated.Value(0)).current
  position1.interpolate({
  inputRange: [0, 1],
  outputRange: ["#333333", "#000000"]
});
  const moveBottom = () => {
    Animated.timing(position1, {
      toValue: position1.interpolate({
  inputRange: [0, 1],
  outputRange: ["#333333", "#000000"]
}),
      duration: 1000,
      useNativeDriver: true
    }).start()
  }


 

  return (
    <SafeAreaView>
      <Animated.View style={ {opacity: fadeInOut, top: position, backgroundColor: position1}}>
        <View
          style={{
            
            borderColor: 'black',
            borderWidth: 1,
            margin: 20,
            backgroundColor: 'yellow',
          }}>
          <Text style={{ fontSize: 18, alignSelf: 'center' }}>test</Text>
        </View>
      </Animated.View>
      <View style={{ margin: 20 }}>
        <Button title="fade in" onPress={fadeIn}></Button>
        <Button title="fade out" onPress={fadeOut}></Button>
        <Button title="move loop" onPress={() => {
          moveBottom()
          fadeIn()
        }}></Button> 
      </View>
    </SafeAreaView>
  );
};

export default App;