import "./styles.css";
import { SnackbarProvider } from "notistack";
import PopoverPopupState from "./components/PopoverPopupState";
import SampleCard from "./components/SampleCard";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <SnackbarProvider autoHideDuration={500}>
      <Tasks />
      <PopoverPopupState />
    </SnackbarProvider>
  );
}
