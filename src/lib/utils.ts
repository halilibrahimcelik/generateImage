import { ToastOptions } from "react-toastify";
export const toastConfig: ToastOptions<{}> | undefined = {
  autoClose: 1500,
  position: "top-right",
  style: {
    width: "100%",
    fontSize: "0.8rem",
  },
};
