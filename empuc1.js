//UC7
{
    const IS_PART_TIME = 1;
    const IS_Full_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=20;
    const MAX_HRS_IN_MONTH=160;
    function getEmpHrs(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
                break;
        
            case IS_Full_TIME:
                return FULL_TIME_HOURS;
                break;
            default:
                return 0;
            }
        }

        function calcDailyWage(empHrs){
            return empHrs*WAGE_PER_HOUR;
        }
        let totalEmpHrs=0;
        let totalWorkingDays=0;
        let empDailyWageArr = new Array();
        while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10)%3;
            empHrs=getEmpHrs(empCheck);
            totalEmpHrs+=empHrs;
            empDailyWageArr.push(calcDailyWage(empHrs));
        }
        let empWage = calcDailyWage(totalEmpHrs);
        console.log("UC 6 -Total days: "+totalWorkingDays + " Total hrs: "+totalEmpHrs + " Emp wage: "+empWage);

        let totEmpWage=0;
        function sum(dailyWage){
            totEmpWage +=dailyWage;
        }
        empDailyWageArr.forEach(sum);
        console.log("UC7A - Total days: "+totalWorkingDays + " total hrs: "+totalEmpHrs + " Emp Wage: "+totEmpWage);

        function totalWages(totalWage,dailyWage){
            return totalWage+dailyWage;
        }

        console.log("UC7A - Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));


        //UC7B

        let dailyCntr = 0;
        function mapDailyWithWage(dailyWage){
            dailyCntr++;
            return dailyCntr +" = "+dailyWage;
        }
        let mapDailyWageWWithArr = empDailyWageArr.map(mapDailyWithWage);
        console.log("UC7B - daily wage map ");
        console.log( mapDailyWageWWithArr);

        //UC7C- Show Days when Full time wage of 160 were earned
        function fullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        let fullDayWageArr = mapDailyWageWWithArr.filter(fullTimeWage);
        console.log("UC7C - daily wage filter when full time wage earned");
        console.log(fullDayWageArr);

        //UC7D - find first occurence full time wage was earned

        function findFullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }

        console.log("UC7D- First time FullTime wage was earned "+ mapDailyWageWWithArr.find(findFullTimeWage));

        //UC7E - testing the filter function
        function isAllFullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        console.log("UC7E-  check all elements have ull time wage: "+fullDayWageArr.every(isAllFullTimeWage));

        //UC7F- check if any part time wage
        function isAnyPartTimeWage(dailyWage){
            return dailyWage.includes("80");
        }

        console.log("UC7F- check if any part time wage: "+mapDailyWageWWithArr.some(isAnyPartTimeWage));

        //UC7G- find the no. of days employee worked
        let numOfDays = 0;
        function totalDaysWorked(numOfDays, dailyWage){
            if(dailyWage>0)return numOfDays+1;
            return numOfDays;
        }
    
        console.log("UC7G - no. of days employee worked "+ empDailyWageArr.reduce(totalDaysWorked,0));
}
//Dice
{
    let myMap = new Map();
    for(let i =0;i<6;i++){
        myMap.set(i+1,0);
    }
    function check(){
        for(let i =0;i<6;i++){
            if(myMap.get(i+1)==10){
                console.log("Maximum times rolled number is:"+(i+1));
                return true;
            }
        }
        return false;
    }
    
    while(true){
        if(check()){
            break;
        }
        else{
            console.log("Rolling");
            let num = Math.floor(Math.random()*10)%6 + 1;
            let val = myMap.get(num);
            myMap.set(num,val+1);
        }
    
    }
    let max=100000;
    let minRolled=-1;
    for(let i=0;i<myMap.size;i++){
        if(max>myMap.get(i+1)){
            max=myMap.get(i+1);
            minRolled=i+1;
        }
    }
    console.log("Minimum times rolled number is:"+minRolled);
    console.log(myMap);
    }

    //Birthday
    {
        let myMap = new Map();
        let monthArr=[];
        for(let i=0;i<12;i++){
            monthArr[i]=0;
        }
        for(let i=0;i<50;i++){
            let month = Math.floor(Math.random()*12) + 1;
            myMap.set(i+1,month);
            monthArr[month-1]++;
        }
        let ans = new Array(12);
        for(let i=0;i<ans.length;i++){
            ans[i]=[];
        }
        for(let i=0;i<50;i++){
            ans[myMap.get(i+1) - 1].push(i+1);
        }
        console.log(monthArr)
        for(let i=0;i<12;i++){
            for(let j=0;j<ans[i].length;j++){
                console.log("person with birthday in:"+(i+1)+" is:"+ans[i][j]);
            }
            console.log("")
        }
    }