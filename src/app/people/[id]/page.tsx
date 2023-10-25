interface Props {
  params: {
    id: string
  }
}

export default function Person({ params: { id } }: Props) {
  return <h1 className="text-9xl">Person {id}</h1>
}
