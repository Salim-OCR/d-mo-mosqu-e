// import React from "react";
import FormContact from "../components/FormContact";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";


const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <>
      <motion.section
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <FormContact />

        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>FRANCE</h4>
              <p>2 rue rodez</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0642844284" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06  xx xx xx xx
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="salim.ibrahimi@outlook.fr"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  mosque.rodez@outlook.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default Contact;
