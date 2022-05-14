import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('Should render list of items allow user to edit and delete it item', async () => {
    render(<App />);

    const heading = screen.getByText('Shopping List');
    expect(heading).toBeInTheDocument();

    const placeholder = screen.getByPlaceholderText(/new item/i);
    expect(placeholder).toBeInTheDocument();

    const itemInput = screen.getByRole('textbox');
    userEvent.type(itemInput, 'oranges');
    expect(itemInput).toBeInTheDocument();

    const addButton = screen.getByRole('button', { name: /Add/i });
    userEvent.click(addButton);

    const displayOranges = await screen.findByText(/oranges/i);
    expect(displayOranges).toBeInTheDocument();

    const editButton = screen.getAllByRole('button', { name: /Edit/i })[1];
    userEvent.click(editButton);

    const editInput = screen.getAllByRole('textbox')[1];
    userEvent.type(editInput, 'green');
    expect(editInput).toBeInTheDocument();

    const saveButton = screen.getByRole('button', { name: /Save/i });
    userEvent.click(saveButton);

    const editedOranges = await screen.findByText('grapesgreen');
    expect(editedOranges).toBeInTheDocument();

    const deleteButton = screen.getAllByRole('button', { name: /Delete/i })[0];
    userEvent.click(deleteButton);
  });
});
