import WidgetExpansion from '../PersonalLibraryWidgetExpansionModule';

jest.mock('expo', () => ({
  requireNativeModule: () => ({
    ping: jest.fn().mockResolvedValue('pong:android'),
  }),
}));

describe('PersonalLibraryWidgetExpansion native module facade', () => {
  it('exposes the asynchronous native ping contract', async () => {
    await expect(WidgetExpansion.ping()).resolves.toBe('pong:android');
  });
});
