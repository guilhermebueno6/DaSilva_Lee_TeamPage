(() => {
    console.log('fired!');

    let guiTextCon = document.querySelector(".guiText h2"),
        stellaTextCon = document.querySelector("#stellaText h2"),
        guiButtons = document.querySelectorAll("#guiBut button"),
        stellaButtons = document.querySelectorAll("#stellaBut button");

    const guiBio = [`I'm a coder, currently studying on Fanshawe's Interactive Media Design. Personally, I like very much to work on applications and interesting and diffeent Java Script applications. Not a big fan of designing, even though I'm the Designer of this website!`,`I like to play basketball and jiu-jitsu, actually, I'm currently a blue belt. I also like very much to make craft beer with my father.`];   
    const stellaBio = [`I’m an IDP3 student at Fanshawe College. I have learned much design and developing materials; I think I’m more interested in code. I want to work as a developer after this program done.`,`I picked Stella, which is my English name something easy to call and makes sense with my Korean name. A few days ago, Nour found a movie called ‘kidnapping Stella’ on Netflix. I already know Stella from an old film called 'a streetcar named desired.'`];

    function showGuiBio() {
        arrayIndex = this.dataset.arrayref;
        guiTextCon.textContent = guiBio[arrayIndex];
    }
    
    guiButtons.forEach(button => button.addEventListener("click",showGuiBio));


    function showStellaBio() {
        arrayIndex = this.dataset.arrayref;
        stellaTextCon.textContent = stellaBio[arrayIndex];
    }

    stellaButtons.forEach(button => button.addEventListener("click",showStellaBio));


})();


// caraousel - try 1
    // const showingClass = "showing";
    // const firstSlide = document.querySelector("#carousel-slider:first-child");


    // function slide() {
    //     const currentSlide = document.querySelector(`.${showing_class}`)

    //     if (currentSlide) {
    //         currentSlide.classList.remove(showingClass);
    //         const nextSlide = currentSlide.nextElementSibling;
            
    //         if (nextSlide) {
    //             console.log(curretSlide);
    //             nextslide.classList.add(showingClass);
    //         } else {
    //             firstSlide.classList.add(showingClass);
    //         }
    //     } else {
    //         firstSlide.classList.add(showingClass);
    //     }
    //     slide()
    //     setInterval(slide, 4000); // 1000 = 1 sec
    // }