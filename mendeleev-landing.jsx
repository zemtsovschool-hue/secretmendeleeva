import React, { useState, useEffect } from 'react';
import { Beaker, Sparkles, Users, Mail, Heart, Trophy, Gamepad2, BookOpen, ChevronDown, Menu, X, Play, Download, Monitor, HelpCircle, ChevronLeft, ChevronRight, Maximize2, Calendar, Send, FileText } from 'lucide-react';

export default function MendeleevLanding() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const teamMembers = [
    { name: 'Есения Ушакова', role: 'Тимлид, Сценарист', email: 'esenia00@icloud.com', phone: '+7-982-673-93-84' },
    { name: 'Анна Вишнякова', role: 'Программист', email: 'cherryanneta@gmail.com', phone: '+7-912-673-96-86' },
    { name: 'Юлия Байборина', role: 'Артдизайнер', email: 'yulya_bai@bk.ru', phone: '+7-922-140-46-57' },
    { name: 'Тимофей Земцов', role: 'Наставник/QA', email: 'zemtsovschool@gmail.com', phone: '+7-912-721-08-90' }
  ];

  const elements = [
    { symbol: 'Li', name: 'Литий', fact: 'В аккумуляторах', color: 'from-purple-400 to-pink-400' },
    { symbol: 'Na', name: 'Натрий', fact: 'В морской соли', color: 'from-blue-400 to-cyan-400' },
    { symbol: 'K', name: 'Калий', fact: 'В фейерверках', color: 'from-indigo-400 to-purple-400' },
    { symbol: 'Cs', name: 'Цезий', fact: 'В GPS системах', color: 'from-pink-400 to-rose-400' },
    { symbol: 'Ca', name: 'Кальций', fact: 'В ваших костях', color: 'from-emerald-400 to-teal-400' },
    { symbol: 'Fe', name: 'Железо', fact: 'В вашей крови', color: 'from-red-400 to-orange-400' }
  ];

  const features = [
    { icon: Heart, title: '11 концовок', desc: 'От романтической прогулки до встречи с директором' },
    { icon: BookOpen, title: 'Обучение через историю', desc: 'Знания встроены в диалоги и события' },
    { icon: Users, title: 'Живые элементы', desc: 'Каждый элемент - персонаж со своим характером' },
    { icon: Trophy, title: 'Помощь в учёбе', desc: 'Закрепление материала без зубрёжки' }
  ];

  // Placeholder скриншоты (замените на реальные пути к изображениям)
  const screenshots = [
    { id: 1, title: 'Главное меню', desc: 'Стильное главное меню игры' },
    { id: 2, title: 'Мир Элементов', desc: 'Волшебный мир химических элементов' },
    { id: 3, title: 'Диалог с Литием', desc: 'Общение с персонифицированными элементами' },
    { id: 4, title: 'Встреча с Менделеевым', desc: 'Финальная встреча с великим учёным' },
    { id: 5, title: 'Школьная сцена', desc: 'Реалистичные школьные локации' },
    { id: 6, title: 'Концовка', desc: 'Одна из 11 уникальных концовок' }
  ];

  const faq = [
    {
      question: 'Почему вы разработали данную игру?',
      answer: 'Наша команда создала "Секрет Менделеева" в рамках "Акселератора полезных игр" — программы поддержки образовательных проектов. Мы хотели объединить наши увлечения: химию, видеоигры и визуальные новеллы — и создать что-то действительно полезное для школьников. Многие подростки теряют интерес к химии из-за сухой подачи в учебниках. Мы решили показать, что наука может быть увлекательной, если подать её через эмоции, персонажей и интерактивную историю!'
    },
    {
      question: 'Почему Химия?',
      answer: 'Химия окружает нас повсюду: от аккумуляторов в телефонах до кислорода, которым мы дышим. Но в школе она часто кажется скучной и оторванной от жизни. Мы хотим показать, что химия — это не просто формулы в учебнике, а увлекательная история о том, из чего состоит мир. Каждый элемент имеет свою роль в нашей жизни, и через игру это легко запомнить!'
    },
    {
      question: 'Почему Визуальная Новелла?',
      answer: 'Визуальные новеллы идеально подходят для образовательного контента: они позволяют рассказать историю, вовлечь игрока через выборы и эмоции, и при этом не требуют сложных игровых навыков. Игрок может сосредоточиться на сюжете и знаниях, не отвлекаясь на механики. Плюс, ветвящийся сюжет с 11 концовками мотивирует проходить игру несколько раз, закрепляя материал!'
    },
    {
      question: 'Для какого возраста подходит?',
      answer: 'Игра разработана для подростков 12-17 лет (7-11 классы), изучающих или только начинающих изучать химию. Контент полностью безопасен, без насилия или неподходящих тем. Младшим школьникам с интересом к науке тоже будет интересно, а старшеклассники могут использовать игру для повторения материала перед экзаменами.'
    },
    {
      question: 'Действительно ли это полезно для учёбы?',
      answer: 'Да! Исследования показывают, что обучение через игры повышает мотивацию на 18% и улучшает запоминание материала до 90% (по сравнению с чтением учебника или просмотром видео, где показатель 10-20%). Игра соответствует ФГОС и охватывает ключевые темы: периодическая таблица, свойства элементов, химические связи. Знания встроены в живые диалоги и сюжет, что помогает запомнить материал естественно, без зубрёжки.'
    },
    {
      question: 'Почему игра платная?',
      answer: 'Мы используем модель Freemium: первая глава полностью бесплатна — вы можете попробовать игру и решить, нравится ли она вам. Полная версия стоит 199-299 рублей (как один поход в кино) и включает весь контент с бесплатными обновлениями. Эти средства позволяют нам развивать проект, создавать новые главы и поддерживать команду разработчиков. Мы также планируем выпускать новые главы раз в месяц!'
    }
  ];

  const roadmap = [
    { phase: 'Pre-Alpha v0.2', date: 'Октябрь 2025', status: 'completed', desc: 'Геймджем' },
    { phase: 'Alpha v0.5', date: 'Ноябрь 2025', status: 'completed', desc: 'Акселератор' },
    { phase: 'Open Beta v0.8', date: 'Декабрь 2025', status: 'current', desc: 'Питчинг' },
    { phase: 'Open Beta v0.9', date: 'Февраль 2026', status: 'upcoming', desc: 'Steam Next Fest' },
    { phase: 'Global Release v1.0', date: 'Апрель 2026', status: 'upcoming', desc: 'Полный релиз' }
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const openLightbox = (screenshot) => {
    setLightboxImage(screenshot);
    setLightboxOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'trailer', label: 'Трейлер' },
    { id: 'game', label: 'Об игре' },
    { id: 'screenshots', label: 'Скриншоты' },
    { id: 'requirements', label: 'Требования' },
    { id: 'demo', label: 'Демо' },
    { id: 'faq', label: 'FAQ' },
    { id: 'team', label: 'Команда' },
    { id: 'contact', label: 'Контакты' },
    { id: 'presentation', label: 'Презентация' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 text-white font-sans overflow-x-hidden">
      {/* Анимированный фон с частицами */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Навигация */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/40 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Beaker className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Секрет Менделеева
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-purple-400 text-sm ${
                    activeSection === item.id ? 'text-purple-400 border-b-2 border-purple-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-lg max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-purple-900/50 rounded transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8 animate-bounce">
            <Sparkles className="w-20 h-20 mx-auto text-yellow-400" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Секрет Менделеева
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-purple-200 max-w-3xl mx-auto">
            Образовательная визуальная новелла, где химия оживает
          </p>
          
          <div className="max-w-3xl mx-auto mb-8 px-4">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Школьник <span className="text-purple-300 font-semibold">Альберт</span> считает химию скучной. Но когда он засыпает над учебником, 
                то попадает в волшебный <span className="text-pink-300 font-semibold">Мир Элементов</span>, 
                где встречает <span className="text-blue-300 font-semibold">Литий, Натрий, Цезий</span> и других персонифицированных элементов. 
                Чтобы вернуться домой и сдать контрольную, ему нужно разгадать <span className="text-yellow-300 font-semibold">Секрет Менделеева</span>!
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Пройди путь героя от скуки к вдохновению. Химия — это приключение!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('trailer')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Смотреть трейлер
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Играть бесплатно
            </button>
          </div>

          {/* Floating Elements */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {elements.map((elem, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredElement(index)}
                onMouseLeave={() => setHoveredElement(null)}
                className={`relative p-6 bg-gradient-to-br ${elem.color} rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-3`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <div className="text-3xl font-bold text-white mb-1">{elem.symbol}</div>
                <div className="text-xs text-white/80">{elem.name}</div>
                {hoveredElement === index && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10">
                    {elem.fact}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('trailer')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown className="w-10 h-10 text-purple-400" />
          </button>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Trailer Section */}
      <section id="trailer" className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Play className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Трейлер игры
            </h2>
            <p className="text-xl text-gray-300">
              Погрузитесь в Мир Элементов
            </p>
          </div>

          {/* Trailer Image Link */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl border border-purple-400/30 overflow-hidden max-w-4xl mx-auto">
            <a
              href="https://vk.com/video"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <img
                src="./content/trailer_poster.jpg"
                alt="Трейлер игры - нажмите для просмотра"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-purple-600/90 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </a>
            <p className="text-center text-sm text-gray-400 mt-4 mb-2">
              ▶ Нажмите на изображение, чтобы посмотреть трейлер
            </p>
          </div>


        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Об игре
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Почему «Секрет Менделеева» — это не просто игра, а образовательное приключение
            </p>
          </div>

          {/* Main Features Grid - Expanded */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🧪</div>
              <h4 className="text-xl font-bold mb-3 text-purple-300">Персонажи-элементы</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Каждый химический элемент — уникальный персонаж со своим характером. Литий — энергичный и легкий, Натрий — общительный, Цезий — точный как часы. Запоминайте химию через живые истории!</p>
            </div>

            <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-3 text-blue-300">Химия в жизни</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Элементы рассказывают о своем применении: аккумуляторы в телефонах, GPS-системы, фейерверки, медицинские импланты, ваши кости и кровь. Химия везде вокруг нас!</p>
            </div>

            <div className="bg-gradient-to-br from-pink-800/20 to-rose-800/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🎭</div>
              <h4 className="text-xl font-bold mb-3 text-pink-300">11 уникальных концовок</h4>
              <p className="text-gray-300 text-sm leading-relaxed">От романтической прогулки с Олей до секретной встречи с «директором-Менделеевым». Ваши выборы определяют исход истории. Высокая реиграбельность!</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/20 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-bold mb-3 text-indigo-300">Обучение через сюжет</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Знания встроены в диалоги и события. Никаких скучных тестов — только живое общение с элементами, которые сами рассказывают о себе от первого лица.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-800/20 to-teal-800/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-3 text-emerald-300">Соответствие ФГОС</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Игра охватывает ключевые темы школьной программы: периодическая таблица, свойства элементов, химические связи и реакции. Официально полезна для учёбы!</p>
            </div>

            <div className="bg-gradient-to-br from-orange-800/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="text-xl font-bold mb-3 text-orange-300">Атмосферный визуальный стиль</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Красочные локации и персонажи, сюрреалистичный дизайн Мира Элементов с порталами и волшебными эффектами. Каждая сцена создает уникальную атмосферу!</p>
            </div>

            <div className="bg-gradient-to-br from-violet-800/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-violet-400/20 hover:border-violet-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">💕</div>
              <h4 className="text-xl font-bold mb-3 text-violet-300">Романтическая линия</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Опциональный путь с Олей — отличницей, которая обещает прогулку за пятёрку. Эмоциональная мотивация к изучению химии через симпатию!</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Ветвящийся сюжет</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Спор с одноклассником Владимиром или помощь Оли? Какие вопросы задавать элементам? Каждый выбор влияет на развитие истории и финал.</p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-800/20 to-pink-800/20 backdrop-blur-sm rounded-2xl p-6 border border-fuchsia-400/20 hover:border-fuchsia-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-xl font-bold mb-3 text-fuchsia-300">Сюрреалистичный Мир</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Бесконечные двери, цветной пар, парящие шары и волшебные локации. Мир Элементов — это фантастическое пространство, где возможно всё!</p>
            </div>
          </div>

          {/* Stats Block */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-purple-400/30 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Доказанная эффективность обучения через игры</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-3">
                  +18%
                </div>
                <p className="text-gray-300 text-lg font-semibold mb-2">Повышение мотивации</p>
                <p className="text-gray-400 text-sm">к изучению предмета через игровой формат</p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-3">
                  90%
                </div>
                <p className="text-gray-300 text-lg font-semibold mb-2">Запоминание материала</p>
                <p className="text-gray-400 text-sm">против 10-20% при традиционных методах</p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-3">
                  100%
                </div>
                <p className="text-gray-300 text-lg font-semibold mb-2">Соответствие ФГОС</p>
                <p className="text-gray-400 text-sm">официально одобренная программа</p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Для кого эта игра?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Ученики 7-9 классов</strong> — идеально для первого знакомства с химией</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Готовящиеся к ОГЭ</strong> — закрепление базовых тем в игровой форме</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Старшеклассники перед ЕГЭ</strong> — быстрое освежение материала</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span><strong>Любители визуальных новелл</strong> — необычный сеттинг с химией</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Что вас ждёт в игре?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>3 группы элементов:</strong> щелочные, щёлочноземельные, переходные металлы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>15+ уникальных персонажей-элементов</strong> с характерами и историями</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Встреча с Д.И. Менделеевым</strong> — узнайте его "секрет"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Множественные выборы</strong> — от романтики до научных дискуссий</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Скриншоты
            </h2>
            <p className="text-xl text-gray-300">
              Посмотрите на игру в действии
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-400/30 aspect-video">
              <img 
                src={`./content/screenshot_${currentScreenshot + 1}.jpg`} 
                alt={screenshots[currentScreenshot].title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openLightbox(screenshots[currentScreenshot])}
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevScreenshot}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextScreenshot}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentScreenshot ? 'bg-purple-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setCurrentScreenshot(index)}
                className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  index === currentScreenshot
                    ? 'border-purple-400 shadow-lg shadow-purple-500/50'
                    : 'border-gray-600 hover:border-purple-400/50'
                }`}
              >
                <img 
                  src={`./content/screenshot_${index + 1}.jpg`} 
                  alt={screenshot.title} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-6xl w-full">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl overflow-hidden">
              <img 
                src={`./content/screenshot_${screenshots.findIndex(s => s.id === lightboxImage?.id) + 1}.jpg`}
                alt={lightboxImage?.title}
                className="w-full h-full object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{lightboxImage?.title}</h3>
                <p className="text-gray-300">{lightboxImage?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System Requirements */}
      <section id="requirements" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Monitor className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Системные требования
            </h2>
            <p className="text-xl text-gray-300">
              Игра доступна на любом устройстве!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Минимальные</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Современный веб-браузер с поддержкой HTML5, JavaScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Любая операционная система (Windows, macOS, Linux, Android, iOS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Подключение к интернету</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Минимум 2 ГБ RAM</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Устройства</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🖥️</span>
                  <span>Компьютер / Ноутбук</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">📱</span>
                  <span>Смартфон</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">📲</span>
                  <span>Планшет</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">🌐</span>
                  <span>Любой браузер: Chrome, Firefox, Safari, Edge</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/20">
              <h3 className="text-2xl font-bold mb-6 text-pink-300">Особенности</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">⚡</span>
                  <span>Лёгкий размер игры</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🎮</span>
                  <span>Не требует установки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">💾</span>
                  <span>Автосохранение прогресса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">🌍</span>
                  <span>Кроссплатформенность</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
            <p className="text-lg text-gray-300">
              <span className="text-green-400 font-bold">Хорошая новость:</span> Игра работает практически на любом устройстве! Даже старый смартфон или планшет справятся.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Download className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Попробуйте бесплатно
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Первая глава полностью бесплатна! Познакомьтесь с Альбертом и начните своё путешествие в Мир Элементов
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 max-w-4xl mx-auto">
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-6 py-3 bg-green-600/20 border border-green-400/50 rounded-full">
                  <span className="text-green-400 font-bold">✓ Без регистрации</span>
                </div>
                <div className="px-6 py-3 bg-blue-600/20 border border-blue-400/50 rounded-full">
                  <span className="text-blue-400 font-bold">✓ Без скачивания</span>
                </div>
                <div className="px-6 py-3 bg-purple-600/20 border border-purple-400/50 rounded-full">
                  <span className="text-purple-400 font-bold">✓ Играй сейчас</span>
                </div>
              </div>

              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                БЕСПЛАТНО
              </div>

              <p className="text-lg text-gray-300">
                Полная версия: <span className="text-2xl font-bold text-purple-400">199-299₽</span>
              </p>
            </div>

            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center gap-3 mx-auto">
              <Play className="w-6 h-6" />
              Играть в демо
            </button>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-400 font-bold mb-1">Продолжительность</div>
                <div className="text-gray-300">~30 минут</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-400 font-bold mb-1">Содержание</div>
                <div className="text-gray-300">1 глава из 3</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-400 font-bold mb-1">Концовки</div>
                <div className="text-gray-300">3 из 11</div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-gray-400 mb-4">
              <span className="text-purple-400 font-bold">Freemium модель:</span> Попробуйте первую главу бесплатно и решите, хотите ли продолжить приключение!
            </p>
            <p className="text-sm text-gray-500">
              Полная версия включает все 3 главы, 11 концовок и все элементы периодической таблицы. Новые главы выходят раз в месяц с бесплатными обновлениями!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-300">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-300">
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Остались вопросы?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-bold transition-all"
            >
              Свяжитесь с нами
            </button>
          </div>
        </div>
      </section>

      {/* Release Roadmap Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              План релиза
            </h2>
            <p className="text-xl text-gray-300">
              Наш путь от идеи до полноценной игры
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  item.status === 'completed'
                    ? 'bg-green-900/20 border-green-400/50'
                    : item.status === 'current'
                    ? 'bg-purple-900/30 border-purple-400 shadow-lg shadow-purple-500/50'
                    : 'bg-gray-900/20 border-gray-600/30'
                }`}
              >
                <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                <div className="font-bold mb-2">{item.phase}</div>
                <div className="text-sm text-gray-300">{item.desc}</div>
                {item.status === 'current' && (
                  <div className="mt-3 inline-block px-3 py-1 bg-purple-500 rounded-full text-xs font-bold">
                    Сейчас
                  </div>
                )}
                {item.status === 'completed' && (
                  <div className="mt-3 inline-block px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
                    ✓ Готово
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
            <p className="text-gray-300">
              <span className="text-purple-400 font-bold">Текущий этап:</span> Open Beta v0.8 — мы на финальной прямой перед полным релизом! 
              Следите за обновлениями и будьте первыми, кто попробует новые главы.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Наша команда
            </h2>
            <p className="text-xl text-gray-300">
              Вумен в кубе — команда энтузиастов из IT-куба г. Арамиль
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-400/30">
                  <img 
                    src={`./content/team_${member.name.split(' ')[0].toLowerCase()}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-purple-300 text-center text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          {/* About Team */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-blue-400/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">О команде</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Мы — команда разработчиков из <span className="text-blue-300 font-semibold">ЦЦОД "IT-куб г. Арамиль"</span>, 
                участники "Акселератора полезных игр". Наша миссия — создавать образовательные игры, 
                которые делают обучение увлекательным и запоминающимся.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Мы любим <span className="text-purple-300 font-semibold">химию</span>, 
                обожаем <span className="text-pink-300 font-semibold">видеоигры</span> и особенно ценим 
                <span className="text-indigo-300 font-semibold"> визуальные новеллы</span>. 
                Проект "Секрет Менделеева" — это наш ответ на вопрос: как сделать науку интересной для современных подростков?
              </p>
              <div className="text-center pt-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/20 rounded-full border border-purple-400/30">
                  <span className="text-2xl">🎓</span>
                  <span className="text-gray-300">ЦЦОД "IT-куб г. Арамиль"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Обратная связь
            </h2>
            <p className="text-xl text-gray-300">
              Свяжитесь с нами по любым вопросам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 transition-all text-white placeholder-gray-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 transition-all text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:outline-none focus:border-purple-400 transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Расскажите, чем мы можем помочь..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/20">
                <h3 className="text-2xl font-bold mb-6">Контакты команды</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-purple-300 mb-2">Есения Ушакова</h4>
                    <p className="text-sm text-gray-400">Тимлид, Сценарист</p>
                    <p className="text-sm text-gray-300 mt-2">📧 esenia00@icloud.com</p>
                    <p className="text-sm text-gray-300">📱 +7-982-673-93-84</p>
                    <p className="text-sm text-gray-300">✈️ Telegram: @syanushi</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-purple-300 mb-2">Тимофей Земцов</h4>
                    <p className="text-sm text-gray-400">Наставник/QA</p>
                    <p className="text-sm text-gray-300 mt-2">📧 zemtsovschool@gmail.com</p>
                    <p className="text-sm text-gray-300">📱 +7-912-721-08-90</p>
                    <p className="text-sm text-gray-300">✈️ Telegram: @timzboi</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/20">
                <h3 className="text-xl font-bold mb-4">Мы открыты к сотрудничеству</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Образовательным учреждениям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Издателям и дистрибьюторам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Инвесторам и партнерам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Медиа и прессе</span>
                  </li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl border border-purple-400/20">
                <p className="text-gray-400">
                  IT-куб г. Арамиль, Россия
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Акселератор полезных игр
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-24 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Презентация проекта
            </h2>
            <p className="text-xl text-gray-300">
              Подробная информация о нашей игре
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-6">📄</div>
              <h3 className="text-2xl font-bold mb-4">Презентация "Секрет Менделеева"</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Полная презентация проекта с подробным описанием концепции, механик, целевой аудитории и планов развития игры.
              </p>
            </div>

            <a
              href="./content/SecretMendeleeva_presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Открыть презентацию
            </a>

            <div className="mt-8 text-sm text-gray-400">
              <p>PDF формат • Откроется в новом окне</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Beaker className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Секрет Менделеева
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Команда "Вумен в кубе". Все права защищены.
          </p>
          <p className="text-gray-500 text-xs">
            Образовательная визуальная новелла • IT-куб г. Арамиль
          </p>
        </div>
      </footer>
    </div>
  );
}