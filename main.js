const invertButton = document.getElementById('invert-colors');

const getLinks = () => {
    const links = document.getElementsByTagName('a');
    for (const link of links) {
        link.style.color = '#ffffff';
    }
};

const getButtons = () => {
    const buttons = document.getElementsByClassName('git-button');
    for (const button of buttons) {
        button.style.backgroundColor = '#CFAE23';
    }
};

const invertColors = () => {
    const isColorInverted = localStorage.getItem('colorInverted');

    if (isColorInverted === 'true') {
        localStorage.setItem('colorInverted', 'false');
        resetColors();
    } else {
        localStorage.setItem('colorInverted', 'true');
        applyInvertedColors();
    }
};

const resetColors = () => {
    const links = document.getElementsByTagName('a');
    for (const link of links) {
        link.style.color = '';
    }

    const buttons = document.getElementsByClassName('git-button');
    for (const button of buttons) {
        button.style.backgroundColor = '';
    }

    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    invertButton.style.color = '';
};

const applyInvertedColors = () => {
    getLinks();
    getButtons();
    document.body.style.backgroundColor = '#201E2F';
    document.body.style.color = '#ffffff';
    invertButton.style.color = '#ffffff';
};

// Check if color inversion is already set
const isColorInverted = localStorage.getItem('colorInverted');
if (isColorInverted === 'true') {
    applyInvertedColors();
}

invertButton.onclick = invertColors;