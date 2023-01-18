function createUser(input) {
    const id = Date.now();
    return {
        id, ...input
    }
}

module.exports = createUser;
