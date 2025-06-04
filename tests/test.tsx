import Advanced from "@/components/advanced";
import Boost from "@/components/boost";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import Links from "@/components/links";
import List from "@/components/list";
import MobileMenu from "@/components/mobile-menu";
import useAPI from "@/hooks/api-context";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("Header", () => {
  it("checks the menu button can be pressed", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Header setOpenMenu={mockPress} openMenu tablet={false} />,
    );
    fireEvent.press(getByTestId("header-button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("Checks the header links", () => {
    render(<Header setOpenMenu={() => {}} openMenu tablet />);
    expect(screen.getByText("Features")).toBeVisible();
    expect(screen.getByText("Pricing")).toBeVisible();
    expect(screen.getByText("Resources")).toBeVisible();
  });
});

describe("Mobile menu", () => {
  it("checks the mobile menu links are visible", () => {
    render(<MobileMenu />);
    expect(screen.getByText("Features")).toBeVisible();
    expect(screen.getByText("Pricing")).toBeVisible();
    expect(screen.getByText("Resources")).toBeVisible();
    expect(screen.getByText("Login")).toBeVisible();
    expect(screen.getByText("Sign Up")).toBeVisible();
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
  function TestInput() {
    const { input, setInput, handlePress, handleBlur, error } = useAPI();
    return (
      <Input
        input={input}
        setInput={setInput}
        onPress={handlePress}
        onBlur={handleBlur}
        tablet={false}
        error={error}
      />
    );
  }

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

  it("checks the button is pressed", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Input
        input=""
        setInput={() => {}}
        onPress={mockPress}
        onBlur={() => {}}
        tablet={false}
        error={{ state: false, message: "" }}
      />,
    );
    fireEvent.press(getByTestId("input-button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("checks the error message when the input is empty and the button is pressed", () => {
    const { getByTestId, getByText } = render(<TestInput />);
    fireEvent.press(getByTestId("input-button"));
    expect(getByText("Please add a link")).toBeVisible();
  });

  it("checks the error message when the input is invalid and the button is pressed", () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <TestInput />,
    );
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "abc");
    fireEvent.press(getByTestId("input-button"));
    expect(getByText("Invalid URL")).toBeVisible();
  });

  it("checks the error message when the input is empty and blurred", () => {
    const { getByText, getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent(input, "blur");
    expect(getByText("Please add a link")).toBeVisible();
  });

  it("checks the error message when the input is invalid and blurred", () => {
    const { getByText, getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "abc");
    fireEvent(input, "blur");
    expect(getByText("Invalid URL")).toBeVisible();
  });
});

describe("Advanced", () => {
  beforeEach(() => {
    render(<Advanced />);
  });

  it("Checks the title", () => {
    expect(screen.getByText("Advanced Statistics")).toBeVisible();
  });

  it("Checks the paragraph", () => {
    expect(
      screen.getByText(`
       Track how your links are performing across the web with our advanced
          statistics dashboard.
      `),
    ).toBeVisible();
  });
});

describe("List", () => {
  beforeEach(() => {
    render(<List />);
  });

  it("checks the List item titles are visible", () => {
    expect(screen.getByText("Brand Recognition")).toBeVisible();
    expect(screen.getByText("Detailed Records")).toBeVisible();
    expect(screen.getByText("Fully Customizable")).toBeVisible();
  });

  it("checks the list item paragraphs are visible", () => {
    expect(
      screen.getByText(`
      Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.
      `),
    ).toBeVisible();
    expect(
      screen.getByText(`
     Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
      `),
    ).toBeVisible();
    expect(
      screen.getByText(`
      Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
      `),
    ).toBeVisible();
  });
});

describe("Boost", () => {
  beforeEach(() => {
    render(<Boost tablet />);
  });

  it("checks the title", () => {
    expect(screen.getByText("Boost your links today")).toBeVisible();
  });

  it("checks the button", () => {
    expect(screen.getByText("Get Started")).toBeVisible();
  });
});

describe("Links", () => {
  it("Checks link text is visible", () => {
    render(<Links />);
    expect(screen.getByText("Features")).toBeVisible();
    expect(screen.getByText("Link Shortening")).toBeVisible();
    expect(screen.getByText("Branded Links")).toBeVisible();
    expect(screen.getByText("Analytics")).toBeVisible();
    expect(screen.getByText("Resources")).toBeVisible();
    expect(screen.getByText("Blog")).toBeVisible();
    expect(screen.getByText("Developers")).toBeVisible();
    expect(screen.getByText("Support")).toBeVisible();
    expect(screen.getByText("Company")).toBeVisible();
    expect(screen.getByText("About")).toBeVisible();
    expect(screen.getByText("Our Team")).toBeVisible();
    expect(screen.getByText("Careers")).toBeVisible();
    expect(screen.getByText("Contact")).toBeVisible();
  });

  it("Checks four images are rendered", () => {
    const { getAllByTestId } = render(<Links />);
    const imgs = getAllByTestId("link-img");
    expect(imgs).toHaveLength(4);
  });
});

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("checks the links are visible", () => {
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeVisible();
    });
  });

  it("checks the links have accessible styles", () => {
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link.props.className).toContain("underline");
    });
  });

  it("checks the frontend link href", () => {
    expect(screen.getByText("Frontend Mentor")).toHaveProp(
      "href",
      "https://www.frontendmentor.io?ref=challenge",
    );
  });

  it("checks the github link href", () => {
    expect(screen.getByText("jjdavenport")).toHaveProp(
      "href",
      "https://github.com/jjdavenport",
    );
  });
});
