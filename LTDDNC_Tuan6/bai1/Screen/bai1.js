import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, {useRef,useState} from 'react';

const Bai1 = () => {
  const position = useRef(new Animated.Value(0)).current;

  const bal =()=>{
    Animated.timing(position, {
      toValue: -400,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[ styles.image, 
          {transform:[{translateY: position}]}

        ]}
        source={require('../assets/bal.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image:{
    width: 200,
    height: 200,

  },
});
export default Bai1;