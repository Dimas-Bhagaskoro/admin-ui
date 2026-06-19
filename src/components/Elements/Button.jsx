import React from "react";

function Button(props) {
    const { children, ...rest } = props;

    const baseClasses = "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105";

    const variantClasses = {
        primary:
            "bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",

        secondary:
            "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
    };

    const finalClasses = `${baseClasses} ${
        variantClasses[props.variant] || variantClasses.primary
    }`;

    return (
        <button
            className={finalClasses}
            type={props.type}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;