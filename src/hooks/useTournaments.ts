const useTournaments = (filter: string) => {
    return Array(10).fill({
        id: 123,
        host: {
            id: 123,
            name: "BeanBolt Invitational",
            imageUrl:
                "https://skiddle.imgix.net/b/4/c/1343662_0_beanbolt-invitational_1024.jpg?w=254&h=254&auto=format&fit=crop&crop=faces,entropy&dpr=2",
        },
        date: "Sunday @ 8pm",
        datetime: "2020-12-09T11:43:00",
        title: "Duos",
        body: "",
    });
};

export default useTournaments;
