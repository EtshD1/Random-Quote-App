import React from "react";
import Context from "./Context";

const withContext = (WrapperComponent: Function) => {

  const WithHOC = (props: {}) => {
    return (
      <Context.Consumer>
        {Context => <WrapperComponent {...props} context={Context} />}
      </Context.Consumer>
    );
  };

  return WithHOC;
};

export default withContext;