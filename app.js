let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})

let json_url = "actors.json";

fetch(json_url).then(Response => Response.json())
    .then((data)=> {
        data.forEach((ele, i) => {
            let {name, born, sposter, bposter, url, port_by} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>DOB ${born}, Portrayed by ${port_by}</p>
                    </div>
                </div>
            </div>   
            `
            cards.appendChild(card);
    });



    //search data
    data.forEach(element =>{
        let {name, born, sposter, url, port_by} = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}">
            <div class="cont">
                <h3>${name}</h3>
                <p>DOB ${born}, Portrayed by ${port_by}</p>
            </div>
            `
            search.appendChild(card);
    });

    //search filter
    search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b.innerText;
            if(TextValue.toUpperCase().indexOf(filter) > -1){
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            }else{
                a[index].style.display = "none";
            }
            if(search_input.value==0){
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        }
    });

    let brothers = document.getElementById('brothers');
    let main = document.getElementById('main');
    let secondary = document.getElementById('secondary');

    brothers.addEventListener('click', ()=>{
        cards.innerHTML = '';

        let brothers_array = data.filter(ele => {
            return ele.type === "brothers";
        });
        brothers_array.forEach((ele, i) => {
            let {name, sposter, bposter, url, born, port_by} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                    <p>DOB ${born}, Portrayed by ${port_by}</p>
                    </div>
                </div>
            </div>   
            `
            cards.appendChild(card);
            });

        });

        main.addEventListener('click', ()=>{
        cards.innerHTML = '';

        let main_array = data.filter(ele => {
            return ele.type === "main";
        });

        main_array.forEach((ele, i) => {
            let {name, sposter, bposter, url, born, port_by} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                    <p>DOB ${born}, Portrayed by ${port_by}</p>
                    </div>
                </div>
            </div>   
            `
            cards.appendChild(card);
            });
    });

    secondary.addEventListener('click', ()=>{
        cards.innerHTML = '';

        let secondary_array = data.filter(ele => {
            return ele.type === "secondary";
        });
        secondary_array.forEach((ele, i) => {
            let {name, sposter, bposter, url, born, port_by} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                    <p>DOB ${born}, Portrayed by ${port_by}</p>
                    </div>
                </div>
            </div>   
            `
            cards.appendChild(card);
            });

        });
});