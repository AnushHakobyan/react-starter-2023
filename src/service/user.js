export const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                email: 'johndoe@inmail.io',
                joined: '2021-01-01',
                id: 1,
            })
        }, 1000);
    });
}
