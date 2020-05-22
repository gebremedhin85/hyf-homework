//Giphy api
// Create a site where a user can search for any word using gif api
//https://developers.giphy.com/docs/ 
//my api id= Q3MkdtrQmN4KgeUL7fqzb5vn1Bjt628g

 
const getGifs=()=>{
    const inputSearching=document.getElementById('inputSearch');
    
    let inputWord=inputSearching.value;

    if(inputWord!==''){
        let url=`https://api.giphy.com/v1/gifs/search?&api_key=Q3MkdtrQmN4KgeUL7fqzb5vn1Bjt628g&q=${inputWord}`;

        fetch(url)

            .then(res=>res.json())

            .then(result=>{

                console.log(result)
                
                const div=document.getElementById("gif");
               
                const resultArr=result.data;
               
                const outputGifs = resultArr.map(dataImage => {
                   
                    return `<li><img src='${dataImage.images.fixed_height_small_still.url}'/></li>`
                })

                const output = `
                    <ul>
                        ${outputGifs.join('')}
                    </ul>
                    `
                div.innerHTML=output;
                
                //If we want to see a given number of gifs
                const inputNum=document.getElementById('inputNumber');
                
                inputNum.addEventListener('input', (event)=>{
                    
                    if(inputNum.value!==''){
                        
                        div.innerText='';
                        
                        for(let i=0; i<inputNum.value; i++){
                        
                            
                        
                            const imgTag=document.createElement("img");
                            
                            const imageGif=resultArr[i].images.fixed_height_small_still.url;
                        
                            imgTag.setAttribute('src', imageGif)
            
                                                         
                            div.appendChild(imgTag);  
                        }
                    }
                })

            }) 
        
    } else{

        document.getElementById("gif").innerText='Enter a word to search gifs'
        }

}


document.getElementById('inputButton').addEventListener('click', getGifs);

//when we need change the searching word
document.getElementById('inputSearch').addEventListener('keydown', (event)=>{
    
    document.getElementById("gif").innerText='';
});