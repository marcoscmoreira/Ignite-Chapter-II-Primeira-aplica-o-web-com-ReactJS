import React, { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransacionModal';
import { GlobalStyle } from './styles/globalStyles'
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root');
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true); //abrir modal
}

function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false); //fechar modal
}


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} 
      />

      <GlobalStyle />
      
    </ TransactionsProvider>
  );
}