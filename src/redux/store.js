import { configureStore } from "@reduxjs/toolkit";
import pcbuildslice from "./features/Pcbuild/pcbuildslice";

export const store = configureStore({
  reducer: {
    pcbuild: pcbuildslice,
  },
  // devTools: false,
});
