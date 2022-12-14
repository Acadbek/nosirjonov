import React, { useState } from "react";
import { Navbar, Modal } from "../../components";

function Layout({ children }) {
  const [modalStatus, setModalStatus] = useState(false);
  
  const handleModal = (e) => {
    console.log(e);
    setModalStatus(!modalStatus);
  };

  return (
    <>
      <Navbar onClick={handleModal} />
      <main>{children}</main>
      {modalStatus && <Modal />}
    </>
  );
}

export default Layout;
