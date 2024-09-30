import Link from 'next/link'
import { Noto_Serif_KR } from 'next/font/google'

const notoSerifKr = Noto_Serif_KR({ weight: ['400', '700'], subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
        <h2 className={`${notoSerifKr.className} text-4xl font-bold mb-8 text-[#333]`}>
          For Next Commerce
        </h2>
        <p className="text-l mb-12 text-[#666]">
                  이것은 개발자의 포트폴리오가 아닙니다.<br />변화하는 세상을 Follow-up 하기 위해 노력하는, <br />MD의 포트폴리오입니다.<br /><br />
                  웹과 앱을 이해하고 차후 프론트엔드와 협업하고자,<br />포트폴리오를 Next.js, Tailwind CSS, Typescript로 제작하였습니다.
              </p>
              <p className="text-l mb-12 text-[#666]">
                  빠르게 변화하는 시대에 걸맞는, 유통가의 새로운 기준이 되겠습니다.
              </p>
        <Link href="/about" className={`${notoSerifKr.className} bg-[#007bff] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#0056b3] transition-colors`}>
          About me
        </Link>
      </div>
    </div>
  )
}