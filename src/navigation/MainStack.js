import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import HomeStack from './HomeStack'

const MainStack = (Stack) => {
  return (
    <>

      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </>
  )
}

export default MainStack