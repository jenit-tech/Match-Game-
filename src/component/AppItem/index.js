import './index.css'

const AppItem = props => {
  const {imageDetails, setActiveImageId} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    setActiveImageId(id)
  }

  return (
    <li className="appitem-item">
      <button type="button" className="app-button" onClick={onClickImage}>
        <img src={thumbnailUrl} className="appitem-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default AppItem
