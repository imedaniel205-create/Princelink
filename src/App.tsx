import { useEffect, useState, type ReactNode, type ChangeEvent, type FormEvent } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Building2, Check, ChevronRight, ClipboardList, Compass, Layers3, Menu, Network, Settings2, Target, TrendingUp, Workflow, X } from 'lucide-react';
import { challenges, process, services } from './data';

const brandLine = 'STRATEGY. STRUCTURE. SUSTAINABLE GROWTH.';

function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = { '/': 'Princelink | Business Management & Consulting', '/about': 'About Princelink | Stronger Business Foundations', '/services': 'Services | Princelink Business Consulting', '/approach': 'Our Approach | Princelink', '/insights': 'Insights | Princelink', '/contact': 'Contact Princelink | Business Management & Consulting' };
    const descriptions: Record<string, string> = { '/': 'Princelink helps small and medium-sized businesses strengthen management systems, improve operational efficiency and implement practical solutions for sustainable growth.', '/about': 'Learn about Princelink and its practical approach to business management, organisational clarity and operational improvement.', '/services': 'Explore Princelink services in business process improvement, organisational structure, operations management and more.', '/approach': 'Discover the Princelink process: Diagnose, Strategise, Implement and Evaluate.', '/insights': 'Practical perspectives on business operations, management systems and organisational structure from Princelink.', '/contact': 'Contact Princelink to discuss business management, operational challenges and practical improvements.' };
    document.title = titles[pathname] || 'Princelink | Business Management & Consulting';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', descriptions[pathname] || descriptions['/']);
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  const links = [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Our Approach', '/approach'], ['Insights', '/insights'], ['Contact', '/contact']];
  return <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" to="/" aria-label="Princelink home"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRINCELINK<small>BUSINESS MANAGEMENT &amp; CONSULTING</small></span></Link>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
        <Link className="nav-cta" to="/contact">Book a consultation <ArrowUpRight size={15}/></Link>
      </nav>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-main">
      <div className="footer-brand"><Link className="brand brand-light" to="/"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRINCELINK<small>BUSINESS MANAGEMENT &amp; CONSULTING</small></span></Link><p>{brandLine}</p><p className="footer-summary">Practical management and operational support for businesses ready to work better.</p></div>
      <div><h4>Explore</h4><Link to="/">Home</Link><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/approach">Our approach</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link></div>
      <div><h4>Our expertise</h4>{services.map(s => <Link key={s.number} to="/services">{s.title}</Link>)}</div>
      <div><h4>Get in touch</h4><p className="footer-summary">Contact details will be added when officially supplied.</p><Link className="footer-contact" to="/contact">Make an enquiry <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Princelink. All rights reserved.</span><span>{brandLine}</span></div>
  </footer>;
}

function ButtonLink({to, children, secondary=false}:{to:string;children:ReactNode;secondary?:boolean}) {
  return <Link className={secondary ? 'button button-outline' : 'button button-gold'} to={to}>{children}<ArrowUpRight size={16}/></Link>;
}

function Eyebrow({children,light=false}:{children:ReactNode;light?:boolean}) { return <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}><span />{children}</div>; }

