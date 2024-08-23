const Intro = () => {
  return (
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
  );
};

export default Intro;
