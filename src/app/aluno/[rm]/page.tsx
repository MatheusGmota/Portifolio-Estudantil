"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function DashBordAluno() {

    const disciplinas = ["ARTIFICIAL INTELLIGENCE & CHATBOT", "COMPUTATIONAL THINKING USING PYTHON", "DOMAIN DRIVEN DESIGN USING JAVA", "BUILDING RELATIONAL DATABASE", "FRONT-END DESIGN ENGINEERING", "SOFTWARE ENGINEERING AND BUSINESS MODEL"];

    return (
        <div>
            <h1 className="text-center font-bold text-4xl p-7">
                Disciplinas
            </h1>
            <div className="page-alunos">
                {disciplinas.map((d) => (
                    <>
                        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} className="movimento">
                            <h3>
                                {d}
                            </h3>
                            <div>
                                <Link href={`checkpoint/${d}`}>
                                    CheckPoints
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>

                                </Link>
                                <Link href={`challenge/${d}`}>
                                    Challenges - Sprints
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>

                                <Link href={`gs/${d}`}>
                                    Global Solutions
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                ))}
            </div>
        </div>
    );
}