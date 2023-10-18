'use client'

import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.themeState)

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme={theme === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default Notification
