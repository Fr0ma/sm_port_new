"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Noto_Serif_KR } from 'next/font/google'
import { CheckCircle2 } from 'lucide-react'

const notoSerifKr = Noto_Serif_KR({ weight: ['400', '700'], subsets: ['latin'] })

const TriangleGraph = ({ skills }: { skills: { name: string; level: number }[] }) => {
    return (
        <div className="flex justify-around items-end h-64 mt-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="h-48 w-24 relative">
                        <motion.div
                            className="absolute bottom-0 left-0 right-0"
                            initial={{ height: 0 }}
                            animate={{ height: `${(skill.level / 100) * 100}px` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            style={{
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                backgroundColor: '#2563eb',
                            }}
                        />
                    </div>
                    <p className="text-sm mt-2 text-center font-semibold">{skill.name}</p>
                </div>
            ))}
        </div>
    )
}

export default function Home() {
    const tasks = [
        {
            title: "Project1 - 하우(폴에디트) 운영지원",
            period: "2020.07 ~ 2022.02",
            description: [
                {
                    subtitle: "1. 상품 등록 업무:",
                    details: ["해외 쇼핑몰(아마존, 타오바오 등) 제품 소싱 후 국내 쇼핑몰에 등록"],
                    skillName: "상품 이해도",
                    skillLevel: 80
                },
                {
                    subtitle: "2. 키워드 번역 업무:",
                    details: [
                        "번역기를 이용해 기계번역한 제품명이 정상적으로 노출되도록 조정",
                        "(네이버 검색어 통계 및 SEO 자료 활용)",
                        "내부 번역 프로그램 제작 개선작업"
                    ],
                    skillName: "SEO 이해도",
                    skillLevel: 100
                },
                {
                    subtitle: "3. 상품 검수 업무:",
                    details: [
                        "등록된 상품 중 법적 우려가 있는 제품 검수",
                        "(지적 재산권 위배 물품, 심의에 제한되는 물품, 통관 불가 물품)"
                    ],
                    skillName: "협업능력",
                    skillLevel: 80
                }
            ],
            achievements: [
                "SEO 조정 작업 후 3개월 간 YoY 대비 매출 10% 증가",
                "기계 번역 솔루션 프로그램 완성 이후 상용화",
            ]
        },
        {
            title: "Project2 - 지마켓 전략사업 2팀 AWF",
            period: "2022.05 ~ 2023.08",
            description: [
                {
                    subtitle: "1. 브랜드 운영지원:",
                    details: ["브랜드사 및 내부 커뮤니케이션",
                        "상품 등록, 수정 및 재고확인 등 제반업무",
                        "기획전 및 프로모션 노출 상품 선정",
                    ],
                    skillName: "OA사용능력",
                    skillLevel: 120
                },
                {
                    subtitle: "2. 프로모션 운영 지원:",
                    details: [
                        "빅스마일데이 등 대형 프로모션 운영 지원",
                        "2주간 최대 40개의 기획전 기획지원 및 Handling", 
                        "그룹사 대형행사 기획 및 운영지원",
                        "LG생활건강 X CJ, SSG X CJ 등 대형 콜라보 행사 다수 진행",
                        "라이브커머스 현장지원을 포함한 운영지원"
                    ],
                    skillName: "커뮤니케이션 능력",
                    skillLevel: 85
                },
                {
                    subtitle: "주요 담당 브랜드",
                    details: [
                        "CJ제일제당/ CJ 웰케어/ 풀무원/ 청정원/ 롯데칠성/ 종근당건강 등",
                    ],
                    skillName: "직매입 사업 이해도",
                    skillLevel: 95
                }
            ],
            achievements: [
                "Excel, SQL, Python 등을 사용한 업무 최적화로 리드타임 30% 이상 단축",
                "2023.02 옥션 CJ 극한특가 일매출 20억",
                "2022 추석행사 CJ 60억, 2023 설 행사 CJ 80억 최고매출 경신"
            ]
        },
        {
            title: "Project3 - 개인 프로젝트 - 포트폴리오",
            period: "2024.09 ~ 현재",
            description: [
                {
                    subtitle: "기획 사유:",
                    details: ["현 시대의 고객이 사용하는 앱 및 웹 환경에 대한 이해 함양", "AI 기술 활용 능력 강화"],
                    skillName: "AI 기술 이해도",
                    skillLevel: 90
                },
                {
                    subtitle: "주요 사용 기술 스택:",
                    details: [
                        "React, Next.js, Tailwind CSS, Typescript 기반",
                        "Chat GPT, V0.dev, pixir(이미지) 등 다양한 소스 사용"
                    ],
                    skillName: "프론트엔드 이해도",
                    skillLevel: 70
                },
                {
                    subtitle: "추푸 개선사항 (진행중):",
                    details: [
                        "텍스트 가독성 향상",
                        "Three.js를 통한 디자인 향상 및 성능최적화"
                    ],
                    skillName: "파트너십 관리",
                    skillLevel: 90
                }
            ],
            achievements: [
                "Html/CSS 등 웹코딩 이해도 상승",
                "프론트엔드와의 협업 적응도 상승",
            ]
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${notoSerifKr.className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full"
                >
                    <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
                        {tasks[currentIndex].title}
                    </h2>
                    <p className="text-center text-gray-600 mb-6">{tasks[currentIndex].period}</p>
                    <div className="space-y-6">
                        {tasks[currentIndex].description.map((section, i) => (
                            <div key={i} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-700">{section.subtitle}</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    {section.details.map((detail, j) => (
                                        <li key={j} className="text-lg text-gray-600 leading-relaxed">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mt-8"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">주요 성과</h3>
                        <ul className="space-y-2">
                            {tasks[currentIndex].achievements.map((achievement, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                                    className="flex items-start"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{achievement}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <TriangleGraph
                        skills={tasks[currentIndex].description.map(section => ({
                            name: section.skillName,
                            level: section.skillLevel
                        }))}
                    />
                    <div className="mt-6 text-gray-500 text-center">
                        {currentIndex + 1}/{tasks.length}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 w-full max-w-2xl">
                <button
                    onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? tasks.length - 1 : prevIndex - 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
                >
                    이전
                </button>
                <button
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % tasks.length)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
                >
                    다음
                </button>
            </div>
        </div>
    )
}
