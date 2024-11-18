export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  const match = query.match(/what is (\d+) plus (\d+)/i); 
  if (match) { 
    const num1 = parseInt(match[1]); 
    const num2 = parseInt(match[2]); 
    const result = num1 + num2;
    return String(result)
  }

  const match3 = query.match(/what is (\d+) multiplied by (\d+)/i); 
  if (match3) { 
    const num1 = parseInt(match3[1]); 
    const num2 = parseInt(match3[2]); 
    const result = num1 * num2;
    return String(result)
  }

  const match4 = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/i);
    if (match4) {
      const numbers = match4.slice(1).map(Number);
      
      const isSquareAndCube = (num: number) => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      };

      const result = numbers.find(isSquareAndCube);
      return result ? String(result) : "No number found that is both a square and a cube.";
    }

const match2 = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/i);
if (match2) {
  const num1 = parseInt(match2[1]);
  const num2 = parseInt(match2[2]);
  const num3 = parseInt(match2[3]);
  
  const maxNum = Math.max(num1, num2, num3);
  return String(maxNum);
}


  if (query == "What is your name?") {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "sheikah" );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "18-11093" );
  }
  return "";
}
