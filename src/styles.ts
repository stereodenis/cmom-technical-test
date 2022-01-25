import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flatlist: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemTitle: {
    marginLeft: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemPrices: {
    flexDirection: 'column',
    // flex: 1,
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    paddingLeft: 16,
  },
  itemColumn: {
    flexDirection: 'row',
    width: 120,
    // justifyContent: 'center',
  },
  priceLabel: {
    width: 60,
  },
  separator: {
    height: 16,
  },
})
