import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'portfolio'));
            const data = querySnapshot.docs.map((doc) => doc.data());
            console.log("🔥 Portfolio data fetched:", data);
            setPortfolio(data);
        } catch (error) {
            console.error("❌ Error fetching portfolio data:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderPortfolio = () => {
        if (loading) return <p>Loading projects...</p>;

        if (portfolio.length === 0) {
            return <p>No portfolio items found.</p>;
        }

        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    <div className="project-card" key={idx}>
                        <div className="project-logo">
                            <img src={port.image} alt={port.name} />
                        </div>
                        <div className="project-details">
                            <h3 className="project-title">{port.name}</h3>
                            <p className="project-stack">{port.description}</p>
                            <button
                                className="project-btn"
                                onClick={() => window.open(port.url, "_blank")}
                            >
                                VIEW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>

                <div>{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
