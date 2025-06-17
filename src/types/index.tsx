export interface Token {
  symbol: string
  name: string
  address: string
  decimals: number
  logoURI: string
  balance?: string
}

export interface WalletState {
  isConnected: boolean
  address: string | null
  balance: string
  chainId: number | null
}

export interface SwapState {
  tokenFrom: Token | null
  tokenTo: Token | null
  amountFrom: string
  amountTo: string
  slippage: number
  priceImpact: number
}

export interface LiquidityState {
  tokenA: Token | null
  tokenB: Token | null
  amountA: string
  amountB: string
  poolShare: number
}

export interface Transaction {
  id: string
  type: 'swap' | 'add_liquidity' | 'remove_liquidity'
  status: 'pending' | 'success' | 'failed'
  hash?: string
  timestamp: number
  tokens: Token[]
  amounts: string[]
}
