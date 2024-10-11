'use client';

export default function ProductsPage() {
  const products = [
    {
      name: "Cavaleiros do Zodíaco (Saint Seiya) Gaiden - Volume 1",
      image: "https://m.media-amazon.com/images/I/81yeCGpVwPL._SY466_.jpg",
      price: "R$20,32",
      link: "https://www.amazon.com.br/Cavaleiros-Zod%C3%ADaco-Saint-Seiya-Gaiden/dp/8577875504/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-4",
      description: "Volume 1 de Cavaleiros do Zodíaco Gaiden."
    },
    {
      name: "Cavaleiros do Zodíaco - Saint Seiya Kanzenban - Vol. 2",
      image: "https://m.media-amazon.com/images/I/71sLNqdbg-L._SY466_.jpg",
      price: "R$40,32",
      link: "https://www.amazon.com.br/Cavaleiros-do-Zod%C3%ADaco-Kanzenban-2/dp/8545702574/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-14",
      description: "Volume 2 da edição Kanzenban de Saint Seiya."
    },
    {
      name: "Cavaleiros do Zodíaco - Episódio G: Volume 03",
      image: "https://m.media-amazon.com/images/I/91neKj6kB9L._SY466_.jpg",
      price: "R$29,50",
      link: "https://www.amazon.com.br/Cavaleiros-Zod%C3%ADaco-Epis%C3%B3dio-Masami-Kurumada/dp/8583625026/ref=sr_1_13?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-13",
      description: "Volume 3 de Cavaleiros do Zodíaco Episódio G."
    },
    {
      name: "Cavaleiros do Zodíaco (Saint Seiya) - Volume 13",
      image: "https://m.media-amazon.com/images/I/81s2+51Vt5L._SY466_.jpg",
      price: "R$8,93",
      link: "https://www.amazon.com.br/Cavaleiros-Zod%C3%ADaco-Saint-Seiya-13/dp/8577876306/ref=sr_1_16?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-16",
      description: "Volume 13 da série clássica de Cavaleiros do Zodíaco."
    },
    {
      name: "Ichibansho Figure - Saint Seiya - Pegasus Seiya",
      image: "https://m.media-amazon.com/images/I/61XymV1weoL._AC_SX679_.jpg",
      price: "R$589,99",
      link: "https://www.amazon.com.br/Ichibansho-Figure-Pegasus-Dourados-colecion%C3%A1vel/dp/B0CQKPZKD1/ref=sr_1_18?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint%2Bseiya&qid=1728661392&sprefix=saint%2Bseiyas%2Caps%2C259&sr=8-18&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&th=1",
      description: "Figura colecionável do Pegasus Seiya."
    },
    {
      name: "Funko POP! Animation: Saint Seiya - Virgo Shun",
      image: "https://m.media-amazon.com/images/I/71P1abb3B3L._AC_SX522_.jpg",
      price: "R$123,85",
      link: "https://www.amazon.com.br/POP-SAINT-SEIYA-CAVALEIROS-ARMADURA/dp/B0BRYQ5ZKY/ref=sr_1_19?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-19&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      description: "Funko POP de Virgo Shun com armadura dourada."
    },
    {
      name: "Cavaleiros do Zodíaco DVD - 15 Episódios",
      image: "https://m.media-amazon.com/images/I/81v3O-2JfnL._AC_SY741_.jpg",
      price: "R$149,90",
      link: "https://www.amazon.com.br/Cavaleiros-Zod%C3%ADaco-DVD-Discos-Epis%C3%B3dios/dp/B07XZKM5CQ/ref=sr_1_28?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-28&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      description: "Box com 15 episódios de Cavaleiros do Zodíaco."
    },
    {
      name: "Cavaleiros do Zodíaco - Saint Seiya Kanzenban - Vol. 7",
      image: "https://m.media-amazon.com/images/I/71R3VgjRXIL._SY466_.jpg",
      price: "R$32,45",
      link: "https://www.amazon.com.br/Cavaleiros-do-Zod%C3%ADaco-Kanzenban-7/dp/8545703813/ref=sr_1_27?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-27",
      description: "Volume 7 da edição Kanzenban de Saint Seiya."
    },
    {
      name: "Funko POP! Animation: Saint Seiya - Sagittarius Seiya Gold",
      image: "https://m.media-amazon.com/images/I/512-zJP+QCL._AC_SX679_.jpg",
      price: "R$339,00",
      link: "https://www.amazon.com.br/Funko-Sagittarius-Seiya-Gold-Exclusivo/dp/B08F7DZ2JZ/ref=sr_1_44?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3A3JG7TM7UMO9&dib=eyJ2IjoiMSJ9.VMzJP7I1TgftKKB4Ckl_SWkVNe9WbjWdDcIGFlYlPWsH9GJUtcgfr78EEumgBGDrwsbEVm_hcKKHcBanxFeD8fUXYj6D9B-dEmV9Z3xOUQOiklr18cXHIx5kU1yBqCgfc_40TMLD0y9_GVQVf5C7J7q05JgPPD8XujB2oxVusK0wlgoPO_E4axubib_5QE95POE1-qmj4vgzs7eTUHcaYbj5c_rKenxwFxdgR5GJOSRn317rOwXzzBlrMX-xBEK__veImvQvXDeFLt61i4Ag_dVG61JPG3OdUY_GZ8Ocvz8.ZERwhxH3IGRd3iYg5atzQ1pb9ZF3Gl9FgFKAC6O7uRg&dib_tag=se&keywords=saint+seiya&qid=1728661392&sprefix=saint+seiyas%2Caps%2C259&sr=8-44&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678",
      description: "Funko POP de Seiya de Sagitário Dourado."
    }
  ];

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center mb-12">
        Produtos - Saint Seiya
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-60 h-auto object-cover rounded-md mb-4" />
            <h3 className="text-2xl text-yellow-400 font-bold mb-2">{product.name}</h3>
            <p className="text-yellow-300 font-semibold mb-4">{product.price}</p>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
