import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack}>
      <img src="/goBack.svg" alt="뒤로 가기" className="w-12 h-12"></img>
    </button>
  );
}

export default BackButton;
