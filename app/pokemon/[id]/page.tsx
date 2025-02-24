import React from 'react'

interface PokemonPageProps {
  params: {
    id: string
  }
}

const page = ({ params }: PokemonPageProps) => {
  return (
    <div>ID: {params.id}</div>
  )
}

export default page