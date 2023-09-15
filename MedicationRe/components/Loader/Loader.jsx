import { View } from '@bacons/react-views'
import React , { useEffect } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, Dimensions } from 'react-native'
import { useNavigation , useRouter } from "expo-router";
import Image from '@bacons/react-views/build/Image'
const Loader = () => {
    const router=useRouter()
    useEffect(() => {
        // Delay navigation to "Home" after 5 seconds
        const delayNavigation = setTimeout(() => {
          router.push('OnBoarding');
        }, 4000); // 5000 milliseconds = 5 seconds
    
        // Clear the timeout if the component unmounts
        return () => {
          clearTimeout(delayNavigation);
        };
      }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("../../assets/bg.jpg")}
      >
      <View style={styles.centered}>
        <Image style={styles.logoLoader} source={require('../../assets/logoLoader.png')}/>
        <Text style={styles.loaderTitle}>Medicine Reminder</Text>
      </View>
       
      </ImageBackground>
    </SafeAreaView>
  )
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderTitle: {
    fontFamily:'Arial',
    textTransform: 'capitalize',
    color:'white',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover', // You can adjust the resizeMode as needed
    justifyContent: 'flex-end', // To align content at the bottom
    alignItems: 'center', // To center content horizontally
  },
  logoLoader: {
  width:100,
  height:100
  }
})

export default Loader
