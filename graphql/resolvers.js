const seyoung = {
    name: "Seyoung",
    age: 29,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => seyoung
    }
}

export default resolvers;