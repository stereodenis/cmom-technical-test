import axios from 'axios'
import { COIN } from '../types'

const API_URL = 'https://api.coingecko.com/api/v3'

class Api {
  coinsMarkets = () =>
    axios.get<COIN[]>(`${API_URL}/coins/markets`, {
      params: { vs_currency: 'eur', order: 'market_cap_desc', per_page: 10 },
    })
}

export default new Api()
