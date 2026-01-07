import { Link } from "react-router-dom"
import { FaInstagram, FaGlobe } from "react-icons/fa6"
import type { IconType } from "react-icons"
import { TiSocialLinkedin } from "react-icons/ti"

export interface Event {
  id: number
  description: string
  image: string
  social: string
  title: string
}

interface EventCardProps {
  event: Event
}

type SocialPlatform = "instagram" | "linkedin"

const socialIcons: Record<SocialPlatform, IconType> = {
  instagram: FaInstagram,
  linkedin: TiSocialLinkedin
  ,
}

const EventCard = ({ event }: EventCardProps) => {
  const Icon: IconType =
    (socialIcons[event.social as SocialPlatform] as IconType) || FaGlobe

  return (
    <div className="border rounded-2xl cursor-pointer border-black/20 p-4">
      <div className="w-full aspect-[1/.6] bg-black rounded-2xl"></div>
      <h1 className="font-primary my-3 font-medium">{event.title}</h1>
      <p>{event.description}</p>
      <Link
        to={event.social}
        aria-label={event.title}
        className="my-4 w-[40px] aspect-square rounded-full border border-primary flex items-center justify-center hite transition"
      >
        <Icon size={18} className="text-primary" />
      </Link>
    </div>
  )
}

export default EventCard
