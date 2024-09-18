"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface ContextProps {
  count: string;
  error: boolean;
  frameImage: string;
  setCount: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<boolean>>;
  setFrameImage: Dispatch<SetStateAction<string>>;
}

const MinterContext = createContext<ContextProps>({} as ContextProps);

export const MinterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState("1");
  const [error, setError] = useState(false);
  const [frameImage, setFrameImage] = useState("");

  const contextValue = useMemo(
    () => ({
      count,
      error,
      frameImage,
      setCount,
      setError,
      setFrameImage,
    }),
    [count, error, frameImage]
  );

  return (
    <MinterContext.Provider value={contextValue}>
      {children}
    </MinterContext.Provider>
  );
};

export const useMinter = () => {
  return useContext(MinterContext);
};
