"use-client"


export default function Home() {
  return (
    <>
      <main className="pagina-inicial">
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
          <section>
            
          </section>
      </main>
    </>
  );
}
