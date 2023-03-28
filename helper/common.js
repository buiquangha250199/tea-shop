export const formatNumber = (number) => {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' })
    .format(number)
    .substring(1)
}

export const getProductByType = (products, type) => {
  return products.filter((product) => product.category.id === Number(type))
}

export const getTwoRandomProducts = (products) => {
  const product1 = products[Math.floor(Math.random() * products.length)]
  const newProducts = products.filter((pro) => pro.id !== product1.id)
  const product2 = newProducts[Math.floor(Math.random() * newProducts.length)]

  return [product1, product2]
}

