import React from "react";
import { Link } from "react-router-dom";
const Content:React.FC = () => {
    return (
        <>
            <h1>Welcome To Content Section</h1>
            <div>
                <Link to="/Counter">1. Counter Example</Link>
                <Link to="/Arithmetic">2. Arithmetic Operation</Link>
                <p>3. Even & Odd Number</p>
                <p>4. Fibonacci Series</p>
                <p>5. Multiplication Table</p>
                <p>6. Prime Number</p>
                <p>7. Reverse Of Number</p>
                <p>8. Palindrome Number</p>
                <p>9. Armstrong Number</p>
                <p>10. Factorial Number</p>
                <p>11. Dispalay Digits Of Number</p>
                <p>12. Sum Of Digit Of A Number</p>
                <p>13. Perfect Number</p>
                <p>14. Perfect Square Number</p>
                <p>15. Permutation & Combination</p>
                <p>16. HCM & LCM Of Numbers</p>
                <p>17. Factor Of A Number</p>
                <p>18. Strong Number</p>
                <p>19. Automorphic Number</p>
                <p>20. From Range1 To Range2</p>
            </div>
        </>
    );
}
export default Content;