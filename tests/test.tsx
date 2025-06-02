import Advanced from "@/components/advanced";
import Boost from "@/components/boost";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import Links from "@/components/links";
import { render, screen } from "@testing-library/react-native";

describe("Header", () => {
  beforeEach(() => {
    render(<Header setOpenMenu={() => {}} openMenu tablet />);
  });

  it("Checks the header links", () => {
    expect(screen.getByText("Features")).toBeVisible();
    expect(screen.getByText("Pricing")).toBeVisible();
    expect(screen.getByText("Resources")).toBeVisible();
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
