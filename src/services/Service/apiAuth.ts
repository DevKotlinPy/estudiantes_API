
import axiosInstance from '../axiosConfig'

export const fetchUser = async () =>{
    try{
        const version : string = 'v1'
      //  const Url2 : string = '/token'

        const response = await axiosInstance.post(`${version}`);

         return response.data;
    }catch(error){
        console.error('Error Fectching users', error)
        throw error;
    }
}