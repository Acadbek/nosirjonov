import { useId } from "react";

const CreateUniqueId = () => {
  const id = useId();
  return id;
};

export default CreateUniqueId;
