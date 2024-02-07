'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  //timeOut 3 s
await new Promise((resolve) => setTimeout(resolve, 3000))

  const [productId, size, color] = params.data
  console.log(params)
  
  function addToCart() {
    //consoleLog feature add to cart ^^
    console.log('adicionou ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}