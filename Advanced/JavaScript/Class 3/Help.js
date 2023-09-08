function contemSubMatriz(matriz1, matriz2) {
    for (let i = 0; i < matriz1.length - matriz2.length + 1; i++) {
      for (let j = 0; j < matriz1[i].length - matriz2[0].length + 1; j++) {
        let flag = true;
        for (let l = 0; l < matriz2.length; l++) {
          for (let m = 0; m < matriz2[l].length; m++) {
            if (matriz1[i + l][j + m] !== matriz2[l][m]) {
              flag = false;
            }
          }
        }
        if (flag == true) {
          return true;
        }
      }
    }
    return false;
  }
  
  console.log(
    contemSubMatriz(
      [
        [1, 0, 0, 1, 0],
        [2, 3, 1, 4, 5],
        [1, 1, 2, 4, 5],
        [1, 2, 3, 4, 5]
      ],
      [
        [4, 5],
        [4, 5]
      ]
    )
  ); // true