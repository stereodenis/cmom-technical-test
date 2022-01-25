import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PATHS } from './paths'

export type RootStackParamList = {
  [PATHS.MAIN]: undefined
  [PATHS.COIN]: { id: string }
}
export type MAIN_PROPS = NativeStackScreenProps<RootStackParamList, PATHS.MAIN>
export type COIN_PROPS = NativeStackScreenProps<RootStackParamList, PATHS.COIN>
