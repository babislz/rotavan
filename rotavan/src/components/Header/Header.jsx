const Header1 = () => {
  return (
    <>
      <div className="flex flex-col fixed top-0 shadow-md" style={{
        zIndex: "999"
      }}>
        <div className="w-screen bg-customGray h-12 text-white flex justify-around">
          <div className="flex items-center gap-2">
            <img src="/src/assets/location.svg" alt="" />
            <h5>
              R. Paula Gomes, 282 - São Francisco, Curitiba - PR, 80510-070
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <img src="/src/assets/phone.svg" alt="" />
            <h5>(41) 3271-9946</h5>
          </div>
          <div className="flex items-center gap-1">
            <img src="/src/assets/whatsapp-logo.svg" alt="" />
            <h5>(41) 98729-5409</h5>
          </div>
        </div>
        <div className="w-screen h-36 bg-white flex items-center justify-between">
          <img
            className="object-cover w-2/12 ml-16"
            src="/src/assets/rotavan-logo-light-mode.png"
            alt="Logo"
          />
          <div className="flex space-x-10 pe-64">
              <h4 className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-customYellow hover:before:w-full transition-all duration-300">Home</h4>
              <h4 className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-customYellow hover:before:w-full transition-all duration-300">Serviços</h4>
              <h4 className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-customYellow hover:before:w-full transition-all duration-300">Veículos</h4>
              <h4 className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-customYellow hover:before:w-full transition-all duration-300">Contato</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
