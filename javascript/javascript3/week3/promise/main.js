
//Getting into promises

const urlTarik='https://api.github.com/search/repositories?q=user:tariqjavid';

const urlVictoria='https://api.github.com/search/repositories?q=user:panivita';

const urlCharles='https://api.github.com/search/repositories?q=user:CharlesKimMaina';

//fetching all users
const promiseTarik= fetch(urlTarik)

const promiseVictoria= fetch(urlVictoria)

const promiseCharles= fetch(urlCharles)

const allPromises=[promiseTarik, promiseVictoria, promiseCharles]

Promise.all(allPromises)

    .then(res=>{

        console.log(res);

        const jsonTarik=res[0].json();

        const jsonVictoria=res[1].json();

        const jsonCharles=res[2].json();

        return Promise.all([jsonTarik, jsonVictoria, jsonCharles])

    })
        .then(result=>{

            console.log(result);

            //rendering result to browser
            const body=document.querySelector('body');

            result.forEach(users=>{

                            
                const repoes=users.items;

                repoes.forEach(items=>{
                    
                    const div=document.createElement('div');

                    div.innerHTML= `<ul> 
                            <li> ${items.owner.login}'s repoes
                                <ul>
                                    <li>${items.name} : ${items.url}</li>
                                </ul>
                            
                            </li>
                        </ul> `
                    
                     body.appendChild(div);

                })

            })
            
                      
        });
