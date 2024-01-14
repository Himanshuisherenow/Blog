import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login } from './store/authSlice'
import { Header ,Footer} from './components'
import { Outlet } from 'react-router'

function App() {
  
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{

    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){

        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return loading? null :  <div className='min-h-screen flex-wrap content-between bg-gray-600'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
}

export default App
