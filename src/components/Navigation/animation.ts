export const variantNavigationMobile = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

export const variantLinks = {
  initial: {
    y: 24,
    opacity: 0
  },
  animate: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.1
    }
  })
}
