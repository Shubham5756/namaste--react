import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
//import { BrowserRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Appstore from "../utils.js/Appstore";
import { createBrowserRouter } from "react-router";

test("here we testing login button ", () => {
  render(
    <createBrowserRouter>
      <Provider store={{ Appstore }}>
        <Header />
      </Provider>
    </createBrowserRouter>
  
  );

  const button = screen.getByRole("button", { name: "login" });
  expect(button).toBeInTheDocument();

});

 
test("here we testing cart", () => {
  render(
    <createBrowserRouter>
      <Provider store={{ Appstore }}>
        <Header />
      </Provider>
    </createBrowserRouter>
  );

  const cart = screen.getByRole(/cart/);
  expect(cart).toBeInTheDocument();

});

test("should change  login button to logout after click ", () => {
  render(
    <createBrowserRouter>
      <Provider store={{ Appstore }}>
        <Header />
      </Provider>
    </createBrowserRouter>
  );

  const login = screen.getByRole("button", { name: "login" });
  fireEvent.click(login)
    const logout = screen.getByRole("button", { name: "log-out" });
  expect(logout).toBeInTheDocument();

});