import React, { FC } from 'react'
import { CoinScreen, MainScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PATHS } from './paths'

const Stack = createNativeStackNavigator()

export const RootNavigator: FC = () => (
  <Stack.Navigator initialRouteName={PATHS.MAIN}>
    <Stack.Screen name={PATHS.MAIN} component={MainScreen} options={{ title: 'CMOM' }} />
    <Stack.Screen name={PATHS.COIN} component={CoinScreen} />
  </Stack.Navigator>
)
