import axios from "axios";
import React, { useEffect, useState } from "react";
import { SellerCardStyle } from "./style";

const SellerCard = ({ sellerId }) => {
  const [sellerData, setSellerData] = useState(null);

  useEffect(() => {
    axios
      .get(`localhost:8000/api/accounts/${sellerId}`)
      .then((response) => {
        const data = response.data;
        setSellerData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados do vendedor:", error);
      });
  }, [sellerId]);

  return (
    <SellerCardStyle>
      {sellerData && (
        <div className="contentBox">
           <div className='capitalLetters'>
            <h2>{sellerData.user.name.charAt(0).toUpperCase() || "SL"}</h2>
           </div>
            <h3>{sellerData.user.name || "Samuel Leão"}</h3>
            <p>{sellerData.user.description || "Descrição do perfil"}</p>
          </div>
      )}
    </SellerCardStyle>
  //   <SellerCardStyle>
  //     <div className="contentBox">
  //       <div className='capitalLetters'>
  //         <h2>SL</h2>
  //       </div>
  //         <h3>Samuel Leão</h3>
  //         <p>Descrição do perfil</p>
  //     </div> 
  // </SellerCardStyle>
  );
};

export default SellerCard