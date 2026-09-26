'use client'

import { useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Send,
  Server,
  X,
  Zap,
} from 'lucide-react'

const projects = [
  { name: 'BankRAG', category: 'RAG / LLM', type: 'RAG / LLM Application', description: 'An intelligent question-answering system using Retrieval-Augmented Generation to retrieve relevant information from banking documents and generate grounded responses.', tech: ['Python', 'LangChain', 'RAG', 'Embeddings', 'Vector DB', 'LLM'], architecture: 'Documents → Embeddings → Vector DB → Retrieval → LLM', featured: true, repo: 'https://github.com/ziadmegahed/BankRAG.git' },
  { name: 'Sharm Tourism RAG', category: 'RAG / LLM', type: 'RAG / Tourism AI', description: 'An AI assistant using retrieval and language models to answer questions about tourism information and destinations in Sharm El Sheikh.', tech: ['Python', 'LangChain', 'RAG', 'Embeddings', 'Vector DB'], architecture: 'Tourism docs → Search → LLM → Assistant', repo: 'https://github.com/ziadmegahed/sharm-adventure-hub.git' },
  { name: 'Sentiment Analysis', category: 'NLP', type: 'Natural Language Processing', description: 'An NLP system that analyzes text and classifies sentiment to determine whether a given piece of text expresses a positive, negative, or neutral opinion.', tech: ['Python', 'NLP', 'Machine Learning', 'Text Classification', 'Scikit-learn'], architecture: 'Text Input → Preprocessing → Feature Extraction → ML Model → Sentiment', repo: 'https://github.com/ziadmegahed/Sentiment-analysis.git' },
  { name: 'AI Data Analyst', category: 'AI / Data Science', type: 'AI-Powered Data Analysis', description: 'An AI-powered data analysis system that processes datasets, identifies patterns and trends, generates insights, and helps users understand data through natural language queries.', tech: ['Python', 'Pandas', 'Data Analysis', 'LLM', 'NLP', 'Machine Learning'], architecture: 'User Query → AI Agent → Data Processing → Analysis → Insights', repo: 'https://github.com/ziadmegahed/ai-data-analyst.git' },
  { name: 'Diamond Price Prediction', category: 'Machine Learning', type: 'Machine Learning / Regression', description: 'A machine learning regression system that predicts diamond prices based on features such as carat, cut, color, clarity, and other diamond characteristics.', tech: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Regression', 'Data Analysis'], architecture: 'Diamond Features → Data Preprocessing → Feature Engineering → ML Model → Price Prediction', repo: 'https://github.com/ziadmegahed/shAi_Assignment/blob/master/Diamond_Project1.ipynb' },
  { name: 'Music Genre Classification', category: 'Machine Learning', type: 'Audio Classification / Machine Learning', description: 'A machine learning system that analyzes audio features and classifies music tracks into different genres using audio signal processing and classification techniques.', tech: ['Python', 'Librosa', 'Scikit-learn', 'Machine Learning', 'Audio Processing', 'Classification'], architecture: 'Audio File → Feature Extraction → Audio Features → ML Model → Genre Prediction', repo: 'https://github.com/ziadmegahed/shAi_Assignment/blob/master/music-genre-classification-2024.ipynb' },
]

const skills = {
  'Artificial Intelligence': ['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'LLMs', 'Prompt Engineering', 'AI Agents', 'Agentic AI', 'RAG', 'Agentic RAG', 'Tool Calling', 'Embeddings', 'Semantic Search'],
  'AI Frameworks': ['LangChain', 'LangGraph', 'OpenAI Agents SDK', 'Google ADK', 'CrewAI'],
  'Machine Learning': ['Python', 'Scikit-learn', 'XGBoost', 'PyTorch', 'Pandas', 'NumPy', 'Model Evaluation', 'Feature Engineering', 'Classification', 'Regression'],
  'Backend & APIs': ['FastAPI', 'REST APIs', 'Python', 'API Integration', 'Pydantic'],
  'Databases & Caching': ['PostgreSQL', 'SQL', 'Redis', 'Chroma', 'Vector Databases'],
  'DevOps & MLOps': ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub', 'GitHub Actions', 'ONNX', 'Model Serving', 'API Deployment'],
  Cloud: ['AWS', 'Cloud Deployment', 'Cloud Infrastructure'],
}

const filters = ['All', 'Agentic AI', 'RAG / LLM', 'Machine Learning', 'MLOps', 'AI Systems']
const navLinks = ['About', 'Skills', 'Projects', 'Experience']

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

function Architecture({ text }: { text: string }) {
  return <div className="architecture"><span className="architecture-label">SYSTEM FLOW</span><p>{text}</p></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message.')
      }

      setFormData({ name: '', email: '', message: '' })
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong while sending your message.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">ZM</span><span>Ziad Megahed</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
          <div className="nav-social"><a href="https://github.com/ziadmegahed" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://www.linkedin.com/in/ziad-megahed-216977248/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network /></a></div>
          <a className="button button-small" href="https://wa.me/201012496224" target="_blank" rel="noreferrer">Let&apos;s Talk <ArrowUpRight /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy reveal"><span className="eyebrow"><span className="status-dot" /> AI &amp; MACHINE LEARNING ENGINEER</span><h1>Building intelligent systems with <em>AI, LLMs</em> &amp; Agentic AI.</h1><p className="hero-description">I build practical AI applications using machine learning, large language models, retrieval systems, autonomous agents, and modern deployment technologies.</p><div className="hero-actions"><a className="button" href="#projects">Explore Projects <ArrowDownRight /></a><a className="text-link" href="#contact">Let&apos;s Connect <ArrowUpRight /></a></div><div className="hero-meta"><span>Based in Egypt</span><span className="meta-line" /><span>Open to opportunities</span></div></div>
        <div className="hero-visual reveal-delay" aria-label="AI system architecture visualization"><div className="visual-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core-node"><BrainCircuit /><span>INTELLIGENCE<br /><b>ENGINE</b></span></div><div className="visual-node node-llm"><span>01</span> LLMs</div><div className="visual-node node-rag"><span>02</span> RAG</div><div className="visual-node node-agents"><span>03</span> AGENTS</div><div className="visual-node node-api"><span>04</span> APIs</div><div className="visual-caption"><span className="live-dot" /> systems in motion</div></div>
      </section>

      <section id="about" className="section-wrap section about"><div className="about-intro"><SectionHeading eyebrow="01 / ABOUT" title="Beyond the model." copy="Engineering the systems that make intelligence useful." /><div className="about-number">01<span>—</span></div></div><div className="about-body"><p className="large-copy">I&apos;m an <strong>AI &amp; Machine Learning Engineer</strong> with a background in Communications and Electronics Engineering. My work focuses on building practical AI systems using machine learning, LLMs, RAG, and agentic architectures.</p><p>I enjoy taking AI concepts beyond experimentation and turning them into usable applications, APIs, and deployable systems. I continuously work across the stack — from model behavior and retrieval quality to APIs, deployment, and infrastructure.</p><div className="about-points"><span><Check /> ML &amp; NLP</span><span><Check /> RAG &amp; LLM Apps</span><span><Check /> Agents &amp; APIs</span><span><Check /> MLOps &amp; Cloud</span></div></div></section>

      <section id="skills" className="section-wrap section skills"><SectionHeading eyebrow="02 / CAPABILITIES" title="A systems-level toolkit." copy="The tools and concepts I use to move from an idea to a working AI system." /><div className="skills-grid">{Object.entries(skills).map(([category, items], index) => <article className={`skill-card ${index === 0 ? 'skill-card-featured' : ''}`} key={category}><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-icon">{index === 0 ? <BrainCircuit /> : index === 4 ? <Database /> : index === 5 ? <Server /> : <Code2 />}</span></div><h3>{category}</h3><div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section id="projects" className="section-wrap section projects"><div className="projects-header"><SectionHeading eyebrow="03 / SELECTED WORK" title="Built to be useful." copy="A selection of AI and machine learning projects — grounded in practical systems, not just demos." /><a className="text-link desktop-link" href="https://github.com/ziadmegahed" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a></div><div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.name}><div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-type">{project.type}</span><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><ArrowUpRight /></a></div><h3>{project.name}</h3><p>{project.description}</p><Architecture text={project.architecture} /><div className="project-tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View project <ArrowUpRight /></a></article>)}</div><div className="small-projects"><div><span className="eyebrow">ALSO EXPLORED</span><h3>Small experiments, real fundamentals.</h3></div><div className="experiment-list"><span>Diamond Price Prediction</span><span>Music Genre Classification</span><span>Sentiment Analysis</span></div></div></section>

      <section className="section-wrap section production"><div className="production-copy"><SectionHeading eyebrow="04 / MLOPS &amp; INFRASTRUCTURE" title="From model to production." copy="I care about the path between a notebook and a system people can actually use." /><p className="production-note">The work doesn&apos;t stop when a model trains. It becomes an API, a container, a pipeline, and eventually a dependable service.</p></div><div className="pipeline"><div className="pipeline-line" />{['Data', 'Model', 'API', 'Docker', 'CI/CD', 'K8s', 'Cloud'].map((item, index) => <div className="pipeline-step" key={item}><span className="pipeline-dot">{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div><div className="infra-tags">{['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'FastAPI', 'ONNX', 'Redis', 'AWS'].map((item) => <span key={item}><Zap />{item}</span>)}</div></section>

      <section id="experience" className="section-wrap section experience"><SectionHeading eyebrow="05 / EXPERIENCE & EDUCATION" title="Learning by building." /><div className="timeline"><div className="timeline-item"><span className="timeline-date">PROJECT-BASED</span><div><h3>AI &amp; Machine Learning Projects</h3><p>Independent project work across Machine Learning, NLP, RAG, LLM applications, Agentic AI, MLOps, and AI APIs.</p></div></div><div className="timeline-item"><span className="timeline-date">DEPI</span><div><h3>AWS Machine Learning Intern</h3><p>Training on AWS cloud infrastructure and machine learning techniques</p></div></div><div className="timeline-item"><span className="timeline-date">EDUCATION</span><div><h3>Mansoura University</h3><p>Bachelor of Science in Communications and Electronics Engineering</p></div></div></div></section>

      <section className="section-wrap section contact"><div className="contact-intro"><SectionHeading eyebrow="06 / CONTACT" title="Let&apos;s build something intelligent." copy="Have an AI project, technical opportunity, or idea? Let&apos;s connect." /><div className="contact-links"><a href="mailto:ziadmegahed074@gmail.com"><Mail /> <span><small>Email</small>ziadmegahed074@gmail.com</span><ArrowUpRight /></a><a href="https://wa.me/201012496224" target="_blank" rel="noreferrer"><MessageCircle /> <span><small>WhatsApp</small>+20 101 249 6224</span><ArrowUpRight /></a><a href="https://www.linkedin.com/in/ziad-megahed-216977248/" target="_blank" rel="noreferrer"><Network /> <span><small>LinkedIn</small>ziad-megahed-216977248</span><ArrowUpRight /></a></div></div></section>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">ZM</span><span>Ziad Megahed</span></a><p>AI &amp; Machine Learning Engineer</p><div><a href="https://github.com/ziadmegahed" target="_blank" rel="noreferrer"><Code2 /></a><a href="https://www.linkedin.com/in/ziad-megahed-216977248/" target="_blank" rel="noreferrer"><Network /></a></div><span className="footer-copy">© {new Date().getFullYear()} Ziad Megahed</span></footer>
    </main>
  )
}

