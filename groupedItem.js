// grouped array item property

const user = [
    {name: "Gaurav", city: "Noida"},
    {name: "Saumya", city: "Noida"},
    {name: "Kishan", city: "Gorakhpur"}
]

const grouped = user.reduce((acc, item) => {
        const city = item.city;

        if(!acc[city]){
            acc[city] = [];
        }

        acc[city].push(item);

        return acc;
}, {});
    


console.log(grouped);