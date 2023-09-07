import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonComponents from '../../components/Global/Buttons';
import { CreateAnnouncementModal } from "../Modais/CreateAnnouncementModal";
import { SellerCardStyle } from "./style";
const SellerCard = ({id}) => {
  const [sellerData, setSellerData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };

 
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/announcements`)
      .then((response) => {
        const data = response.data;
        const seller = data.find((item) => item.account_id === Number(id));
        if (seller) {
          setSellerData(seller.account);
        }else {
          setSellerData(null);
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

  if (!sellerData) {
    const token = localStorage.getItem("@TOKEN")
    if (token) {
    return (
      <SellerCardStyle>
    <div className="contentBox">
     <div className='sellerNoData'>
     <h3>Você não possui anúncios cadastrados</h3>
     </div>
     <p>Crie seu primeiro anúncio</p>
   <ButtonComponents
   text='Criar Anúncio'
   $size='large'
   $width='150px'
   typeButton='button'
   $type='outlineBrand1'
   onClick={openModal}
 />
    </div>
    {isModalOpen && (
        <CreateAnnouncementModal onClose={closeModal} />
      )}
    </SellerCardStyle>
    )}
    }

  return (
    <SellerCardStyle>
      {sellerData  && (
        <div className="contentBox">

           <div className='capitalLetters'>
            <h2>{getInitials(sellerData.user.name)}</h2>
           </div>
            <div className='sellerData'>
            <h3>{sellerData.user.name}</h3>
            <span><h5>Anunciante</h5></span>
            </div>
            <p>{sellerData.user.description}</p>
            <ButtonComponents
              text='Criar Anúncio'
              $size='large'
              $width='150px'
              typeButton='button'
              $type='outlineBrand1'
              onClick={openModal}
            />
          </div>
          
      )}
      {isModalOpen && (
        <CreateAnnouncementModal setIsModalOpen={setIsModalOpen} />
      )}
    </SellerCardStyle>
  );
};

export default SellerCard