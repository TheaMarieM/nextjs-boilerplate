import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <h1 className='text-4xl font-bold mb-8'>Portfolio</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <div key={index} className='p-6 rounded-lg bg-white shadow-lg'>
            <h3 className='text-lg font-semibold mb-2'>{project.title}</h3>
            <p className='text-sm mb-3 text-gray-600'>
              {project.description}
            </p>
            <div className='flex flex-wrap gap-1 mb-3'>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 border'
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className='text-sm space-y-1 text-gray-600'>
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className='flex items-center gap-1'>
                  <span className='text-green-500'>•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
