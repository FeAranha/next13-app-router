export default async function Catalog() {
  //timeOut 3 s
await new Promise((resolve) => setTimeout(resolve, 3000))

  return <h1>Catalog</h1>
}