import type { Announcement } from '../types'

interface Props {
  item: Announcement
  onDelete: (id: number) => void
}

export default function AnnouncementItem({ item, onDelete }: Props) {
  return (
    <li className="board-item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>✕</button>
    </li>
  )
}
