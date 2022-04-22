import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { Home } from '../Screens'
import HomeStack from './HomeStack'

const MainStack = (Stack) => {
  return (
    <>
<Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </>
  )
}

export default MainStack