import Advanced from "@/components/advanced";
import Boost from "@/components/boost";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import Links from "@/components/links";
import List from "@/components/list";
import MobileMenu from "@/components/mobile-menu";
import Url from "@/components/url";
import UrlsList from "@/components/urls-list";
import useAPI from "@/hooks/api-context";
import Clipboard from "@react-native-clipboard/clipboard";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";

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

  it("Checks the input placeholder text", () => {
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
    const errorText = getByText("Invalid URL");
    expect(errorText).toBeVisible();
    expect(errorText.props.className).toContain("text-red");
  });

  it("checks the error message when the input is empty and blurred", () => {
    const { getByText, getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent(input, "blur");
    const errorText = getByText("Please add a link");
    expect(errorText).toBeVisible();
    expect(errorText.props.className).toContain("text-red");
  });

  it("checks the error message when the input is invalid and blurred", () => {
    const { getByText, getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "abc");
    fireEvent(input, "blur");
    const errorText = getByText("Invalid URL");
    expect(errorText).toBeVisible();
    expect(errorText.props.className).toContain("text-red");
  });

  it("checks the input outline style if input is empty and the button is pressed", () => {
    const { getByPlaceholderText, getByTestId } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.press(getByTestId("input-button"));
    expect(input.props.className).not.toContain("outline-none");
    expect(input.props.className).toContain(
      "outline outline-[3px] outline-red placeholder:text-red placeholder:opacity-60 focus:outline focus:outline-[3px] focus:outline-red",
    );
  });

  it("checks the input outline style if input is invalid and the button is pressed", () => {
    const { getByPlaceholderText, getByTestId } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "abc");
    fireEvent.press(getByTestId("input-button"));
    expect(input.props.className).not.toContain("outline-none");
    expect(input.props.className).toContain(
      "outline outline-[3px] outline-red placeholder:text-red placeholder:opacity-60 focus:outline focus:outline-[3px] focus:outline-red",
    );
  });

  it("checks the error styles are not applied if the input is valid and blurred", async () => {
    const { getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "google.com");
    fireEvent(input, "blur");
    await waitFor(() => {
      expect(input.props.className).toContain("outline-none");
      expect(input.props.className).not.toContain(
        "outline-red outline placeholder:text-red",
      );
    });
  });

  it("checks the error styles are not applied if the input is valid and the buttons has been pressed", async () => {
    const { getByPlaceholderText, getByTestId } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "google.com");
    fireEvent.press(getByTestId("input-button"));
    await waitFor(() => {
      expect(input.props.className).toContain("outline-none");
      expect(input.props.className).not.toContain(
        "outline-red outline placeholder:text-red",
      );
    });
  });

  it("checks no error text is visible if the input is valid and blurred", async () => {
    const { queryByText, getByPlaceholderText } = render(<TestInput />);
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "google.com");
    fireEvent(input, "blur");
    await waitFor(() => {
      expect(queryByText("Please add a link")).not.toBeVisible();
      expect(queryByText("Invalid URL")).not.toBeVisible();
    });
  });

  it("checks no error text is visible if the input is valid and button pressed", async () => {
    const { getByPlaceholderText, queryByText, queryByTestId } = render(
      <TestInput />,
    );
    const input = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(input, "google.com");
    fireEvent.press(queryByTestId("input-button"));
    await waitFor(() => {
      expect(queryByText("Please add a link")).not.toBeVisible();
      expect(queryByText("Invalid URL")).not.toBeVisible();
    });
  });
});

describe("API", () => {
  const TestComponents = () => {
    const { error, handleBlur, setInput, urls, input, handlePress } = useAPI();
    return (
      <>
        <Input
          input={input}
          setInput={setInput}
          onBlur={handleBlur}
          tablet={false}
          onPress={handlePress}
          error={error}
        />
        <UrlsList data={urls} />
      </>
    );
  };

  it("Checks the fetch function returns an short url", async () => {
    const { getByTestId, getByPlaceholderText } = render(<TestComponents />);
    const inputElement = getByPlaceholderText("Shorten a link here...");
    fireEvent.changeText(inputElement, "google.com");
    fireEvent.press(getByTestId("input-button"));
    await waitFor(() => {
      expect(getByTestId("short-url").props.children).toContain(
        "https://is.gd",
      );
    });
  });
});

describe("URLs", () => {
  it("Checks the longURL matches the input", () => {
    const mockInput = "google.com";
    const { getByTestId } = render(
      <>
        <Input
          input={mockInput}
          setInput={() => {}}
          onBlur={() => {}}
          tablet={false}
          onPress={() => {}}
          error={{ state: false, message: "" }}
        />
        <Url shortUrl="" longUrl={mockInput} />
      </>,
    );
    expect(getByTestId("long-url").props.children).toContain("google.com");
  });

  it("checks the shortURL has accessible styles", () => {
    const { getByText } = render(<Url shortUrl="google.com" longUrl="" />);
    const shortURL = getByText("google.com");
    expect(shortURL.props.className).toContain("hover:underline");
  });

  it("checks the button is pressable", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <Url longUrl="" shortUrl="" test={mockPress} />,
    );
    fireEvent.press(getByTestId("url-button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("checks the button text when the button is pressed", () => {
    const { getByTestId, getByText } = render(
      <Url shortUrl="google.com" longUrl="" />,
    );
    fireEvent.press(getByTestId("url-button"));
    expect(getByText("Copied!")).toBeTruthy();
  });

  it("checks that the short url is copied to keyboard", async () => {
    const { getByTestId } = render(<Url longUrl="" shortUrl="google.com" />);
    fireEvent.press(getByTestId("url-button"));
    expect(Clipboard.setString).toHaveBeenCalledWith("google.com");
  });
});

describe("Advanced", () => {
  beforeEach(() => {
    render(<Advanced />);
  });

  it("Checks the title is visible", () => {
    expect(screen.getByText("Advanced Statistics")).toBeVisible();
  });

  it("Checks the paragraph is visible", () => {
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

  it("checks the title is visible", () => {
    expect(screen.getByText("Boost your links today")).toBeVisible();
  });

  it("checks the button is visible", () => {
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
