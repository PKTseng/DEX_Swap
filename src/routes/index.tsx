import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/Layouts/MainLayout.tsx'
import Home from '@/pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default router
