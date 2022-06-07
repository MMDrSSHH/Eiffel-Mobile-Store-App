const shortenText = (text, words) => {
    const splittedtext = text.split(" ");
    const shorten = splittedtext.slice(0, words).join(" ");
    return shorten;
}

const productQuantityCart = (items, id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        return items[index].quantity;
    } else {
        return 0;
    }
}


export { shortenText, productQuantityCart };