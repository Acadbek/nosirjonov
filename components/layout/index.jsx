import React, { useState } from "react";
import { Navbar, Modal } from "../../components";

function Layout({ children }) {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModal = () => {
    setModalStatus(!modalStatus);
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
    <>
      <Navbar onClick={handleModal} />
      <main>{children}</main>
      {modalStatus && <Modal modalStatus={modalStatus} />}
    </>
  );
}

export default Layout;
