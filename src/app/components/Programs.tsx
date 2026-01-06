import { BookOpen, GraduationCap, Building } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Business & Management',
      description: 'Develop leadership skills and business acumen for the modern marketplace.',
      courses: ['MBA', 'Finance', 'Marketing', 'Entrepreneurship'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Engineering & Technology',
      description: 'Learn cutting-edge technologies and engineering principles.',
      courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'AI/ML'],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Building,
      title: 'Arts & Humanities',
      description: 'Explore human culture, creativity, and expression.',
      courses: ['Literature', 'History', 'Philosophy', 'Fine Arts'],
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of programs designed to match your passions and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-4 rounded-lg ${program.color} mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Popular Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.courses.map((course, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-6 text-blue-600 hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
