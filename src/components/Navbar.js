import React, { useContext, useState, useRef, useEffect, useMemo } from "react";
import { FoodContext } from "../context/FoodContext";
import { useMediaQuery } from "react-responsive";
import { IoMdCart } from "react-icons/io";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

// set localstorage and read the values from localstorage
const useColorScheme = () => {
    const systemPrefersDark = useMediaQuery({

        query: "(prefers-color-scheme: dark)",
    });

    const [isDark, setIsDark] = useState(() => {
        // Retrieve the color scheme from localStorage
        const savedScheme = localStorage.getItem("colorScheme");
        return savedScheme !== null ? JSON.parse(savedScheme) : undefined;
    });

    const value = useMemo(
        () => (isDark === undefined ? !!systemPrefersDark : isDark),
        [isDark, systemPrefersDark]
    );

    useEffect(() => {
        // Persist the color scheme to localStorage
        localStorage.setItem("colorScheme", JSON.stringify(isDark));
    }, [isDark]);

    useEffect(() => {
        if (value) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [value]);

    return {
        isDark: value,
        setIsDark,
    };
}

const Navbar = ({ toggle }) => {
    const { handleSearch, input } = useContext(FoodContext);
    const { isDark, setIsDark } = useColorScheme();


    const [isFocused, setIsFocused] = useState(false);
    const searchInputRef = useRef(null);

    const handleonClick = () => {
        setIsFocused(true);
        searchInputRef.current.focus();
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/about">
                    <img src="../ficon.png" className="App-logo" alt="logo" />
                </Link>
            </div>
            <h1>Swigato</h1>
            <div className="search-container">
                <div className="cart-icon">
                    <IoMdCart onClick={toggle} />
                </div>
                <div className="theme-container">
                    <DarkModeSwitch
                        onChange={setIsDark}
                        checked={isDark}
                        className="dark-mode-switch"
                        animationProperties={{ duration: 300 }}
                        aria-label="Dark mode toggle"
                    />
                </div>
                <div className="search-bar-container" style={{ width: isFocused ? '100%' : 0 }}>
                    <FaMagnifyingGlass className="search-icon" onClick={handleonClick} />
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={input}
                        onChange={handleSearch}
                        ref={searchInputRef}
                        onBlur={() => setIsFocused(false)}
                        id='search'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
