import './index.css'

const Thumbnails = props => {
  const {eachItem, onUpdateScore} = props
  const {thumbnailUrl, imageUrl} = eachItem

  const onChangeScore = () => {
    onUpdateScore(imageUrl)
  }

  return (
    <li>
      <img
        alt="thumbnail"
        className="thumbnail"
        src={thumbnailUrl}
        onClick={onChangeScore}
      />
    </li>
  )
}
export default Thumbnails
