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
