export async function LongWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 6000))

  return <p>Carregado!</p>
}