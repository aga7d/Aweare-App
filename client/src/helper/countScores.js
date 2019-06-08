
const distance=(lat1, lon1, continent)=> {
  let lat,long;
  switch(continent){
      case "asia" :
        lat= 45.450700;
        long= 68.831900;
        break;
      case "europe" :
        lat= 50.378500;
        long=14.970600;
        break;
      case "north_america" :
        lat= -17.510586;
        long= -57.464447;
        break;
      case "south_america" :
        lat= 46.621204;
        long= -104.381008;
        break;
      case "africa" :
        lat= 2.318500;
        long= 19.568700;
        break;
      case "australia" :
        lat= -23.698000;
        long= 133.880700;
        break;
        default :
        break;
  }
  var p = 0.017453292519943295;  
  var c = Math.cos;
  var a = 0.5 - c((lat - lat1) * p)/2 + 
          c(lat1 * p) * c(lat * p) * 
          (1 - c((long - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a));
}

const countScores = ( score, fabrics, garment, continent, location ) => {
  const dist= distance(location[0], location[1], continent);
  let distanceFactor;
  if(dist>=12000){
      distanceFactor=10;
  }
  else if(dist>=9000 && dist<12000){
      distanceFactor=8;
  }
 else if(dist>= 6000 && dist<9000){
      distanceFactor=6;
  }
 else if(dist>=3000 && dist<6000){
      distanceFactor=4;
  }
 else if(dist>=1000 && dist<3000){
      distanceFactor=2;
  }
  else {
      distanceFactor=1;
  }
  const result={}
  const scoresObj= {
      carbon: 0,
      green_gas: 0,
      water_use: 0,
      water_polution: 0,
      land_use : 0,
      biodegrability : 0
  }
   let scoreFactor ;

   if(fabrics.main_fabric === fabrics.lining){
          scoreFactor= {
              main_fabric:0.85,
              lining:1,
              closure: 0.15
          }
   }
   else if(fabrics.lining==="none" && fabrics.closure ==="none"){
         scoreFactor = {
             main_fabric: 1,

         }
   }
   else if(fabrics.lining === "none" && fabrics.closure !=="none"){
       scoreFactor= {
           main_fabric: 0.85,
           closure:0.15
       }
   }
   else if(fabrics.lining !=="none" && fabrics.closure ==="none"){
       scoreFactor ={
           main_fabric: 0.85,
           lining: 0.15
       }
   }
   else {
      scoreFactor = {
       main_fabric: 0.7,
       lining: 0.15,
       closure: 0.15
   }
   }
   Object.values(fabrics).map(val=>{ if(val!=="none"){result[val] = {...score.find(obj=>obj.name === val)}; delete result[val].name; return;}});
   console.log(result);
   Object.keys(fabrics).map(key=>{
       if(fabrics[key]!=="none"){
           const inner= result[fabrics[key]];
       Object.keys(inner).map(k=>{
           inner[k] *= scoreFactor[key];
           inner[k]= Number(inner[k].toFixed(2))
           return;
       })
       }
       return;
   })
   Object.values(result).map(val=>{
       Object.keys(val).map(key=>{
           if(key!=="biodegrability"){
             scoresObj[key]+= (garment * val[key]);
               scoresObj[key]= Number(scoresObj[key].toFixed(2))
           }
           else{
                scoresObj[key]+=  val[key];
           }
         return;
       })
       return;
   })
   scoresObj.carbon = Number(((scoresObj.carbon * 0.75) + (distanceFactor * 0.25)).toFixed(2));
   return scoresObj;

}
export default countScores;