import Head from 'next/head'
import Image from 'next/image'
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SpecializationSection from "../components/specialization/specialization";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SpecializationSection></SpecializationSection>
    </Layout>
  );
}
