const AboutUs = () => {
    return(
        <div className="w-full h-96 flex flex-wrap items-center justify-center mt-28 gap-28 px-4">
            <div className="w-full md:w-2/5">
              <h1 className="text-customYellow"><b>QUEM SOMOS?</b></h1>
              <h1 className="text-4xl"><b>Na RotaVan, somos a <span className="text-customYellow">referência</span><br /> em transporte escolar em<br/> Curitiba e região!</b></h1>
              <p>Comprometidos em oferecer serviços com excelência, conforto e segurança,</p>
              <p>nos destacamos como a melhor opção para o transporte de estudantes. Nosso</p>
              <p>objetivo é garantir uma jornada escolar tranquila e segura, sempre com um</p>
              <p>forte foco em responsabilidade social e qualidade no atendimento.</p>
              <p>Especializamo-nos em:</p>
              <ul className="list-disc list-inside pl-5 mb-4">
                <li><b>Transporte escolar de qualidade para estudantes;</b></li>
                <li><b>Transporte de alunos com necessidades especiais;</b></li>
                <li><b>Transporte para atividades extracurriculares e excursões escolares;</b></li>
                <li><b>Transporte de estudantes em períodos de alta demanda, como início e fim
                  <br /> de semestre;</b></li>
                <li><b>Locação de vans para eventos escolares e passeios em Curitiba e região.</b></li>
              </ul>
              Na RotaVan, a sua jornada é a nossa missão. Estamos aqui para garantir que o <br />
              transporte escolar seja uma experiência segura e confiável para você e sua família.
            </div>
            <img className="object-cover max-w-full w-full md:w-1/4" src="/src/assets/kids.png" alt="" />
        </div>
    )
}

export default AboutUs;