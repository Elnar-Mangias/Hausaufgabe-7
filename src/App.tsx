import { useState } from 'react'
import AnnouncementItem from './components/AnnouncementItem'
import type { Announcement } from './types'

export default function App() {
  const [items, setItems] = useState<Announcement[]>([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  function addItem() {
    if (title.trim() === '' || text.trim() === '') return
    const newItem: Announcement = {
      id: Date.now(),
      title: title.trim(),
      text: text.trim(),
    }
    setItems([...items, newItem])
    setTitle('')
    setText('')
  }

  function deleteItem(id: number) {
    setItems(items.filter((i) => i.id !== id))
  }

  return (
    <div className="container">
      <h1>Доска объявлений</h1>
      <div className="form">
        <input placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Текст объявления" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addItem}>Добавить</button>
      </div>
      {items.length === 0 ? (
        <p className="empty">Объявлений пока нет</p>
      ) : (
        <ul>
          {items.map((item) => (
            <AnnouncementItem key={item.id} item={item} onDelete={deleteItem} />
          ))}
        </ul>
      )}
    </div>
  )
  }
