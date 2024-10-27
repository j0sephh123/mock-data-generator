import DisplayData from "./components/DisplayData/DisplayData";
import TotalRowsInput from "./components/TotalRowsInput";
import TheLayout from "./components/TheLayout";
import FieldsPicker from "./components/FieldsPicker/FieldsPicker";
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

export default function App() {
  return (
    <TheLayout footerSlot={<TheFooter />} headerSlot={<TheHeader />}>
      <FieldsPicker />
      <TotalRowsInput />
      <DisplayData />
    </TheLayout>
  );
}
