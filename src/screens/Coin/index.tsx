import React, { FC, useEffect, useState } from 'react'
import { Linking, SafeAreaView, ScrollView, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'
import { Badge, Text } from 'react-native-ui-lib'
import HTML from 'react-native-render-html'

import Api from '../../Api'
import { COIN_PROPS } from '../../navigation/types'
import { COIN_ITEM } from '../../types'
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
        <View style={styles.header}>
          <Text text50>
            {coin.name} [{coin.symbol}]
          </Text>
          <Badge label={coin.hashing_algorithm} containerStyle={styles.headerBadge} />
        </View>

        <Text text70 style={[styles.field]}>
          Market cap in Euro: {coin.market_data.market_cap.eur}
        </Text>
        <Text text70 style={[styles.field]}>
          Homepage:
          <Text onPress={() => Linking.openURL(coin.links.homepage[0])} style={styles.homepageLink}>
            {coin.links.homepage[0]}
          </Text>
        </Text>
        <Text text70 style={[styles.field]}>
          Genesis Date: {coin.genesis_date}
        </Text>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <HTML baseStyle={{ fontSize: 16, marginTop: 20 }} source={{ html: coin.description.en }} />
        {/*<Text text70 style={[styles.field]}>*/}
        {/*  {coin.description.en}*/}
        {/*</Text>*/}
      </ScrollView>
    </SafeAreaView>
  )
}
