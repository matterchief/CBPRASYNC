function getdata(data, getNextData, getNexTestData)
{
    setTimeout( ()=>{
        console.log("the data is", data);
        if(getNextData){
            getNextData();
        }
        if (getNexTestData){
            getNexTestData();
        }
    },4000); 
        
}

getdata(3, ()=>{getdata(2)},()=>{getdata(4)} ); 
