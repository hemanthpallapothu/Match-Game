import './index.css'

const Tabs = props => {
  const {eachItem, onChangeActiveId} = props
  const {tabId, displayText} = eachItem

  const onUpdateActiveTabId = () => {
    onChangeActiveId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className="type-button"
        onClick={onUpdateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default Tabs
