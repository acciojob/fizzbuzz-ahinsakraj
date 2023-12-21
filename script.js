//your JS code here. If required.
function solve(start,end) {
	let ans="";
	for(let i=start;i<=end;i++){
		if(i%3==0 && i%5==0)ans+="FizzBuzz";
		else if(i%3==0)ans+="Fizz";
		else if(i%5==0)ans+="Buzz";
		else ans+=i;
		ans+="\n";
	}
	return ans;
}

const start=prompt("Enter first number : ");
const end=prompt("Enter second number : ");
alert(solve(start,end));