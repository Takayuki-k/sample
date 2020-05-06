const calcAge = (year, month, day) => {
	let birthdate = year * 10000 + month * 100 + day;
	let today = new Date();
	let targetdate = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
	return (Math.floor((targetdate - birthdate) / 10000));
}
