import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// import { backend_base_url } from 'config/constants'

export const getUserInfo = createAsyncThunk(
  'get/user/info',
  async (walletAddress: any) => {
    // const response = await axios.get(
    //   `${backend_base_url}/user/getUserInfo/${walletAddress}`,
    // )
    // console.log(response.data)
    // return response.data
  },
)
