import { render, screen } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should render Speak AI title', async () => {
    await render(HeaderComponent);

    const title = screen.getByText('Speak AI');
    expect(title).toBeTruthy();
  });
});
