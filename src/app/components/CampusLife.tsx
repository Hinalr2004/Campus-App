import { ImageWithFallback } from './figma/ImageWithFallback';

export function CampusLife() {
  const facilities = [
    {
      title: 'Modern Library',
      description: 'State-of-the-art library with over 500,000 books and digital resources.',
      image: 'https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBsaWJyYXJ5JTIwbW9kZXJufGVufDF8fHx8MTc2NzY3NjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Student Life',
      description: 'Vibrant community with 100+ clubs, organizations, and activities.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njc2MDQ3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Sports & Recreation',
      description: 'World-class athletic facilities and championship sports programs.',
      image: 'https://images.unsplash.com/photo-1766459710529-c9fdb8023ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBhdGhsZXRpY3MlMjBzcG9ydHN8ZW58MXx8fHwxNzY3Njc2ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="campus-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Campus Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus community with endless opportunities for growth and connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">Student Support Services</h3>
              <p className="mb-6 text-blue-50">
                We provide comprehensive support to ensure your success, including academic advising, 
                career counseling, mental health services, and tutoring programs.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Explore Support Services
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-2">24/7</div>
                <div className="text-blue-100">Library Access</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-2">100+</div>
                <div className="text-blue-100">Student Clubs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-2">30+</div>
                <div className="text-blue-100">Sports Teams</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl mb-2">Free</div>
                <div className="text-blue-100">Gym Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
