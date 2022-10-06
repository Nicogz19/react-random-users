import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../components/Filter';

test('Seteo valor en select', () => {
    render(<Filter handleChangeFilter={() => {}} users={[]} />)
    const filter = screen.getByPlaceholderText('Filtrar por país')

    fireEvent.change(filter, {target: {value: 'Argentina'}})
    expect(filter.value).toBe('Argentina')
});