let num1;
const excellent =
  num1 >= 90 && num1 <= 100
    ? `Your GPA Is 4.0 , Letter Grade is A ,Which Is Excellent`
    : num1 >= 80 && num1 <= 89
    ? `Your GPA Is 3.0 , Letter Grade is B , Which Is Very Good`
    : num1 >= 70 && num1 <= 79
    ? `Your GPA Is 2.0 , Letter Grade is C , Which Is Good`
    : num1 >= 60 && num1 <= 69
    ? `Your GPA Is 1.0 , Letter Grade is D , Which Is Bad`
    : num1 >= 0 && num1 <= 59
    ? `Your GPA Is 0.0 , Letter Grade is F , Which Is Failure , You Have Failed`
    : "Invalid Input";
console.log(excellent);
