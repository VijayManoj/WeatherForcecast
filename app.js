

const path=require('path')


const express=require('express')

const  app=express()

const hbs=require('hbs')

const request=require('request')
const geoCode=require('./Utils/geoCode.js')
const forecast=require('./Utils/weatherforecast.js')

//console.log(__dirname)
//console.log(__filename) //File name is going to get excat file location

//console.log(path.join(__dirname,'../public/Index.html'))

app.listen(3000)

const path1=path.join(__dirname,'../src/public')

let path_2=path.join(__dirname,'/tempelates/views')

let path_3=path.join(__dirname,'/tempelates/partials')


app.set('view engine','hbs')

//Setting up the new path 

app.set('views',path_2)

hbs.registerPartials(path_3) //not needed
//Setting up static directory 
app.use(express.static(path1))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name : 'Vijay Manoj'
    })
})


//Challenge 

let data1;


let msg;
app.get('/weather',(req,res)=> {

    if(!req.query.search)
    {
       return res.send({
           error :'Place necessary '
       })
    }
   
    geoCode(req.query.search,(error,msg={})=>{

        if(error)
        {
          //  console.log('Error is '+error)
             res.send({
                 Error :error
             })
        } else {
            
           // console.log(msg.latitude+" "+msg.longitude)
                
            let data=msg.place
            forecast(msg.latitude,msg.longitude,(error,msg)=> {
                if(error)
                {
                    
                   // console.log('Error '+error)
                    res.send({
                        Error :error
                    })
                } else {
                   
                  //  console.log('Data is '+msg)
                    res.send({
                        Weather : msg,
                        location:data,
                        Place : req.query.search
                    })
                   

                }

              
            })
            }


    })
    
    /*
    res.send({
        
       

        forecast :'It is '+data1,
      //  location:msg.latitude+" "+msg.longitude,
        adddress:req.query.search

    })*/
})

/*
app.get('/weather',(req,res)=> {

    res.send({
        forecast :'It is warm',
        location:'Vijayawada'
    })
})
*/





app.get('/products',(req,res)=> {
      if(!req.query.search)
      {
         return res.send({
             error:'You must provide a Search Term'
         })
      }
    res.send({   //even else condition is also possible 
        products:[]
    })


})

app.get('/about',(req,res)=> {
    res.render('about',{
        name : 'Vijay Manoj',
        number :'6304236807'
    })
})

app.get('/help',(req,res)=> {
    res.render('help',{
        email:'kota.vijay.manoj@gmail.com'
    })
})

app.get('/help/*',(req,res)=> {

    res.send('<h2>Help article  Page 404 Not found </h2>')
})

//It should be last  '*' is wild card 
app.get('*',(req,res)=> {

res.render('File404',{

    val:'404 Error Page Not Found'
})

})

/*
app.get('',(req,res)=> {

      res.send('<h2>Welcome to Weather Stack</h2>')
})

app.get('/help',(req,res)=> {
    res.send({
        name :'Vijay',
        age:20
    })
})*/
//App.com
//App.com/help
//App.com/about


//It is going to start the Express

//app.listen(3000,()=> {  Optional 
   // console.log('Server is Up on Port 3000')
//}) 

//We are going to nodemon for this excution beacuse it is auto save and running 

//Challenge 
/*
//App.com/about
app.get('/about',(req,res)=> {
   // res.send('This is about Page')
   res.send('<head><title>About Page </title></head>')
    res.send([{
        name :'Vijay'
    }, {
        name :'Manoj',
    }])
    
})

//App.com/weather
app.get('/weather',(req,res)=> {
    //res.send('This is Weather Page ')
    res.send({
        forecast : "It is Warm",
        Location:'Vijayawada'
    })
}) */

