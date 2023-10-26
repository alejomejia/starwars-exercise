import { getResourceById } from '@/services/getResourceById'
import { Entities } from '@/types/api'

interface Props {
  entity: Entities
  id: string
}

export async function PageDetail({ entity, id }: Props) {
  const { name, height, mass, birth_year: birthYear, gender, imageUrl } = await getResourceById(entity, id)

  return <span>PageDetail</span>
}
