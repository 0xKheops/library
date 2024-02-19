/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import { RefObject, forwardRef } from "react";
import "@polkadot-ui/core/css/base/structure/Main/index.css";

/**
 * @name Main
 * @summary A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="core-main" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";
