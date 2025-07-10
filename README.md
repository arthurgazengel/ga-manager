<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Gazengel - Freelance Marketing Digital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Custom animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 1s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        /* Project card hover effect */
        .project-card {
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* Smooth scroll */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="font-sans bg-gray-50 text-gray-800">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="text-xl font-semibold text-indigo-600">Arthur Gazengel</a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#about" class="text-gray-600 hover:text-indigo-600 transition">À propos</a>
                    <a href="#services" class="text-gray-600 hover:text-indigo-600 transition">Services</a>
                    <a href="#projects" class="text-gray-600 hover:text-indigo-600 transition">Réalisations</a>
                    <a href="#contact" class="text-gray-600 hover:text-indigo-600 transition">Contact</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="menu-toggle" class="text-gray-600 hover:text-indigo-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white pb-4 px-4">
            <a href="#about" class="block py-2 text-gray-600 hover:text-indigo-600 transition">À propos</a>
            <a href="#services" class="block py-2 text-gray-600 hover:text-indigo-600 transition">Services</a>
            <a href="#projects" class="block py-2 text-gray-600 hover:text-indigo-600 transition">Réalisations</a>
            <a href="#contact" class="block py-2 text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 delay-1">Boostez votre visibilité en ligne</h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto delay-2">Solutions marketing digital sur mesure pour artisans et commerçants</p>
            <a href="#contact" class="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition delay-3 inline-block">Discutons de votre projet</a>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/3 mb-8 md:mb-0 md:pr-8 fade-in">
                    <div class="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                        <!-- Placeholder for profile image -->
                        <div class="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                            <i class="fas fa-user-tie text-6xl text-indigo-500"></i>
                        </div>
                    </div>
                </div>
                <div class="md:w-2/3 fade-in delay-1">
                    <h2 class="text-3xl font-bold mb-6 text-gray-800">À propos de moi</h2>
                    <p class="text-lg mb-6 text-gray-600">
                        Je m'appelle Arthur Gazengel, freelance en marketing digital. J'aide les artisans et commerçants à améliorer leur visibilité en ligne grâce à des solutions simples, efficaces et adaptées.
                    </p>
                    <p class="text-lg mb-6 text-gray-600">
                        Diplômé en stratégie digitale, j'ai plus de 5 ans d'expérience dans la communication et l'acquisition client. Mon approche combine expertise technique et compréhension des enjeux business des petites entreprises.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.malt.fr/profile/arthurgazengel" target="_blank" class="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition flex items-center">
                            <i class="fab fa-malt mr-2"></i> Mon Malt
                        </a>
                        <a href="https://www.linkedin.com/in/arthurgazengel" target="_blank" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center">
                            <i class="fab fa-linkedin-in mr-2"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-3xl font-bold mb-4 text-gray-800">Mes services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Des solutions adaptées pour développer votre présence digitale</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition fade-in delay-1">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-chart-line text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Stratégie digitale</h3>
                    <p class="text-gray-600">
                        Audit de votre présence en ligne et définition d'une stratégie marketing cohérente avec vos objectifs business.
                    </p>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition fade-in delay-2">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-ad text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Publicité en ligne</h3>
                    <p class="text-gray-600">
                        Campagnes Google Ads et réseaux sociaux performantes pour générer des leads qualifiés.
                    </p>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition fade-in delay-3">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-search text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Référencement SEO</h3>
                    <p class="text-gray-600">
                        Optimisation de votre site pour améliorer votre positionnement dans les résultats de recherche.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-3xl font-bold mb-4 text-gray-800">Mes réalisations</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez quelques-uns de mes projets récents</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Project 1 -->
                <div class="project-card bg-gray-50 rounded-xl overflow-hidden fade-in delay-1">
                    <div class="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                        <i class="fas fa-store text-6xl text-white opacity-80"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Boutique de bijoux artisanaux</h3>
                        <p class="text-gray-600 mb-4">Stratégie digitale et campagne Facebook Ads</p>
                        <button onclick="toggleProject('project1')" class="text-indigo-600 font-medium flex items-center">
                            Voir plus <i class="fas fa-chevron-down ml-2"></i>
                        </button>
                        <div id="project1" class="hidden mt-4 pt-4 border-t border-gray-200">
                            <p class="text-gray-600">
                                Accompagnement d'une créatrice de bijoux pour développer ses ventes en ligne. Mise en place d'une stratégie de contenu et campagne Facebook Ads ciblant les amatrices de bijoux uniques. Résultat : +150% de trafic sur le site et augmentation de 80% des ventes en ligne.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="project-card bg-gray-50 rounded-xl overflow-hidden fade-in delay-2">
                    <div class="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                        <i class="fas fa-utensils text-6xl text-white opacity-80"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Restaurant traditionnel</h3>
                        <p class="text-gray-600 mb-4">Refonte site web et référencement local</p>
                        <button onclick="toggleProject('project2')" class="text-indigo-600 font-medium flex items-center">
                            Voir plus <i class="fas fa-chevron-down ml-2"></i>
                        </button>
                        <div id="project2" class="hidden mt-4 pt-4 border-t border-gray-200">
                            <p class="text-gray-600">
                                Création d'un site web moderne et responsive pour un restaurant familial. Optimisation du référencement local (Google My Business) et mise en place d'une stratégie de réservation en ligne. Résultat : augmentation de 40% des réservations en ligne et meilleure visibilité dans les recherches locales.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="project-card bg-gray-50 rounded-xl overflow-hidden fade-in delay-3">
                    <div class="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                        <i class="fas fa-tools text-6xl text-white opacity-80"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Artisan électricien</h3>
                        <p class="text-gray-600 mb-4">Stratégie de génération de leads</p>
                        <button onclick="toggleProject('project3')" class="text-indigo-600 font-medium flex items-center">
                            Voir plus <i class="fas fa-chevron-down ml-2"></i>
                        </button>
                        <div id="project3" class="hidden mt-4 pt-4 border-t border-gray-200">
                            <p class="text-gray-600">
                                Développement d'une stratégie digitale pour un électricien indépendant. Création d'une landing page optimisée et campagne Google Ads ciblant les recherches locales. Résultat : génération de 15-20 leads qualifiés par mois avec un taux de conversion de 25%.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Project 4 -->
                <div class="project-card bg-gray-50 rounded-xl overflow-hidden fade-in delay-1">
                    <div class="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                        <i class="fas fa-spa text-6xl text-white opacity-80"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Institut de beauté</h3>
                        <p class="text-gray-600 mb-4">Gestion complète des réseaux sociaux</p>
                        <button onclick="toggleProject('project4')" class="text-indigo-600 font-medium flex items-center">
                            Voir plus <i class="fas fa-chevron-down ml-2"></i>
                        </button>
                        <div id="project4" class="hidden mt-4 pt-4 border-t border-gray-200">
                            <p class="text-gray-600">
                                Prise en charge complète de la présence sur Instagram et Facebook pour un institut de beauté. Création de contenu, planning éditorial, community management et publicité sociale. Résultat : +300% d'engagement et augmentation de 35% des prises de rendez-vous en ligne.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-indigo-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold mb-4">Contactez-moi</h2>
                <p class="text-xl opacity-90 max-w-3xl mx-auto">Prêt à développer votre activité en ligne ? Parlons de votre projet.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div class="fade-in delay-1">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block mb-2">Votre nom</label>
                            <input type="text" id="name" class="w-full px-4 py-3 rounded-lg bg-indigo-700 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-indigo-300" placeholder="Votre nom">
                        </div>
                        
                        <div>
                            <label for="email" class="block mb-2">Votre email</label>
                            <input type="email" id="email" class="w-full px-4 py-3 rounded-lg bg-indigo-700 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-indigo-300" placeholder="votre@email.com">
                        </div>
                        
                        <div>
                            <label for="message" class="block mb-2">Votre message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 rounded-lg bg-indigo-700 border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-indigo-300" placeholder="Décrivez votre projet..."></textarea>
                        </div>
                        
                        <button type="submit" class="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition w-full md:w-auto">
                            Envoyer le message
                        </button>
                    </form>
                </div>
                
                <div class="fade-in delay-2">
                    <div class="bg-indigo-700 p-8 rounded-xl h-full">
                        <h3 class="text-xl font-semibold mb-6">Autres moyens de contact</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="text-indigo-300 mr-4 mt-1">
                                    <i class="fas fa-envelope text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Email</h4>
                                    <p class="opacity-90">contact@arthurgazengel.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="text-indigo-300 mr-4 mt-1">
                                    <i class="fas fa-phone-alt text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Téléphone</h4>
                                    <p class="opacity-90">+33 6 12 34 56 78</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="text-indigo-300 mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium mb-1">Localisation</h4>
                                    <p class="opacity-90">Paris, France</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-10 pt-6 border-t border-indigo-600">
                            <h4 class="font-medium mb-4">Retrouvez-moi sur :</h4>
                            <div class="flex space-x-4">
                                <a href="https://www.malt.fr/profile/arthurgazengel" target="_blank" class="bg-indigo-800 text-white p-3 rounded-full hover:bg-indigo-900 transition">
                                    <i class="fab fa-malt text-xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arthurgazengel" target="_blank" class="bg-indigo-800 text-white p-3 rounded-full hover:bg-indigo-900 transition">
                                    <i class="fab fa-linkedin-in text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <h3 class="text-xl font-semibold mb-4">Arthur Gazengel</h3>
                    <p class="text-gray-400">
                        Freelance en marketing digital, j'accompagne les artisans et commerçants dans leur développement en ligne avec des solutions sur mesure.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-lg font-medium mb-4">Liens rapides</h4>
                    <ul class="space-y-2">
                        <li><a href="#about" class="text-gray-400 hover:text-white transition">À propos</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition">Services</a></li>
                        <li><a href="#projects" class="text-gray-400 hover:text-white transition">Réalisations</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-medium mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-2"></i> contact@arthurgazengel.com
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt mr-2"></i> +33 6 12 34 56 78
                        </li>
                    </ul>
                    
                    <div class="mt-4 flex space-x-4">
                        <a href="https://www.malt.fr/profile/arthurgazengel" target="_blank" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-malt text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arthurgazengel" target="_blank" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                <p>&copy; 2023 Arthur Gazengel - Tous droits réservés</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Toggle project details
        function toggleProject(id) {
            const project = document.getElementById(id);
            project.classList.toggle('hidden');
            
            // Change icon
            const button = project.previousElementSibling;
            const icon = button.querySelector('i');
            if (project.classList.contains('hidden')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        }
        
        // Add fade-in effect when elements come into view
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    </script>
</body>
</html>
