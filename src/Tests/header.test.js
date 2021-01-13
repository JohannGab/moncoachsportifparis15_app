import { render, screen } from "@testing-library/react";
import Header from "../Components/header";

describe("Header", () => {
    it("renders without crashing", () => {
        render(<Header />)
        expect(screen.getByRole('heading')).toHaveTextContent('Mon Coach Sportif Paris 15')
    });

    it("renders the button text without crashing", () => {
        render(<Header />)
        expect(screen.getByRole('button')).toHaveTextContent('CONTACTEZ-NOUS')
    });

    it("link to the contact link", () => {
        render(<Header />)
        expect(screen.getByRole('link').href).toBeTruthy()
    });
});