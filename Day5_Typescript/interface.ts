interface IPerson {
    readonly id: number;
    firstName: string;
    lastName: string;
    email: string;
    landLine?: string;
}

function personLogger(person: IPerson) {
    const str = `
    **********************************
    ID: ${person.id}
    Name: ${person.firstName} ${person.lastName}
    Email: ${person.email}
    Phone: ${person.landLine}
    **********************************
                `;
    console.log(str);
}


let p: IPerson = {
    id: 1,
    firstName: "Kurt",
    lastName: "Wonnegut",
    email: "blqblq@kurt.com"
}
personLogger(p);