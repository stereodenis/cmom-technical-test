import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemContent: {
    marginLeft: 16,
    flex: 1,
  },
  itemPrices: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  separator: {
    height: 16,
  },
})
