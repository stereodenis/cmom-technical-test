import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import Api from './Api'
import styles from './styles'
import { COIN } from './types'

const App = () => {
  const [markets, setMarkets] = useState<COIN[]>([])
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    Api.coinsMarkets()
      .then((response) => {
        setMarkets(response.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error.message)
      })
  }, [])

  const renderItem = useCallback(
    ({ item }: { item: COIN }) => (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.itemImage} resizeMethod='scale' />
        <View style={styles.itemContent}>
          <Text>
            {item.name} [{item.symbol}]
          </Text>
          <View style={styles.itemPrices}>
            <View>
              <Text>Current:</Text>
              <Text>{item.current_price}</Text>
            </View>
            <View>
              <Text>High:</Text>
              <Text>{item.high_24h}</Text>
            </View>
            <View>
              <Text>Low:</Text>
              <Text>{item.low_24h}</Text>
            </View>
          </View>
        </View>
      </View>
    ),
    []
  )

  const renderSeparator = useCallback(() => <View style={styles.separator} />, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList data={markets} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </SafeAreaView>
  )
}

export default App
