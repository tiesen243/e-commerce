'use client'

import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification: React.FC = () => {
  const themeState = useSelector((state: RootState) => state.ui.themeState)

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
      theme={themeState === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default Notification
