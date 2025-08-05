<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freelance Marketing Digital | Votre Nom</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .hero-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .stats-item {
            transition: all 0.3s ease;
        }
        .stats-item:hover {
            background-color: rgba(255, 255, 255, 0.1);
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
            background-color: white;
            transition: width 0.3s ease;
        }
        .nav-link:hover:after {
            width: 100%;
        }
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    </style>
</head>
<body class="font-sans antialiased text-gray-800">
    <!-- Navigation -->
    <nav class="bg-indigo-900 text-white shadow-lg fixed w-full z-10">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <i class="fas fa-chart-line text-2xl text-indigo-300"></i>
                <span class="font-bold text-xl">VotreNom</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
                <a href="#home" class="nav-link">Accueil</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#portfolio" class="nav-link">Réalisations</a>
                <a href="#stats" class="nav-link">Performances</a>
                <a href="#contact" class="nav-link">Contact</a>
                <a href="#cv" class="bg-white text-indigo-900 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition duration-300">Télécharger CV</a>
            </div>
            <button class="md:hidden focus:outline-none" id="menu-btn">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
        <!-- Mobile menu -->
        <div class="md:hidden hidden bg-indigo-800 w-full px-6 py-4" id="mobile-menu">
            <div class="flex flex-col space-y-4">
                <a href="#home" class="block hover:text-indigo-200">Accueil</a>
                <a href="#services" class="block hover:text-indigo-200">Services</a>
                <a href="#portfolio" class="block hover:text-indigo-200">Réalisations</a>
                <a href="#stats" class="block hover:text-indigo-200">Performances</a>
                <a href="#contact" class="block hover:text-indigo-200">Contact</a>
                <a href="#cv" class="block bg-white text-indigo-900 px-4 py-2 rounded-md font-medium text-center">Télécharger CV</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-gradient text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">Boostez votre présence digitale</h1>
                <p class="text-xl md:text-2xl mb-8 opacity-90">Stratégies marketing sur mesure pour propulser votre business en ligne.</p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#contact" class="bg-white text-indigo-900 px-6 py-3 rounded-md font-bold text-center hover:bg-indigo-100 transition duration-300">Discutons de votre projet</a>
                    <a href="#services" class="border-2 border-white px-6 py-3 rounded-md font-bold text-center hover:bg-white hover:text-indigo-900 transition duration-300">Voir mes services</a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Marketing Digital" class="rounded-lg shadow-2xl w-full max-w-md animate-float">
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
                <div class="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="max-w-2xl mx-auto text-lg text-gray-600">Des solutions digitales complètes pour répondre à tous vos besoins marketing.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-bullseye text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Stratégie Marketing</h3>
                    <p class="text-gray-600 mb-4">Élaboration d'une stratégie digitale sur mesure pour atteindre vos objectifs business.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Audit complet</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Plan d'action détaillé</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> KPI de performance</li>
                    </ul>
                </div>
                
                <!-- Service 2 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-ad text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Publicité en Ligne</h3>
                    <p class="text-gray-600 mb-4">Campagnes publicitaires performantes sur Google Ads, Facebook Ads et réseaux sociaux.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Ciblage précis</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Optimisation continue</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> ROI maximisé</li>
                    </ul>
                </div>
                
                <!-- Service 3 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-search-dollar text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">SEO & Content</h3>
                    <p class="text-gray-600 mb-4">Optimisation pour les moteurs de recherche et création de contenu engageant.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Recherche de mots-clés</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Stratégie éditoriale</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Netlinking</li>
                    </ul>
                </div>
                
                <!-- Service 4 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-chart-pie text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Analyse & Reporting</h3>
                    <p class="text-gray-600 mb-4">Suivi précis des performances et recommandations d'optimisation.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Tableaux de bord</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Analyses approfondies</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Rapports mensuels</li>
                    </ul>
                </div>
                
                <!-- Service 5 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-envelope-open-text text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Email Marketing</h3>
                    <p class="text-gray-600 mb-4">Campagnes emailing performantes pour fidéliser et convertir vos clients.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Automatisation</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Personnalisation</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> A/B Testing</li>
                    </ul>
                </div>
                
                <!-- Service 6 -->
                <div class="bg-white p-8 rounded-lg shadow-md card-hover transition duration-300">
                    <div class="text-indigo-600 mb-4">
                        <i class="fas fa-users text-4xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Réseaux Sociaux</h3>
                    <p class="text-gray-600 mb-4">Gestion et animation de vos communautés sur les principales plateformes sociales.</p>
                    <ul class="space-y-2 text-gray-600">
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Stratégie de contenu</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Community management</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Publicités sociales</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-16">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Mes Réalisations</h2>
                <div class="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="max-w-2xl mx-auto text-lg text-gray-600">Découvrez quelques-uns de mes projets récents et les résultats obtenus.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-lg card-hover transition duration-300">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80" alt="Projet E-commerce" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Boutique E-commerce</h3>
                        <p class="text-gray-600 mb-4">Stratégie marketing complète pour une boutique en ligne de produits artisanaux.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SEO</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Facebook Ads</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Email Marketing</span>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-medium">Augmentation du CA:</span>
                                <span class="font-bold text-green-600">+320%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-medium">ROI publicitaire:</span>
                                <span class="font-bold text-green-600">5.8x</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-lg card-hover transition duration-300">
                    <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80" alt="Projet SaaS" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Application SaaS B2B</h3>
                        <p class="text-gray-600 mb-4">Campagne de lead generation pour une solution logicielle professionnelle.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">LinkedIn Ads</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Content Marketing</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Webinars</span>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-medium">Leads générés:</span>
                                <span class="font-bold text-green-600">1,250+</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-medium">Coût par lead:</span>
                                <span class="font-bold text-green-600">€18.50</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="bg-white rounded-lg overflow-hidden shadow-lg card-hover transition duration-300">
                    <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Projet Restaurant" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Restaurant Gastronomique</h3>
                        <p class="text-gray-600 mb-4">Stratégie digitale pour augmenter la notoriété et les réservations en ligne.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Instagram</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Google My Business</span>
                            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Influenceurs</span>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-lg">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-medium">Réservations en ligne:</span>
                                <span class="font-bold text-green-600">+175%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-medium">Engagement Instagram:</span>
                                <span class="font-bold text-green-600">+420%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <a href="#" class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-bold hover:bg-indigo-700 transition duration-300">
                    Voir plus de réalisations <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="py-16 bg-indigo-900 text-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Mes Performances</h2>
                <div class="w-20 h-1 bg-white mx-auto mb-6"></div>
                <p class="max-w-2xl mx-auto text-lg text-indigo-200">Des résultats concrets pour mes clients grâce à des stratégies data-driven.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Stat 1 -->
                <div class="bg-indigo-800 p-8 rounded-lg text-center stats-item">
                    <div class="text-5xl font-bold mb-2">150+</div>
                    <div class="text-xl font-medium">Projets réalisés</div>
                    <div class="mt-4 text-indigo-300">
                        <i class="fas fa-check-circle text-2xl"></i>
                    </div>
                </div>
                
                <!-- Stat 2 -->
                <div class="bg-indigo-800 p-8 rounded-lg text-center stats-item">
                    <div class="text-5xl font-bold mb-2">12M€</div>
                    <div class="text-xl font-medium">CA généré</div>
                    <div class="mt-4 text-indigo-300">
                        <i class="fas fa-euro-sign text-2xl"></i>
                    </div>
                </div>
                
                <!-- Stat 3 -->
                <div class="bg-indigo-800 p-8 rounded-lg text-center stats-item">
                    <div class="text-5xl font-bold mb-2">5.2x</div>
                    <div class="text-xl font-medium">ROI moyen</div>
                    <div class="mt-4 text-indigo-300">
                        <i class="fas fa-chart-line text-2xl"></i>
                    </div>
                </div>
                
                <!-- Stat 4 -->
                <div class="bg-indigo-800 p-8 rounded-lg text-center stats-item">
                    <div class="text-5xl font-bold mb-2">98%</div>
                    <div class="text-xl font-medium">Clients satisfaits</div>
                    <div class="mt-4 text-indigo-300">
                        <i class="fas fa-smile text-2xl"></i>
                    </div>
                </div>
            </div>
            
            <div class="mt-16 bg-white bg-opacity-10 rounded-xl p-8">
                <h3 class="text-2xl font-bold mb-6 text-center">Témoignages clients</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="bg-indigo-800 p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                                <i class="fas fa-user text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <div class="font-bold">Marie D.</div>
                                <div class="text-indigo-300">Directrice Marketing</div>
                            </div>
                        </div>
                        <p class="text-indigo-100 italic">"Grâce à la stratégie digitale mise en place, nous avons multiplié notre trafic par 5 en seulement 6 mois. Un professionnel à l'écoute et très réactif."</p>
                        <div class="mt-4 text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    
                    <!-- Testimonial 2 -->
                    <div class="bg-indigo-800 p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                                <i class="fas fa-user text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <div class="font-bold">Thomas L.</div>
                                <div class="text-indigo-300">CEO Startup</div>
                            </div>
                        </div>
                        <p class="text-indigo-100 italic">"Notre campagne Facebook Ads a été optimisée avec une précision remarquable. Résultat: un coût d'acquisition divisé par 3 tout en augmentant le volume de ventes."</p>
                        <div class="mt-4 text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CV Download Section -->
    <section id="cv" class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/2 bg-indigo-600 text-white p-8 md:p-12 flex flex-col justify-center">
                        <h2 class="text-3xl font-bold mb-4">Mon Curriculum Vitae</h2>
                        <p class="mb-6 text-indigo-100">Téléchargez mon CV complet pour découvrir mon parcours, mes compétences et mes certifications en marketing digital.</p>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-center">
                                <i class="fas fa-graduation-cap mr-3 text-xl"></i>
                                <span>Master en Marketing Digital - Paris Dauphine</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-certificate mr-3 text-xl"></i>
                                <span>Certifications Google Ads, Facebook Blueprint, HubSpot</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-briefcase mr-3 text-xl"></i>
                                <span>8 ans d'expérience en agence et freelance</span>
                            </div>
                        </div>
                        <button id="download-btn" class="bg-white text-indigo-900 px-6 py-3 rounded-md font-bold hover:bg-indigo-100 transition duration-300 w-full md:w-auto">
                            <i class="fas fa-download mr-2"></i> Télécharger mon CV
                        </button>
                    </div>
                    <div class="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CV" class="w-full max-w-xs rounded-lg shadow-xl">
                            <div class="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                                <i class="fas fa-file-pdf text-4xl text-red-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
                <div class="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
                <p class="max-w-2xl mx-auto text-lg text-gray-600">Prêt à booster votre présence digitale? Discutons de votre projet.</p>
            </div>
            
            <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/2 p-8 md:p-12 bg-gray-50">
                        <h3 class="text-2xl font-bold mb-6">Informations de contact</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-envelope text-indigo-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Email</h4>
                                    <p class="text-gray-600">contact@votrenom.com</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-phone-alt text-indigo-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Téléphone</h4>
                                    <p class="text-gray-600">+33 6 12 34 56 78</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-indigo-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-map-marker-alt text-indigo-600"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Localisation</h4>
                                    <p class="text-gray-600">Paris, France</p>
                                    <p class="text-gray-600">Disponible pour des missions en remote</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="font-bold mb-4">Suivez-moi</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="bg-indigo-100 text-indigo-600 p-3 rounded-full hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="bg-indigo-100 text-indigo-600 p-3 rounded-full hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="bg-indigo-100 text-indigo-600 p-3 rounded-full hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="bg-indigo-100 text-indigo-600 p-3 rounded-full hover:bg-indigo-200 transition duration-300">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 p-8 md:p-12">
                        <h3 class="text-2xl font-bold mb-6">Envoyez un message</h3>
                        <form id="contact-form" class="space-y-4">
                            <div>
                                <label for="name" class="block font-medium mb-1">Nom complet</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label for="email" class="block font-medium mb-1">Email</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label for="subject" class="block font-medium mb-1">Sujet</label>
                                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            </div>
                            <div>
                                <label for="message" class="block font-medium mb-1">Message</label>
                                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                            </div>
                            <button type="submit" class="bg-indigo-600 text-white px-6 py-3 rounded-md font-bold hover:bg-indigo-700 transition duration-300 w-full">
                                Envoyer le message <i class="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-chart-line text-2xl text-indigo-400"></i>
                        <span class="font-bold text-xl">VotreNom</span>
                    </div>
                    <p class="text-gray-400">Expert en marketing digital freelance. Stratégies sur mesure pour booster votre business en ligne.</p>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-4">Services</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition duration-300">Stratégie Marketing</a></li>
                        <li><a href="#" class="hover:text-white transition duration-300">Publicité en Ligne</a></li>
                        <li><a href="#" class="hover:text-white transition duration-300">SEO & Content</a></li>
                        <li><a href="#" class="hover:text-white transition duration-300">Réseaux Sociaux</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-4">Liens utiles</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#home" class="hover:text-white transition duration-300">Accueil</a></li>
                        <li><a href="#services" class="hover:text-white transition duration-300">Services</a></li>
                        <li><a href="#portfolio" class="hover:text-white transition duration-300">Réalisations</a></li>
                        <li><a href="#contact" class="hover:text-white transition duration-300">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-4">Newsletter</h4>
                    <p class="text-gray-400 mb-4">Abonnez-vous pour recevoir des conseils marketing exclusifs.</p>
                    <form class="flex">
                        <input type="email" placeholder="Votre email" class="px-4 py-2 rounded-l-md focus:outline-none text-gray-900 w-full">
                        <button type="submit" class="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 VotreNom. Tous droits réservés.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Download CV button
        const downloadBtn = document.getElementById('download-btn');
        downloadBtn.addEventListener('click', () => {
            // In a real scenario, this would link to your actual CV file
            alert('Téléchargement du CV en cours...');
            // window.location.href = 'path-to-your-cv.pdf';
        });

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert(`Merci ${name}, votre message a été envoyé avec succès! Je vous répondrai dès que possible.`);
            
            // Reset form
            contactForm.reset();
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card-hover, .stats-item');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.card-hover, .stats-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
        });

        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    </script>
</body>
</html>
