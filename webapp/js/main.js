// Team members data
const teamMembers = [
    {
        name: "Kimon Taliadoros",
        role: "Founder",
        image: "assets/Kimon.png",
        bio: "With a passion for Australian multicultural success, Kimon leads GameChanger APAC in leveraging world-class sport and educational programs.",
        fullBio: `Kimon has occupied leadership roles throughout his life, most recently as Founder of GameChanger APAC, with a mission of sharing Australian sports education with our Asia Pacific friends. Kimon served as Chairman and CEO of Football Victoria, Co-founder of the Professional Footballers Australia and a Socceroo, as well as a coach, commentator and analyst.

Kimon also brings a wealth of experience from a diverse career background in non-football sectors, spanning tenures as an executive, director and consultant. Kimon has been a strong advocate for the role of education in sport, having himself obtained an MBA (UNSW), Bachelor of Business (RMIT) and Graduate Certificate of the Australian Institute of Company Directors (AICD), amongst other post-graduate qualifications. The PFA acknowledges this awarding the annual Kimon Taliadoros Education Grant to aspirational young players committed to their education.`
    },
    {
        name: "Judd Dileshwar",
        role: "Co-Founder",
        image: "assets/Judd.png",
        bio: "Bringing extensive experience in sports management and education, Judd helps shape the future of sports education in the APAC region.",
        fullBio: `Judd is qualified Accountant, experienced businessman, serial entrepreneur, educationist and business advisor. He has over 30 years local and international experience in Education and Training, Finance, Accounting, Tax, Auditing, Management, Business Advisory / Solutions, Mergers & Acquisitions.

Judd has owned and developed a portfolio of successful businesses in the field of Training and Education, Accounting, Hospitality and Food Manufacturing, along with over three decades of leadership and involvement in community-based programs.

Judd has a deep interest in sports, social and educational development and is now part of a leading team establishing these opportunities throughout the Asia Pacific region, which will enable him to involve his robust local and international network of colleagues and professionals.`
    },
    {
        name: "Raul V Hernandez",
        role: "Co-Founder",
        image: "assets/Raul.png",
        bio: "With a focus on international partnerships, Raul drives the expansion of GameChanger APAC's global network.",
        fullBio: `Raul V Hernandez has dedicated his career in Vocational Education. He has been CEO of various Vocation Education Providers in Australia referred to as RTO (Registered Training Organisations) for more than a decade. His advocacy is to promote the importance of Vocational Education specially in the Asia Pacific region.

He is also the Founder of Philippine Australian Committee on Education (PACE) as an informal platform of discussion between academes of the two countries, both in Higher Education and Vocational Education and Training. He also served as the Honorary Consul General of the Philippines to Victoria, Australia for six years.`
    },
    {
        name: "Guy Bracher",
        role: "Co-Founder",
        image: "assets/Guy.png",
        bio: "Guy is an experienced executive, corporate adviser, trainer and CFO with over 40 years' experience.",
        fullBio: `Guy specialises in Technology Commercialisation. He is an experienced executive, corporate adviser, trainer and CFO with over 40 years' experience. He has a proven track record in working with seed, start-ups and small and medium sized businesses, both as a consultant, corporate finance adviser and as a Virtual Chief Financial Officer.

Beginning with his service with the VECCI Business Angels Service, Guy has also had a significant involvement in high growth technology companies and had success in developing strategy, business development, capital raising/funding, as well as mentoring/coaching.

Guy has worked for the Australian Sports Technologies Network assisting and training sportstech startups and scale ups and has a strong network in the sports technology and business community.

Guy holds a Diploma of Business, Graduate Diploma of Law, and is a Fellow of Chartered Accountants Australia and New Zealand. He also completed the Venture Capital Executive Program at Haas Business School and Global Access Program for High Technologies at Anderson Business School, UC.`
    }
];

// Slider content
const slides = [
    "Sport teaches the most sought-after universal skills for successful careers in all professions",
    "Sport qualifications teach Hard Skills - digital literacy, project management, financial and business acumen, marketing, branding and sales.",
    "Sport qualifications teach Soft Skills – communication skills, critical thinking and problem solving, adaptability and resilience and leadership and relationship building.",
    "Sport qualifications provide advanced entry into leading undergraduate programs in Australia.",
    "Sport creates friendships and networks that will flourish and endure over many years."
];

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('lucide-menu');
        menuIcon.classList.toggle('lucide-x');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.add('lucide-menu');
            menuIcon.classList.remove('lucide-x');
        });
    });
});

// Slider functionality
let currentSlide = 0;
const sliderContainer = document.getElementById('slider-container');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const dotsContainer = document.getElementById('slider-dots');

function updateSlider() {
    const slideWidth = 100;
    sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    
    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('bg-blue-600', index === currentSlide);
        dot.classList.toggle('bg-gray-300', index !== currentSlide);
    });
}

function createSlider() {
    // Create slides
    sliderContainer.innerHTML = slides.map(text => `
        <div class="w-full flex-shrink-0 px-16" style="flex: 0 0 100%">
            <p class="text-xl md:text-2xl text-gray-600 text-center leading-relaxed italic">${text}</p>
        </div>
    `).join('');

    // Create dots
    dotsContainer.innerHTML = slides.map((_, index) => `
        <button class="w-2 h-2 rounded-full transition-colors ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}"
                aria-label="Go to slide ${index + 1}"></button>
    `).join('');

    // Add click events to dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
}

// Initialize slider
createSlider();

// Add click events to navigation buttons
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

// Auto-advance slider
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}, 5000);

// Team member cards and modal functionality
const aboutSection = document.getElementById('about');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

function createTeamSection() {
    const teamSection = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Founded on the principles of excellence and innovation in sports education, GameChanger APAC has become a leading force in transforming the sports industry across the Asia-Pacific region.
                </p>
            </div>

            <div class="mt-24">
                <h2 class="text-3xl font-bold text-gray-900 text-center mb-16">Our Leadership Team</h2>
                <div class="grid md:grid-cols-4 gap-8">
                    ${teamMembers.map((member, index) => `
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full team-member-card">
                            <div class="aspect-w-3 aspect-h-4">
                                <img src="${member.image}" alt="${member.name}" class="w-full h-64 object-cover">
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <div class="flex-grow">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-1">${member.name}</h3>
                                    <p class="text-blue-600 font-medium mb-4">${member.role}</p>
                                    <p class="text-gray-600">${member.bio}</p>
                                </div>
                                <button 
                                    onclick="openModal(${index})"
                                    class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    aboutSection.innerHTML = teamSection;
}

function openModal(memberIndex) {
    const member = teamMembers[memberIndex];
    modalContent.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center space-x-4 mb-6">
                <img src="${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full object-cover">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900">${member.name}</h2>
                    <p class="text-blue-600 font-medium">${member.role}</p>
                </div>
            </div>
            <div class="prose prose-blue max-w-none">
                ${member.fullBio.split('\n\n').map(paragraph => `
                    <p class="text-gray-600 mb-4">${paragraph}</p>
                `).join('')}
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking close button or overlay
modalClose.addEventListener('click', closeModal);
modal.querySelector('.bg-black').addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize team section
createTeamSection();
