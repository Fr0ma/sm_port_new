"use client"

import { useState, useEffect } from 'react'
import { Noto_Serif_KR } from 'next/font/google'
import { motion } from 'framer-motion'

const notoSerifKr = Noto_Serif_KR({ weight: ['400', '700'], subsets: ['latin'] })

const skills = [
    { name: 'Python', level: 75, color: '#CE2029' },
    { name: 'Next.js', level: 50, color: '#ED2939' },
    { name: 'React', level: 40, color: '#DD4124' },
    { name: 'Photoshop', level: 80, color: '#FF5E3A' },
    { name: 'EXCEL', level: 90, color: '#FF974C' },
    { name: 'PostgreSQL', level: 50, color: '#F9B338' },
]

const languages = [
    { name: "Korean", level: "100%" },
    { name: "Indonesian", level: "70%" },
    { name: "English", level: "70%" },
    { name: "Japanese", level: "45%" }
]

export default function Skills() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
            <motion.div
                className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={`${notoSerifKr.className} text-4xl font-bold mb-8 text-center text-[#333]`}>
                    Skills
                </h2>
                <div className="relative w-full mb-12" style={{ paddingBottom: '100%' }}>
                    <SkillWheel skills={skills} />
                </div>

                <h2 className={`${notoSerifKr.className} text-4xl font-bold mb-8 text-center text-[#333]`} style={{ paddingBottom: '5%' }}>
                    Languages
                </h2>
                <div className="relative w-full mb-12" style={{ paddingBottom: '3%' }}>
                    <LanguageBarChart languages={languages} />
                </div>
            </motion.div>
        </div>
    )
}

function SkillWheel({ skills }) {
    return (
        <div className="absolute inset-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {skills.map((skill, index) => (
                    <SkillSegment
                        key={skill.name}
                        skill={skill}
                        index={index}
                        total={skills.length}
                    />
                ))}
            </svg>
        </div>
    )
}

function SkillSegment({ skill, index, total }) {
    const angleStep = 360 / total
    const startAngle = index * angleStep
    const endAngle = (index + 1) * angleStep
    const innerRadius = 10
    const outerRadius = 15 + (skill.level / 100) * 30

    const startRadians = (startAngle * Math.PI) / 180
    const endRadians = (endAngle * Math.PI) / 180

    const x1 = 50 + innerRadius * Math.cos(startRadians)
    const y1 = 50 + innerRadius * Math.sin(startRadians)
    const x2 = 50 + outerRadius * Math.cos(startRadians)
    const y2 = 50 + outerRadius * Math.sin(startRadians)
    const x3 = 50 + outerRadius * Math.cos(endRadians)
    const y3 = 50 + outerRadius * Math.sin(endRadians)
    const x4 = 50 + innerRadius * Math.cos(endRadians)
    const y4 = 50 + innerRadius * Math.sin(endRadians)

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

    const path = [
        `M ${x1} ${y1}`,
        `L ${x2} ${y2}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
        `L ${x4} ${y4}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
        'Z'
    ].join(' ')

    const textPathId = `textPath${index}`
    const hoverX = 5 * Math.cos((startAngle + angleStep / 2) * (Math.PI / 180))
    const hoverY = 5 * Math.sin((startAngle + angleStep / 2) * (Math.PI / 180))

    return (
        <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{
                scale: 1.1,
                translateX: hoverX,
                translateY: hoverY
            }}
        >
            <defs>
                <path
                    id={textPathId}
                    d={`M ${50 + (innerRadius + 5) * Math.cos(startRadians)} ${50 + (innerRadius + 5) * Math.sin(startRadians)} A ${innerRadius + 5} ${innerRadius + 5} 0 ${largeArcFlag} 1 ${50 + (innerRadius + 5) * Math.cos(endRadians)} ${50 + (innerRadius + 5) * Math.sin(endRadians)}`}
                />
            </defs>
            <motion.path
                d={path}
                fill={skill.color}
                stroke="#fff"
                strokeWidth="0.7"
                initial={{ pathLength: 0, scale: 0 }}
                animate={{ pathLength: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
            />
            <motion.text
                fill="#fff"
                fontSize="2"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
            >
                <textPath href={`#${textPathId}`} startOffset="50%" textAnchor="middle">
                    {skill.name}
                </textPath>
            </motion.text>
        </motion.g>
    )
}

function LanguageBarChart({ languages }) {
    return (
        <div className="flex flex-col items-center mt-8">
            <dl className="w-full max-w-md text-sm">
                {languages.map((lang, index) => (
                    <div className="flex items-center mb-2" key={index}>
                        <dt
                            className={`w-[55px] min-w-[55px] ${notoSerifKr.className} font-bold`}
                            style={{ position: 'relative', left: '-35px' }}
                        >
                            {lang.name}
                        </dt>
                        <dd
                            className="relative bg-blue-600 text-white font-semibold rounded-md px-3 text-right"
                            style={{
                                width: lang.level, 
                                height: '45px', 
                                lineHeight: '45px', 
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                position: 'relative',
                                transition: 'width 1s ease-in-out'
                            }}
                        >
                            {lang.level} 
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}