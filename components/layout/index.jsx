import React, { useState } from 'react';
import { Navbar, Modal } from '../../components';

function Layout({ children }) {
  const [modalStatus, setModalStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setModalStatus(!modalStatus)
    document.body.style.overflowY = 'hidden'
  }

  const closeModal = () => {
    if (modalStatus === true) {
      document.body.style.overflowY = ''
      setModalStatus(false)
    }

  };

  if (typeof window !== 'undefined') {
    document.addEventListener('keyup', (event) => {
      if (
        (!isModalOpen &&
          (event.metaKey || event.altKey) &&
          event.key === 'k') ||
        event.key === 'K'
      ) {
        setModalStatus(!modalStatus);
        setIsModalOpen(true);
        console.log('asdkjasdnkjasdnkj');
      }
    });
  }
  return (
    <div onClick={closeModal}>
      <Navbar onClick={handleModal} />
      <main>{children}
        {modalStatus && <Modal modalStatus={modalStatus} />}
      </main>
    </div>
  );
}

export default Layout;
