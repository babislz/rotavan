import Header1 from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Header1 />
      <main className="pt-48">
        <section>
            <div className="w-full min-h-96 bg-headerBottomImage bg-cover bg-center text-white flex flex-col items-start justify-center pl-20 gap-5">
            <h1 className="text-4xl mb-4">
                <b>
                RotaVan, líder em <br />
                segurança e <span className="text-customYellow">qualidade</span>
                <br />
                para você e seus filhos.
                </b>
            </h1>
            <button className="bg-customYellow p-3 rounded-md">
                <b>Nossa frota</b>
            </button>
            </div>
            <div className="w-full h-52 flex flex-col justify-center items-center gap-3 mt-20">
            <h1 className="text-4xl"><b>BEM-VINDO À ROTAVAN!</b></h1>
            <h3 className="text-xl text-gray-600">A Principal Escolha em Transporte Escolar do Sul do Brasil.</h3>
            <div className="flex w-full h-36 gap-5 items-center justify-center mt-5">
                <img className="object-cover w-32" src="/src/assets/ISO14001.png" alt="ISO14001" />
                <img className="object-cover ml-6 w-32" src="/src/assets/ISO9001.png" alt="ISO9001" />
                <img className="object-cover w-40" src="/src/assets/ISO45001.png" alt="ISO45001" />
            </div>
            </div>    
        </section>
        <section>
            <div className="w-full bg-slate-600 h-96">
                <div className="w-2/5">
                    <h1><b>QUEM SOMOS?</b></h1>

                    <h1> Na RotaVan, somos a referência em transporte escolar em Curitiba e região! </h1>
                    <p>Comprometidos em oferecer serviços com excelência, conforto e segurança,</p>
                    <p>nos destacamos como a melhor opção para o transporte de estudantes. Nosso</p>
                    <p>objetivo é garantir uma jornada escolar tranquila e segura, sempre com um</p>
                    <p>forte foco em responsabilidade social e qualidade no atendimento.</p>
                    <p>Especializamo-nos em:</p>

                    <ul className="list-disc list-inside pl-5 mb-4">
                        <li>Transporte escolar de qualidade para estudantes;</li>
                        <li>Transporte de alunos com necessidades especiais;</li>
                        <li>Transporte para atividades extracurriculares e excursões escolares;</li>
                        <li>Transporte de estudantes em períodos de alta demanda, como início e fim
                        <br /> de semestre;</li>
                        <li>Locação de vans para eventos escolares e passeios em Curitiba e região.</li>
                    </ul>

                    Na RotaVan, a sua jornada é a nossa missão. Estamos aqui para garantir que o <br />
                    transporte escolar seja uma experiência segura e confiável para você e sua família.
                </div>
            </div>
            </section>
        
      </main>
    </div>
  );
};

export default Home;
