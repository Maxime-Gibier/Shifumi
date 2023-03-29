import React, { useState } from "react";

const Input = ({ type, name, text, autoComplete }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<input
				onChange={handleChange}
				type={type}
				name={name}
				autoComplete={autoComplete}
				className={
					"h-[60px] text-xs border-2 border-black mb-2 rounded-2xl px-8 outline-none z-10 bg-transparent magic-input" +
					(value ? " has-value" : "")
				}
				required
			></input>
			<label
				htmlFor={name}
				className="w-fit bg-white ml-8 p-1 duration-200 z-0"
			>
				{text}
			</label>
		</>
	);
};

export default Input;
