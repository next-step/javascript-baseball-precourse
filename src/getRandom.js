export default function random() {
    
    let three =  Math.floor(Math.random()*9+1)
    let two =  Math.floor(Math.random()*9+1)
    let one =  Math.floor(Math.random()*9+1)

    while(one === two || one === three || two === three)
    {
        three =  Math.floor(Math.random()*9+1)
        two =  Math.floor(Math.random()*9+1)
        one =  Math.floor(Math.random()*9+1)
    }

    return three*100 + two*10 + one

}