import i18next from 'i18next'

import { renderScreen } from '@berty/utils/testing/renderScreen.test'

import { GetStarted } from './GetStarted'

test('Onboarding.GetStarted renders correctly', async () => {
	const { toJSON } = renderScreen('Onboarding.GetStarted', GetStarted)
	expect(toJSON()).toMatchSnapshot()
})

/**
 * This test is only there as an example of getting an element by accessibilityLabel,
 * it shouldn't be needed due to the snapshot test
 */
test('create button exists', async () => {
	const { getByLabelText } = renderScreen('Onboarding.GetStarted', GetStarted)

	const createButton = getByLabelText(i18next.t('onboarding.getstarted.create-button'))
	expect(createButton).toBeTruthy()
})
