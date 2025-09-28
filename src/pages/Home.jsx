import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RecommendationStrip from '../components/RecommendationStrip';
import Features from '../components/Features';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <RecommendationStrip />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;