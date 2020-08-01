import { screen, render } from '@testing-library/react'

import Main from '.'

describe('testing <Main /> component', () => {
    it('should render heading', () => {
        const { container } = render(<Main />)

        expect(
            screen.getByRole('heading', { name: /react avançado/i })
        ).toBeInTheDocument()

        expect(container).toMatchSnapshot()
    })
})
