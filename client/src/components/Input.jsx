import React, { useState } from "react";

const Input = ({ type, name, text}) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<span className="magic-input w-[500px] flex flex-col">
			<input
				onChange={handleChange}
                type={ type }
                name={ name }
				className={
					"h-[60px] text-xs border-2 border-black mb-2 rounded-2xl px-8 outline-none z-10 bg-transparent" +
					(value ? " has-value" : "")
				}
			></input>
            <label
                htmlFor={ name }
				className="w-fit bg-white ml-8 p-1 duration-200 z-0"
			>
				{text}
			</label>
		</span>
	);
};

export default Input;
