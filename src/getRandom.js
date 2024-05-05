export default function random(){
  const num = []
  while(num.length !== 3){
    const temp = Math.floor(Math.random()*10)
    if(!num.includes(temp)){
      num.push(temp)
    }
  }
  return num
} 