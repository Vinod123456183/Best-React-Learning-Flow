import { Link } from "react-router-dom";
import type { LinkInterface } from "@/type/link_interface";

// for dynamic changes we use states
//   const [links, setLinks] = useState<LinkInterface[]>([]);

const links: LinkInterface[] = [
  { LinkRoute: "/resume", LinkName: "Resume", LinkBgColor: "bg-yellow-400" },
  {
    LinkRoute: "/projects",
    LinkName: "Projects",
    LinkBgColor: "bg-red-500 text-white",
  },
  { LinkRoute: "/contact", LinkName: "Contact", LinkBgColor: "bg-teal-300" },
];

function HomePage() {
  return (
    <div className="text-start min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 max-w-4xl w-full">
        <div className="lg:shrink-0">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="md:w-96 w-72 md:h-96 h-72 lg:w-110 lg:h-110 rounded-full object-cover grayscale"
          />
        </div>

        <div className="max-w-xl text-start md:text-left">
          <h1 className="text-6xl font-bold mb-6">Hello</h1>
          <h3 className="text-xl font-semibold mb-3 capitalize">
            A Bit About Me
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-7">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>

          <div className="flex flex-wrap gap-2 lg:gap-4 justify-center items-center md:justify-start">
            {links.map((item, id) => (
              <Link
                key={id}
                to={item.LinkRoute}
                className={`w-[90px] h-[90px] md:h-32 md:w-32 2xl:w-36 2xl:h-36 rounded-full ${item.LinkBgColor} flex items-center justify-center font-semibold border border-black hover:scale-105 transition hover:bg-gray-100 hover:text-gray-900`}
              >
                {item.LinkName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
