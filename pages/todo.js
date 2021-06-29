import { useState } from 'react'

const Todo = () => {

  return (
    <div>
      <h1>To Do</h1>
      <input
        type="text"
        name="todo"
      />
      <ItemList />
    </div>
  )
}

const ItemList = () => {
  const [items, setItems] = useState([])

  const onNewItem = (newItem) => {
    setItems([...items, newItem])
  }

  if (items === null) return 'Loading...'

  return (
    <>
      <AddItemForm
        onNewItem={onNewItem}
      />
      {items.length === 0 && (
        <p>No items</p>
      )}
      {items.map(item => (
        <>
          <p>{item}</p>
        </>
      ))}
    </>
  )
}

const AddItemForm = ({ onNewItem }) => {
  const [newItem, setNewItem] = useState('')
  const submitNewItem = (e) => {
    e.preventDefault()
    onNewItem(newItem)
    setNewItem('')
  }
  return (
    <form onSubmit={submitNewItem}>
      <input type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Todo