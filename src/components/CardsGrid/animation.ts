export const initial = {
  opacity: 0,
  y: 20
}

export const animate = (index: number) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay: index * 0.1
  }
})
