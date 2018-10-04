# loan-simulator
 this api runs in express js. calculates the monthly interest of a loan simulation. The endpoint receives as parameters the amount, number of installments, interest and if you use the German system or fixed installments. and returns a json with the detail and the accumulated interests.

## example:
- http://localhost:3000/loanparams/?amount=100000&installmentsNumber=12&interestRate=5&diminishing=false
