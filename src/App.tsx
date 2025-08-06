import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, FileText, Shield, MessageCircle, Upload, Check, X, ExternalLink, User, Building2, Calendar, Award, Star, Send, Download, Eye, Clock, Globe, Users, Target, Lightbulb } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({});
  const [formData, setFormData] = useState({
    contact: { name: '', email: '', phone: '', message: '' },
    support: { name: '', email: '', issue: '', priority: 'medium' },
    verification: { 
      representative: '', 
      cpf: '', 
      position: '', 
      appId: '', 
      appSecret: '',
      domainVerification: 'meta-tag'
    }
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'about', label: 'Sobre', icon: Users },
    { id: 'services', label: 'Serviços', icon: Award },
    { id: 'testimonials', label: 'Depoimentos', icon: Star },
    { id: 'contact', label: 'Contato', icon: Phone },
    { id: 'business-manager', label: 'Business Manager', icon: MessageCircle },
    { id: 'support', label: 'Suporte', icon: Shield }
  ];

  const companyData = {
    cnpj: '51.991.144/0001-35',
    razaoSocial: 'OLIVIA FARIA  PROVEDORES DE CONTEUDO LTDA',
    nomeFantasia: 'OLIVIA FARIA  PROVEDORES DE CONTEUDO LTDA',
    inscricaoEstadual: '123.453.783.012',
    inscricaoMunicipal: '987654322',
    endereco: {
      rua: 'Rua Major José de Barros, 167',
      bairro: 'Centro',
      cidade: 'João Pessoa',
      uf: 'PB',
      cep: '58013-410'
    },
    telefone: '(11) 3426-7890',
    email: 'contato@olivia.com.br',
    fundacao: '29/08/2023'
  };

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de websites modernos e responsivos com as melhores tecnologias do mercado.',
      features: ['React/Next.js', 'Node.js', 'Design Responsivo', 'SEO Otimizado']
    },
    {
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'APIs REST', 'Push Notifications']
    },
    {
      title: 'Consultoria Digital',
      description: 'Estratégias digitais personalizadas para transformação e crescimento empresarial.',
      features: ['Análise de Mercado', 'UX/UI Design', 'Automação', 'Analytics']
    },
    {
      title: 'WhatsApp Business API',
      description: 'Integração e automação completa com WhatsApp Business para empresas.',
      features: ['Chatbots', 'Automação', 'CRM Integration', 'Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Meu Mundo Provedores Ltda',
      text: 'Excelente trabalho! A Meu Mundo Provedores entregou nosso projeto no prazo e superou nossas expectativas.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Digital Plus',
      text: 'Profissionais extremamente competentes. Recomendo para qualquer empresa que busca inovação.',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      company: 'StartUp Brasil',
      text: 'A integração com WhatsApp Business revolucionou nosso atendimento ao cliente.',
      rating: 5
    }
  ];

  const faqData = [
    {
      question: 'Como funciona a verificação do WhatsApp Business Manager?',
      answer: 'A verificação requer documentos da empresa, representante legal e configuração de domínio. Nosso time guia você em cada etapa do processo.'
    },
    {
      question: 'Quanto tempo leva para configurar a API do WhatsApp?',
      answer: 'Após a aprovação da verificação pela Meta, a configuração da API leva de 2 a 5 dias úteis.'
    },
    {
      question: 'Posso usar meu número pesual para WhatsApp Business?',
      answer: 'Não recomendamos. É melhor usar um número comercial dedicado para manter a separação entre pessoal e profissional.'
    },
    {
      question: 'Quais documentos são necessários para verificação?',
      answer: 'CNPJ, comprovante de endereço, documento do representante legal e estatuto/contrato social.'
    }
  ];

  const handleFileUpload = (fileType: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [fileType]: file }));
  };

  const handleFormSubmit = (formType: string) => {
    if (!privacyAccepted && formType !== 'verification') {
      alert('Por favor, aceite a política de privacidade antes de continuar.');
      return;
    }
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    if (formType === 'contact') {
      setFormData(prev => ({ ...prev, contact: { name: '', email: '', phone: '', message: '' } }));
    } else if (formType === 'support') {
      setFormData(prev => ({ ...prev, support: { name: '', email: '', issue: '', priority: 'medium' } }));
    }
  };

  const generateToken = () => {
    const token = 'temp_' + Math.random().toString(36).substr(2, 20);
    navigator.clipboard.writeText(token);
    alert('Token temporário copiado para a área de transferência!');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const renderHome = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {companyData.nomeFantasia}
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transformando ideias em soluções tecnológicas inovadoras desde 2016. 
            Conectamos empresas ao futuro através da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentSection('contact')}
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </button>
            <button 
              onClick={() => setCurrentSection('services')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Missão</h3>
          <p className="text-gray-600 leading-relaxed">
            Desenvolver soluções tecnológicas inovadoras que impulsionem o crescimento 
            e a eficiência dos nossos clientes, sempre priorizando qualidade e resultados.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <Eye className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Visão</h3>
          <p className="text-gray-600 leading-relaxed">
            Ser reconhecida como referência em inovação tecnológica, conectando empresas 
            ao futuro digital de forma sustentável e eficiente.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <Lightbulb className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Valores</h3>
          <p className="text-gray-600 leading-relaxed">
            Inovação, transparência, excelência, comprometimento com resultados 
            e foco na satisfação total dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte Disponível</div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a {companyData.nomeFantasia}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Uma jornada de inovação e excelência tecnológica desde 2016
        </p>
      </div>

      {/* Company History */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-6">
          <Calendar className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800">Nossa História</h3>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">2016 - Fundação</h4>
            <p className="text-gray-600">
              Em 04 de março de 2016, a {companyData.razaoSocial} foi fundada com o objetivo 
              de democratizar o acesso à tecnologia para pequenas e médias empresas.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">2018 - Expansão</h4>
            <p className="text-gray-600">
              Expandimos nossos serviços para incluir desenvolvimento mobile e consultoria 
              digital, atendendo mais de 50 clientes em todo o Brasil.
            </p>
          </div>
          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">2020 - Inovação</h4>
            <p className="text-gray-600">
              Pioneiros na implementação de soluções WhatsApp Business API, 
              ajudando empresas a transformar seu atendimento ao cliente.
            </p>
          </div>
          <div className="border-l-4 border-orange-600 pl-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">2025 - Presente</h4>
            <p className="text-gray-600">
              Continuamos inovando e crescendo, sempre focados em entregar 
              soluções que fazem a diferença para nossos clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Nossa Equipe</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-2">João Silva</h4>
            <p className="text-blue-600 mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              15+ anos em tecnologia, especialista em transformação digital.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Maria Santos</h4>
            <p className="text-green-600 mb-2">CTO</p>
            <p className="text-gray-600 text-sm">
              Arquiteta de software sênior, especialista em React e Node.js.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Carlos Lima</h4>
            <p className="text-purple-600 mb-2">Head of Design</p>
            <p className="text-gray-600 text-sm">
              Designer UX/UI com foco em experiências digitais excepcionais.
            </p>
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Nossos Diferenciais Competitivos
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Metodologia Ágil</h4>
              <p className="text-gray-600">
                Desenvolvimento iterativo com entregas frequentes e feedback contínuo.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Suporte 24/7</h4>
              <p className="text-gray-600">
                Atendimento contínuo para garantir que sua operação nunca pare.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tecnologia de Ponta</h4>
              <p className="text-gray-600">
                Sempre utilizamos as tecnologias mais modernas e estáveis do mercado.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Time Especializado</h4>
              <p className="text-gray-600">
                Profissionais certificados e constantemente atualizados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Soluções completas para transformar sua empresa digitalmente
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-700 mb-3">Características:</h4>
              {service.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Saiba Mais
            </button>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-center mb-8">Outros Serviços</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Segurança Digital</h4>
            <p className="text-sm text-gray-600">Proteção e auditoria de sistemas</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Cloud Computing</h4>
            <p className="text-sm text-gray-600">Migração e gestão em nuvem</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Treinamentos</h4>
            <p className="text-sm text-gray-600">Capacitação técnica para equipes</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold mb-2">Outsourcing</h4>
            <p className="text-sm text-gray-600">Terceirização de TI completa</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
        <p className="text-xl text-gray-600">O que nossos clientes falam sobre nós</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-blue-600 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Testimonial */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold text-center mb-6">Compartilhe sua Experiência</h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <textarea
            placeholder="Conte-nos sobre sua experiência..."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Avaliação:</span>
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="w-5 h-5 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Enviar Depoimento
          </button>
        </form>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
        <p className="text-xl text-gray-600">Estamos prontos para atender você</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Envie sua Mensagem</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleFormSubmit('contact'); }}>
            <input
              type="text"
              placeholder="Nome completo"
              value={formData.contact.name}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, name: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.contact.email}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="tel"
              placeholder="Telefone"
              value={formData.contact.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={5}
              value={formData.contact.message}
              onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, message: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
            
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacy-contact"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="privacy-contact" className="text-sm text-gray-600">
                Li e aceito a <button type="button" className="text-blue-600 hover:underline">Política de Privacidade</button> e 
                os <button type="button" className="text-blue-600 hover:underline">Termos de Uso</button>
              </label>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>{companyData.telefone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>{companyData.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p>{companyData.endereco.rua}</p>
                  <p>{companyData.endereco.bairro} - {companyData.endereco.cidade}/{companyData.endereco.uf}</p>
                  <p>CEP: {companyData.endereco.cep}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Data */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Dados Corporativos</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">CNPJ:</span> {companyData.cnpj}</p>
              <p><span className="font-semibold">Razão Social:</span> {companyData.razaoSocial}</p>
              <p><span className="font-semibold">Nome Fantasia:</span> {companyData.nomeFantasia}</p>
              <p><span className="font-semibold">Inscrição Estadual:</span> {companyData.inscricaoEstadual}</p>
              <p><span className="font-semibold">Inscrição Municipal:</span> {companyData.inscricaoMunicipal}</p>
              <p><span className="font-semibold">Fundação:</span> {companyData.fundacao}</p>
            </div>
          </div>

          {/* Document Upload */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Documentos Corporativos</h3>
            <div className="space-y-3">
              {[
                { key: 'cnpj', label: 'Cartão CNPJ' },
                { key: 'contrato', label: 'Contrato Social' },
                { key: 'comprovante', label: 'Comprovante de Endereço' },
                { key: 'identidade', label: 'RG do Representante Legal' }
              ].map(doc => (
                <div key={doc.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-sm">{doc.label}</span>
                  <div className="flex items-center space-x-2">
                    {uploadedFiles[doc.key] ? (
                      <span className="text-green-600 text-sm flex items-center">
                        <Check className="w-4 h-4 mr-1" />
                        Enviado
                      </span>
                    ) : (
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => e.target.files && handleFileUpload(doc.key, e.target.files[0])}
                        />
                        <div className="flex items-center text-blue-600 hover:text-blue-700">
                          <Upload className="w-4 h-4 mr-1" />
                          <span className="text-sm">Upload</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessManager = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">WhatsApp Business Manager</h2>
        <p className="text-xl text-gray-600">Verificação e configuração completa para sua empresa</p>
      </div>

      {/* Verification Process */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Processo de Verificação</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">1</div>
            <h4 className="font-semibold mb-2">Documentação</h4>
            <p className="text-sm text-gray-600">Envio dos documentos corporativos necessários</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">2</div>
            <h4 className="font-semibold mb-2">Verificação</h4>
            <p className="text-sm text-gray-600">Análise pela Meta e confirmação dos dados</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">3</div>
            <h4 className="font-semibold mb-2">Configuração</h4>
            <p className="text-sm text-gray-600">Setup da API e início das operações</p>
          </div>
        </div>

        {/* Verification Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Representante Legal
              </label>
              <input
                type="text"
                value={formData.verification.representative}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  verification: { ...prev.verification, representative: e.target.value } 
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CPF do Representante
              </label>
              <input
                type="text"
                value={formData.verification.cpf}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  verification: { ...prev.verification, cpf: e.target.value } 
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="000.000.000-00"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cargo na Empresa
            </label>
            <input
              type="text"
              value={formData.verification.position}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                verification: { ...prev.verification, position: e.target.value } 
              }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Diretor, Sócio, CEO"
            />
          </div>

          {/* Domain Verification */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Verificação de Domínio</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Método de Verificação
                </label>
                <select
                  value={formData.verification.domainVerification}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    verification: { ...prev.verification, domainVerification: e.target.value } 
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="meta-tag">Meta Tag HTML</option>
                  <option value="dns-txt">Registro DNS TXT</option>
                </select>
              </div>
              
              {formData.verification.domainVerification === 'meta-tag' ? (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Adicione esta meta tag ao &lt;head&gt; do seu site:</p>
                  <code className="bg-white p-2 rounded border text-sm block">
                    &lt;meta name="facebook-domain-verification" content="xyz123abc456def789" /&gt;
                  </code>
                </div>
              ) : (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Adicione este registro TXT ao DNS do seu domínio:</p>
                  <code className="bg-white p-2 rounded border text-sm block">
                    facebook-domain-verification=xyz123abc456def789
                  </code>
                </div>
              )}
            </div>
          </div>

          {/* API Configuration */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                App ID
              </label>
              <input
                type="text"
                value={formData.verification.appId}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  verification: { ...prev.verification, appId: e.target.value } 
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Seu App ID do Facebook"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                App Secret
              </label>
              <input
                type="password"
                value={formData.verification.appSecret}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  verification: { ...prev.verification, appSecret: e.target.value } 
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Seu App Secret"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleFormSubmit('verification')}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Iniciar Processo de Verificação
          </button>
        </form>
      </div>

      {/* API Examples */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Exemplos de Uso da API</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Exemplo de Payload JSON para Envio de Mensagem</h4>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "messaging_product": "whatsapp",
  "to": "5511999999999",
  "type": "text",
  "text": {
    "preview_url": false,
    "body": "Olá! Esta é uma mensagem de teste via WhatsApp Business API."
  }
}`}
            </pre>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Exemplo de Requisição cURL</h4>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST \\
  'https://graph.facebook.com/v18.0/PHONE_NUMBER_ID/messages' \\
  -H 'Authorization: Bearer ACCESS_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "messaging_product": "whatsapp",
    "to": "5511999999999",
    "type": "text",
    "text": {
      "body": "Sua mensagem aqui"
    }
  }'`}
            </pre>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={generateToken}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Gerar Token Temporário</span>
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center space-x-2">
              <ExternalLink className="w-4 h-4" />
              <span>Documentação da API</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Suporte e FAQ</h2>
        <p className="text-xl text-gray-600">Tire suas dúvidas e obtenha ajuda</p>
      </div>

      {/* Quick Support */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Suporte Rápido</h3>
          <div className="space-y-4">
            <a 
              href={`https://wa.me/5511999999999?text=Olá! Preciso de ajuda com meu projeto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-sm text-gray-600">Atendimento imediato</p>
              </div>
            </a>
            <a 
              href={`tel:${companyData.telefone}`}
              className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold">Telefone</h4>
                <p className="text-sm text-gray-600">{companyData.telefone}</p>
              </div>
            </a>
            <a 
              href={`mailto:${companyData.email}`}
              className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="font-semibold">E-mail</h4>
                <p className="text-sm text-gray-600">{companyData.email}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Support Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Formulário de Suporte</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleFormSubmit('support'); }}>
            <input
              type="text"
              placeholder="Nome completo"
              value={formData.support.name}
              onChange={(e) => setFormData(prev => ({ ...prev, support: { ...prev.support, name: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.support.email}
              onChange={(e) => setFormData(prev => ({ ...prev, support: { ...prev.support, email: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              value={formData.support.priority}
              onChange={(e) => setFormData(prev => ({ ...prev, support: { ...prev.support, priority: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Baixa Prioridade</option>
              <option value="medium">Média Prioridade</option>
              <option value="high">Alta Prioridade</option>
              <option value="urgent">Urgente</option>
            </select>
            <textarea
              placeholder="Descreva seu problema ou dúvida..."
              rows={5}
              value={formData.support.issue}
              onChange={(e) => setFormData(prev => ({ ...prev, support: { ...prev.support, issue: e.target.value } }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacy-support"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1"
                required
              />
              <label htmlFor="privacy-support" className="text-sm text-gray-600">
                Li e aceito a <button type="button" className="text-blue-600 hover:underline">Política de Privacidade</button>
              </label>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold mb-8 text-center">Perguntas Frequentes</h3>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-semibold">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Policies */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center">Políticas e Termos</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h4 className="font-semibold">Política de Privacidade</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Saiba como coletamos, usamos e protegemos suas informações pessoais.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Ler Política Completa
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h4 className="font-semibold">Termos de Uso</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Conheça os termos e condições para utilização dos nossos serviços.
            </p>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Ler Termos Completos
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (currentSection) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'services': return renderServices();
      case 'testimonials': return renderTestimonials();
      case 'contact': return renderContact();
      case 'business-manager': return renderBusinessManager();
      case 'support': return renderSupport();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
      <meta name="facebook-domain-verification" content="l8kwnb9ygt8bgdwltvwdpado6jzvei" />
      </Helmet>
      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <Check className="w-5 h-5" />
          <span>Enviado com sucesso!</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">{companyData.nomeFantasia}</h1>
                <p className="text-xs text-gray-500">{companyData.cnpj}</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navigation.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-1 p-2 pt-0">
          {navigation.slice(4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {getCurrentContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">{companyData.nomeFantasia}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Transformando ideias em soluções tecnológicas inovadoras desde 2016.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Desenvolvimento Web</li>
                <li>Aplicativos Mobile</li>
                <li>Consultoria Digital</li>
                <li>WhatsApp Business API</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Sobre Nós</li>
                <li>Nossa Equipe</li>
                <li>Carreira</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>{companyData.telefone}</p>
                <p>{companyData.email}</p>
                <p>{companyData.endereco.cidade}/{companyData.endereco.uf}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>© 2025 {companyData.razaoSocial}. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: {companyData.cnpj}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/5511999999999?text=Olá! Vim através do site da ${companyData.nomeFantasia} e gostaria de mais informações.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}

export default App;