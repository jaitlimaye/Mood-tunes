import Image from 'next/image'
import Moodtunes from './moodtunes'

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between">
        <Moodtunes />
    </main>
  )
}
