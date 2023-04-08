import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import words from '../data/words.json'

const SingleWord = () => {
  const params = useParams()
  const navigate = useNavigate()
  const word = words.find((word) => word.english === params.englishWord)

  useEffect(() => {
    if (!word) {
      navigate('..', { relative : 'path' })
    }
  }, [word, navigate])

  //Simply show Not Found component
  // if (!word) {
  //   return <NotFound />
  // }
  return (
    <>
      <h1>{word?.english}</h1>
      <h3>{word?.transcription}</h3>
      <h2>{word?.russian}</h2>
      <h3>{word?.tags}</h3>
      <Link to=".." relative="path">All Words</Link>
    </>
  )
}

export default SingleWord