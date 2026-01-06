import { Calendar, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      date: 'JAN 15',
      title: 'Spring Semester Open House',
      location: 'Main Campus',
      time: '10:00 AM - 4:00 PM',
      category: 'Admissions',
    },
    {
      date: 'JAN 20',
      title: 'Engineering Innovation Fair',
      location: 'Tech Building',
      time: '2:00 PM - 6:00 PM',
      category: 'Academic',
    },
    {
      date: 'JAN 25',
      title: 'Career Development Workshop',
      location: 'Student Center',
      time: '1:00 PM - 3:00 PM',
      category: 'Career',
    },
    {
      date: 'FEB 1',
      title: 'International Culture Festival',
      location: 'Campus Quad',
      time: '11:00 AM - 8:00 PM',
      category: 'Social',
    },
    {
      date: 'FEB 8',
      title: 'Research Symposium',
      location: 'Science Hall',
      time: '9:00 AM - 5:00 PM',
      category: 'Academic',
    },
    {
      date: 'FEB 14',
      title: 'Alumni Networking Night',
      location: 'Alumni Hall',
      time: '6:00 PM - 9:00 PM',
      category: 'Networking',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Admissions: 'bg-blue-100 text-blue-700',
      Academic: 'bg-green-100 text-green-700',
      Career: 'bg-purple-100 text-purple-700',
      Social: 'bg-orange-100 text-orange-700',
      Networking: 'bg-pink-100 text-pink-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with campus activities, workshops, and networking opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-[70px]">
                  <div className="text-sm">{event.date.split(' ')[0]}</div>
                  <div className="text-2xl">{event.date.split(' ')[1]}</div>
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs mb-2 ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  <h3 className="text-xl mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm transition-colors">
                    Register →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
