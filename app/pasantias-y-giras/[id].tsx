import {useRouter} from 'next/router'

export default function Page() {
    const router = useRouter();
    console.log(router)
  return (
    <div>
        <h1>{}</h1>
    </div>
  )
}