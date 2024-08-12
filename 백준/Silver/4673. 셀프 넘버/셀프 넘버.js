function kaprekar(n) {
  let num = n.toString()
  switch(num.length) {
    case 1:
      return n + n
    case 2:
      return n + Number(num[0]) + Number(num[1])
    case 3:
      return n + Number(num[0]) + Number(num[1]) + Number(num[2])
    case 4:
      return n + Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3])
    case 5:
      return n + Number(num[0]) + Number(num[1]) + Number(num[2]) + Number(num[3]) + Number(num[4])
  }
}
const d = []
let i = 0
while(i <= 10000) {
  d.push(kaprekar(i))
  i++
}
for(let i = 1; i <= 10000; i++) {
  if(!d.includes(i)) {
    console.log(i)
  }
}