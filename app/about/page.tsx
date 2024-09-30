import Image from 'next/image'
import { Noto_Serif_KR } from 'next/font/google'

const notoSerifKr = Noto_Serif_KR({ weight: ['400', '700'], subsets: ['latin'] })

export default function About() {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <h2 className={`${notoSerifKr.className} text-4xl font-bold mb-8 text-center text-[#333]`}>
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <Image
                            src="/Profile.jpg"
                            alt="Lee Seongmin"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-2/3 space-y-4 text-[#666]">
                        <h3 className={`${notoSerifKr.className} text-2xl font-bold text-[#333]`}>이성민</h3>
                        <p>E-commerce/MD | 만 26세</p>
                        <p>
                            "E" 와 "Commerce" 에 대해 깊게 이해하고자 합니다.
                            글로벌 시대, AI 기술 혁신에 발맞춘 유통 전문가가 되겠습니다.
                        </p>
                        <p>
                            강점:
                            <ul className="list-disc list-inside ml-4">
                                <li>Multi-Talented: 다양한 OA 및 Tool을 다룹니다.</li>
                                <li>Well-Prepared: 오랜시간 관련경험을 쌓아왔습니다.</li>
                                <li>Globalness: 동남아 지역 전문가로, 글로벌 역량을 갖추고 있습니다.</li>
                                <li>Risk taker: 스스로 새로운 것을 찾고, 도전합니다.</li>
                            </ul>
                        </p>
                        <p>
                            견고한 팔로워가 도전적인 리더를 만든다는 것을 신념으로 삼고 있습니다. 팀이 위험한 순간에 하중을 나누는 든든한 follower가 되겠습니다.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className={`${notoSerifKr.className} text-2xl font-bold mb-4 text-[#333]`}>타임라인</h3>
                    <div className="relative">
                        <div className="absolute w-1 bg-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>
                        <div className="space-y-8">
                            <TimelineItem year="2025.02" title="한국외국어대학교 졸업예정" company="말레이.인도네시아어과" />
                            <TimelineItem year="2022.05 ~ 2023.08" title="전략사업 2팀 AWF" company="Gmarket" />
                            <TimelineItem year="2021.09 ~ 2022.02" title="Seller(개인사업자)" company="LAZADA ID/MY" />
                            <TimelineItem year="2020.07 ~ 2022.02" title="번역 및 운영지원" company="(주)하우 - 프리랜서 계약" />
                            <TimelineItem year="2018.03 ~ 2019.11" title="군 복무" company="욱군 보병 만기제대" />
                            <TimelineItem year="2017.03" title="한국외국어대학교 입학" company="말레이.인도네시아어과" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TimelineItem({ year, title, company }) {
    return (
        <div className="relative">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 mt-1.5"></div>
            <div className="flex items-center w-full">
                <div className="w-1/2 pr-8 py-4 text-right">
                    <p className="font-bold text-blue-500">{year}</p>
                </div>
                <div className="w-1/2 pl-8 py-4">
                    <p className="font-bold text-[#333]">{title}</p>
                    <p className="text-gray-500">{company}</p>
                </div>
            </div>
        </div>
    )
}