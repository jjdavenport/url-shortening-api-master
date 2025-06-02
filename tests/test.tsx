import Index from "@/app";
import Content from "@/components/content";
import Input from "@/components/input";
import { render, screen } from "@testing-library/react-native";

describe("Index", () => {
  it("Renders the page", () => {
    render(<Index />);
  });
});

describe("Content", () => {
  beforeEach(() => {
    render(<Content />);
  });

  it("Checks the title are visible", () => {
    expect(screen.queryByText("More than just shorter links")).toBeVisible();
  });

  it("Checks the subtitle is visible", () => {
    expect(
      screen.queryByText(`
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        `),
    ).toBeVisible();
  });

  it("Checks the button is visible", () => {
    expect(screen.queryByText("Get Started")).toBeVisible();
  });
});

describe("Input", () => {
  it("Checks the Input placeholder text", () => {
    render(
      <Input
        input=""
        setInput={() => {}}
        onPress={() => {}}
        onBlur={() => {}}
        tablet={false}
        error={{ state: false, message: "" }}
      />,
    );
    expect(screen.getByPlaceholderText("Shorten a link here...")).toBeTruthy();
  });
});
