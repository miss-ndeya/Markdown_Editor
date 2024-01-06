import React, { useState } from "react";
import jsPDF from "jspdf";

import Title from "./Title";
import Button from "./Button";
import Section from "./Section";

const Editeur = () => {
  const [saisie, setSaisie] = useState("");

  const handleChange = (e) => {
    setSaisie(e.target.value);
    console.log(saisie);
  };

  const telechargerLeSaisie = () => {
    if (saisie.trim()) {
      const fichierPdf = new jsPDF();
      fichierPdf.text(saisie, 15, 15);
      fichierPdf.save("your-markdown.pdf");
    }
  };

  return (
    <div className=" px-5 min-vh-100 bg-dark text-center py-5">
      <Title
        children="Markdown Editor"
        className="text-white text-center fs-5 mb-4 fw-blod"
      />
      <Title
        children="You can type in html tags as well"
        className="text-secondary text-center fs-5 mb-3"
      />
      <Section children={saisie} value={saisie} onChange={handleChange} />
      <Button
        className="mx-auto text-secondary my-5 bn border-0 rounded-3 fw-bold fs-5 p-2"
        children="Download Text"
        onClick={telechargerLeSaisie}
      />
    </div>
  );
};

export default Editeur;