function PageIntro({eyebrow,title,description}:{eyebrow:string;title:ReactNode;description:string}) {
  return <section className="page-intro"><div className="container"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div></section>;
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-photo" role="img" aria-label="Contemporary glass skyscraper rising into the sky" />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Eyebrow light>Business Management &amp; Consulting</Eyebrow>
          <h1>STRATEGY.<br/>STRUCTURE.<br/><em>SUSTAINABLE GROWTH.</em></h1>
          <p>Princelink helps small and medium-sized businesses strengthen their management systems, improve operational efficiency and implement practical solutions for sustainable growth.</p>
          <div className="hero-actions"><ButtonLink to="/services">Explore our services</ButtonLink><ButtonLink to="/contact" secondary>Book a consultation</ButtonLink></div>
          <div className="hero-note"><span className="note-line"/><span>Advisory insight. Practical implementation.</span></div>
        </div>
        <div className="hero-side-note"><span>01 / BUSINESS TRANSFORMATION</span><span>Built around the way business works.</span></div>
      </div>
      <div className="hero-bottom container"><span>MANAGEMENT • OPERATIONS • ORGANISATIONAL CLARITY</span><a href="#introduction">Discover Princelink <ArrowDownRight size={15}/></a></div>
    </section>

    <section className="intro-section section-pad" id="introduction"><div className="container intro-grid">
      <div className="intro-image-wrap"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Modern professional office meeting space" loading="lazy"/><div className="image-caption"><span>THE PRINCELINK PERSPECTIVE</span><strong>Better foundations.<br/>Stronger businesses.</strong></div></div>
      <div className="intro-copy"><Eyebrow>Who we are</Eyebrow><h2>Building stronger businesses through <em>better management.</em></h2><p>Every successful business requires more than ambition. It needs effective management, clear organisational structures and operational systems that support consistent performance.</p><p>Princelink works with small and medium-sized businesses to identify management challenges, develop practical solutions and implement improvements that strengthen the way businesses operate.</p><Link className="text-link" to="/about">Get to know Princelink <ArrowUpRight size={16}/></Link></div>
    </div></section>

    <section className="challenges-section section-pad"><div className="container"><div className="section-heading split-heading"><div><Eyebrow>Business realities</Eyebrow><h2>The challenges that<br/><em>hold businesses back.</em></h2></div><p>As businesses evolve, the systems that once worked may need to evolve with them. These are common areas where clearer management and operational practices can make a difference.</p></div><div className="challenge-grid">{challenges.map((item,i)=><div className="challenge-item" key={item}><span>0{i+1}</span><p>{item}</p><ArrowUpRight size={17}/></div>)}</div></div></section>

    <section className="services-section section-pad"><div className="container"><div className="section-heading section-heading-light"><Eyebrow light>What we do</Eyebrow><h2>Our expertise.<br/><em>Your business advantage.</em></h2><p>Practical management and operational solutions designed to help businesses function more effectively.</p></div><div className="service-grid">{services.map((s,i)=>{const icons=[Workflow,Network,Settings2,Layers3,TrendingUp,ClipboardList];const Icon=icons[i];return <Link className="service-card" to={`/services#service-${s.number}`} key={s.number}><div className="service-card-top"><span>{s.number}</span><Icon size={23}/></div><h3>{s.title}</h3><p>{s.short}</p><span className="card-link">Learn more <ArrowUpRight size={15}/></span></Link>})}</div><div className="services-foot"><span>Six areas of focus. One practical objective: better business operations.</span><Link className="text-link text-link-light" to="/services">View all services <ArrowRight size={16}/></Link></div></div></section>

    <section className="approach-section section-pad"><div className="container"><div className="section-heading split-heading"><div><Eyebrow>How we work</Eyebrow><h2>A practical approach to<br/><em>business improvement.</em></h2></div><p>We combine informed business assessment, strategic recommendations and practical implementation to help businesses make meaningful improvements.</p></div><div className="process-grid">{process.map((p,i)=><div className="process-item" key={p.number}><div className="process-number">{p.number}<span>{i===0?'—': '↗'}</span></div><h3>{p.title}</h3><p>{p.text}</p></div>)}</div><div className="approach-link"><Link className="text-link" to="/approach">Explore our approach <ArrowUpRight size={16}/></Link></div></div></section>

    <section className="why-section section-pad"><div className="container why-grid"><div><Eyebrow light>Why Princelink</Eyebrow><h2>Thoughtful advice.<br/><em>Practical progress.</em></h2><p>Business improvement is more than identifying what needs to change. It is about creating workable solutions and helping put them into practice.</p><ButtonLink to="/about" secondary>Discover our philosophy</ButtonLink></div><div className="why-list">{['Practical solutions rather than recommendations alone','Attention to management and operational efficiency','Solutions shaped around each business','Collaborative advisory and implementation','A focus on sustainable management improvements'].map((t,i)=><div key={t}><span>0{i+1}</span><p>{t}</p><Check size={18}/></div>)}</div></div></section>

    <section className="insights-preview section-pad"><div className="container insights-empty"><div><Eyebrow>Ideas &amp; perspectives</Eyebrow><h2>Perspectives that move<br/><em>businesses forward.</em></h2><p>Practical thinking on business operations, management systems and the structures that support sustainable growth.</p></div><div className="empty-editorial"><div className="empty-icon"><Compass size={28}/></div><span>THE PRINCELINK JOURNAL</span><h3>Fresh perspectives are in development.</h3><p>Our insights library will feature useful articles on building stronger management foundations.</p><Link className="text-link" to="/insights">Visit insights <ArrowUpRight size={16}/></Link></div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><Eyebrow light>Take the next step</Eyebrow><h2>Ready to build a<br/><em>stronger business?</em></h2><p>Let's explore how better management, stronger structures and practical solutions can help your business move forward.</p><ButtonLink to="/contact">Book a consultation</ButtonLink></div></section>
  </>;
}

