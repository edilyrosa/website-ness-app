'use client'
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Hero />

      <section id="about" className="section bg-white w-full text-[#352b4d] text-justify leading-relaxed text-2xl py-8">
          <br/>
          <br/>
        <h2 className="text-5xl font-bold mb-4 text-[#352b4d]">Sobre Nosotros</h2>
        <div className="bg-white p-8">
          <h2 className="text-4xl text-center">Somos NESS</h2>
            <img className="h-40 center-img" src="/NESS-logo.jpg" alt="Logo" />
            <p className="max-w-7xl mx-auto text-justify mt-4">
             🎀 Somos una pequeña empresa en el estado Zulia-Venezuela en donde amamos la moda y el estilo unico; nos caracterizamos con valores como
              la responsabilidad, el amor, el respto, y ademas de ello siempre con actitud positiva y por supuesto con mucho estilo.
              <br/>
              Mision: Diseñar y crear estilos de vestir unicos promoviendo el amor con cada una de las prendas. 
              <br/>
              Vision: Permanecer como una marca autentica, distintiva y con buen sentido de la moda.             
          </p>
          <p className="max-w-7xl mx-auto text-justify mt-4">
            📍 Nuestro taller artesanal está ubicado en arrio 28 de Diciembre Av. 49 FI, el municipio San Francisco del estado Zulia. Allí es donde ocurre la magia, nos inspiramos en ti y tu estilo de vida. Estamos completamente dedicados a la confección para ofercer estilos vanguardistas.
          </p>
          <p className="max-w-7xl mx-auto text-justify mt-4">
            Te brindamos asesoría online y comercializamos nuestros prendas de forma digital, visita en nuestro Instagram <b><a href="https://www.instagram.com/ness7_3" target="_blank" rel="noopener noreferrer"><i>@ness7_3.</i></a></b>
          </p>
        </div>
      </section>

      <section id="value-proposition" className="section bg-[#ff3a9c52] w-full text-[#352b4d] text-justify leading-relaxed text-2xl py-8">
        <h2 className="text-5xl font-bold mb-4">Propuesta de Valor</h2>
        <div class="flex justify-center items-center">
      <img src="https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/pro-valor.jpg?alt=media&token=e1817f89-17d7-402c-a02f-aa70e234042a" alt="Imagen centrada" className='h-50 center-img' />

    </div>
      </section>

      <Products />
      <Contact />
    </>
  );
}
