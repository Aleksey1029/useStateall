type AppButtonProps = {
	buttonText: string
}

export const AppButton = ({ buttonText }: AppButtonProps) => {
	return (
		<button disabled type='button' id='next-btn'>
			{buttonText}
		</button>
	);
};
