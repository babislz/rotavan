const WhyUsSec = () => {
    return(
            <div className="bg-blue-900 shadow-lg flex flex-col md:flex-row w-full h-newsize55 mt-72">
                <div className="md:w-1/2 relative"> 
                <img
                    src="/src/assets/driver.png"
                    alt="Driver"
                    className="object-cover absolute w-newSize65"
                    style={{
                        top: "-50px"
                    }}
                />
                </div>
            <div className="md:w-1/2 p-8  text-white flex flex-col justify-center">
                <h2 className=" text-md font-semibold mb-4 text-customYellow">
                    POR QUE ESCOLHER A ROTAVAN?
                </h2>
                <h1 className="text-4xl font-bold leading-tight mb-4">
                    Comprometidos com a<br />
                    <span className="text-customYellow">excelência</span> em transporte
                    escolar
                </h1>
                <p className="text-sm md:text-base mb-6">
                    A RotaVan é uma empresa dedicada a proporcionar o melhor transporte
                    escolar para<br /> Curitiba e região. Desde o início de nossas operações,
                    nosso objetivo tem sido oferecer<br /> um serviço seguro, confortável e
                    confiável para estudantes e suas famílias.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-2 gap-2">
                    <img src="/src/assets/bus.svg" alt="" />
                    <div>
                        <p className="font-semibold text-2xl">+100K</p>
                        <p className="text-sm">+100.000 km rodados por mês.</p>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 gap-2">
                    <img src="/src/assets/trato.svg" alt="" />
                    <div>
                        <p className="font-semibold text-2xl">99,9%</p>
                        <p className="text-sm">99,9% de conformidade com horários.</p>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 gap-2">
                    <img src="/src/assets/people.svg" alt="" />
                    <div>
                        <p className="font-semibold text-2xl">+500</p>
                        <p className="text-sm">+500 estudantes transportados mensalmente.</p>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 gap-2">
                    <img src="/src/assets/school.svg" alt="" />
                    <div>
                        <p className="font-semibold text-2xl">+30</p>
                        <p className="text-sm">+30 Escolas e instituições que confiam em<br />nosso serviço de transporte escolar.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
} 

export default WhyUsSec;
