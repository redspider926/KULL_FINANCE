import React from "react";
import { Container as MaterialUIContainer } from "@material-ui/core";

const Container: React.FC = ({ children }) => {
  return (
    <MaterialUIContainer maxWidth="lg">
      <>{children}</>
    </MaterialUIContainer>
  );
};

export default Container;