function About() {
  return <><PageIntro eyebrow="About Princelink" title={<>Better management.<br/><em>Stronger foundations.</em></>} description="We support small and medium-sized businesses in strengthening the systems, structures and operations that keep business moving."/>
    <section className="section-pad"><div className="container intro-grid about-intro"><div className="intro-image-wrap"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Colleagues collaborating around a table" loading="lazy"/><div className="image-caption"><span>OUR PURPOSE</span><strong>Make better ways<br/>of working possible.</strong></div></div><div className="intro-copy"><Eyebrow>Our company</Eyebrow><h2>Management that works in the <em>real world.</em></h2><p>Princelink is a business management and consulting company focused on helping small and medium-sized businesses operate with greater clarity, coordination and effectiveness.</p><p>Our work brings advisory thinking together with practical implementation. We help businesses understand their management challenges, shape relevant improvements and work through the changes needed to put those improvements into practice.</p></div></div></section>
    <section className="philosophy-section section-pad"><div className="container philosophy-grid"><div><Eyebrow light>Our philosophy</Eyebrow><h2>Good strategy needs<br/><em>strong structure.</em></h2></div><div><p className="large-copy">Sustainable business growth is supported by the everyday systems, decisions and working relationships that make an organisation effective.</p><p>We believe meaningful improvement begins with understanding how a business actually works. From there, practical recommendations and collaborative implementation can help establish stronger ways of operating.</p></div></div></section>
    <section className="section-pad values-section"><div className="container"><div className="section-heading"><Eyebrow>What guides us</Eyebrow><h2>Principles behind <em>our work.</em></h2></div><div className="values-grid">{[{n:'01',t:'Clarity',d:'Make roles, processes and expectations easier to understand.'},{n:'02',t:'Practicality',d:'Focus on solutions that can work in the realities of a business.'},{n:'03',t:'Collaboration',d:'Work alongside clients through assessment and implementation.'},{n:'04',t:'Accountability',d:'Encourage clear responsibilities and consistent follow-through.'},{n:'05',t:'Continuous improvement',d:'Treat better management as an ongoing business discipline.'},{n:'06',t:'Integrity',d:'Approach every engagement with honesty and professional care.'}].map(v=><div className="value-card" key={v.n}><span>{v.n}</span><h3>{v.t}</h3><p>{v.d}</p></div>)}</div></div></section>
    <section className="mission-vision section-pad"><div className="container mv-grid"><div><Eyebrow>Proposed mission</Eyebrow><h2>Help businesses work <em>better.</em></h2><p>To help small and medium-sized businesses strengthen their management foundations through practical advice, effective systems and collaborative implementation.</p><span className="proposal-note">Proposed statement — subject to company approval</span></div><div><Eyebrow>Proposed vision</Eyebrow><h2>Growth built on <em>strong foundations.</em></h2><p>To contribute to a business environment where organisations are better structured, more effectively managed and equipped to improve sustainably.</p><span className="proposal-note">Proposed statement — subject to company approval</span></div></div></section>
    <section className="final-cta"><div className="container final-cta-inner"><Eyebrow light>Work with us</Eyebrow><h2>Let's strengthen<br/><em>the way you work.</em></h2><ButtonLink to="/contact">Start a conversation</ButtonLink></div></section></>;
}

