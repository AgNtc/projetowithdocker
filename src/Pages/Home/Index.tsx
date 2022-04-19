import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from '../../Components/Header'; 
import { NewTreinoModal } from '../../Components/NewTreinoModal';
import { Table } from '../../Components/Table';
import { Title } from './styles';

Modal.setAppElement("#root");

export const Index= () =>{
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return (
      <>
        <Header handleOpenModal={openModal} />
        <Title>Sua Rotina de treinos</Title>
        <Table />
        <NewTreinoModal isOpen={modalIsOpen} handleCloseModal={closeModal} />
      </>
    );
}