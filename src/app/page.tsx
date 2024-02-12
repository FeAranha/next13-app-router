import { GithubProfile } from "@/components/github-profile"
import { LongWaitComponent } from '@/components/long-wait-component'
import { Suspense } from 'react'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <h1>Home</h1>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio adipisci facere tenetur voluptatum. Ea, quis cumque. Blanditiis voluptate quibusdam quisquam delectus? Dicta ea veritatis dolorem atque consectetur nostrum ex?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}