import blueCables from '../assets/Blue-cables.jpg'
import botLogo from '../assets/BOT.png'
import crdbLogo from '../assets/crdb.png'
import nbcLogo from '../assets/NBC.png'
import nmbLogoNew from '../assets/NMB.jpeg'
import powerSupply from '../assets/power-supply.jpg'
import trcLogo from '../assets/TRC.jpeg'
import telecommunications from '../assets/telecommuications.jpg'
import twigaLogo from '../assets/Twiga.png'

export const siteContent = {
  companyName: 'SuperTech Limited',
  tagline: 'Electrical, ICT and Telecommunications Solutions',
  topBar: {
    descriptor: 'Electrical & Telecommunication Contractors',
    location: 'Ubungo, Urafiki Flats Block G5, P. O Box 33756 Dar es Salaam.',
    contact: 'Tel: 0784 777 711, 0655 777 711',
    email: 'info@supertechltd.co.tz',
  },
  aboutSummary: [
    'SuperTech Limited was incorporated on 9th January 2006 with certificate number 55155 as a specialized engineering contractor in Tanzania.',
    'The firm is registered by the Contractors Registration Board as Class Five Electrical Contractor (E5/0070/05/2006) and Class Three Specialist Contractor - Telecommunications (SPE3/0273/05/2006).',
    'From our Ubungo office in Dar es Salaam, we deliver end-to-end electrical, telecommunications and ICT services with practical field experience and quality-first execution.',
  ],
  whoWeAre:
    'SuperTech Limited is an electrical and telecommunications contractor focused on high-quality project execution, standards compliance and reliable long-term service for public and private sector clients.',
  vision:
    'To deliver quality services and workmanship that exceed customer expectations through trained, skilled and experienced technical personnel.',
  mission:
    'To remain an ethical, efficient and respected contractor across Electrical, ICT and Telecommunications industries.',
  motto: 'Quality Execution, Standards, Specifications.',
  companyFacts: [
    { label: 'Incorporated', value: '9 January 2006' },
    { label: 'Certificate Number', value: '55155' },
    {
      label: 'CRB Electrical',
      value: 'Class Five - E5/0070/05/2006',
    },
    {
      label: 'CRB Telecommunications',
      value: 'Class Three Specialist - SPE3/0273/05/2006',
    },
    { label: 'Managing Director', value: 'Eng. Shililiandumi Naiman' },
  ],
  whatWeDo: [
    'Electrical and power systems installation',
    'Telecommunications systems installation',
    'Supply of electrical and telecom equipment',
    'Electrical servicing and control system planning',
    'Supply and installation of solar energy systems',
    'Fire detection and alarm system installations',
    'Networking of voice and data',
    'PABX and telephony system installation',
    'CCTV, biometric access control and attendance systems',
  ],
  clients: [
    'Tanzania Electrical Supply Company (TANESCO)',
    'National Microfinance Bank (NMB)',
    'Tanzania Building Agency (TBA)',
    'Tanzania Meteorological Agency (TMA)',
    'Public Procurement Regulatory Authority (PPRA)',
    'Tanzania Revenue Authority (TRA)',
    'Ministry of Natural Resources and Tourism',
    'Ministry of Health and Social Welfare',
    'Muhimbili University of Health and Allied Sciences (MUHAS)',
  ],
  services: [
    {
      title: 'Electrical and Power Solutions',
      description:
        'Installation, servicing, testing and commissioning of electrical systems, generators, and solar energy systems for residential, commercial and industrial environments.',
      bullets: [
        'Electrical installations and commissioning',
        'Generator installations and commissioning',
        'Energy usage analysis and optimization',
        'Solar energy system installations',
        'Servicing of electrical equipment and accessories',
      ],
      image: powerSupply,
    },
    {
      title: 'Telecommunication Systems Solutions',
      description:
        'Reliable communication and connectivity systems with secure and scalable network infrastructure.',
      bullets: [
        'Supply, installation and service of telecom equipment',
        'GSM equipment and microwave links installation',
        'Site surveys and data collection for cellular expansion',
        'Voice and data networking',
        'Structured data cabling and VoIP solutions',
        'Fibre optic network installation',
      ],
      image: telecommunications,
    },
    {
      title: 'ICT Services',
      description:
        'Integrated ICT and security systems for enterprise operations and facilities.',
      bullets: [
        'CCTV surveillance security systems',
        'Biometric access control systems',
        'Time and attendance systems',
        'Fire detection and alarm installations',
      ],
      image: blueCables,
    },
    {
      title: 'Supply of Equipment',
      description:
        'Supply of essential office, telecommunications and electrical equipment suited to your operational requirements.',
      bullets: [
        'Computers, photocopiers, UPS and printers',
        'Telecommunication equipment and accessories',
        'Solar energy equipment supply',
        'Electrical equipment and accessories',
      ],
      image: blueCables,
    },
  ],
  productsSupplied: [
    'Computers, photocopiers, UPS and printers',
    'Telecommunications equipment and accessories',
    'Structured cabling and network accessories',
    'Electrical equipment and accessories',
    'Solar systems and supporting components',
  ],
  contact: {
    phone: '+255(0)784 777711 / +255(0)655 777711',
    mailingAddress: 'P.O. Box 33756',
    location: 'Urafiki Flats, Block G no. 5 (near Police Station), Dar es Salaam, Tanzania.',
    email: 'info@supertechltd.co.tz',
    mapImage: '/assets/images/logo/map.jpg',
  },
  heroSlides: [
    {
      title: 'Electrical and Power Installation',
      subtitle: 'Trusted execution for safe and efficient power systems.',
      image: powerSupply,
    },
    {
      title: 'Telecommunication Systems',
      subtitle: 'Scalable voice and data connectivity for modern teams.',
      image: telecommunications,
    },
    {
      title: 'ICT and Equipment Supply',
      subtitle: 'Reliable equipment and support for daily operations.',
      image: blueCables,
    },
  ],
  kpis: [
    { value: '19+', label: 'Years of delivery' },
    { value: '200+', label: 'Projects and assignments delivered' },
    { value: '40+', label: 'Institutional and enterprise clients' },
  ],
  valuePillars: [
    'Quality execution with standards and specifications',
    'Experienced teams across electrical, ICT and telecom',
    'Reliable implementation from planning to commissioning',
  ],
  projectsPortfolio: [
    {
      title: 'Structured Cabling Network Installation',
      client: 'NBC Bank Tandahimba Branch',
      summary:
        'Designed and installed structured network cabling for branch connectivity and reliable data operations.',
    },
    {
      title: 'SCADA Gateway Supply for Substation Automation',
      client: 'TANESCO (Dege Beach, Ilala and Masaki Substations)',
      summary:
        'Supplied SCADA gateway equipment for integration of substations into automation and control systems.',
    },
    {
      title: 'Barrier Gate Installation',
      client: 'NSSF - Nyerere Bridge',
      summary:
        'Implemented barrier gate systems to support controlled and secure access operations.',
    },
    {
      title: 'AFIS Biometric Equipment and Card Printer Support',
      client: 'Tanzania Revenue Authority',
      summary:
        'Provided maintenance, repair and equipment supply for biometric and card printer operations.',
    },
    {
      title: 'Fiber Optic Link and Ring Network Deployments',
      client: 'NMB and TANESCO HQ',
      summary:
        'Delivered fiber links and ring connectivity between HQ buildings, substations and key network nodes.',
    },
    {
      title: 'Airmax and Grid Control Integration Equipment',
      client: 'Zantel and TANESCO',
      summary:
        'Supplied and integrated equipment for B2B telecom connectivity and grid control communication.',
    },
  ],
  partners: [
    { name: 'TANESCO', logo: '/assets/images/partners/tanesco.png' },
    { name: 'TMA', logo: '/assets/images/partners/tma.png' },
    { name: 'TBA', logo: '/assets/images/partners/tba.png' },
    { name: 'PPRA', logo: '/assets/images/partners/ppra.png' },
   
    { name: 'TRA', logo: '/assets/images/partners/tra.jpg' },
    { name: 'TRC', logo: trcLogo },
    { name: 'NMB (New)', logo: nmbLogoNew },
    { name: 'NBC', logo: nbcLogo },
    { name: 'Bank of Tanzania', logo: botLogo },
    { name: 'CRDB Bank', logo: crdbLogo },
    { name: 'Twiga Cement', logo: twigaLogo },
  ],
} as const
