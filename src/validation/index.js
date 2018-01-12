const longEnough = (entry) => {
    // entry.length >= 3 ? true : false;
    if (entry.length >= 3) {
        return true;
    } else {
        return false;
    }
}

export { longEnough };