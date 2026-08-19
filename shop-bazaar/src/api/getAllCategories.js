import axios from 'axios'

const BaseURL = 'https://api.escuelajs.co/api/v1'

const getAllCategories = async () => {
  const url = `${BaseURL}/categories`
    try{
        const {data} = await axios.get(url)
        console.log({data})
        return data
    }catch(err){
        return err
    }
}

export default getAllCategories