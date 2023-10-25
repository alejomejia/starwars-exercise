export const initial = {
  y: 20,
  opacity: 0
}

export const animate = (index: number) => ({
  y: 0,
  opacity: 1,
  transition: {
    delay: index * 0.1
  }
})
