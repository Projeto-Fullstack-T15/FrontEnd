import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { SellerCardStyle } from "./style";

const SellerCard = () => {
  const [sellerData, setSellerData] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/announcements`)
      .then((response) => {
        const data = response.data;
        const seller = data.find((item) => item.account_id === Number(id));
        if (seller) {
          setSellerData(seller.account);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados do vendedor:", error);
      });
  }, [id]);


  const getInitials = (name) => {
    const words = name.split(' ');
    let initials = '';
    for (let i = 0; i < Math.min(2, words.length); i++) {
      initials += words[i].charAt(0).toUpperCase();
    }
    return initials;
  }

  return (
    <SellerCardStyle>
      {sellerData && (
        <div className="contentBox">
           <div className='capitalLetters'>
            <h2>{getInitials(sellerData.user.name)}</h2>
           </div>
            <h3>{sellerData.user.name}</h3>
            <p>{sellerData.user.description}</p>
          </div>
      )}
    </SellerCardStyle>
  );
};

export default SellerCard