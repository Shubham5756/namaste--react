import Contact from '../../Contact';
import '@testing-library/jest-dom';
import { getAllByRole, render, screen } from "@testing-library/react";


describe("Contact component",()=>{

    test("here we testing Contact component",()=>{
    render(<Contact/>)
    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();

});

test("here we testing button component",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

});

test("checking number of input components",()=>{
    render(<Contact/>)
    const input = screen.getAllByRole("textbox")
    expect(input.length).toBe(2)
})

test("testing the header of component",()=>{
    render(<Contact/>)

    const header = screen.getByText("Contact us page")
    expect(header).toBeInTheDocument()


})

})