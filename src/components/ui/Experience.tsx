'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        {/* Seção de Experiência Profissional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="fade-in"
        >
          <h2 className="section-title">Experiência Profissional</h2>
          
          <div className="experience-cards-container">
            {/* Card 1 - Codako/Grupo Amazonas */}
            <div className="experience-card">
              <div className="experience-card-header">
                <h3>Codako/Grupo Amazonas</h3>
                <p className="data">04/2022 - 01/2024</p>
              </div>
              <p className="company">Desenvolvedora Front-end</p>

              <motion.p 
                className="description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Trabalhei como desenvolvedora front-end, contribuindo para o
                desenvolvimento de soluções inovadoras e eficientes para o Grupo Amazonas. Minha
                experiência inclui a criação de interfaces de usuário responsivas e
                intuitivas, utilizando tecnologias modernas como React e Next.js.
                Além disso, participei ativamente de reuniões de equipe e colaborei com a organização do inicio do projeto Codako.
              </motion.p>
            </div>

            {/* Card 2 - Sumup Bank */}
            <div className="experience-card">
              <div className="experience-card-header">
                <h3>Sumup Bank</h3>
                <p className="data">04/2022 - 01/2024</p>
              </div>
              <p className="company">Desenvolvedora Generation</p>

              <motion.p 
                className="description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Após concluir o bootcamp da Generation, fui uma das 11 pessoas da
                minha turma selecionadas para integrar o time de Engenharia e
                Tecnologia da SumUp. Durante meu tempo na empresa, desenvolvi
                habilidades no front-end e tive a oportunidade de aprender um pouco
                sobre back-end com Elixir. Participei de dois hackathons internos e da
                HackWeek — uma imersão de uma semana realizada em 2023, na Bulgária,
                que reuniu pessoas de diversas partes do mundo para cocriar soluções
                inovadoras.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}