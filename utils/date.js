export function getNumberOfYearsFrom(yearFrom){
	let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - yearFrom;
}