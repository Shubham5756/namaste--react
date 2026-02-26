import { createContext } from "react";

export const LOGO = "https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg";
export const resturantUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5121025&lng=73.8477608&restaurantId="

export const userContext = createContext({
    loggedInUser:'default user'})