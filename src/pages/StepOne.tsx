import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { Progressbar } from '../components/UI/Progressbar'
import { AppInput } from '../components/UI/AppInput'
import { useEffect, useState } from 'react'

const StepOne = () => {

	const [nameData, setNameData] = useState()
	const [nameError, setNameError] = useState(false)

	useEffect(() => {
		if (!nameData) {
			setNameError(true)
		} else {
			setNameError(false)
		}
	}, [nameData])

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='single-input-quiz'>
					<Progressbar />
					<div className='question'>
						<Heading
							headingType='h2'
							headingText='1. Где вы узнали про нашу школу?'
						/>
						<label className='input-wrapper'>
							<AppInput
								id='username'
								inputType='text'
								inputPlacaholder='Ваш ответ'
								hasError={nameError}
								onChange={e => setNameData(e.target.value)}
								inputLabel={''}
								errorMessage='Введите ваш ответ'
							/>
							<span id='error-message'>Введите ваш ответ</span>
						</label>
						<AppButton buttonText='Далее' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepOne
