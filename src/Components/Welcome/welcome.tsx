import { Link } from 'react-router-dom';
import '../Style/Welcome.css';
import React from "react";
const welcome: React.FC = () => {
    return (
        <>
            <div className='DH1'>
                <h1 className='H1'>Welcome To</h1>
                <h1 className='H1'>My Problem Solver</h1>
            </div>
            <div className='Div1'>
                <p className='DIV1-P1'>
                    "My Problem Solver" is an innovative and comprehensive educational platform designed to simplify and enhance the learning of mathematical concepts through both theoretical explanations and practical coding examples. This user-friendly website caters to students, educators, and math enthusiasts, offering detailed tutorials and hands-on coding experiences in Java, JavaScript, and TypeScript, among other programming languages.
                </p>
                <p className='DIV1-P1'>
                    "My Problem Solver" aims to bridge the gap between theoretical knowledge and practical application, empowering users to master mathematical concepts through coding. By integrating theory with hands-on practice, the platform seeks to foster a deeper understanding and appreciation of mathematics. "My Problem Solver" is your go-to destination for mastering mathematics with the power of coding. Explore, learn, and solve problems like never before!
                </p>
            </div>
            <div className='Div2'>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>In-Depth Theoretical Explanations</p>
                    <p className='Div2-d1-p2'>In-Depth Theoretical Explanations Each mathematical concept is broken down into easy-to-understand sections, providing users with a strong theoretical foundation.</p>
                </div>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>Interactive Coding Examples</p>
                    <p className='Div2-d1-p2'>Interactive Coding Examples Practical coding examples accompany each concept, demonstrating how to implement mathematical principles in various programming languages.</p>
                </div>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>Multi-Language Support</p>
                    <p className='Div2-d1-p2'>Multi-Language Support Users can explore coding examples in Java, JavaScript, TypeScript, and more, allowing them to learn and practice in their preferred language.</p>
                </div>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>User-Friendly Interface</p>
                    <p className='Div2-d1-p2'>User-Friendly Interface The website features a clean, intuitive interface that makes navigation seamless and learning enjoyable.</p>
                </div>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>Comprehensive Coverage</p>
                    <p className='Div2-d1-p2'>Comprehensive Coverage From basic arithmetic to advanced calculus and linear algebra, "My Problem Solver" covers a wide range of mathematical topics.</p>
                </div>
                <div className='Div2-d1'>
                    <p className='Div2-d1-p1'>Community and Support</p>
                    <p className='Div2-d1-p2'>Community and Support Users can join forums and discussion groups to seek help, share knowledge, and collaborate with peers and experts.</p>
                </div>
            </div>
            <div className='Div-Btn'>
                <Link to="/Content" className='BTN'>Click Here!</Link>
            </div>
        </>
    );
}
export default welcome;