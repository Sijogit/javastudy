// 0    1          2           3             4           5                 6
//[no,district, +ve cases, death rate, curred rate,1st dose vaccine,2nd dose vaccine]
covid_data=[
     [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
     [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
     [2, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
     [4, 'Pathanamthitta', 20000,2000,45000, 22000, 1500],
     [5, 'Kozhikkode',44000,5000,12000, 21000, 500],
     [6, 'Palakkad', 12000,1000,20000, 23000, 3400],
     [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
     [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]

]
//1. district having highest +ve cases
console.log('district having highest +ve cases');
highest=covid_data.reduce((covid1,covid2)=>covid1[2]>covid2[2]?covid1:covid2)
console.log(highest[1]);
console.log('------------------------');
//2. district having highest 1st dose vaccine
console.log('district having highest 1st dose vaccine');
highest=covid_data.reduce((covi1,covi2)=>covi1[5]>covi2[5]?covi1:covi2)
console.log(highest[1]);
console.log('-----------------------------');
//3. district having lowest death rate  
console.log('district having lowest death rate');
lowest=covid_data.reduce((cov1,cov2)=>cov1[3]<cov2[3]?cov1:cov2)
console.log(lowest[1]);
console.log('-------------------');
//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');
descending=covid_data.sort((cov1,cov2)=>cov2[2]-cov1[2]).forEach(item=>{console.log(item[1]);});
console.log('------------------------------');
//5. is district with +ve case > 15000
console.log('is district with +ve case > 15000');
l=covid_data.some(covi=>covi[2]>1500)
console.log(l?'yes':'no');
console.log('--------------------------');
//6. sort data with 1st dose vaccine descending order
console.log(' sort data with 1st dose vaccine descending order');
descending=covid_data.sort((cov1,cov2)=>cov2[5]-cov1[5]).forEach(item=>{console.log(item[1]);})
console.log('----------------------------');
//7. print thrissur details
console.log('print thrissur details');
thrissur=covid_data.find(cov=>cov[1]=='Thrissur')
console.log(thrissur);
console.log('-----------------');
//8. print total number of positive cases
console.log('print total number of positive cases');
total=covid_data.map(pos=>pos[2]).reduce((tot1,tot2)=>tot1+tot2)
console.log(total);
console.log('---------------------')
//9. print total number of curred cases
console.log(' print total number of curred cases');
total=covid_data.map(pos=>pos[4]).reduce((tot1,tot2)=>tot1+tot2)
console.log(total);
console.log('-------------------');
//10. print curred cases in idukki
console.log('print curred cases in idukki');
idukki=covid_data.find(cov=>cov[1]=='Idukki')
console.log(idukki[4]);
