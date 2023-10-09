function validBraces(braces){
	return braces.split("").reduce((acc, ele) => {
	  switch(ele)
		{
			case "(":
			  acc[0] += 1;
			  break;
			case ")":
			  acc[0] -= 1;
			  break;
			case "[":
			  acc[1] += 1;
			  break;
			case "]":
			  acc[1] -= 1;
			  break;
			case "{":
			  acc[2] += 1;
			  break;
			case "}":
			  acc[2] -= 1;
			  break;
		}
		return acc
	}, new Array(3).fill(0)).every(x => x == 0)
  }

  console.log(validBraces("([)]"))