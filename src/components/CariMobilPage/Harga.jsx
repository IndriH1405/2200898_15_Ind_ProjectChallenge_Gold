import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

function Harga({ direction, onPriceChange, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState('Masukkan Harga Sewa Perhari');

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handlePriceSelect = (minPrice, maxPrice, label) => {
        setSelectedPrice(label);
        onPriceChange({ minPrice, maxPrice });
        setDropdownOpen(false);
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle outline caret>{selectedPrice}</DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem onClick={() => handlePriceSelect(null, null, 'Semua Harga')}>Semua Harga</DropdownItem>
                <DropdownItem onClick={() => handlePriceSelect(null, 400000, '< Rp. 400.000')}>&lt;Rp. 400.000</DropdownItem>
                <DropdownItem onClick={() => handlePriceSelect(400000, 600000, 'Rp. 400.000 - Rp. 600.000')}>Rp. 400.000 - Rp. 600.000</DropdownItem>
                <DropdownItem onClick={() => handlePriceSelect(600000, null, '> Rp. 600.000')}>&gt;Rp. 600.000</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

Harga.propTypes = {
    direction: PropTypes.string,
    onPriceChange: PropTypes.func.isRequired,
};

export default Harga;
