export default () => ({

    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Laborum pariatur incididunt incididunt reprehenderit reprehenderit magna laboris pariatur veniam nostrud.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Qui laboris ipsum laboris velit excepteur ullamco ex esse minim ut laboris eiusmod qui nulla.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Veniam deserunt proident labore cillum tempor aliqua deserunt in.",
            picture: null,
        },
    ]

})