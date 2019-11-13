import React from 'react';
import EasyEdit, {Types} from "../src/lib/EasyEdit";


export default {
  title: 'EasyEdit',
};

const save = (value) => {
  console.log(value)
};
const cancel = () => {
  console.log("Cancelled")
};

const generateOptionsList = () => {
  return [
    { label: "First option", value: "one" },
    { label: "Second option", value: "two" },
    { label: "Third option", value: "three" }
  ];
};

export const text = () => (
    <EasyEdit
        type={Types.TEXT}
        onSave={save}
        onCancel={cancel}
        saveButtonLabel="Save Me"
        cancelButtonLabel="Cancel Me"
        attributes={{ name: "awesome-input", id: 1}}
        instructions="Star this repo!"
    />
);

export const password = () => (
    <EasyEdit
        type={Types.PASSWORD}
        onSave={save}
        attributes={{ name: "awesome-password" }}
        instructions="Star this repo!"
    />
);
export const range = () => (
    <EasyEdit
        type={Types.RANGE}
        onSave={save}
        instructions="Custom instructions"
        attributes={{ name: "awesome-range", min: 0, max: 100, step: 10 }}
    />
);
export const radio = () => (
    <EasyEdit
        type={Types.RADIO}
        value="one"
        onSave={save}
        options={generateOptionsList()}
        instructions="Custom instructions"
    />
);
export const date = () => (
    <EasyEdit
        type={Types.DATE}
        onSave={save}
        instructions="Select your date of birth"
    />
);
export const datetime = () => (
    <EasyEdit
        type={Types.DATETIME_LOCAL}
        onSave={save}
        instructions="Select your date and time of birth"
    />
);
export const dropdown = () => (
    <EasyEdit
        type={Types.SELECT}
        options={generateOptionsList()}
        onSave={save}
        placeholder="Please select"
        instructions="Custom instructions"
    />
);
export const datalist = () => (
    <EasyEdit
        type={Types.DATALIST}
        options={generateOptionsList()}
        onSave={save}
        instructions="Start typing to get suggestions"
    />
);
export const checkbox = () => (
    <EasyEdit
        type={Types.CHECKBOX}
        options={generateOptionsList()}
        onSave={save}
        value={["one", "two"]} // this will preselect two options
    />
);
