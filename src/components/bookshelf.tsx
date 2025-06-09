import noImage from '../assets/noImage.jpg'
import type { Comic } from '../types/comic'

export default function BookShelf({
  book
}: {
  book: Comic
}) {
  return (
    <div className='flex flex-col'>
      <img  
        src={book.image ?? noImage}
        alt={book.title}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
      <p>{book.title}</p>
    </div>
  )
}