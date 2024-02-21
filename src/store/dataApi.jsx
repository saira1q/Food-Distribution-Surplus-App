
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react' 


export const dataApi = createApi({
    reducerPath:"dataApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8081/"}),
    endpoints:(builder)=>({
    
    farmData : builder.query({
        query:()=>{
            return {
                url:'',
                method:'GET'
            }
        }
    })
    

    })
})

export const {useFarmDataQuery} = dataApi
