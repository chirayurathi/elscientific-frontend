import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// reducer - state management

// project imports
import Loader from "../ui-component/Loader";

import {
  getVouchersAsync
} from "../api";

import { purchaseActions } from '../../store/actions' 

export const SampleContext = createContext();

export const SampleProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { company } = useSelector((state) => state.companyMaster);

  if (loading) {
    return <Loader />;
  }

  const getVouchers = async (id)=>{
    await getVouchersAsync(id, dispatch);
  }

  const selectParentVoucher = (voucher)=>{
    dispatch({
      type:purchaseActions.SELECT_PARENT_VOUCHER,
      payload: voucher
    })
  }

  return (
    <SampleContext.Provider
      value={{
        selectParentVoucher,
        getVouchers,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};