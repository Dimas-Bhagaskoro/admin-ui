import React from "react";

function LabeledInput(props) {
    const { label, id, ... rest } = props;
    return (
        <>
        <label htmlFor={id} className="block text-sm mb-1">
                {label}
              </label>

              <input
                id={id}
                {...rest}
                className="
                 w-full
                    border
                    border-gray-300
                    rounded-md
                    px-3
                    py-3
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary
                "
              />
        </>
    );
}

export default LabeledInput;