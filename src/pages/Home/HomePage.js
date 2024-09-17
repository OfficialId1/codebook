import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {
  useTitle('Access latest Computer Science e-books');

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
