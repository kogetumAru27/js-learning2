import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>はじめてのNext.js</h1>
      <Link href="/about" className='text-blue-500 underline hover:text-blue-700'>Aboutページへ</Link>
    </div>
  )
}