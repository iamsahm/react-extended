// file: src/App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../src/components/Profile";
import Recipe from "../src/components/Recipe";
import Gig from "../src/components/Gig";

test("renders with the correct title ", () => {
    // Setup - rendering the component on the page
    render(
        <Profile
            name="Quackie Makers"
            job="Makers' favourite rubber duck"
            birthdate="2013"
        />
    );
    // Find the element you want to make an assertion about
    expect(
        screen.getByText("Makers' favourite rubber duck")
    ).toBeInTheDocument();
    expect(screen.getByText("Quackie Makers")).toBeInTheDocument();
    expect(screen.getByText("2013")).toBeInTheDocument();
});

// TDD Recipe component Test-drive and implement a new component Recipe, having three props:

{/* <Recipe title="Finnish cinammon buns" type="dessert" duration={60} /> */}

test("renders with the correct title ", () => {
    render(
        <Recipe
            title="Finnish cinammon buns"
            type="dessert"
            duration={60}
        />
    );
    // Find the element you want to make an assertion about
    expect(
        screen.getByText("Finnish cinammon buns")
    ).toBeInTheDocument();
    expect(screen.getByText("dessert")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
}
);


// test the gig component

test("renders with the correct title ", () => {
    render(
        <Gig
            bandname="Brave Matthews"
            timing="8pm"
            location="The Moon"
        />
    );
    // Find the element you want to make an assertion about
    expect(
        screen.getByText("Brave Matthews")
    ).toBeInTheDocument();
    expect(screen.getByText("8pm")).toBeInTheDocument();
    expect(screen.getByText("The Moon")).toBeInTheDocument();
});