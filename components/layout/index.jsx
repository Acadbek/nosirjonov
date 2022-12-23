import React, { useState } from "react";
import { Navbar, Modal } from "../../components";
function Layout({ children }) {
  const [modalStatus, setModalStatus] = useState(true);

  const handleModal = (e) => {
    setModalStatus(!modalStatus);
  };

  if (typeof window !== "undefined") {
    document.addEventListener("keyup", (event) => {
      if ((event.metaKey || event.altKey) && event.key === "k") {
        setModalStatus(!modalStatus);
        console.log("clicked");
      }
    });
  }
  return (
    <>
      <Navbar onClick={handleModal} />
      <main>{children}</main>
      {modalStatus && <Modal />}
    </>
  );
}

export default Layout;
