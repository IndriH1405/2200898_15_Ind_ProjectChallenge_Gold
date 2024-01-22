import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

function Status({ direction, onStatusChange, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('Semua Status');

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleStatusSelect = (status, displayText) => {
        setSelectedStatus(displayText);
        onStatusChange(status);
        setDropdownOpen(false);
    };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle outline caret>{selectedStatus}</DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem onClick={() => handleStatusSelect('', 'Semua Status')}>Semua Status</DropdownItem>
                <DropdownItem onClick={() => handleStatusSelect('true', 'Disewa')}>Disewa</DropdownItem>
                <DropdownItem onClick={() => handleStatusSelect('false', 'Tersedia')}>Tersedia</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

Status.propTypes = {
    direction: PropTypes.string,
    onStatusChange: PropTypes.func.isRequired,
};

export default Status;
