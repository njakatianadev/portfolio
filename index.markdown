---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Accueil
---

<section id="about" class="text-gray-800 pt-26 px-6">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
    <div class="flex flex-col items-center md:items-start mx-auto">
      <img src="{{ '/images/moi.jpg' | relative_url }}" alt="Photo de profil"
           class="w-40 h-40 rounded-full object-cover -mb-16 border-4 border-[#7f00ff] mx-auto relative z-10" />
      <div class="bg-gradient-to-r from-[#7f00ff] to-[#a855f7] p-7 pt-16 rounded-xl text-white mt-2 backdrop-blur-md bg-opacity-80">
        <h3 class="text-lg font-semibold text-center md:text-left">
          Solofo Njakatiana ANDRIAMBOLOLOMAHEFA
        </h3>
        <p class="text-sm text-center md:text-left text-violet-100 mt-1">Antananarivo, Madagascar</p>
        <div class="flex justify-center md:justify-start space-x-4 mt-2 text-white">
          <a href="https://web.facebook.com/solofonjakatiana.andriambololomahefa.7/" aria-label="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/in/solofo-njakatiana-andriambololomahefa-b633911a3/" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://web.facebook.com/solofonjakatiana.andriambololomahefa.7/" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-[10px] p-8">
      <h2 class="text-3xl md:text-4xl font-bold text-[#7f00ff] mb-6">À propos de moi</h2>
      <p class="text-lg mb-4 leading-relaxed">
        Je suis un développeur web full-stack spécialisé Symfony. Je crée des sites performants, élégants et bien structurés,
        avec une forte attention à l'expérience utilisateur, au responsive et à l’accessibilité.
      </p>
      <p class="text-lg mb-6">
        Mon portfolio, conçu avec Jekyll et Tailwind CSS, démontre ma capacité à intégrer des interfaces modernes, rapides et propres.
      </p>
      <h3 class="text-xl font-semibold mb-3 text-[#7f00ff]">Compétences techniques</h3>
      <div class="flex flex-wrap gap-2 mb-6 text-sm">
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Symfony</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">PHP</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Tailwind CSS</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Vue.js</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">JSX</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Bootstrap</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">MySQL</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Git</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Figma</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Photoshop</span>
        <span class="border border-[#7f00ff] text-[#7f00ff] px-3 py-1 rounded-full">Illustrator</span>
      </div>
      <div class="flex space-x-4">
        <a href="#contact"
           class="bg-[#7f00ff] text-white px-5 py-2 rounded-full hover:bg-[#6b21a8] transition">
          Recrutez-moi
        </a>
        <a 
          href="{{ '/assets/CV_Andriambololomahefa_Solofo_Njakatiana.pdf' | relative_url }}"
          download
          class="border border-[#7f00ff] text-[#7f00ff] bg-[#B088FF]/40 px-5 py-2 rounded-full transition">
          Téléchargez mon CV
        </a>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="pt-26 text-gray-900">
  <div class="max-w-7xl mx-auto px-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
    <h2 class="text-3xl font-bold text-center text-[#7f00ff] mb-12">Mes Projets</h2>
    <div class="spr-container relative overflow-visible">
      <div class="swiper relative">
        <div class="swiper-wrapper">
          <div class="swiper-slide h-full flex flex-col justify-between bg-white rounded-xl shadow-lg border border-[#d8b4fe] overflow-hidden p-4 min-h-[380px]">
            <img src="{{ '/images/portfolio.png' | relative_url }}" alt="Portfolio Symfony" class="h-40 w-full object-cover object-top rounded" />
            <div class="flex flex-col flex-grow justify-between mt-4">
              <div>
                <h3 class="font-bold text-lg text-[#7f00ff]">Portfolio</h3>
                <p class="text-sm text-gray-700 mt-1">Portfolio personnel développé en Jekyll et Tailwind CSS.</p>
              </div>
              <div class="mt-3">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-[#7f00ff] text-white px-2 py-1 rounded text-xs">Jekyll</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">Tailwind</span>
                </div>
                <div class="flex gap-2">
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-[#7f00ff] text-[#7f00ff] rounded hover:bg-[#7f00ff] hover:text-white transition text-sm">
                    🔗 Voir le site
                  </a>
                  <a href="https://github.com/ton-repo" target="_blank" class="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm">
                    <i class="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-full flex flex-col justify-between bg-white rounded-xl shadow-lg border border-[#d8b4fe] overflow-hidden p-4 min-h-[380px]">
            <img src="{{ '/images/iae.jpg' | relative_url }}" alt="Île aux enfants" class="h-40 w-full object-cover object-top rounded" />
            <div class="flex flex-col flex-grow justify-between mt-4">
              <div>
                <h3 class="font-bold text-lg text-[#7f00ff]">L'île aux enfants</h3>
                <p class="text-sm text-gray-700 mt-1">Une école associative au service des enfants</p>
              </div>
              <div class="mt-3">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-[#7f00ff] text-white px-2 py-1 rounded text-xs">Symfony/Twig</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">Vue.js</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">JSX</span>
                </div>
                <div class="flex gap-2">
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-[#7f00ff] text-[#7f00ff] rounded hover:bg-[#7f00ff] hover:text-white transition text-sm">
                    🔗 Voir le site
                  </a>
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm">
                    <i class="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-full flex flex-col justify-between bg-white rounded-xl shadow-lg border border-[#d8b4fe] overflow-hidden p-4 min-h-[380px]">
            <img src="{{ '/images/location_voiture.png' | relative_url }}" alt="Location de voiture" class="h-40 w-full object-cover object-top rounded" />
            <div class="flex flex-col flex-grow justify-between mt-4">
              <div>
                <h3 class="font-bold text-lg text-[#7f00ff]">Location de voiture</h3>
                <p class="text-sm text-gray-700 mt-1">Un site internet de location de véhicules en Suisse</p>
              </div>
              <div class="mt-3">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-[#7f00ff] text-white px-2 py-1 rounded text-xs">Symfony/Twig</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">Vue.js</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">JSX</span>
                </div>
                <div class="flex gap-2">
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm">
                    <i class="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-full flex flex-col justify-between bg-white rounded-xl shadow-lg border border-[#d8b4fe] overflow-hidden p-4 min-h-[380px]">
            <img src="{{ '/images/madakite.png' | relative_url }}" alt="Madakitecamp" class="h-40 w-full object-cover object-top rounded" />
            <div class="flex flex-col flex-grow justify-between mt-4">
              <div>
                <h3 class="font-bold text-lg text-[#7f00ff]">Madakitecamp</h3>
                <p class="text-sm text-gray-700 mt-1">Un lodge unique en bord de mer à la Baie de Sakalava</p>
              </div>
              <div class="mt-3">
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="bg-[#7f00ff] text-white px-2 py-1 rounded text-xs">Symfony</span>
                  <span class="bg-[#a855f7] text-white px-2 py-1 rounded text-xs">Twig</span>
                </div>
                <div class="flex gap-2">
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-[#7f00ff] text-[#7f00ff] rounded hover:bg-[#7f00ff] hover:text-white transition text-sm">
                    🔗 Voir le site
                  </a>
                  <a href="#" class="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition text-sm">
                    <i class="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev group absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 left-[-50px]
                  flex items-center justify-center bg-white/30 backdrop-blur-md text-purple-600 border border-purple-500
                  rounded-full hover:bg-purple-600 transition duration-300" style="left: -50px;">
        <i class="fas fa-chevron-left text-purple-600 group-hover:text-white text-sm"></i>
      </div>
      <div class="swiper-button-next group absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 right-[-50px]
                  flex items-center justify-center bg-white/30 backdrop-blur-md text-purple-600 border border-purple-500
                  rounded-full hover:bg-purple-600 transition duration-300" style="right: -50px;">
        <i class="fas fa-chevron-right text-purple-600 group-hover:text-white text-sm"></i>
      </div>
    </div>
  </div>
</section>
>

<section id="contact" class="py-26 dark:bg-black/50 backdrop-blur-sm text-gray-800 dark:text-white">
  <div class="max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-[#7f00ff]">Restons en Contact</h2>
    <p class="mt-4 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
      Vous cherchez un développeur passionné, rigoureux et motivé ? Je suis à la recherche d’une opportunité pour mettre mes compétences au service de votre entreprise. N’hésitez pas à me contacter pour en discuter.
    </p>
    <div class="mt-12 grid md:grid-cols-2 gap-10 ">
      <!-- Infos -->
      <div class="space-y-6">
        <div class="bg-white shadow-lg border border-[#d8b4fe] backdrop-blur-md p-6 rounded-xl">
          <p class="flex items-center gap-3"><i class="fas fa-phone text-[#7f00ff]"></i> +261 34 28 089 52</p>
          <p class="flex items-center gap-3 mt-2"><i class="fas fa-envelope text-[#7f00ff]"></i> andriambololomahefa@gmail.com</p>
        </div>
        <div class="text-white bg-gradient-to-r from-[#7f00ff] to-[#a855f7] backdrop-blur-md p-6 rounded-xl bg-opacity-80">
          <p class="mb-2 font-semibold">Réseaux sociaux</p>
          <div class="flex gap-4 text-white text-lg">
            <a href="https://web.facebook.com/solofonjakatiana.andriambololomahefa.7/" aria-label="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/solofo-njakatiana-andriambololomahefa-b633911a3/" aria-label="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/njakatianadev" aria-label="GitHub" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <form action="https://formspree.io/f/mjkrokla" method="POST" class="bg-white rounded-xl shadow-lg border border-[#d8b4fe] backdrop-blur-md p-6 space-y-6">
        <div>
          <label for="name" class="block text-sm font-semibold text-[#7f00ff]">Nom</label>
          <input type="text" name="name" id="name" required
            class="w-full mt-1 p-3 rounded-md bg-white/90 text-gray-800 border border-[#d8b4fe] focus:ring-[#7f00ff] focus:ring-2 outline-none" />
        </div>
        <div>
          <label for="email" class="block text-sm font-semibold text-[#7f00ff]">Email</label>
          <input type="email" name="_replyto" id="email" required
            class="w-full mt-1 p-3 rounded-md bg-white/90 text-gray-800 border border-[#d8b4fe] focus:ring-[#7f00ff] focus:ring-2 outline-none" />
        </div>
        <div>
          <label for="message" class="block text-sm font-semibold text-[#7f00ff]">Message</label>
          <textarea name="message" id="message" rows="5" required
            class="w-full mt-1 p-3 rounded-md bg-white/90 text-gray-800 border border-[#d8b4fe] focus:ring-[#7f00ff] focus:ring-2 outline-none resize-none"></textarea>
        </div>
        <button type="submit"
          class="w-full bg-[#7f00ff] hover:bg-[#a855f7] text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          Envoyer
        </button>
      </form>
    </div>
  </div>
</section>
