import axios from 'axios'
import { COIN, COIN_ITEM } from '../types'

const API_URL = 'https://api.coingecko.com/api/v3'

class Api {
  getCoinsMarkets = () =>
    axios.get<COIN[]>(`${API_URL}/coins/markets`, {
      params: { vs_currency: 'eur', order: 'market_cap_desc', per_page: 10 },
    })

  getCoin = (id: string) => axios.get<COIN_ITEM>(`${API_URL}/coins/${id}`)
}

export default new Api()
