const Header1 = () => {
  return (
    <>
      <body className="flex flex-col">
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
        <div className="w-screen h-44 bg-white flex items-center">
          <img
            className="object-cover w-2/12"
            src="/src/assets/rotavan-logo-light-mode.png"
            alt="Logo"
          />
          <div className="flex space-x-10">
            <h4>Home</h4>
            <h4>Serviços</h4>
            <h4>Veículos</h4>
            <h4>Contato</h4>
          </div>
        </div>
      </body>
    </>
  );
};

export default Header1;
