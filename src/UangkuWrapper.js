import React from "react";
import { useNavigate } from "react-router-dom";
import HitungModal from "./HitungModal"; // Import komponen kelas

const UangkuAppWrapper = () => {
  const navigate = useNavigate(); // Dapatkan fungsi navigate dari useNavigate
  return <HitungModal navigate={navigate} />; // Teruskan ke komponen kelas melalui props
};

export default UangkuAppWrapper;
