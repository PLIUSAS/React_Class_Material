import Counter from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Counter component", () => {
  it("could render without errors", () => {
    render(<Counter startingNumber={5} />);
  });

  it("counter should starting number 5", () => {
    render(<Counter startingNumber={8} />);
    const numberElement = screen.getByTestId("counterText".textContent);
    console.log(numberElement);
    expect(numberElement).toBe("8");
  });

  it("should render default value when no prop given", () => {
    render(<Counter />);

    const numberElement = screen.getByTestId("counterText".textContent);
    expect(numberElement).toBe("0");
  });

  it("should render default value when no prop is null", () => {
    render(<Counter startingNumber={null} />);

    const numberElement = screen.getByTestId("counterText".textContent);
    expect(numberElement).toBe("0");
  });
  it("should increment number by one when increment button clicked", () => {
    render(<Counter startingNumber={8} />);

    // const incrementButton = screen.getByText("Increment");
    const incrementButton = screen.getByRole("button", { name: "Increment" }); // name - textContent

    const numberValue = screen.getByTestId("counterText").textContent;
    expect(numberValue).toBe("8");

    fireEvent.click(incrementButton); // jog console paspaustu ar veikia mygtukas.

    const numberValue2 = screen.getByTestId("counterText".textContent);
    expect(numberValue2).toBe("9");
  });
});

// derscribe - testu grupe
// it - vienas testas
