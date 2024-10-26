"use client"

import Card from "@/components/Card/Card";
import { TipoAluno } from "@/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const [alunos, setAlunos] = useState<TipoAluno[]>([]);
  
  useEffect(() => {
    const chamadaApi = async ()=>{
      const response = await fetch(`http://localhost:3000/api/base-alunos`, {mode: 'no-cors'})
      if(response.ok){
        const data = await response.json();
        setAlunos(data);
      }
    }
    chamadaApi();
  },[])
  return (
    <>
      <main>
        <motion.div  initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} className="pagina-inicial">
          <h1 className="titulo">
              Portfólio Estudantil
          </h1>
          <section className="area">
              
              <article className="box">
                  <h2 className="sub-titulos">
                      Checkpoint ( CPS )
                  </h2>
                  <p className="texto">
                      Avaliações intermediárias para acompanhamento do progresso.
                  </p>
              </article>

              <article className="box">
                  <h2 className="sub-titulos">
                      Global Solutions ( GS )
                  </h2>
                  <p className="texto">
                      Projetos ou avaliações integradoras, que envolvem a aplicação global dos conhecimentos adquiridos.
                  </p>
              </article>

              <article className="box">
                  <h2 className="sub-titulos">
                      Challenge Sprints
                  </h2>
                  <p className="texto">
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
