const slug = (str: string) => {
  if (!str) return ""
  return str.toLowerCase().replace(" ", "-")
}

export default slug