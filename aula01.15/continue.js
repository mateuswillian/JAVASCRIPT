let listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//break

for(i=0; i<= listaNum.length; i++) {
    console.log(listaNum[i])
    if (i === 4) {
        break
    }
}

//continue

for(i=0; i<= listaNum.length; i++) {
    if (i === 4) {
        continue
    }
    console.log(listaNum[i])
}