weatherdata=[
    {district:"thrissur",weather:32},
    {district:"kottayam",weather:29},
    {district:"palakkad",weather:34},
    {district:"ernakulam",weather:33},
    {district:"thrissur",weather:29},
    {district:"kottayam",weather:30},
    {district:"palakkad",weather:32},
    {district:"ernakulam",weather:31}
    ]
    console.log(weatherdata);
    //print district with its highest temperature
      wd={}
      for(let data of weatherdata){
        dis=data.district
        currentweather=data.weather
        if(dis in wd){
             oldtemp=wd[dis]
             if(oldtemp>currentweather){
                wd[dis]=oldtemp
             }
             else{
                wd[dis]=currentweather
             }
        }
        else{
            wd[dis]=currentweather
        }
      }
        console.log(wd);

    //output:{thrissur:32,kottayam:30,palakkad:34,ernakulam:33}