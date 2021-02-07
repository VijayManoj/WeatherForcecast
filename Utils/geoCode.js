//CallBack function for geocode
const request=require('request')
const geoCodeAsyn=(address,callback)=>{

    setTimeout(()=>{

        let a='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidmlqYXltYW5vaiIsImEiOiJja2s2ZjhoOGgwM2gxMnZtdmk1YzQ0YTJzIn0.8IN870-tZ3VJmfhYg_mncA&limit=1'

    
         request({url:a,json:true},(error,response)=>{
             if(error)
             {
                 callback('Unable to connect to Mapbox',undefined)
             }else if(response.body.features.length==0){
                 callback('Unable to find location',undefined)
             
            }else {
                let lat=response.body.features[0].center[1]
                let lon=response.body.features[0].center[0]
                  // console.log(response.body.features[0].place_name)
                callback(undefined,{
                    latitude :lat,
                    longitude:lon,
                    place:response.body.features[0].place_name
                })
            }
            
         })
    },2000)


}


module.exports=geoCodeAsyn