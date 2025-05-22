<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GA Manager - Marketing Digital pour Artisans & Commerçants</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Montserrat', sans-serif;
            scroll-behavior: smooth;
        }
        
        .hero {
            background: linear-gradient(135deg, rgba(224, 242, 254, 0.8) 0%, rgba(224, 242, 254, 0.4) 100%), url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: scale(1.03);
        }
    </style>
</head>
<body class="bg-white text-gray-800">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white shadow-sm">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-blue-500">GA Manager</div>
                <nav class="hidden md:flex space-x-8">
                    <a href="#services" class="text-gray-700 hover:text-blue-500 transition">Services</a>
                    <a href="#realisations" class="text-gray-700 hover:text-blue-500 transition">Réalisations</a>
                    <a href="#contact" class="text-gray-700 hover:text-blue-500 transition">Contact</a>
                </nav>
                <button class="md:hidden focus:outline-none">
                    <i class="fas fa-bars text-xl text-blue-500"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero min-h-screen flex items-center justify-center text-center px-4">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Le marketing digital pensé pour les artisans & commerçants</h1>
            <p class="text-xl text-gray-700 mb-8">Nous accompagnons les indépendants dans leur transformation digitale avec des solutions sur mesure et accessibles.</p>
            <a href="#contact" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-block">Discutons de votre projet</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-blue-50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-16">Nos Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <!-- Service 1 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                    <div class="text-blue-500 text-4xl mb-4">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Communication</h3>
                    <p class="text-gray-600 mb-4">Créez une identité visuelle forte et une présence cohérente sur les réseaux sociaux.</p>
                    <ul class="text-gray-600 space-y-2">
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Identité visuelle</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Stratégie réseaux sociaux</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Création de contenu</li>
                    </ul>
                </div>
                
                <!-- Service 2 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                    <div class="text-blue-500 text-4xl mb-4">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Acquisition client</h3>
                    <p class="text-gray-600 mb-4">Développez votre visibilité en ligne et attirez de nouveaux clients.</p>
                    <ul class="text-gray-600 space-y-2">
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Site vitrine professionnel</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Référencement local</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Campagnes publicitaires</li>
                    </ul>
                </div>
                
                <!-- Service 3 -->
                <div class="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
                    <div class="text-blue-500 text-4xl mb-4">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Avis & Emailings</h3>
                    <p class="text-gray-600 mb-4">Améliorez votre e-réputation et fidélisez vos clients par email.</p>
                    <ul class="text-gray-600 space-y-2">
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Gestion des avis en ligne</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Campagnes emailing</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i> Automatisation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Réalisations Section -->
    <section id="realisations" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-16">Nos Réalisations</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <!-- Projet 1 -->
                <div class="project-card bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="Site vitrine GA Manager" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Site vitrine GA Manager</h3>
                        <p class="text-gray-600 mb-4">Création d'un site vitrine moderne et responsive pour un artisan ébéniste.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Site Web</span>
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">SEO</span>
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Design</span>
                        </div>
                    </div>
                </div>
                
                <!-- Projet 2 -->
                <div class="project-card bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Emailing pour Jardins Loisirs" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Emailing pour Jardins Loisirs</h3>
                        <p class="text-gray-600 mb-4">Campagne d'emailing automatisée pour une jardinerie locale.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Emailing</span>
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Automatisation</span>
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-blue-50">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Contactez-nous</h2>
                <p class="text-xl text-center text-gray-600 mb-12">Prêt à développer votre activité ? Parlons-en !</p>
                
                <form class="bg-white rounded-lg shadow-lg p-8" netlify>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="name" class="block text-gray-700 mb-2">Votre nom</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        </div>
                        <div>
                            <label for="email" class="block text-gray-700 mb-2">Votre email</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 mb-2">Votre message</label>
                        <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition duration-300">Envoyer le message</button>
                </form>
                
                <div class="mt-12 text-center">
                    <p class="text-gray-600 mb-4">Vous pouvez aussi nous contacter directement :</p>
                    <div class="flex justify-center space-x-6">
                        <a href="mailto:contact@gamanager.fr" class="text-blue-500 hover:text-blue-700 transition">
                            <i class="fas fa-envelope text-2xl"></i>
                        </a>
                        <a href="tel:+33612345678" class="text-blue-500 hover:text-blue-700 transition">
                            <i class="fas fa-phone text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white py-8">
        <div class="container mx-auto px-6 text-center">
            <p>© 2025 GA Manager – Tous droits réservés.</p>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.querySelector('button').addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-16');
            nav.classList.toggle('right-6');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-4');
            nav.classList.toggle('rounded-lg');
            nav.classList.toggle('shadow-lg');
            nav.classList.toggle('space-y-4');
            nav.classList.toggle('space-x-0');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('nav');
                if (!nav.classList.contains('hidden')) {
                    nav.classList.add('hidden');
                    nav.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'right-6', 'bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'space-y-4', 'space-x-0');
                }
            });
        });
    </script>
</body>
</html>