function Services() {
  return <><PageIntro eyebrow="Our services" title={<>Management expertise.<br/><em>Practical business impact.</em></>} description="Focused advisory and implementation support across the management systems, structures and operations that help businesses function effectively."/>
    <section className="section-pad"><div className="container service-detail-list">{services.map((s,i)=><article className="service-detail" id={`service-${s.number}`} key={s.number}><div className="service-detail-number">{s.number}<span> / 06</span></div><div className="service-detail-main"><h2>{s.title}</h2><p className="large-copy">{s.detail}</p><div className="detail-columns"><div><h4>Business challenges addressed</h4><ul>{s.problems.map(p=><li key={p}>{p}</li>)}</ul></div><div><h4>What an engagement may involve</h4><p>{s.engagement}</p></div></div><Link className="text-link" to="/contact">Discuss this service <ArrowUpRight size={16}/></Link></div><div className="service-detail-icon">{[<Workflow/>,<Network/>,<Settings2/>,<Layers3/>,<TrendingUp/>,<ClipboardList/>][i]}</div></article>)}</div></section>
    <section className="final-cta"><div className="container final-cta-inner"><Eyebrow light>Start with a conversation</Eyebrow><h2>Let's find the right<br/><em>way forward.</em></h2><p>Tell us about your business and the management improvements you are considering.</p><ButtonLink to="/contact">Book a consultation</ButtonLink></div></section></>;
}

function Approach() {
  return <><PageIntro eyebrow="Our approach" title={<>From understanding<br/>to <em>implementation.</em></>} description="A clear, collaborative process that connects business assessment with practical action and ongoing evaluation."/>
    <section className="section-pad"><div className="container"><div className="approach-lead"><Eyebrow>The Princelink process</Eyebrow><h2>Four stages. One connected<br/><em>improvement journey.</em></h2><p>Every engagement should reflect the client's business context. Our four-stage methodology provides a structured way to understand the current position, decide what should change, put improvements into practice and review progress.</p></div><div className="process-detail-list">{process.map((p,i)=><div className="process-detail" key={p.number}><div className="process-detail-num">{p.number}</div><div><span className="eyebrow">Stage 0{i+1}</span><h2>{p.title}</h2><p>{p.text}</p><p>{['We begin by listening, asking questions and building a practical understanding of the business and its existing ways of working.','We translate the findings into clear priorities and recommendations that reflect the organisation’s needs and capacity.','We work with the client to introduce agreed improvements, clarify responsibilities and support adoption across the business.','We review how the changes are working, consider relevant performance information and identify where further refinement may be useful.'][i]}</p></div><div className="process-detail-side">{['Understand the current state','Define a practical direction','Put improvements into practice','Review and refine'][i]}</div></div>)}</div></div></section>
    <section className="philosophy-section section-pad"><div className="container philosophy-grid"><div><Eyebrow light>Advisory + implementation</Eyebrow><h2>Advice that moves<br/><em>into action.</em></h2></div><div><p className="large-copy">Recommendations are most useful when they can be translated into workable changes.</p><p>Princelink combines advisory support with implementation collaboration. The exact scope depends on the needs and circumstances of each business, with the aim of helping clients move from understanding a challenge to making a practical improvement.</p></div></div></section>
    <section className="final-cta"><div className="container final-cta-inner"><Eyebrow light>Your next step</Eyebrow><h2>Make improvement<br/><em>practical.</em></h2><ButtonLink to="/contact">Talk to Princelink</ButtonLink></div></section></>;
}

