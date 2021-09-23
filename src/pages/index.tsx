import { FC, useState, useEffect } from 'react'

import { Loading } from '@modules/Loading'

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => setIsLoading(false), 1700)
  }, [])

  return (
    <>
      <Loading show={isLoading} />
    </>
  )
}

export default Home
