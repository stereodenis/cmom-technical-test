import React, { FC, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, useColorScheme } from 'react-native'
import Api from '../../Api'
import { COIN_ITEM } from '../../types'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COIN_PROPS } from '../../navigation/types'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export const CoinScreen: FC<COIN_PROPS> = ({
  route: {
    params: { id },
  },
}) => {
  const [coin, setCoin] = useState<COIN_ITEM>()

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const navigation = useNavigation<COIN_PROPS['navigation']>()

  useEffect(() => {
    Api.getCoin(id)
      .then((response) => {
        setCoin(response.data)
        navigation.setOptions({ title: response.data.name })
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error)
      })
  }, [id, navigation])

  if (!coin) return null

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text>
          {coin.name} [{coin.symbol}] [{coin.hashing_algorithm}]
        </Text>
        <Text>Description: {coin.description.en}</Text>
        <Text>Market cap in Euro: {coin.market_data.market_cap.eur}</Text>
        <Text>Homepage: {coin.links.homepage[0]}</Text>
        <Text>Genesis Date: {coin.genesis_date}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
