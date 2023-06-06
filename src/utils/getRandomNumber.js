const getRandomNumber = (limit = 126) => {
    return Math.floor(Math.random() * limit) + 1
}

export default getRandomNumber