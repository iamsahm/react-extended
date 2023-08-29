import RPS from "../src/components/RPS";
import { screen, render } from "@testing-library/react";

describe("RPS", () => {
    it("Should render a h1 with the correct name", () => {
        render(<RPS name='Alice'/>);
        expect(screen.getByText("Hello Alice, make your choice"));
    });
    it('should render three buttons with rock, paper and scissors', () => {
        render(<RPS name='Alice'/>);
        expect(screen.getByText("Rock")).toBeInTheDocument();
        expect(screen.getByText("Paper")).toBeInTheDocument();
        expect(screen.getByText("Scissors")).toBeInTheDocument();
    })
});