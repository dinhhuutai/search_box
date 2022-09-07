
var helps = [
    {
        icon: 'fas fa-image',
        name: 'Image'
    },
    {
        icon: 'fas fa-language',
        name: 'Language'
    },
    {
        icon: 'fas fa-newspaper',
        name: 'News'
    },
    {
        icon: 'fas fa-futbol',
        name: 'Sport'
    },
    {
        icon: 'fab fa-facebook-messenger',
        name: 'Messenger'
    },
    {
        icon: 'fas fa-gamepad',
        name: 'Game'
    },
    {
        icon: 'fas fa-cash-register',
        name: 'Payment'
    },
    {
        icon: 'fas fa-hamburger',
        name: 'Food'
    },
    {
        icon: 'fas fa-film',
        name: 'Film'
    },
    {
        icon: 'fas fa-heartbeat',
        name: 'Healthy'
    },
    {
        icon: 'fas fa-shopping-cart',
        name: 'Shopping'
    },
    {
        icon: 'fas fa-cloud-sun',
        name: 'Weather'
    },
    {
        icon: 'fas fa-envelope',
        name: 'Mail'
    },
    {
        icon: 'fas fa-clock',
        name: 'Time'
    },
    {
        icon: 'fas fa-music',
        name: 'Music'
    },
    {
        icon: 'fas fa-calendar-alt',
        name: 'Calendar'
    },
    {
        icon: 'fas fa-desktop',
        name: 'Product'
    },
    {
        icon: 'fas fa-truck',
        name: 'Delivery'
    },
];


function main() {
    var contaiHelp = document.querySelector('.contai-help');

    var start = 0;
    var htmls = "";
    for(var i = start; i < start + 5; i++){
        htmls += `
        <li class="help">
        <i class="${helps[i].icon}"></i>
        <p>${helps[i].name}</p>
        </li>
        `;
    }
    contaiHelp.innerHTML = htmls;


    var containerBox = document.querySelector('.container-box');
    var btnElement = document.querySelector('.btn');
    var containerInfo = document.querySelector('.container-info');
    
    btnElement.onclick = function() {
        containerBox.classList.toggle('open');

        if(containerBox.classList.contains('open')){
            setTimeout(() => {
                containerInfo.classList.toggle('show');
            }, 500);
            setTimeout(() => {
                containerBox.style.animation = 'inputSlipDown ease 1s forwards';
            }, 1500);
        }
        else{
            setTimeout(() => {
                containerBox.style.animation = 'inputSlipUp ease 1s forwards';
            }, 500);
            setTimeout(() => {
                containerInfo.classList.toggle('show');
            }, 1600);
        }
    }
    
    
    start = start + 5;
    setInterval(() => {
        if(containerInfo.classList.contains('show')){
            var htmls = "";
            var i = 0;
            while(i < 5){

                var s = start++;
                htmls += `
                    <li class="help">
                        <i class="${helps[s].icon}"></i>
                        <p>${helps[s].name}</p>
                    </li>
                `;

                if(start >= helps.length){
                    start = 0;
                }

                i++;
            }
            
            contaiHelp.innerHTML = htmls;
        }
    }, 5000);

}


main();