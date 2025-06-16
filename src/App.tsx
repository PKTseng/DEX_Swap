import { Buffer } from 'buffer'
import { RouterProvider } from 'react-router-dom'
import { WagmiProvider } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import router from './routes'
import { config } from './wagmi.ts'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
