import { View, Text } from 'react-native'
import React, { useState } from 'react'
import OnBorading from './OnBoarding'
import OnBoarding2 from './OnBoarding2';
import OnBoarding3 from './OnBoarding3';
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoardingMain = () => {
    const router=useRouter()
    const [view, setView ] = useState(1)
    const handlechange = () => {
      if (view < 3) {
        setView(view + 1);
      } else {
        router.push("home");
      }
      console.log(view);
    };
  return (
    <SafeAreaView style={{flex:1}}>

  {view === 1 && <OnBorading handlechange={handlechange}/>}
  {view === 2 && <OnBoarding2 handlechange={handlechange}/>}
  {view === 3 && <OnBoarding3  handlechange={handlechange}/>}

    </SafeAreaView>
  )
}

export default OnBoardingMain