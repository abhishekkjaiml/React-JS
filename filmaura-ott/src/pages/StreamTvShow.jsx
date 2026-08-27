import { useParams } from "react-router-dom"

const StreamTvShow = () => {

    const { id } = useParams()
    console.log(id)
  return (
    <div>StreamTvShow</div>
  )
}

export default StreamTvShow