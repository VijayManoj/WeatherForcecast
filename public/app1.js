
//console.log('hai')

/*
fetch('http://puzzle.mead.io/puzzle').then((res)=> {
 
res.json().then((data)=> {
    console.log(data)
})
      
})
*/
const a=document.querySelector('form')
let b=document.getElementById('i1')
a.addEventListener('submit',(e)=> {
     
    document.getElementById('temp').textContent='Loading Data Please Wait :) '
    document.getElementById('part').textContent=''
              document.getElementById('loc').textContent=''
    e.preventDefault()  //Not to refresh the browser 
  //console.log('Testing')   
  //console.log(b.value)

  fetch('http://localhost:3000/weather?search='+encodeURIComponent(b.value)).then((res)=> {
    res.json().then((data)=> {
       
        if(data.Error)
        {
             // console.group(data.Error)

              document.getElementById('temp').textContent=data.Error
              document.getElementById('part').textContent=''
              document.getElementById('loc').textContent=''
            }else {
            //console.log(data.Weather)
            //console.log(data.location)
            //console.log(data.Place)
              document.getElementById('temp').textContent=data.Weather
             document.getElementById('part').textContent=data.location
            document.getElementById('loc').textContent=data.Place
            }
    })
})
})
