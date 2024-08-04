import { AuthenticatedGuard } from '../src/modules/auth/guards/authenticated.guard';

describe('AuthenticatedGuard', () => {
  it('should be defined', () => {
    expect(new AuthenticatedGuard()).toBeDefined();
  });
});
