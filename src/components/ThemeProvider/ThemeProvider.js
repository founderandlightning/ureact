import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";

import { ThemeProvider as Theme } from "styled-components";
import { BREAKPOINTS } from "styles";
import { withScreenSize } from "store/screenSize";

const Component = ({
  screenSizeMap,
  theme,
  children,
  setScreenSize,
}) => {
  useEffect(() => {
    handleBreakpoints();
    window.addEventListener("resize", handleBreakpoints);
    return () => window.removeEventListener("resize", handleBreakpoints);
  },);

  const handleBreakpoints = () => {
    const { innerWidth } = window;

    const screenSize = Object
      .entries(BREAKPOINTS)
      .reduce((acc, [key, value]) => {
        if (innerWidth <= value) return { ...acc, [key]: true };
        return { ...acc, [key]: false };
      }, {});

    if (!isEqual(screenSizeMap, screenSize)) {
      setScreenSize(screenSize);
    }
  };

  return <Theme theme={theme}>{children}</Theme>;
};

Component.propTypes = {
  theme: PropTypes.object.isRequired,
  screenSizeMap: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  setScreenSize: PropTypes.func.isRequired,
};

export const ThemeProvider = withScreenSize(Component);
