import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
    renderWithTranslation,
} from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe(('Sidebar'), () => {
    test(' renders comp', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId('toggleSidebar')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
