import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useEffect, useState } from 'react';
import words from '../data/words.json';

const SORT_KEYS = ['english', 'russian', 'id']

function sortWords(words, key) {
  const sortedWords = [...words]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedWords
  }
  sortedWords.sort((a, b) => a[key] > b[key] ? 1 : -1)
  return sortedWords
}

const Words = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedWords, setSortedWords] = useState(sortWords(words, sortKey))
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedWords([...words])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Words sorted by ${sortKey}` : 'Words'}</h1>
      {sortedWords.map((word) => (
      <div key={word.id}>
        <Link to={word.english} className='courseLink'>{word.english}</Link>
      </div>
      ))}
    </>
  )
}

export default Words