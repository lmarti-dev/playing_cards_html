

const FAMILIES = {"a":"img/1.png","b":"img/2.png","c":"img/3.png","d":"img/4.png"}
const VALUES = ["7","8","9","10","K","A","U","O"]


function get_deck(){
    
    keys = Object.keys(FAMILIES)
    deck=Array()

    keys.forEach(key => {
        VALUES.forEach(val=>{
            deck.push({family:key,value:val})
        })
        
    });
    return deck
}


function get_random_and_pop(arr){
    idx=Math.floor(Math.random()*(arr.length-1))
    card = arr[idx]
    arr.splice(idx,1)
    return card
}

function get_logo_div(fam){
    path = FAMILIES[fam]
    div = document.createElement("div")
    div.className = "logo"
    img = document.createElement("img")
    img.setAttribute("src", path)
    div.appendChild(img)
    return div

}


function get_angles(n_draw){
    if (n_draw == 1) return [0]
    bound = n_draw*(5-n_draw/16)
    angles = Array()
    for (aa=0;aa<n_draw;aa++){
        angle = -(1-((aa)/(n_draw-1)))*bound+ (aa/(n_draw-1))*bound
        angles.push(Math.round(angle))
    }
    return angles
}

document.addEventListener("DOMContentLoaded", (event) => {
    cards_held = Array()
    deck = get_deck() 
    n_draw = Math.max(Math.random()*(deck.length-1),1)
    console.log(deck)
    for (xx=0;xx<n_draw;xx++){
        cards_held.push(get_random_and_pop(deck))
    }
    console.log(cards_held)
    console.log(deck)
    angles = get_angles(n_draw)
    for (yy=0;yy<cards_held.length;yy++){
        card = cards_held[yy]
        hand = document.getElementById("hand")
        card_div = document.createElement("div")
        card_div.className = "card"
        card_div.style.setProperty("--image-rotation",`${angles[yy]}deg`)

        value_div = document.createElement("div")
        value_div.className = "value"
        value_div.innerHTML = `<p>${card.value}</p>`
        logo_div = document.createElement("div")
        logo_div.className="logo"

        n_logos = VALUES.indexOf(card.value)+1
        
        for (xx=0;xx<n_logos;xx++){
            logo_div.append(get_logo_div(card.family))
            
        }
        card_div.appendChild(value_div)
        card_div.appendChild(logo_div)
        hand.appendChild(card_div)
    }
  });
  