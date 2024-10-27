"use client"

import Card from "@/components/Card/Card";
import { TipoAluno } from "@/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const [alunos, setAlunos] = useState<TipoAluno[]>([]);
  
  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_URL_ALUNOS as string)
      const data = await response.json()

      setAlunos(data);
    }
    chamadaApi()
  }, [])

    return (
    <>
      <main>
        <motion.div  initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} className="pagina-inicial">
          <h1 className="text-black text-4xl font-bold text-center mb-12">
              Portfólio Estudantil
          </h1>
          <section className="area">
              
              <article className="p-5 box">
                  <h2 className="text-black text-4xl font-semibold mb-4">
                      Checkpoint ( CPS )
                  </h2>
                  <p className="text-base text-gray-600">
                      Avaliações intermediárias para acompanhamento do progresso.
                  </p>
              </article>

              <article className="p-5 box">
                  <h2 className="text-black text-4xl font-semibold mb-4">
                      Global Solutions ( GS )
                  </h2>
                  <p className="text-base text-gray-600">
                      Projetos ou avaliações integradoras, que envolvem a aplicação global dos conhecimentos adquiridos.
                  </p>
              </article>

              <article className="p-5 box">
                  <h2 className="text-black text-4xl font-semibold mb-4">
                      Challenge Sprints
                  </h2>
                  <p className="text-base text-gray-600">
                      Avaliações em formato de desafios, com foco em resolução de problemas com entregas programadas.
                  </p>
              </article>
          </section>
          <section className="card-area">
            {alunos.map((a,i) =>(
              <div key={i} className="m-20">
                <Card aluno={a}/>
              </div>
            ) )}
          </section>
        </motion.div>
      </main>
    </>
    );
}
