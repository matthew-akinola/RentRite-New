import React, { ChangeEvent, FC } from "react";

interface InputProps {
	id: string;
	type: string;
	label: string;
	value: string;
    required?: boolean
	onChange: (name: string, value: string) => void;
	placeholder?: string;
	error?: string;
	name: string;
}

const TextInput: FC<InputProps> = ({
	id,
	label,
	value,
	name,
	onChange,
    required,
	type,
	placeholder,
	error,
}) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(name, event.target.value);
	};

	return (
		<div className="w-full">
			<p className="text-[#757575] text-[12px] font-[inter] font-bold ">{label} <span className="text-[red] text-sm font-thin">{required&& '*'}</span></p>
			<input
				type={type}
				id={id}
				value={value}
				onChange={handleInputChange}
				placeholder={placeholder}
				className="border p-4 bg-transparent outline-none w-full text-sm text-[#212121] rounded-md"
				// className={error ? 'error' : ''}
			/>
			{error && <small className="text-[red] error-message">{error}</small>}
		</div>
 	);
};

export default TextInput;
