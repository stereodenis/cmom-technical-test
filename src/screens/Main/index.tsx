import React, { FC, useCallback, useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, useColorScheme, View } from 'react-native'
import { COIN } from '../../types'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Api from '../../Api'
import styles from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { PATHS } from '../../navigation/paths'
import { MAIN_PROPS } from '../../navigation/types'
import { ListItem, Text } from 'react-native-ui-lib'

export const MainScreen: FC<MAIN_PROPS> = () => {
  const [markets, setMarkets] = useState<COIN[]>([])
  const isDarkMode = useColorScheme() === 'dark'

  const navigation = useNavigation<MAIN_PROPS['navigation']>()

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    Api.getCoinsMarkets()
      .then((response) => {
        setMarkets(response.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error.message)
      })
  }, [])

  const handlePress = useCallback(
    (id: string) => () => {
      navigation.navigate(PATHS.COIN, { id })
    },
    [navigation]
  )

  const renderItem = useCallback(
    ({ item }: { item: COIN }) => (
      <ListItem
        // @ts-ignore
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        onPress={handlePress(item.id)}
      >
        <ListItem.Part left>
          <Image source={{ uri: item.image }} style={styles.itemImage} resizeMethod='scale' />
        </ListItem.Part>
        <ListItem.Part middle containerStyle={styles.itemTitle}>
          <Text text50>{item.name}</Text>
          <Text text70 grey30>
            {item.symbol}
          </Text>
        </ListItem.Part>
        <ListItem.Part right containerStyle={styles.itemPrices}>
          <View style={styles.itemColumn}>
            <Text text80 style={styles.priceLabel}>
              Current:
            </Text>
            <Text>{item.current_price}</Text>
          </View>
          <View style={styles.itemColumn}>
            <Text text80 style={styles.priceLabel}>
              High:
            </Text>
            <Text>{item.high_24h}</Text>
          </View>
          <View style={styles.itemColumn}>
            <Text text80 style={styles.priceLabel}>
              Low:
            </Text>
            <Text>{item.low_24h}</Text>
          </View>
        </ListItem.Part>
      </ListItem>
    ),
    [handlePress]
  )

  const renderSeparator = useCallback(() => <View style={styles.separator} />, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={markets}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  )
}
