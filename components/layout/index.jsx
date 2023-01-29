import React, { useState } from "react";
import { Navbar, Modal } from "../../components";

function Layout({ children }) {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus(!modalStatus);
  };

  const closeModal = () => {
    if (modalStatus === true) setModalStatus(false);
  };

  if (typeof window !== "undefined") {
    document.addEventListener("keyup", (event) => {
      if (
        ((event.metaKey || event.altKey) && event.key === "k") ||
        event.key === "K"
      )
        setModalStatus(!modalStatus);
    });
  }
  return (
    <div onClick={closeModal}>
      <Navbar onClick={handleModal} />
      <main>{children}</main>
      {modalStatus && <Modal modalStatus={modalStatus} />}
    </div>
  );
}

export default Layout;
