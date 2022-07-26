import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

type OnChange = (
  event: React.SyntheticEvent<Element, Event>,
  value: string | null
) => void;
type ItemOnChange = (v: string | null) => void;

interface Props {
  label: string;
  options: string[];
  value: string | null;
  onChange: ItemOnChange;
  children?: React.ReactNode;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
}: Props) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const call: OnChange = (e, v) => {
    setSelected(v);
    onChange(v);
  };
  return (
    <>
      <Autocomplete
        onChange={call}
        value={value}
        disablePortal
        autoComplete
        id="combo-box-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      {/* {!selected && <p>show erro</p>} */}
    </>
  );
}
