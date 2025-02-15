import {
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaTools,
  FaBuilding,
  FaLaptop,
  FaHandshake,
  FaClipboardList,
} from "react-icons/fa";
import workspaceImage from "@/assets/images/workspace.webp";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen rounded-md border border-gray-800">
        {/* Header */}
        <header className="bg-gray-600 py-6 shadow-sm rounded-t-md">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold">Welcome to WorkSphere</h1>
            <p className="mt-2 text-lg">
              Your All-in-One Solution for Meeting, Conference, and Workspace
              Management
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 max-h-screen">
          <div className="container mx-auto my-auto px-4 text-center">
            <h2 className="text-3xl font-bold">
              Effortless Booking & Management
            </h2>
            <p className="mt-4 text-gray-200">
              WorkSphere simplifies your workspace booking experience so you can
              focus on what matters most—your work.
            </p>
            <Image
              src={workspaceImage}
              alt="Workspace"
              className="mt-8 mx-auto rounded-lg shadow-sm w-full max-w-3xl"
              draggable="false"
            />
          </div>
        </section>

        <div className="border-y border-gray-600"></div>

        {/* Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center">
              Why Choose WorkSphere?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: (
                    <FaCalendarAlt
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  title: "Seamless Bookings",
                  description:
                    "Reserve meeting rooms, conference spaces, or work zones with just a few clicks.",
                },
                {
                  icon: (
                    <FaClock
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  title: "Real-Time Availability",
                  description:
                    "Always know which spaces are free with live availability updates.",
                },
                {
                  icon: (
                    <FaTools
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  title: "Flexible Scheduling",
                  description:
                    "Adapt to your dynamic needs with recurring bookings, instant cancellations, and time-slot adjustments.",
                },
                {
                  icon: (
                    <FaUsers
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  title: "Collaborative Features",
                  description:
                    "Invite teammates, set agendas, and manage resources directly from the platform.",
                },
                {
                  icon: (
                    <FaCalendarAlt
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  title: "Smart Integrations",
                  description:
                    "Sync with your calendar apps and tools for a smooth workflow.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg border border-gray-400 shadow-sm text-center hover:shadow-blue-400"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-200 mt-4">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-y border-gray-600"></div>

        {/* How It Works Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  icon: (
                    <FaCalendarAlt
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  step: "Browse Spaces",
                  description:
                    "Explore the perfect room for your meeting or event.",
                },
                {
                  icon: (
                    <FaClock
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  step: "Check Availability",
                  description:
                    "View live schedules and select a time that fits.",
                },
                {
                  icon: (
                    <FaTools
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  step: "Book Instantly",
                  description: "Confirm your reservation in seconds.",
                },
                {
                  icon: (
                    <FaUsers
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  step: "Collaborate Easily",
                  description:
                    "Share access with team members and get started.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-10 p-6 rounded-lg border border-gray-400 shadow-sm text-center hover:shadow-blue-400"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-4">{item.step}</h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-y border-gray-600"></div>

        {/* Audience Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center">
              Who Is WorkSphere For?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  icon: (
                    <FaBuilding
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  audience: "Businesses",
                  description:
                    "Smarter workspace management solutions for your team.",
                },
                {
                  icon: (
                    <FaClipboardList
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  audience: "Event Organizers",
                  description:
                    "Plan conferences, workshops, and events with ease.",
                },
                {
                  icon: (
                    <FaLaptop
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  audience: "Freelancers & Teams",
                  description:
                    "Flexible environments for productivity on your terms.",
                },
                {
                  icon: (
                    <FaHandshake
                      size={32}
                      className="text-blue-600 mx-auto"
                    />
                  ),
                  audience: "Co-working Spaces",
                  description:
                    "Efficient resource management for shared spaces.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg border border-gray-400 shadow-sm text-center hover:shadow-blue-400"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-200 mt-4">
                    {item.audience}
                  </h3>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-600 rounded-bl-md rounded-br-md">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">
              Join the WorkSphere Revolution
            </h2>
            <p className="mt-4 text-lg">
              Simplify your booking process and enhance collaboration. Try
              WorkSphere today and transform the way you work!
            </p>
            <Link href="/rooms">
              <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md transition ease-in-out delay-150  hover:translate-y-0 hover:scale-110 duration-300">
                Get Started Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
