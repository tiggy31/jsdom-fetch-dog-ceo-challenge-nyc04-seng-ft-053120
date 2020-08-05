console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){


   let allBreed = []
   const imgurl =  "https://dog.ceo/api/breeds/image/random/4"
   const dogImgContainer = document.getElementById('dog-image-container')
   const dogBreedul = document.getElementById("dog-breeds")
   const breedDropdown = document.getElementById('breed-dropdown')
//    console.log(breedDropdown)


   const breedurl  ='https://dog.ceo/api/breeds/list/all'

   dogBreedul.addEventListener('click', (event) => {
      console.log(event.target.style.color = "cyan")

    })

    breedDropdown.addEventListener('change', (event) => {
         const selectedLetter = event.target.value
         const filteredbBreeds = allBreeds.filter((breed)=> breed.startsWith(selectedLetter))
         dogBreedul.innerHTML = filteredbBreeds.map((breed)=>  `<li>${breed}</li>.join('')

    })
     
   


   fetch(imgurl)
     .then(function(response)  {
      if(response.ok) {
        // console.log(response.json())
       return response.json()
      }
     })

      .then(function(response) {

          
        //   console.log(response.message)
                response.message.forEach(function(imgurl){
                        dogImgContainer.innerHTML +=  `<img src = "${imgurl}">`
                     
                    })
                 })
              
            //   const dogImgString = response.message.map(function(imgurl) {
            //       return `<img src= ${imgurl}>`
    
            //    })
            // //    console.log(dogImgString)
            // dogImgContainer.innerHTML = dogImgString.join("")
            // })
               
            

        fetch(breedurl, {method: 'GET'})
          .then((resp) => resp.json())
          .then((breedData)  => {

           allBreeds =  Object.keys(breedData.message)
            //  console.log(breedNames) array of breed string
            dogBreedul.innerHTML = breedNames.map((breed)=> `<li> ${breed} </li>`).join("")
            // dogBreedui.innerHTML = createDogLis(allBreeds)
          })


          //helpedfunction
        function createDogLis(dogBreedArray) {
          return dog.map((breed) =>   `<li>${breed}</li>`).join('')


        }

              //challenge 3

       

     })