function Insights() {
  return <><PageIntro eyebrow="Insights" title={<>Ideas for better<br/><em>business management.</em></>} description="A developing knowledge space for practical perspectives on operations, organisational structure and management systems."/><section className="section-pad"><div className="container insights-page"><div className="insights-top"><div><Eyebrow>Editorial focus</Eyebrow><h2>Useful thinking.<br/><em>Grounded in practice.</em></h2></div><p>Explore the themes Princelink will cover as the insights library develops.</p></div><div className="topic-grid">{['Improving business operations','Developing effective management systems','Organisational structure','Business process improvement','Management policies and procedures','Improving business performance'].map((t,i)=><div className="topic-card" key={t}><span>0{i+1}</span><h3>{t}</h3><ArrowUpRight size={18}/></div>)}</div><div className="insights-empty-state"><div className="empty-icon"><Compass size={28}/></div><span>INSIGHTS LIBRARY</span><h3>Articles are being prepared.</h3><p>No articles have been published here yet. This space will be updated when genuine editorial content is ready.</p></div></div></section></>;
}

function ContactForm() {
  const [status,setStatus] = useState<'idle'|'validated'>('idle');
  const [values,setValues] = useState({name:'',email:'',business:'',service:'',message:''});
  function update(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) { setValues({...values,[e.target.name]:e.target.value}); setStatus('idle'); }
  function submit(e:FormEvent<HTMLFormElement>) { e.preventDefault(); setStatus('validated'); }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Full name<input name="name" value={values.name} onChange={update} required minLength={2} placeholder="Your full name"/></label><label>Email address<input type="email" name="email" value={values.email} onChange={update} required placeholder="you@company.com"/></label></div>
    <div className="form-row"><label>Business / organisation<input name="business" value={values.business} onChange={update} placeholder="Business name"/></label><label>Area of interest<select name="service" value={values.service} onChange={update}><option value="">Select a service</option>{services.map(s=><option key={s.number} value={s.title}>{s.title}</option>)}<option value="General enquiry">General enquiry</option></select></label></div>
    <label>How can we help?<textarea name="message" value={values.message} onChange={update} required minLength={10} rows={5} placeholder="Tell us a little about your business and what you would like to improve."/></label>
    <button className="button button-gold form-submit" type="submit">Submit enquiry <ArrowUpRight size={16}/></button>
    {status==='validated' && <div className="form-feedback" role="status"><Check size={18}/><div><strong>Your enquiry details are complete.</strong><p>This website is not yet connected to a receiving inbox or backend, so your message has not been sent. Connect an approved company email or form service to enable delivery.</p></div></div>}
    <p className="form-privacy">Your information is used only to prepare this enquiry. Form delivery will be enabled once official contact and backend details are provided.</p>
  </form>;
}

function Contact() {
  return <><PageIntro eyebrow="Contact Princelink" title={<>Let's talk about<br/><em>better business.</em></>} description="Start a conversation about your management systems, business operations or the improvements you want to put in place."/><section className="section-pad"><div className="container contact-grid"><div className="contact-copy"><Eyebrow>Make an enquiry</Eyebrow><h2>Every meaningful improvement starts with <em>a conversation.</em></h2><p>Share a little about your business and what you are looking to improve. We can use that as a starting point for a focused discussion.</p><div className="contact-promise"><Building2 size={22}/><div><strong>Princelink</strong><span>Business Management &amp; Consulting</span></div></div><div className="contact-details-note">Official phone, email and office details will appear here once supplied by the company.</div></div><div className="form-panel"><h3>Send an enquiry</h3><p>Fields marked as required must be completed.</p><ContactForm/></div></div></section></>;
}

export default function App() {
  return <><Seo/><ScrollToTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/approach" element={<Approach/>}/><Route path="/insights" element={<Insights/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<PageIntro eyebrow="Page not found" title={<>This page isn't<br/><em>available.</em></>} description="The page you are looking for may have moved or does not exist."/>}/></Routes></main><Footer/></>;
}
