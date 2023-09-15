import { Stack, useRouter } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
 <Stack>
    <Stack.Screen name='index' options={{headerTitle: "Loader" , headerShown: false,}} />
    <Stack.Screen name='Login' options={{headerTitle: "Login" , headerShown: false}} />
    <Stack.Screen name='Onboarding' options={{headerTitle: "OnBoarding" , headerShown: false}} />
    <Stack.Screen name='home' options={{headerTitle: "" , headerShown: false}} />
 </Stack>
  )
}

export default _layout