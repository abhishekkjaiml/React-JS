import axios from 'axios'

const BaseURL = 'https://api.escuelajs.co/api/v1'

const getAllProducts = async () => {
    const url = `${BaseURL}/products`
    try{
        const {data} = await axios.get(url)
        console.log(data)
        return data
    }catch(err){
        return err
    }
}

export default getAllProducts