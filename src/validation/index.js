const longEnough = (entry) => {
    if (entry.length >= 5) {
        return true;
    } else {
        return false;
    }
}

export { longEnough };