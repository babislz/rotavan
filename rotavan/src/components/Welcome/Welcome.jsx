const Welcome = () => {
  return (
    <div className="w-full h-52 flex flex-col justify-center items-center gap-3 mt-20">
      <h1 className="text-4xl">
        <b>BEM-VINDO À ROTAVAN!</b>
      </h1>
      <h3 className="text-xl text-gray-600">
        A Principal Escolha em Transporte Escolar do Sul do Brasil.
      </h3>
      <div className="flex w-full h-36 gap-5 items-center justify-center mt-5">
        <img
          className="object-cover w-32"
          src="/src/assets/ISO14001.png"
          alt="ISO14001"
        />
        <img
          className="object-cover ml-6 w-32"
          src="/src/assets/ISO9001.png"
          alt="ISO9001"
        />
        <img
          className="object-cover w-40"
          src="/src/assets/ISO45001.png"
          alt="ISO45001"
        />
      </div>
    </div>
  );
};

export default Welcome;