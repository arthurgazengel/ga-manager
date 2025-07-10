<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GA Manager - Marketing Digital Freelance</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: scale(1.02);
        }
        
        .nav-link {
            position: relative;
        }
        
        .nav-link:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #3b82f6;
            transition: width 0.3s ease;
        }
        
        .nav-link:hover:after {
            width: 100%;
        }
        
        .active-nav:after {
            width: 100%;
        }
    </style>
</head>
<body class="bg-white text-gray-800">
    <!-- Navigation -->
    <nav class="fixed w-full bg-white shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="text-xl font-semibold text-gray-900">GA Manager</a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#services" class="nav-link text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#portfolio" class="nav-link text-gray-600 hover:text-gray-900">Réalisations</a>
                    <a href="#about" class="nav-link text-gray-600 hover:text-gray-900">À propos</a>
                    <a href="#contact" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Contact</a>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="menu-btn" class="text-gray-500 hover:text-gray-900">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
                <a href="#portfolio" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Réalisations</a>
                <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">À propos</a>
                <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Optimisez votre présence digitale</h1>
                    <p class="text-xl text-gray-600 mb-8">Stratégies marketing sur mesure pour booster votre visibilité et vos conversions.</p>
                    <div class="flex space-x-4">
                        <a href="#contact" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Discutons de votre projet</a>
                        <a href="#services" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">Nos services</a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Marketing Digital" class="rounded-lg shadow-xl w-full max-w-md">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Nos services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Des solutions adaptées à vos besoins pour maximiser votre impact digital.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100 transition duration-300">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-chart-line text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Analyse & Stratégie</h3>
                    <p class="text-gray-600 mb-4">Audit complet de votre présence digitale et élaboration d'une stratégie sur mesure pour atteindre vos objectifs.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Audit analytique
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Définition KPI
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Roadmap stratégique
                        </li>
                    </ul>
                </div>
                
                <!-- Service 2 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100 transition duration-300">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-ad text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Publicité Digitale</h3>
                    <p class="text-gray-600 mb-4">Campagnes publicitaires performantes sur les principales plateformes (Google Ads, Meta, LinkedIn).</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Campagnes SEA
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Publicité sociale
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Optimisation ROI
                        </li>
                    </ul>
                </div>
                
                <!-- Service 3 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100 transition duration-300">
                    <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i class="fas fa-tools text-blue-600 text-xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Optimisation & Tracking</h3>
                    <p class="text-gray-600 mb-4">Mise en place et optimisation des outils d'analyse pour mesurer et améliorer vos performances.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Google Analytics 4
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Google Tag Manager
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                            Tableaux de bord
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez quelques-uns de nos projets récents et leurs résultats.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="project-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="h-48 bg-blue-100 flex items-center justify-center">
                        <i class="fas fa-shopping-cart text-blue-600 text-5xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">E-commerce Mode</h3>
                        <p class="text-gray-600 mb-4">Stratégie digitale complète pour une marque de prêt-à-porter.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Google Ads • Meta Ads</span>
                            <span class="text-sm font-medium text-blue-600">+45% de CA</span>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="project-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="h-48 bg-green-100 flex items-center justify-center">
                        <i class="fas fa-graduation-cap text-green-600 text-5xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Formation en ligne</h3>
                        <p class="text-gray-600 mb-4">Optimisation des campagnes pour une plateforme éducative.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">LinkedIn Ads • Analytics</span>
                            <span class="text-sm font-medium text-blue-600">-30% de CPA</span>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="project-card bg-white rounded-lg overflow-hidden shadow-md">
                    <div class="h-48 bg-purple-100 flex items-center justify-center">
                        <i class="fas fa-utensils text-purple-600 text-5xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Restaurant gastronomique</h3>
                        <p class="text-gray-600 mb-4">Stratégie digitale locale et gestion des réservations en ligne.</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">Local SEO • Google My Business</span>
                            <span class="text-sm font-medium text-blue-600">+80% réservations</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="#contact" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition inline-flex items-center">
                    Voir plus de réalisations
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:space-x-12">
                <div class="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                    <div class="w-64 h-64 rounded-full bg-gray-100 overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="GA Manager" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">À propos de GA Manager</h2>
                    <p class="text-gray-600 mb-6 text-lg">
                        Passionné par le marketing digital et l'analyse de données, j'accompagne les entreprises dans l'optimisation de leur présence en ligne depuis plus de 5 ans. Mon approche combine expertise technique et vision stratégique pour des résultats concrets et mesurables.
                    </p>
                    <p class="text-gray-600 mb-8 text-lg">
                        Formé aux dernières technologies et méthodologies, je mets mon savoir-faire au service de votre croissance, avec une attention particulière portée à vos objectifs business et à votre retour sur investissement.
                    </p>
                    
                    <div class="flex flex-wrap gap-4">
                        <a href="https://www.malt.fr/profile/gamanager" target="_blank" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition flex items-center">
                            <i class="fab fa-malt text-xl mr-2"></i>
                            Profil Malt
                        </a>
                        <a href="https://www.linkedin.com/in/gamanager" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center">
                            <i class="fab fa-linkedin-in text-xl mr-2"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Retours d'expérience de nos clients satisfaits.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Client" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Sarah L.</h4>
                            <p class="text-sm text-gray-500">Directrice Marketing</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "GA Manager a révolutionné notre approche digitale. En 3 mois, nos ventes en ligne ont augmenté de 60% grâce à une stratégie publicitaire parfaitement ciblée."
                    </p>
                    <div class="mt-4 flex">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Thomas R.</h4>
                            <p class="text-sm text-gray-500">CEO Startup Tech</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "La mise en place de Google Analytics 4 et des tableaux de bord personnalisés nous a donné une visibilité inédite sur notre audience. Un travail professionnel et pédagogique."
                    </p>
                    <div class="mt-4 flex">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Client" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900">Élodie M.</h4>
                            <p class="text-sm text-gray-500">Responsable E-commerce</p>
                        </div>
                    </div>
                    <p class="text-gray-600 italic">
                        "Un accompagnement sur mesure qui a permis d'optimiser notre budget publicitaire tout en augmentant nos conversions. Réactif et à l'écoute, je recommande vivement !"
                    </p>
                    <div class="mt-4 flex">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-blue-50 rounded-xl p-8 md:p-12">
                <div class="md:flex md:items-center md:space-x-12">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">Prêt à booster votre marketing digital ?</h2>
                        <p class="text-gray-600 mb-6 text-lg">
                            Que vous ayez un projet précis ou simplement des questions, n'hésitez pas à me contacter. Je réponds généralement sous 24h.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <i class="fas fa-envelope text-blue-600 text-xl mr-4"></i>
                                <span class="text-gray-700">contact@gamanager.com</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-phone-alt text-blue-600 text-xl mr-4"></i>
                                <span class="text-gray-700">+33 6 12 34 56 78</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-map-marker-alt text-blue-600 text-xl mr-4"></i>
                                <span class="text-gray-700">Paris, France</span>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <form class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                                <select id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="audit">Audit analytique</option>
                                    <option value="campaign">Campagne publicitaire</option>
                                    <option value="training">Formation</option>
                                    <option value="other">Autre</option>
                                </select>
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" class="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                Envoyer le message
                                <i class="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:justify-between md:items-center">
                <div class="mb-8 md:mb-0">
                    <a href="#" class="text-xl font-semibold text-white">GA Manager</a>
                    <p class="mt-2 text-gray-400">Expert en marketing digital et analyse de données.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Navigation</h3>
                        <ul class="space-y-2">
                            <li><a href="#services" class="text-gray-400 hover:text-white transition">Services</a></li>
                            <li><a href="#portfolio" class="text-gray-400 hover:text-white transition">Réalisations</a></li>
                            <li><a href="#about" class="text-gray-400 hover:text-white transition">À propos</a></li>
                            <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Services</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Analyse & Stratégie</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Publicité Digitale</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Optimisation</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Formation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Réseaux</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition">
                                <i class="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition">
                                <i class="fab fa-malt text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-800">
                <p class="text-gray-400 text-sm text-center">&copy; 2023 GA Manager. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.getElementById('mobile-menu').classList.add('hidden');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Highlight active nav link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active-nav');
                }
            });
        });

        // Simple form validation
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !subject || !message) {
                    alert('Veuillez remplir tous les champs du formulaire.');
                    return;
                }
                
                // Here you would typically send the form data to a server
                alert('Merci pour votre message ! Je vous répondrai dès que possible.');
                contactForm.reset();
            });
        }
    </script>
</body>
</html>
