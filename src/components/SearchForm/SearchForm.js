import React, { useState } from "react";
import { cn } from "@bem-react/classname";

import { useHelpers } from "./hooks";
import Subject from "./Subject/Subject";
import { Button } from "../Button/Button.tsx";
import "./SearchForm.scss";

const SearchForm = () => {
  const cnSearchForm = cn("SearchForm");
  const [value, setValue] = useState("");

  const { handleChange, handleSubmit } = useHelpers(value, setValue);

  return (
    <div>
      <form className={cnSearchForm()} onSubmit={handleSubmit}>
        <input
          className={cnSearchForm("Input")}
          type="text"
          placeholder="Search here"
          value={value}
          onChange={handleChange}
        />
        <Button disabled={!value} />
      </form>
      <Subject />
    </div>
  );
};

export default SearchForm;
