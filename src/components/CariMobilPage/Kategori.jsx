import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Kategori({ direction, onCategoryChange, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleCategorySelect = (category, displayText) => {
        setSelectedCategory(displayText);
        onCategoryChange(category);
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle outline caret>{selectedCategory}</DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem onClick={() => handleCategorySelect("", "Semua Kategori")}>Semua Kategori</DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect("small", "2-4 Orang")}>2-4 Orang</DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect("medium", "4-6 Orang")}>4-6 Orang</DropdownItem>
                <DropdownItem onClick={() => handleCategorySelect("large", "6-8 Orang")}>6-8 Orang</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

Kategori.propTypes = {
    direction: PropTypes.string,
    onCategoryChange: PropTypes.func.isRequired,
};

export default Kategori;
