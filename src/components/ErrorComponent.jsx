import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      top={"50"}
      left={"50%"}
      h={'10'}
      transform={"translateX(-50%)"}
      w={"container.lg"}
      fontWeight={'bold'}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
