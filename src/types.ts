export interface COIN {
  ath: number // 59717,
  ath_change_percentage: number // -45.90632,
  ath_date: string // '2021-11-10T14:24:11.849Z',
  atl: number // 51.3,
  atl_change_percentage: number // 62870.82901,
  atl_date: string // '2013-07-05T00:00:00.000Z',
  circulating_supply: number // 18938918,
  current_price: number // 32334,
  fully_diluted_valuation: number // 678526244971,
  high_24h: number // 32361,
  id: string // 'bitcoin',
  image: string // 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  last_updated: string // '2022-01-24T20:42:44.312Z',
  low_24h: number // 29199,
  market_cap: number // 611931091159,
  market_cap_change_24h: number // 22390936853,
  market_cap_change_percentage_24h: number // 3.79803,
  market_cap_rank: number // 1,
  max_supply: number // 21000000,
  name: string // 'Bitcoin',
  price_change_24h: number // 1188.59,
  price_change_percentage_24h: number // 3.81623,
  roi: null
  symbol: string // 'btc',
  total_supply: number // 21000000,
  total_volume: number // 31820065221,
}

export interface COIN_ITEM {
  additional_notices: string[]
  asset_platform_id: string | null
  block_time_in_minutes: number // 10
  categories: string[] // ['Cryptocurrency']
  coingecko_rank: number // 1
  coingecko_score: number // 80.541
  community_data: Record<string, number | null>
  community_score: number // 71.674
  country_origin: string // ''
  description: Record<string, string>
  developer_data: {
    closed_issues: number // 6083
    code_additions_deletions_4_weeks: {
      additions: number // 1228;
      deletions: number // -1108
    }
    commit_count_4_weeks: number // 234
    forks: number // 31350
    last_4_weeks_commit_activity_series: number[]
    pull_request_contributors: number // 770
    pull_requests_merged: number // 9348
    stars: number // 61384
    subscribers: number // 3901
    total_issues: number // 6694
  }
  developer_score: number // 98.903
  genesis_date: string // '2009-01-03'
  hashing_algorithm: string // 'SHA-256'
  id: string // 'bitcoin'
  image: Record<string, string>
  last_updated: string // '2022-01-24T21:55:58.515Z'
  links: {
    announcement_url: string[] // ['', '']
    bitcointalk_thread_identifier: null
    blockchain_site: string[]
    chat_url: string[] // ['', '', '']
    facebook_username: string // 'bitcoins'
    homepage: string[] // ['http://www.bitcoin.org', '', '']
    official_forum_url: string[] // ['https://bitcointalk.org/', '', '']
    repos_url: { bitbucket: string[]; github: string[] }
    subreddit_url: string // 'https://www.reddit.com/r/Bitcoin/'
    telegram_channel_identifier: string // ''
    twitter_screen_name: string // 'bitcoin'
  }
  liquidity_score: number // 100.152
  localization: Record<string, string>
  market_cap_rank: number // 1
  market_data: {
    ath: Record<string, number>
    ath_change_percentage: Record<string, number> // aed: '2021-11-10T14:24:11.849Z'
    ath_date: Record<string, string>
    atl: Record<string, number>
    atl_change_percentage: Record<string, number>
    atl_date: Record<string, string>
    circulating_supply: number // 18938968
    current_price: Record<string, number>
    fdv_to_tvl_ratio: null
    fully_diluted_valuation: Record<string, number>
    high_24h: Record<string, number>
    last_updated: string // '2022-01-24T21:55:58.515Z'
    low_24h: Record<string, number>
    market_cap: Record<string, number>
    market_cap_change_24h: number // 22907795362
    market_cap_change_24h_in_currency: Record<string, number>
    market_cap_change_percentage_24h: number // 3.3871
    market_cap_change_percentage_24h_in_currency: Record<string, number>
    market_cap_rank: number // 1
    max_supply: number // 21000000
    mcap_to_tvl_ratio: null
    price_change_24h: number // 1307
    price_change_24h_in_currency: Record<string, number>
    price_change_percentage_14d: number // -11.91687
    price_change_percentage_14d_in_currency: Record<string, number>
    price_change_percentage_1h_in_currency: Record<string, number>
    price_change_percentage_1y: number // 14.98558
    price_change_percentage_1y_in_currency: Record<string, number>
    price_change_percentage_200d: number // 8.66851
    price_change_percentage_200d_in_currency: Record<string, number>
    price_change_percentage_24h: number // 3.6748
    price_change_percentage_24h_in_currency: Record<string, number>
    price_change_percentage_30d: number // -27.54057
    price_change_percentage_30d_in_currency: Record<string, number>
    price_change_percentage_60d: number // -35.53348
    price_change_percentage_60d_in_currency: Record<string, number>
    price_change_percentage_7d: number // -14.4855
    price_change_percentage_7d_in_currency: Record<string, number>
    roi: null
    total_supply: number // 21000000
    total_value_locked: null
    total_volume: Record<string, number>
  }
  name: string // 'Bitcoin'
  platforms: Record<string, string> // { '': '' }
  public_interest_score: number // 0.335
  public_interest_stats: {
    alexa_rank: number // 9440
    bing_matches: null
  }
  public_notice: null
  sentiment_votes_down_percentage: number // 44.91
  sentiment_votes_up_percentage: number // 55.09
  status_updates: []
  symbol: string // 'btc'
  tickers: {
    base: string // 'BTC'
    bid_ask_spread_percentage: number // 0.01629
    coin_id: string // 'bitcoin'
    converted_last: []
    converted_volume: []
    is_anomaly: boolean // false
    is_stale: boolean // false
    last: number // 36833
    last_fetch_at: string // '2022-01-24T21:54:42+00:00'
    last_traded_at: string // '2022-01-24T21:54:42+00:00'
    market: []
    target: string // 'USD'
    timestamp: string // '2022-01-24T21:54:42+00:00'
    token_info_url: null
    trade_url: string // 'https://ftx.us/trade/BTC/USD'
    trust_score: string // 'green'
    volume: number
  }[]
}
