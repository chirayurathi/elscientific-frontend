import React from "react";

import { JWTProvider } from "./SampleContext";
import { CompanyProvider } from "./CompanyContext";
import { UserPermissionProvider } from "./UserPermissionContext";
import { LedgerMasterProvider } from "./master/LedgerMasterContext";
import { CostCenterProvider } from "./master/CostCenterContext";
import { MasterCompanyProvider } from "./master/MasterCompanyContext";
import { SampleProvider } from './SampleContext';


const AppContextProvider = ({ children }) => {
  return (
    <SampleProvider>
        {children}
    </SampleProvider>

  );
};

export default AppContextProvider;