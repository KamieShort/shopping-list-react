import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('Should render list of items allow user to edit and delete it item', async () => {
    render(<App />);

    const heading = screen.getByText('Shopping List');
    expect(heading).toBeInTheDocument();

    const placeholder = screen.getByPlaceholderText(/new item/i);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'oranges');
    expect(input).toBeInTheDocument();

    // screen.getByPlaceholderText(/new item/i)

    // const displayOranges = await screen.findByText(/oranges/i);
    // expect(displayOranges).toBeInTheDocument();

    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    userEvent.click(deleteButton);
  });
});
