import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { getEventByName } from '../apis/events';

interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  image?: string;
  gallery?: string[];
  // add other fields from your database
}

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>(); // Get eventId from URL
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (eventId) {
        setLoading(true);
        const data = await getEventByName(eventId);
        setEvent(data && data.length > 0 ? data[0] : null); // Get first item from array
        setLoading(false);
      }
    };
  
    fetchEvent();
  }, [eventId]);


  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!event) {
    return <div className="min-h-screen flex items-center justify-center">Event not found</div>;
  }

  const formatDate = (
    dateStr: string,
    locale: string = 'en-US',
    options?: Intl.DateTimeFormatOptions
  ): string => {
    if (!dateStr) return '';
  
    const date = new Date(dateStr);
  
    // Default options if none provided
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    return date.toLocaleDateString(locale, options || defaultOptions);
  };

  return (
    <div className="pt-[5vh] lg:pt-0 pb-[20vh]">
      <div className="mx-auto lg:min-h-[90vh] w-[80%] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-5">
        <div className="flex flex-col justify-center">
          <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">
            {formatDate(event.date)}
          </div>
          <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-2xl uppercase my-2">
            {event.name}
          </h2>
          <p className="text-[18px] w-full font-secondary lg:w-[80%]">
            {event.description}
          </p>
          <button
            className="mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2">
            View Gallery
            <MdOutlineArrowRightAlt />
          </button>
        </div>
        <div className="w-full my-10 lg:my-0 aspect-square lg:aspect-[1/0.8] rounded-xl relative pb-16 overflow-hidden">
          <img
            src={event.image}
            className="w-full rounded-xl h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt={event.name} 
          />
        </div>
      </div>
      <div className="mx-auto w-[80%] mt-20">
        <h3 className="text-2xl font-primary mb-8">Event Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {event.gallery?.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt={`Gallery ${idx + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;