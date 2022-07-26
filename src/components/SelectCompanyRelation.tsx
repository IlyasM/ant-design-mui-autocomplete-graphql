import { useRelationsQuery } from "../generated/generated";
import CustomSelect from "./CustomSelect";
type ItemOnChange = (v: string | null) => void;
interface Props {
  value: string | null;
  onChange: ItemOnChange;
}

export default function SelectCompanyRelation({ value, onChange }: Props) {
  const { status, data, error } = useRelationsQuery();
  let options = data?.applicantIndividualCompanyRelations?.data;
  if (options) {
    return (
      <CustomSelect
        onChange={onChange}
        value={value || ""}
        label="Relation"
        options={options.map((a) => a.name)}
      ></CustomSelect>
    );
  }

  if (error) {
    return <p>Erorr!</p>;
  }
  if (status === "loading") {
    return <p>Loading</p>;
  }
}
