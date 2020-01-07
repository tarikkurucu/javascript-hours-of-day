getDayHours = () => {
        let hoursArr = [];
        let munites = 15;
        for (let i=0;i<24;i++){
            let hourString=i.toString().length<2?"0"+i:i;
            for(let j=0;j<(60/15);j++){
                let minuteString = j===0?"00":j*15;
                hoursArr.push(`${hourString}:${minuteString}`);
            }
        }
        return hoursArr;
    }