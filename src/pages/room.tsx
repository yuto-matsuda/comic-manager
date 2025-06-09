import { use } from 'react'
import { fetchTypicalVolume } from '../api/fetch-comic'
import BookShelf from '../components/bookshelf';

const fetchComicList = async () => {
  const titles = [
    'ONE PIECE',
    '鬼滅の刃',
    '呪術廻戦',
    'ドラゴンボール'
  ];
  return (await Promise.all(titles.map(title => fetchTypicalVolume(title)))).flat();
}

const booksPromise = fetchComicList();

export default function Room() {
  const books = use(booksPromise);
  console.log(books);
  return (
    <>
      My Bookshelfs
    
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
        {books.map((book, i) => 
          <BookShelf key={i} book={book} />
        )}
      </div>
    </>
  )
}