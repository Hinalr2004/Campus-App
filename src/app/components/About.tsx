export function About() {
  const stats = [
    { value: '15,000+', label: 'Students' },
    { value: '200+', label: 'Programs' },
    { value: '95%', label: 'Job Placement' },
    { value: '50+', label: 'Countries' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Our Campus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 1950, Campus University has been a leader in higher education, 
            fostering innovation, critical thinking, and global citizenship.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              We are committed to providing world-class education that prepares students 
              for success in an ever-changing global landscape. Our faculty members are 
              leaders in their fields, dedicated to both teaching excellence and 
              groundbreaking research.
            </p>
            <p className="text-gray-700">
              With state-of-the-art facilities, diverse student body, and strong industry 
              partnerships, we create an environment where students can thrive academically, 
              socially, and professionally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl mb-2">Excellence</h4>
              <p className="text-gray-600">Pursuing the highest standards in education</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl mb-2">Innovation</h4>
              <p className="text-gray-600">Leading the way in research and technology</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-xl mb-2">Diversity</h4>
              <p className="text-gray-600">Celebrating differences and perspectives</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="text-xl mb-2">Community</h4>
              <p className="text-gray-600">Building lasting connections and support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
