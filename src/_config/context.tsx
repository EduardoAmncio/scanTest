import React from "react";
import { ConfigData, ConfigProvider } from "./configProvider";

interface IConfigContext extends ConfigData {}

export const initialState: IConfigContext = {
  api: {
    baseUrl: "",
    defaultHeaders: {
      "x-api-version": 0,
    },
  },
  tagAmount: 0,
  application: {
    key: "",
    secret: "",
  },
  company: {
    address: "",
    appStoreUrl: "",
    email: "",
    name: "",
    phone: "",
    playStoreUrl: "",
    website: "",
    whatsapp: "",
    youtube: "",
  },
};

export const ConfigContext = React.createContext(initialState);

export const ConfigContextProvider: React.FC = ({ children }) => {
  const [config, setConfig] = React.useState(initialState);
  React.useEffect(() => {
    ConfigProvider.initialize().then(() => setConfig(ConfigProvider.config));
  }, []);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
