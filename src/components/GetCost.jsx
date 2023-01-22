
const GetCost = (startCity,endCity,middleStop) => {
    const cities={
        "mumbai":[1,5],
        "kolkata": [7, 2],
        "chennai": [6, 5],
        "bangalore": [4, 9],
    }
    console.log(startCity,endCity,middleStop);
    const distance=(city1,city2)=>{
        let x1=city1[0];
        let x2=city2[0];
        let y1=city1[1];
        let y2=city2[1];
        return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
    }
    if(!startCity || !endCity){
        return "Insufficient data provided";
    }
    if(!cities[startCity] || !cities[endCity]){
        return "Invalid city name";
    }
    let cost=0;
    if(middleStop){
        if(!cities[middleStop]){
            return "Invalid middle stop city name";
        }
        cost=distance(cities[startCity],cities[middleStop])+distance(cities[middleStop],cities[endCity]);
    }else{
        cost =distance(cities[startCity],cities[endCity]);
    }
    return Math.round(cost *100);
}

export default GetCost