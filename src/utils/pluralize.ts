interface Props {
  count: number
  singular: string
  plural?: string
}

export default function pluralize({ count, singular, plural }: Props) {
  if (count === 1) {
    return singular
  }

  return plural ?? `${singular}s`
}
