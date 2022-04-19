import Modal from 'react-modal';

import { Container } from './styles';


interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export const NewTreinoModal = ({ isOpen, handleCloseModal }: ModalProps) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <h2>Cadastrar Novo Treino</h2>
        <input
          placeholder="Nome do Aluno"
          value=''
        />
        <input
          placeholder="Nome do Instrutor"
          value=''
        />
        <input
          placeholder="Tipo de Treino"
          value=''
        />
        <input
          placeholder="Horário"
          value=''
        />
      </Container>
    </Modal>
  );
};