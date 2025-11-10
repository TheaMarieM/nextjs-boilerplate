'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'Tailwind CSS', 'Git', 'SQL', 'MongoDB',
    'REST APIs', 'GraphQL', 'Docker', 'AWS', 'Agile'
  ];

  const experiences = [
    {
      title: 'Student Portal',
      company: 'Academic Project — Native PHP + MySQL',
      period: '2024',
      location: 'St. Paul University Philippines',
      description: [
        'Web app allowing students to view assigned teachers and grades with role-based access',
        'Admin manages users, teacher-student assignments, and grade entries',
        'Teachers submit/update grades for their assigned students',
        'Students sign in to view assigned teacher(s) and current grades',
        'Technologies: PHP, MySQL, Authentication, RBAC'
      ]
    },
    {
      title: 'Digital Twin RAG Portfolio',
      company: 'Personal Project — Next.js',
      period: '2024',
      location: 'Personal Portfolio',
      description: [
        'Retrieval-Augmented Generation system answering recruiter-style questions using STAR-structured profile data',
        'STAR-structured profile, embeddings, cosine retrieval',
        'Real-time responses with groundedness and coverage scoring',
        'Docs and testing pages with 20+ sample queries',
        'Technologies: RAG, Embeddings, OpenAI API, Next.js API, Quality scoring'
      ]
    },
    {
      title: 'Person Search App',
      company: 'Full-Stack Project — Next.js',
      period: '2024',
      location: 'Personal Development',
      description: [
        'Full-stack app to create, search, and manage person records with authentication and theme toggle',
        'Auth-protected CRUD (create, read, update, delete) for people',
        'Instant search with filters; JSON API endpoints',
        'Dark/Light mode system with persisted preference',
        'Technologies: Next.js, Tailwind, Prisma, Auth, JSON API'
      ]
    },
    {
      title: 'Movie Reviews',
      company: 'Web Development Project — Laravel',
      period: '2023',
      location: 'Academic Project',
      description: [
        'CRUD movie reviews with poster URL upload and star-based rating UI',
        'Create, view, update, and delete reviews',
        'Attach poster via URL with validation',
        'Rate movies using a 1–5 star badge component',
        'Technologies: Laravel, Blade, CRUD, Ratings'
      ]
    },
    {
      title: 'Community Health Monitoring System',
      company: 'Major Subject Requirement',
      period: '2023',
      location: 'St. Paul University Philippines',
      description: [
        'System used by nursing students to digitize community health records and make outputs paperless',
        'Digital forms for assessments and visits',
        'Student accounts to submit and manage outputs',
        'Instructor view for review/verification',
        'Exports and summaries to replace paper workflows'
      ]
    },
    {
      title: 'Academic & Project Work',
      company: 'Continuous Learning',
      period: '2022 - Present',
      location: 'St. Paul University Philippines',
      description: [
        'Built small web projects to practice semantic HTML, CSS, and JavaScript',
        'Exploring responsive design, accessibility, and performance basics',
        'Collaborating on class/team exercises to solve real problems'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'St. Paul University Philippines',
      period: '2022 - Present (3rd Year)',
      location: 'Tuguegarao City, Philippines',
      gpa: '1.53 GWA (2nd Year)',
      achievements: [
        'President Lister during First Year',
        'PSG Officer - Mayor (1st Year)',
        'SMS Officer - Secretary (2nd Year)',
        'Attends Cybersummit yearly',
        'Attends cybersecurity roadshows',
        'Specializing in Web Development',
        'Currently undergoing remote OJT with Employability Advantage Australia'
      ]
    }
  ];

  const projects = [
    {
      title: 'Responsive Portfolio Website',
      description: 'Personal portfolio showcasing all projects built with AI conversations, including Digital Twin RAG system and other development work',
      technologies: ['Next.js', 'Tailwind CSS', 'Responsive Design', 'AI Integration'],
      highlights: ['Fully responsive design', 'AI-powered project showcase', 'Modern UI/UX', 'Mobile-optimized']
    },
    {
      title: 'Person Search App',
      description: 'Full-stack application for creating, searching, and managing person records with authentication and theme toggle',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma ORM', 'Database'],
      highlights: ['Responsive design', 'Auth-protected CRUD', 'Dark/Light mode', 'Real-time search']
    },
    {
      title: 'Digital Twin RAG Portfolio',
      description: 'Retrieval-Augmented Generation system answering recruiter-style questions using STAR-structured profile data',
      technologies: ['Next.js', 'RAG', 'OpenAI API', 'Embeddings'],
      highlights: ['AI-powered responses', 'STAR methodology', 'Quality scoring', '20+ test queries']
    },
    {
      title: 'Student Portal',
      description: 'Web app allowing students to view assigned teachers and grades with role-based access control',
      technologies: ['PHP', 'MySQL', 'Authentication', 'RBAC'],
      highlights: ['Role-based access', 'Grade management', 'User administration', 'Academic focus']
    },
    {
      title: 'Movie Reviews',
      description: 'CRUD movie reviews with poster URL upload and star-based rating user interface',
      technologies: ['Laravel', 'Blade', 'CRUD', 'Ratings'],
      highlights: ['1-5 star rating', 'Poster validation', 'Search functionality', 'Clean UI']
    },
    {
      title: 'Community Health Monitoring',
      description: 'System for nursing students to digitize community health records and replace paper workflows',
      technologies: ['Web Development', 'Database', 'Forms', 'Exports'],
      highlights: ['Paperless system', 'Digital assessments', 'Student accounts', 'Export features']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-3 rounded-lg transition-colors ${
              isDark 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Profile Section */}
        <section className={`rounded-2xl p-8 mb-8 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/mypic.png" 
                alt="Marithea M. Magno" 
                width={128} 
                height={128} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+Cjx0ZXh0IHg9IjY0IiB5PSI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1NPC90ZXh0Pgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTI4IiB5Mj0iMTI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzQjgyRjYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUI0MkY2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Marithea M. Magno</h1>
              <h2 className={`text-xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                IT Student | Web Development Specialist
              </h2>
              <p className={`mb-6 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Third-year Information Technology student at St. Paul University Philippines, passionate about modern web development. 
                I craft simple, usable interfaces and keep learning by building. Currently enhancing practical skills through 
                remote On-the-Job Training with Employability Advantage Australia. Proficient in Figma and Adobe Photoshop for creating detailed 
                wireframes and organizing development processes. Also expanding knowledge into cybersecurity while taking 
                freelance design commissions for various clients.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    maritheamagno157@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    09954918049
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Tuguegarao City, Philippines
                  </span>
                </div>
                
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="https://github.com/TheaMarieM" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/marithea-magno" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`rounded-2xl p-8 mb-8 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white shadow-lg'
        }`}>
          <h2 className="text-2xl font-bold mb-6">
            Skills & Technical Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isDark 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`rounded-2xl p-8 mb-8 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white shadow-lg'
        }`}>
          <h2 className="text-2xl font-bold mb-6">
            Academic & Personal Projects
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.company} • {exp.location}
                </p>
                <ul className={`list-disc list-inside space-y-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`rounded-2xl p-8 mb-8 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white shadow-lg'
        }`}>
          <h2 className="text-2xl font-bold mb-6">
            Personal Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className={`text-sm mb-3 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark 
                          ? 'bg-gray-600 text-gray-300' 
                          : 'bg-white text-gray-700 border'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className={`text-sm space-y-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="text-green-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={`rounded-2xl p-8 mb-8 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white shadow-lg'
        }`}>
          <h2 className="text-2xl font-bold mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.period}
                  </span>
                </div>
                <p className={`font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {edu.school} • {edu.location}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
                {edu.achievements && (
                  <ul className={`list-disc list-inside space-y-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={`text-center py-8 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <p>Built using v0.dev with Next.js 15, Shadcn UI components, and dark/light mode toggle</p>
          <p className="mt-2">© 2024 Marithea M. Magno. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
