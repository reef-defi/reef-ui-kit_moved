const formatAddress = (address:string = "", offset:number = 5): string => {  
  if (address.length > offset) {
    return `${address.slice(0, offset )}...${address.slice(address.length - offset)}`
  }

  return address
}

export default formatAddress