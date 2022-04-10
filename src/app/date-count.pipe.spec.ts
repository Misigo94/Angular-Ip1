import { DatePipePipe } from './date-count.pipe';

describe('DateCountPipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipePipe();
    expect(pipe).toBeTruthy();
  });
});
