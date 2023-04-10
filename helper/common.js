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

export const formatDate = (date) => {
  const d = new Date(date)
  const datestring =
    ('0' + d.getDate()).slice(-2) +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    d.getFullYear() +
    ' ' +
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2)

  return datestring
}
