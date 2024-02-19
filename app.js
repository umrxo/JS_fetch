let users = document.querySelector('.users')

async function getUsers(){
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=21')
        let res = await data.json()

        console.log(res);
        res.forEach((item) => {
            let user = document.createElement('div')
            user.classList.add('user')

            let id  = document.createElement('p')
            let img = document.createElement('img')
            let h2 = document.createElement('h2')

            id.textContent = `id: ${item.id}`
            img.src = item.url
            h2.textContent = `Описание: ${item.title}`

            user.append(id, img, h2)
            users.append(user)

        });

    } catch(error){
        console.log(error);
    }

}
getUsers()