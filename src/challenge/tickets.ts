export const tickets = (queue: number[]): string => {
    let count25: number = 0; // Contador de billetes de $25
    let count50: number = 0; // Contador de billetes de $50
  
    for (const payment of queue) {
      if (payment === 25) {
        // Si pagan con $25, solo lo aceptamos
        count25++;
      } else if (payment === 50) {
        // Si pagan con $50, necesitan un billete de $25 como cambio
        if (count25 > 0) {
          count25--;
          count50++;
        } else {
          // Si no tenemos billetes de $25, no podemos dar cambio
          return "NO";
        }
      } else if (payment === 100) {
        // Si pagan con $100, necesitan $75 como cambio
        if (count50 > 0 && count25 > 0) {
          // Preferimos dar un billete de $50 y uno de $25 como cambio
          count50--;
          count25--;
        } else if (count25 >= 3) {
          // Si no hay billetes de $50, usamos tres billetes de $25
          count25 -= 3;
        } else {
          // Si no podemos dar cambio, devolvemos "NO"
          return "NO";
        }
      }
    }
  
    // Si terminamos de procesar toda la fila, devolvemos "SI"
    return "SI";
  };
  
  // Ejemplos
//   console.log(tickets([25, 25, 50])); // => SI
//   console.log(tickets([25, 100])); // => NO
//   console.log(tickets([25, 25, 50, 50, 100])); // => NO
  