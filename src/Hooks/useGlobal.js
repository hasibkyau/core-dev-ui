import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";
const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleModal = () => setOpen(!open);

  const getPayment = (body) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/bkash`, { ...body, totalPrice });
  }

  const createPayment = (body) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/createPayment`, { ...body, totalPrice });
  }

  const executeBkashPayment = (body) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/bkash/execute?phone=${body?.phone}email=${body?.email}&totalPrice=${body?.totalPrice}`);
  }

  const createAgreement = (body) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/bkash/createAgreement?phone=${body?.phone}&email=${body?.email}&totalPrice=${body?.totalPrice}`);
  }


  return {
    toggleModal,
    open,
    setMbCode,
    mbCode,
    getPayment,
    executeBkashPayment,
    createPayment,
    createAgreement,
    totalPrice,
    setTotalPrice,
  };
};
export default useGlobal;
