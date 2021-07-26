import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <>
      FORM
      {id && <div>id: {id}</div>}
    </>
  );
};

export default PagesPromotionForm;
