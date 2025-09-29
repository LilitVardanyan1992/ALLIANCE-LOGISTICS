'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Truck, Ship, Plane, Package, Phone, Mail, MapPin, ChevronDown, Instagram, Facebook, QrCode  } from 'lucide-react';

const ModernLogisticsWebsite = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'am' | 'ru'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();
  const htmlLang = currentLanguage === 'am' ? 'hy' : currentLanguage; // important for hyphenation/shaping
  const isHY = htmlLang === 'hy';

  const content = {
    en: {
      nav: { home: 'HOME', about: 'ABOUT', services: 'SERVICES', contact: 'CONTACTS' },
      hero: {
        title: 'ALLIANCE LOGISTICS',
        subtitle: 'TRUST AND GROW',
        description:
            'Connecting global origins with destinations in Armenia and beyond through dependable sea, air, and land services.',
        cta: 'Get Quote'
      },
      about: {
        title: 'About Alliance Logistics',
        subtitle: 'Your Trusted Logistics Partner Since 2014',
        content:
            'Founded in 2014, Alliance Logistics LTD has established itself as a key player in the Armenian logistics market, recognized for innovation, reliability, and leadership. We specialize in end-to-end transportation solutions, seamlessly connecting global origins with destinations in Armenia and beyond through dependable sea, air, and land services.\n' +
            'Our strength lies in our highly skilled team of professionals, whose extensive expertise ensures the highest quality of service. With 24/7 support, we design tailored solutions to meet each client’s unique needs. Thanks to well-organized processes, carefully selected resources, and trusted international partnerships, we deliver optimal and practical logistics strategies that keep your cargo moving—securely and efficiently—even in today’s ever-changing economic, political, and military landscapes.\n' +
            'Choosing Alliance Logistics means choosing value, quality, and dependability. Partner with us and experience a new standard of excellence in logistics.'
      },
      services_header: {
        title_prefix: 'Our',
        title_highlight: 'Services',
        subtitle: 'Comprehensive logistics solutions for your business needs'
      },
      services: [
        {
          icon: Ship,
          title: 'Sea Transportation',
          desc:
              'Sea freight remains one of the most reliable and cost-effective modes of transport, particularly essential when land routes are unavailable. With their high capacity, container vessels provide a more economical choice compared to trucks, especially for long-distance shipments.\n' +
              'At Alliance Logistics, we specialize in maritime transport, linking Armenia with Asia, America, Europe, Australia, and Africa. Our experts continuously monitor global market trends, implementing innovative solutions to maximize efficiency, safety, and reliability for your cargo.',
          image: '/ship.jpg'
        },
        {
          icon: Truck,
          title: 'Road & Rail Transport',
          desc:
              'Road and rail transport are among the most efficient logistics solutions, offering both cost-effectiveness and wide reach. This method accommodates diverse cargo types—including industrial equipment, construction materials, furniture, consumer goods, and more.\n' +
              'Alliance Logistics ensures the smooth transfer of goods between Armenia and all over the world possible road route countries, serving both eastern and western routes. Our tailored land-based solutions guarantee flexibility, reliability, and timely deliveries.',
          image: '/road-freight-delivery.jpg'
        },
        {
          icon: Plane,
          title: 'Air Transportation',
          desc:
              'For clients requiring fast and dependable delivery, air freight is the ideal solution. At Alliance Logistics, we connect Armenia with global destinations, offering a range of customized options to meet specific shipping needs.\n' +
              'Driven by innovation, this service continues to expand, reducing delivery times and increasing flexibility. Our transparent pricing model—based on cargo type, weight, dimensions, origin, and destination—ensures clarity and fairness.\n' +
              'Contact our experts, and we will design the most efficient route and logistics plan to ensure your cargo arrives on time and in perfect condition.',
          image: '/air-cargo-services.jpg'
        },
        {
          icon: Package,
          title: 'LCL Shipments',
          desc:
              'In recent years, collective shipments (LCL)  have become one of the most in-demand services for small and medium-sized businesses. Offering competitive pricing, shorter lead times, and flexibility in shipment volumes, LCL is a smart and cost-effective logistics solution.\n' +
              'As a leading provider of LCL shipments from China, Alliance Logistics has built a reputation for reliability and efficiency. \n' +
              'Our LCL services extend beyond China—we also arrange consolidated shipments from the USA, India, Korea, the UAE, and other key hubs.\n' +
              'Send us your shipment details by email, and our specialists will provide a personalized and competitive quote tailored to your needs.',
          image: '/warehouse-distribution-center.jpg'
        }
      ],
      contact: {
        title: 'Get In Touch',
        address: '1 Kajazuni Street, Yerevan, Armenia',
        email: 'alliance.logistics@mail.ru',
        phone: '+374 55 670770',
        socials: {
          instagram: 'https://www.instagram.com/alliancelogistic?igsh=MWM0MDdueTVlOXVwbA%3D%3D&utm_source=qr',
          facebook: 'https://www.facebook.com/alliance.logistics2014',
          wechatId: 'wxid_ococ85u19i9u12'
        }
      },
      contact_fields: {
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        founded: 'Founded',
        support: 'Support',
        reach: 'Reach',
        socials: 'Socials'
      },
      platforms: { instagram: 'Instagram', facebook: 'Facebook', wechat: 'WeChat' }
    },
    am: {
      nav: { home: 'ԳԼԽԱՎՈՐ', about: 'ՄԵՐ ՄԱՍԻՆ', services: 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ', contact: 'ԿԱՊ' },
      hero: {
        title: 'ԱԼՅԱՆՍ ԼՈՋԻՍԹԻՔՍ',
        subtitle: 'ՎՍՏԱՀՈՒԹՅՈՒՆ ԵՎ ԱՃ',
        description:
            'Ապահովում ենք հուսալի ծովային, օդային և ցամաքային փոխադրումներ, որոնք կապում են ողջ աշխարհը Հայաստանի հետ և հակառակը։',
        cta: 'Ստանալ գնահատական'
      },
      about: {
        title: 'Ալյանս Լոջիսթիքս',
        subtitle: 'Ձեր վստահելի լոգիստիկ գործընկերը 2014 թվականից',
        content:
            '«Ալյանս Լոջիսթիքս» ՍՊԸ-ն, հիմնադրված 2014 թվականին, իրեն հաստատել է որպես Հայաստանի լոգիստիկայի շուկայում առանցքային խաղացողներից մեկը՝ արժանանալով ճանաչման նորարարությունների, վստահելիության և առաջնորդության համար։ Մենք մասնագիտացած ենք համալիր տրանսպորտային լուծումների մեջ՝ ապահովելով հուսալի ծովային, օդային և ցամաքային փոխադրումներ, որոնք կապում են ողջ աշխարը Հայաստանի հետ և հակառակը։\n' +
            'Մեր հիմնական ուժը բարձրակարգ մասնագետների թիմն է, որոնց երկարամյա փորձը երաշխավորում է բարձր մակարդակի սպասարկում։ Մենք ապահովում ենք 24/7 աջակցություն և մշակում անհատական լուծումներ՝ յուրաքանչյուր հաճախորդի պահանջներին համապատասխան։ Շնորհիվ հստակ կազմակերպված գործընթացների, ռեսուրսների խիստ ընտրության և հուսալի միջազգային գործընկերների՝ մենք առաջարկում ենք օպտիմալ և գործնական լոգիստիկ ռազմավարություններ՝ ձեր բեռի տեղափոխման համար, նույնիսկ փոփոխվող տնտեսական, քաղաքական և ռազմական իրականությունների պայմաններում։\n' +
            'Ընտրելով «Ալյանս Լոջիսթիքս»-ը՝ դուք ընտրում եք արժեք, որակ և վստահելիություն։ Դարձեք մեր գործընկերը և բացահայտեք լոգիստիկ սպասարկման նոր ստանդարտներ։\n'
      },
      services_header: {
        title_prefix: 'Մեր',
        title_highlight: 'ծառայությունները',
        subtitle: 'Ձեր բիզնեսի կարիքների համար համալիր լոգիստիկ լուծումներ'
      },
      services: [
        {
          icon: Ship,
          title: 'Ծովային փոխադրումներ',
          desc:
              'Ծովային տրանսպորտը մնում է առաքման ամենահուսալի և տնտեսող տեսակներից մեկը, հատկապես, երբ ցամաքային երթուղիները անհասանելի են։ Կոնտեյներային նավերը ունեն զգալի ավելի մեծ տարողություն՝ համեմատած ավտոմեքենաների հետ, ինչը նրանց դարձնում է առավել շահավետ տարբերակ երկարատև փոխադրումների համար։\n' +
              '«Ալյանս Լոջիսթիքս»-ը մասնագիտացած է ծովային փոխադրումների կազմակերպման մեջ՝ կապելով Հայաստանը Ասիայի, Ամերիկայի, Եվրոպայի, Ավստրալիայի և Աֆրիկայի հետ։ Մեր մասնագետները մշտապես հետևում են համաշխարհային շուկայի միտումներին և կիրառում նորարարական լուծումներ՝ ապահովելու առավելագույն արդյունավետություն, անվտանգություն և հուսալիություն։',
          image: '/global-shipping-navigation.jpg'
        },
        {
          icon: Truck,
          title: 'Ավտո և երկաթուղային տրանսպորտ',
          desc:
              'Ավտոմոբիլային և երկաթուղային տրանսպորտի տեսակները համարվում են ամենաարդյունավետ լոգիստիկ լուծումներից՝ համադրելով տնտեսավետությունը և լայն աշխարհագրական ծածկույթը։ Այս տրանսպորտի միջոցով հնարավոր է տեղափոխել ամենատարբեր բեռներ՝ սկսած արդյունաբերական սարքավորումներից ու շինանյութերից մինչև կահույք և սպառողական ապրանքներ։\n' +
              '«Ալյանս Լոջիսթիքս»-ը ապահովում է բեռների հուսալի փոխադրում Հայաստանի և բոլոր այն երկրների միջև, որտեղ հասանելի են ավտոմոբիլային երթուղիներ։ Մեր լուծումները երաշխավորում են ճկունություն, արդյունավետություն և ժամանակին առաքում։',
          image: '/road-freight-delivery.jpg'
        },
        {
          icon: Plane,
          title: 'Օդային փոխադրումներ',
          desc:
              'Այն հաճախորդների համար, ովքեր կարիք ունեն արագ և վստահելի առաքման, օդային փոխադրումները իդեալական տարբերակ են։ «Ալյանս Լոջիսթիքս»-ը Հայաստանը կապում է համաշխարհային ուղղությունների հետ՝ առաջարկելով լուծումների լայն ընտրություն՝ հարմարեցված կոնկրետ պահանջներին։\n' +
              'Տրանսպորտի այս ձևը արագ զարգանում է նորարարական լոգիստիկ մոտեցումների շնորհիվ, որոնք կրճատում են առաքման ժամկետները և մեծացնում ճկունությունը։ Մեր թափանցիկ գնագոյացման համակարգը՝ հաշվի առնելով բեռի տեսակը, քաշը, չափսերը, ուղարկման և ընդունման վայրը, երաշխավորում է արդար և հստակ պայմաններ։\n' +
              'Կապ հաստատեք մեր թիմի հետ, և մենք կզարգացնենք ձեզ համար օպտիմալ երթուղի և լոգիստիկ լուծում, որպեսզի ձեր բեռը հասնի ժամանակին և ամբողջական։',
          image: '/air-cargo-services.jpg'
        },
        {
          icon: Package,
          title: 'Հավաքական բեռներ',
          desc:
              'Վերջին տարիներին հավաքական բեռների փոխադրումները (LCL) դարձել են ամենապահանջված ծառայություններից մեկը, հատկապես փոքր և միջին բիզնեսի շրջանում։ Այս լուծումը առաջարկում է մրցունակ գներ, կարճ ժամկետներ և ծավալների ճկունություն, ինչը դարձնում է այն հարմար և տնտեսապես արդյունավետ տարբերակ։\n' +
              '«Ալյանս Լոջիսթիքս»-ը LCL ծառայությունների առաջատար մատակարարներից մեկն է և ձեռք է բերել վստահելի և պատասխանատու գործընկերոջ համբավ։ Բազմամյա փորձը թույլ է տվել ստեղծել արդյունավետ լոգիստիկ և կառավարչական համակարգեր, որոնք ապահովում են առաքման կայունություն և արագություն։ \n' +
              'Մեր համախառն փոխադրումների աշխարհագրությունը դուրս է գալիս Չինաստանի սահմաններից․ մենք կազմակերպում ենք LCL փոխադրումներ ԱՄՆ-ից, Հնդկաստանից, Կորեայից, ԱՄԷ-ից և այլ կարևոր լոգիստիկ կենտրոններից։\n' +
              'Պարզապես ուղարկեք ձեր առաքման տվյալները էլեկտրոնային փոստով, և մեր մասնագետները ձեզ համար կպատրաստեն անհատական և մրցունակ առաջարկ։',
          image: '/warehouse-distribution-center.jpg'
        }
      ],
      contact: {
        title: 'Կապվեք մեզ հետ',
        address: 'ք. Երևան, Քաջազնունի 1',
        email: 'alliance.logistics@mail.ru',
        phone: '+374 55 670770',
        socials: {
          instagram: 'https://www.instagram.com/alliancelogistic?igsh=MWM0MDdueTVlOXVwbA%3D%3D&utm_source=qr',
          facebook: 'https://www.facebook.com/alliance.logistics2014',
          wechatId: 'wxid_ococ85u19i9u12',
          // optional if you have an image file:
          // wechatQr: '/wechat-qr.png'
        }
      },
      contact_fields: {
        address: 'Հասցե',
        email: 'Էլ. փոստ',
        phone: 'Հեռախոս',
        founded: 'Հիմնադրվել է',
        support: 'Աջակցություն',
        reach: 'Կապ',
        socials: 'Սոցիալական ցանցեր',

      },
      platforms: { instagram: 'Ինստագրամ', facebook: 'Ֆեյսբուք', wechat: 'WeChat' }
    },
    ru: {
      nav: { home: 'ГЛАВНАЯ', about: 'О НАС', services: 'УСЛУГИ', contact: 'КОНТАКТЫ' },
      hero: {
        title: 'АЛЬЯНС ЛОДЖИСТИКС',
        subtitle: 'ДОВЕРИЕ И РОСТ',
        description:
            'Обеспечиваем надежные морские, воздушные и наземные перевозки, соединяющие мировые направления с Арменией и обратно.',
        cta: 'Получить расчет'
      },
      about: {
        title: 'Альянс Лоджистикс',
        subtitle: 'Ваш надежный логистический партнер с 2014 года',
        content:
            'Основанная в 2014 году, компания Альянс Лоджистикс зарекомендовала себя как один из ключевых игроков на логистическом рынке Армении, признанной за инновации, надежность и лидерство. Мы специализируемся на комплексных транспортных решениях, обеспечивая надежные морские, воздушные и наземные перевозки, которые соединяют мировые направления с Арменией и обратно.\n' +
            'Наша основная сила — это команда высококвалифицированных специалистов, чей многолетний опыт гарантирует высокий уровень обслуживания. Мы предоставляем поддержку 24/7 и разрабатываем индивидуальные решения в соответствии с потребностями каждого клиента. Благодаря четко организованным процессам, тщательному подбору ресурсов и надежным международным партнерам мы предлагаем оптимальные и практичные логистические стратегии для перевозки вашего груза даже в условиях постоянно меняющихся экономических, политических и военных реалий.\n' +
            'Выбирая Альянс Лоджистикс, вы выбираете ценность, качество и надежность. Станьте нашим партнером и откройте для себя новый стандарт логистического обслуживания.'
      },
      services_header: {
        title_prefix: 'Наши',
        title_highlight: 'услуги',
        subtitle: 'Комплексные логистические решения для вашего бизнеса'
      },
      services: [
        {
          icon: Ship,
          title: 'Морские перевозки',
          desc:
              'Морской транспорт остается одним из наиболее надежных и экономически выгодных способов доставки, особенно когда сухопутные маршруты недоступны. Контейнерные суда обладают значительно большей грузоподъемностью по сравнению с автотранспортом, что делает их более экономичным выбором для дальних перевозок.\n' +
              'Альянс Лоджистикс специализируется на организации морских перевозок, соединяя Армению с Азией, Америкой, Европой, Австралией и Африкой. Наши специалисты постоянно отслеживают мировые рыночные тенденции и внедряют инновационные решения для обеспечения максимальной эффективности, безопасности и надежности перевозок.',
          image: '/ship.jpg'
        },
        {
          icon: Truck,
          title: 'Авто и железнодорожный транспорт',
          desc:
              'Автомобильный и железнодорожный транспорт — одни из самых эффективных логистических решений, сочетающих экономичность и широкую географию доставки. Этот вид транспорта подходит для перевозки самого разного груза, включая промышленное оборудование, строительные материалы, мебель, товары народного потребления и многое другое.\n' +
              'Альянс Лоджистикс обеспечивает надежную доставку грузов между Арменией и всеми странами, по которым доступны авто перевозки по всем направлении. Наши решения гарантируют гибкость, эффективность и своевременность доставки.',
          image: '/road-freight-delivery.jpg'
        },
        {
          icon: Plane,
          title: 'Авиаперевозки',
          desc:
              'Для клиентов, которым необходима быстрая и надежная доставка, авиаперевозки являются идеальным вариантом. Альянс Лоджистикс соединяет Армению с мировыми направлениями, предлагая широкий спектр решений, адаптированных под конкретные потребности.\n' +
              'Этот вид транспорта активно развивается благодаря инновационным логистическим подходам, которые сокращают сроки доставки и повышают гибкость. Наша прозрачная система ценообразования — с учетом типа груза, веса, габаритов, места отправления и назначения — гарантирует честные и понятные условия.\n' +
              'Свяжитесь с нашей командой, и мы разработаем для вас оптимальный маршрут и логистическое решение, чтобы ваш груз прибыл вовремя и в полной сохранности.',
          image: '/air-cargo-services.jpg'
        },
        {
          icon: Package,
          title: 'Сборные грузы',
          desc:
              'В последние годы сборные грузы (LCL) стали одной из самых востребованных услуг, особенно среди малого и среднего бизнеса. Данное решение предлагает конкурентные цены, сокращенные сроки доставки и гибкость в объемах, что делает его удобным и экономически эффективным вариантом.\n' +
              'Компания Альянс Лоджистикс является одним из ведущих поставщиков услуг LCL и заслужила репутацию надежного и ответственного партнера. Многолетний опыт позволил нам создать эффективные логистические и управленческие системы, обеспечивающие стабильность и скорость доставки. \n' +
              'География наших сборных перевозок выходит далеко за пределы Китая — мы организуем LCL-перевозки из США, Индии, Кореи, ОАЭ и других ключевых логистических центров.\n' +
              'Просто отправьте нам детали вашей отправки на электронную почту, и наши специалисты подготовят для вас индивидуальное и конкурентное предложение.',
          image: '/warehouse-distribution-center.jpg'
        }
      ],
      contact: {
        title: 'Связаться с нами',
        address: 'ул. Каджазнуни, 1, Ереван, Армения',
        email: 'alliance.logistics@mail.ru',
        phone: '+374 55 670770',
        socials: {
          instagram: 'https://www.instagram.com/alliancelogistic?igsh=MWM0MDdueTVlOXVwbA%3D%3D&utm_source=qr',
          facebook: 'https://www.facebook.com/alliance.logistics2014',
          wechatId: 'wxid_ococ85u19i9u12',
          // optional if you have an image file:
          // wechatQr: '/wechat-qr.png'
        }
      },
      contact_fields: {
        address: 'Адрес',
        email: 'Электронная почта',
        phone: 'Телефон',
        founded: 'Дата основания',
        support: 'Поддержка',
        reach: 'Связаться',
        socials: 'Соцсети'
      },
      platforms: { instagram: 'Инстаграм', facebook: 'Фейсбук', wechat: 'WeChat' }
    }
  } as const;

  const currentContent = content[currentLanguage];

  return (
      <div lang={htmlLang} dir="ltr" className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        {/* Nav */}
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrollY > 100
                    ? isDark
                        ? 'bg-slate-900/95 backdrop-blur-xl'
                        : 'bg-white/95 backdrop-blur-xl'
                    : isDark
                        ? 'bg-slate-900/50 backdrop-blur-lg'
                        : 'bg-white/50 backdrop-blur-lg'
            } border-b ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'} shadow-lg`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div
                  className="flex items-center w-[120px] cursor-pointer"
                  onClick={() => scrollToSection('home')}   // 👈 lowercase to match id="home"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('home')}
                  aria-label="Go to top"
              >
                <img src="/alliance-logistics-logo.png" alt="Alliance Logistics"
                    className="w-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"/>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {Object.entries(currentContent.nav).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => scrollToSection(key)}
                        className={`whitespace-nowrap cursor-pointer px-4 py-2 text-sm font-semibold transition-all hover:text-orange-500 ${
                            isDark ? 'text-slate-300 hover:text-orange-400' : 'text-slate-700 hover:text-orange-600'
                        } ${isHY ? 'tracking-normal' : 'tracking-wide'}`}
                    >
                      {value}
                    </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-2  rounded-xl cursor-pointer transition-all ${isDark ? ' bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
                >
                  {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                </button>

                <div className="flex space-x-1">
                  {(['en', 'am', 'ru'] as const).map((lang) => (
                      <button
                          key={lang}
                          onClick={() => setCurrentLanguage(lang)}
                          className={`px-2  sm:px-3 py-2  cursor-pointer rounded-lg text-sm font-medium transition-all ${
                              currentLanguage === lang ? 'bg-orange-500 text-white' : isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
                          }`}
                      >
                        {lang === 'en' ? 'EN' : lang === 'am' ? 'ՀԱՅ' : 'РУС'}
                      </button>
                  ))}
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden cursor-pointer p-2 rounded-xl bg-orange-500 text-white">
                  {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
              </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden pb-4 border-t border-slate-200/20">
                  <div className="flex flex-col space-y-2 pt-4">
                    {Object.entries(currentContent.nav).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => scrollToSection(key)}
                            className="text-left px-4 py-3 cursor-pointer rounded-lg hover:bg-orange-500/10 hover:text-orange-500 transition-all font-semibold"
                        >
                          {value}
                        </button>
                    ))}
                  </div>
                </div>
            )}
          </div>
        </nav>

        {/* Hero */}
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: 'url(/multimodal-logistics-hub.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
        >
          <div
              className={`absolute inset-0 ${
                  isDark ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-orange-900/30' : 'bg-gradient-to-br from-white/20 via-white/10 to-orange-100/30'
              }`}
          ></div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
            <div
                className={`${isDark ? 'bg-slate-900/30' : 'bg-white/30'} backdrop-blur-2xl rounded-3xl p-8 lg:p-16 border ${
                    isDark ? 'border-white/10' : 'border-white/20'
                } shadow-2xl`}
            >
              <div className="w-[150px] h-20 flex items-center justify-center mx-auto mb-8">
                <img src="/logo-circle.png" alt="Alliance Logistics" className="w-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" />
              </div>

              {/* --- Responsive Armenian-friendly heading --- */}
              <h1
                  lang={htmlLang}
                  className={[
                    // fluid, Armenian-safe sizes:
                    'text-[clamp(28px,8vw,64px)]',
                    'font-bold',
                    'leading-tight',
                    // gradient text:
                    'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent',
                    // wrapping controls:
                    'break-words',
                    'hyphens-auto',
                    'text-balance',
                    // tracking: normal for HY
                    isHY ? 'tracking-normal' : 'tracking-tight',
                    'mb-4'
                  ].join(' ')}
                  // Fallback hyphenation for Safari / old Chromium
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto', overflowWrap: 'break-word', wordBreak: 'break-word' }}
              >
                {currentContent.hero.title}
              </h1>

              <div className="flex items-center font-bold justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-14 sm:w-32"></div>
                <span className="px-4 sm:px-6 text-base sm:text-lg font-medium text-orange-400">
                <p className="font-bold text-xs md:text-lg m-0 whitespace-nowrap" lang={htmlLang}>
                  {currentContent.hero.subtitle}
                </p>
              </span>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-14 sm:w-32"></div>
              </div>

              <p
                  lang={htmlLang}
                  className={`mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'} font-semibold leading-relaxed mb-8 text-[clamp(14px,2.6vw,20px)] max-w-[65ch] break-words hyphens-auto text-balance`}
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto', overflowWrap: 'break-word', wordBreak: 'break-word' }}
              >
                {currentContent.hero.description}
              </p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-orange-400" />
          </div>
        </section>

        {/* About */}
        <section id="about" className={`py-8 md:py-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[clamp(24px,5vw,48px)] font-bold mb-6">
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>{currentContent.about.title.split(' ')[0]} </span>
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {currentContent.about.title.split(' ').slice(1).join(' ')}
                  </span>
                  </h2>
                  <p className="text-[clamp(16px,2.8vw,20px)] text-orange-500 mb-6 font-medium" lang={htmlLang}>
                    {currentContent.about.subtitle}
                  </p>
                  <p
                      lang={htmlLang}
                      className={`text-[clamp(14px,2.6vw,18px)] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'} break-words hyphens-auto text-balance`}
                      style={{ hyphens: 'auto', WebkitHyphens: 'auto', overflowWrap: 'break-word', wordBreak: 'break-word' }}
                  >
                    {currentContent.about.content}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500">2014</div>
                      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{currentContent.contact_fields.founded}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500">24/7</div>
                      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{currentContent.contact_fields.support}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500">Global</div>
                      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{currentContent.contact_fields.reach}</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-3xl p-8 border ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'} shadow-xl`}>
                    <img src="/global-shipping-navigation.jpg" alt="Global Shipping" className="w-full h-100 md:h-150 object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={`py-8 md:py-20 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 className={`text-[clamp(24px,5vw,48px)] font-bold mb-2 md:mb-6 ${isDark ? 'text-white' : 'text-slate-900'} break-words hyphens-auto text-balance`} lang={htmlLang}>
                {currentContent.services_header.title_prefix}{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {currentContent.services_header.title_highlight}
              </span>
              </h2>
              <p
                  className={`text-[clamp(14px,2.8vw,20px)] ${isDark ? 'text-slate-400' : 'text-slate-600'} break-words hyphens-auto text-balance`}
                  lang={htmlLang}
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
              >
                {currentContent.services_header.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {currentContent.services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                    <div
                        key={index}
                        className={`group ${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-slate-50 hover:bg-white'} backdrop-blur-sm rounded-2xl p-8 border ${
                            isDark ? 'border-slate-700/50 hover:border-orange-500/50' : 'border-slate-200 hover:border-orange-500/50'
                        } transition-all hover:scale-105 hover:shadow-xl overflow-hidden`}
                    >
                      <div className="mb-6">
                        <div
                            className="h-58 bg-cover bg-center rounded-xl mb-6 group-hover:scale-105 transition-transform"
                            style={{ backgroundImage: `url(${service.image})` }}
                        ></div>
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent size={32} className="text-white" />
                        </div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-orange-500 transition-colors break-words`} lang={htmlLang}>
                          {service.title}
                        </h3>
                        <p
                            className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'} break-words hyphens-auto`}
                            lang={htmlLang}
                            style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        {/* Contact Section */}
        <section
            id="contact"
            className={`py-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'} relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                  className={`text-[clamp(24px,5vw,48px)] font-bold mb-16 ${isDark ? 'text-white' : 'text-slate-900'} break-words hyphens-auto`}
                  lang={htmlLang}
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
              >
                {currentContent.contact.title.split(' ')[0]}{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          {currentContent.contact.title.split(' ').slice(1).join(' ')}
        </span>
              </h2>

              {/* Responsive, equal-height cards */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-stretch mb-12">
                {/* Address */}
                <div
                    className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-2xl p-8 border ${
                        isDark ? 'border-slate-700/50' : 'border-slate-200/50'
                    } shadow-xl text-center group hover:scale-105 transition-transform min-h-[260px] flex flex-col items-center justify-start`}
                >
                  <MapPin size={48}
                          className="text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {currentContent.contact_fields.address}
                  </h3>
                  <p
                      className={`${isDark ? 'text-slate-400' : 'text-slate-600'} break-words text-balance`}
                      lang={htmlLang}
                      style={{overflowWrap: 'anywhere'}}
                  >
                    {currentContent.contact.address}
                  </p>
                </div>

                {/* Email (wrap nicely so it doesn’t look wider) */}
                <div
                    className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-2xl p-8 border ${
                        isDark ? 'border-slate-700/50' : 'border-slate-200/50'
                    } shadow-xl text-center group hover:scale-105 transition-transform min-h-[260px] flex flex-col items-center justify-start`}
                >
                  <Mail size={48} className="text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {currentContent.contact_fields.email}
                  </h3>
                  <a
                      href={`mailto:${currentContent.contact.email}`}
                      className="text-orange-500 hover:text-orange-600 transition-colors break-words"
                      style={{overflowWrap: 'anywhere'}}
                  >
                    {currentContent.contact.email}
                  </a>
                </div>

                {/* Phone */}
                <div
                    className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-2xl p-8 border ${
                        isDark ? 'border-slate-700/50' : 'border-slate-200/50'
                    } shadow-xl text-center group hover:scale-105 transition-transform min-h-[260px] flex flex-col items-center justify-start`}
                >
                  <Phone size={48} className="text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform"/>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {currentContent.contact_fields.phone}
                  </h3>
                  <a href={`tel:${currentContent.contact.phone}`}
                     className="text-orange-500 hover:text-orange-600 transition-colors">
                    {currentContent.contact.phone}
                  </a>
                  <p className="text-xs mt-2">
                    WhatsApp / Viber / Telegram

                  </p>
                </div>

                {/* Socials — icons only */}
                <div
                    className={`${isDark ? 'bg-slate-900/50' : 'bg-white/50'} backdrop-blur-xl rounded-2xl p-8 border ${
                        isDark ? 'border-slate-700/50' : 'border-slate-200/50'
                    } shadow-xl text-center group hover:scale-105 transition-transform min-h-[260px] flex flex-col items-center justify-start`}
                    aria-label={currentContent.contact_fields.socials}
                >
                  {/* icons row */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <a
                        href={currentContent.contact.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl hover:bg-orange-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        title="Instagram"
                        aria-label="Instagram"
                    >
                      <Instagram size={32} className="text-orange-500"/>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                        href={currentContent.contact.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl hover:bg-orange-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        title="Facebook"
                        aria-label="Facebook"
                    >
                      <Facebook size={32} className="text-orange-500"/>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {currentContent.contact_fields.socials}
                  </h3>

                  {/* WeChat: show only the code, no icon */}
                  <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(currentContent.contact.socials.wechatId);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        } catch {
                        }
                      }}
                      className={`${isDark ? 'text-slate-400' : 'text-slate-600'} mt-2 text-xs hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1`}
                      title={`WeChat: ${currentContent.contact.socials.wechatId} (click to copy)`}
                      aria-label={`WeChat ID ${currentContent.contact.socials.wechatId}`}
                  >
                    WeChat:{' '}
                    <code className={`${isDark ? 'text-slate-300' : 'text-slate-700'} font-medium`}>
                      {currentContent.contact.socials.wechatId}
                    </code>
                    <span className="ml-2 text-xs">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border-t`}>
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center space-x-3 ">
              <div
                  className="w-[150px] h-7 flex items-center justify-center mx-auto py-10 mb-10 cursor-pointer"
                  onClick={() => scrollToSection('home')}   // 👈 lowercase to match id="home"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToSection('home')}
                  aria-label="Go to top"
              >
                <img src="/alliance-logistics-logo.png" alt="Alliance Logistics"
                     className="w-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"/>
              </div>
            </div>
            <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>© {year} Alliance Logistics. All rights
              reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default ModernLogisticsWebsite;
