
const request=require('request')

const forecast=(lat,lon,callback)=>{

    setTimeout(()=>{
  
      let a1='http://api.weatherstack.com/current?access_key=49f94776ad9dfc2d71301e341638acd1&query='+encodeURIComponent(lat)+','+encodeURIComponent(lon)+'&units=m'
      request({url:a1,json:true},(error,response)=>{
  
      if(error) 
      {
          callback('Unable to connect to WeatherStack App',undefined)
      }else if(response.body.success==false)
      {
          callback('Unable to find the Location',undefined)
      } else 
      {
          callback(undefined,'Tempreature is '+response.body.current.temperature+"  Observation Time "+response.body.current.observation_time)

      }
  
  
      })
  
  
    },2000)
  
  }

  module.exports=forecast