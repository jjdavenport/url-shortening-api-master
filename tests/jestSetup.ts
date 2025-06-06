// jestSetupFile.js
jest.mock("@react-native-clipboard/clipboard", () => ({
  setString: jest.fn(),
}));
