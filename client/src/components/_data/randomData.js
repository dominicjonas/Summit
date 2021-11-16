export const makeRandomDataArray = (length) => {
  const randomArray = Array.from({ length: length }, () =>
    Math.floor(Math.random() * 50)
  )
  return randomArray
}
