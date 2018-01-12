const longEnough = (entry) => {
    if (entry.length >= 3) {
        return true;
    } else {
        return false;
    }
}

export { longEnough };