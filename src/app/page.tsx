import { Suspense } from "react"

async function getData() {
  const response = await fetch('https://api.github.com/users/fearanha')
  const user = await response.json()

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}

export default async function Home() {
  //timeOut 3 s
await new Promise((resolve) => setTimeout(resolve, 3000))

  const data = await getData()

  return (<main>
    <Suspense>
      {data}
    </Suspense>
  </main>
  )
}